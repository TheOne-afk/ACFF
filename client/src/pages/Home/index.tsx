import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () =>{
    const [workouts,setWorkouts] = useState<any>(null)

    useEffect(() =>{
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts/')
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])

    return(
        <div>
            <h1 className="bg-red-500" >Hello</h1>
        {workouts && workouts.map((workout: any) => (
            <p key={workout._id}>{workout._id === "67028163dc873dbcb6977d1e" ? workout.title : ""}</p>
        ))}
        </div>
    )
}

export default Home