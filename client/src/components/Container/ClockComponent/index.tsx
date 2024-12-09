import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../../hooks/useAuthContext';

const TimeCarousel = () => {
    const { user } = useAuthContext() 
  const [hour, setHour] = useState<number>(12); // Default hour set to 12
  const [minute, setMinute] = useState<number>(0); // Default minute set to 00
  const [second, setSecond] = useState<number>(0); // Default second set to 00
  const [amPm, setAmPm] = useState<string>('AM'); // Default AM/PM set to AM
  const [dragging, setDragging] = useState(false); // To control dragging state
  const [timeSet, setTimeSet] = useState<string>(''); // To display the set time message
  const [amPmVisibility, setAmPmVisibility] = useState<'upper' | 'lower'>('upper'); // Default visibility set to 'upper'
  const [timeList, setTimeList] = useState<string[]>([]); // List to store the set times
  const [error, setError] = useState(null);
  const userId = user?.userIdLogin

  useEffect(()=>{
      const fetchTimes = async () => {
          try{
            const response = await fetch(`/api/user/${userId}/get-times`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const times = await response.json();
        // Extract only the `time` field and update state
        const timeOnly = times.map((item: any) => item.time);
        setTimeList(timeOnly);
          }
          catch(error: any){
            setError(error.message);
          }
      }
      if(userId){
        fetchTimes()
      }
  },[userId])

  // Common drag function for all carousels (Hour, Minute, Second)
  const handleDrag = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type: string
  ) => {
    let initialY = e.clientY;
    let direction = 0;
    let lastUpdateTime = Date.now();

    const onMouseMove = (moveEvent: MouseEvent) => {
      const currentTime = Date.now();
      const deltaY = moveEvent.clientY - initialY;
      direction = Math.sign(deltaY);

      if (currentTime - lastUpdateTime > 100 && direction !== 0) {
        let newValue;
        if (type === 'hour') {
          newValue = hour + direction;
          if (newValue < 1) newValue = 12;
          if (newValue > 12) newValue = 1;
          setHour(newValue);
        } else if (type === 'minute') {
          newValue = minute + direction;
          if (newValue < 0) newValue = 59;
          if (newValue > 59) newValue = 0;
          setMinute(newValue);
        } else if (type === 'second') {
          newValue = second + direction;
          if (newValue < 0) newValue = 59;
          if (newValue > 59) newValue = 0;
          setSecond(newValue);
        } else if (type === 'ampm') {
          if (direction > 0 && amPm === 'AM') {
            setAmPm('PM');
            setAmPmVisibility('lower'); // Make lower value visible and upper hidden
          } else if (direction < 0 && amPm === 'PM') {
            setAmPm('AM');
            setAmPmVisibility('upper'); // Make upper value visible and lower hidden
          }
        }

        lastUpdateTime = currentTime;
        initialY = moveEvent.clientY;
      }
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      setDragging(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    setDragging(true);
  };

  const handleSetTime = async () => {
    const userId = user?.userIdLogin
    const newTime = `${hour.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}:${second.toString().padStart(2, '0')} ${amPm}`;
    setTimeSet(newTime);

    try{
        await fetch("/api/user/set-time", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                userId,
                time: newTime 
            }),
        })
        

    // Add the new time to the list and sort it
    setTimeList((prevList) => {
        const updatedList = [...prevList, newTime];
        return updatedList.sort((a, b) => {
          // Convert times to 24-hour format for correct sorting
          const to24HourFormat = (time: string) => {
            const [h, m, s, period] = time.split(/[:\s]/);
            let hourIn24 = Number(h);
            if (period === 'PM' && hourIn24 !== 12) hourIn24 += 12;
            if (period === 'AM' && hourIn24 === 12) hourIn24 = 0;
            return hourIn24 * 3600 + Number(m) * 60 + Number(s); // Return total seconds
          };
  
          return to24HourFormat(a) - to24HourFormat(b);
        });
      });
    }
    catch(error){
        console.error('Error setting time:', error);
    }
  };
  

  // Reset visibility on initial load to ensure only the default AM/PM is visible
  useEffect(() => {
    setAmPmVisibility(amPm === 'AM' ? 'upper' : 'lower');
  }, [amPm]);

  const handleClickTime = (time: string) => {
    const [h, m, s, ap] = time.split(/[:\s]/);
    setHour(Number(h));
    setMinute(Number(m));
    setSecond(Number(s));
    setAmPm(ap);
  };

  const getCurrentTimeLabel = (time: string) => {
    const currentTime = `${hour.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}:${second.toString().padStart(2, '0')} ${amPm}`;
    return time === currentTime ? ' ← Current Time' : '';
  };

  const sortedTimeList = timeList.sort((a, b) => {
    const to24HourFormat = (time: string) => {
      const [h, m, s, period] = time.split(/[:\s]/);
      let hourIn24 = Number(h);
      if (period === 'PM' && hourIn24 !== 12) hourIn24 += 12;
      if (period === 'AM' && hourIn24 === 12) hourIn24 = 0;
      return hourIn24 * 3600 + Number(m) * 60 + Number(s); // Return total seconds
    };

    return to24HourFormat(a) - to24HourFormat(b);
  });

  return (
    <div className="flex flex-col justify-center items-center space-y-4 w-full bg-red-500">
      <div className='flex' >
        {/* Hour Carousel */}
      <div
        className="relative flex justify-center items-center cursor-grab select-none"
        onMouseDown={(e) => handleDrag(e, 'hour')}
        style={{
          width: '100px',
          height: '150px',
          border: '2px solid #000',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* Upper Indicator: Next Hour */}
        <div className="absolute top-0 left-0 w-full text-3xl flex justify-center items-center opacity-50">
          <div>{(hour % 12 === 0 ? 12 : (hour % 12) + 1).toString().padStart(2, '0')}</div>
        </div>

        {/* Current Hour */}
        <div className="flex justify-center items-center text-4xl z-10">
          {hour.toString().padStart(2, '0')}
        </div>

        {/* Lower Indicator: Previous Hour */}
        <div className="absolute bottom-0 left-0 w-full text-3xl flex justify-center items-center opacity-50">
          <div>{(hour === 1 ? 12 : hour - 1).toString().padStart(2, '0')}</div>
        </div>
      </div>

      {/* Minute Carousel */}
      <div
        className="relative flex justify-center items-center cursor-grab select-none"
        onMouseDown={(e) => handleDrag(e, 'minute')}
        style={{
          width: '100px',
          height: '150px',
          border: '2px solid #000',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* Upper Indicator: Next Minute */}
        <div className="absolute top-0 left-0 w-full text-3xl flex justify-center items-center opacity-50">
          <div>{(minute + 1) % 60 === 0 ? 59 : (minute + 1).toString().padStart(2, '0')}</div>
        </div>

        {/* Current Minute */}
        <div className="flex justify-center items-center text-4xl z-10">
          {minute.toString().padStart(2, '0')}
        </div>

        {/* Lower Indicator: Previous Minute */}
        <div className="absolute bottom-0 left-0 w-full text-3xl flex justify-center items-center opacity-50">
          <div>{minute === 0 ? 59 : (minute - 1).toString().padStart(2, '0')}</div>
        </div>
      </div>

      {/* Second Carousel */}
      <div
        className="relative flex justify-center items-center cursor-grab select-none"
        onMouseDown={(e) => handleDrag(e, 'second')}
        style={{
          width: '100px',
          height: '150px',
          border: '2px solid #000',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* Upper Indicator: Next Second */}
        <div className="absolute top-0 left-0 w-full text-3xl flex justify-center items-center opacity-50">
          <div>{(second + 1) % 60 === 0 ? 59 : (second + 1).toString().padStart(2, '0')}</div>
        </div>

        {/* Current Second */}
        <div className="flex justify-center items-center text-4xl z-10">
          {second.toString().padStart(2, '0')}
        </div>

        {/* Lower Indicator: Previous Second */}
        <div className="absolute bottom-0 left-0 w-full text-3xl flex justify-center items-center opacity-50">
          <div>{second === 0 ? 59 : (second - 1).toString().padStart(2, '0')}</div>
        </div>
      </div>

      {/* AM/PM Toggle */}
      <div
        className="relative flex justify-center items-center cursor-grab select-none"
        onMouseDown={(e) => handleDrag(e, 'ampm')}
        style={{
          width: '100px',
          height: '150px',
          border: '2px solid #000',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* Upper Indicator: AM */}
        <div
          className={`absolute top-0 left-0 w-full text-3xl flex justify-center items-center opacity-50 ${
            amPmVisibility === 'upper' ? '' : 'hidden'
          }`}
        >
          
        </div>

        {/* Current AM/PM */}
        <div className="flex justify-center items-center text-4xl z-10">{amPm}</div>

        {/* Lower Indicator: PM */}
        <div
          className={`absolute bottom-0 left-0 w-full text-3xl flex justify-center items-center opacity-50 ${
            amPmVisibility === 'lower' ? '' : 'hidden'
          }`}
        >
          AM
        </div>
      </div>
      
      {/* Display Time List */}
      <div className="mt-4">
        <h3 className="font-semibold text-xl">Time List:</h3>
        <ul>
          {sortedTimeList.map((time, index) => (
            <li key={index}>
              <button
                onClick={() => handleClickTime(time)}
                className="text-lg hover:bg-gray-200 rounded p-2"
              >
                {time}
                {getCurrentTimeLabel(time)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      </div>

      {/* Set Time Button */}
      <button onClick={handleSetTime} className="bg-blue-500 text-white px-4 py-2 rounded">
        Set Time
      </button>
    </div>
  );
};

export default TimeCarousel;
