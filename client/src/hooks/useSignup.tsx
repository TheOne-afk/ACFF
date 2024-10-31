import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios"; // Import Axios

export const useSignup = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { dispatch } = useAuthContext();

    const signup = async (username: string, email: string, password: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('/api/user/register', {
                username,
                email,
                password,
            });

            // The response data
            const json = response.data;

            // Save the user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // Update the auth context
            dispatch({ type: 'SIGNUP', payload: json });
        } catch (error) {
            setIsLoading(false);
            if (axios.isAxiosError(error) && error.response) {
                // If it's an Axios error and has a response
                setError(error.response.data.error || "An error occurred");
            } else {
                setError("Network error. Please try again."); // Handle fetch error
            }
        } finally {
            setIsLoading(false); // Ensure loading state is reset
        }
    };

    return { signup, isLoading, error };
};
