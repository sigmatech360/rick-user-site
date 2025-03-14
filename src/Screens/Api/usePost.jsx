// src/hooks/usePost.js
import { useState } from 'react';
import { base_url } from './base_url';


export const usePost = (url, initialData = null) => {

    const [ApiData, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const LogoutData = localStorage.getItem('login');

    const post = async (postData) => {
        setLoading(true);
        setError(null);

        document.querySelector(".loaderBox")?.classList.remove("d-none");
        try {
            const response = await fetch(base_url + url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`,
                },
                body: postData,
            });

            const result = await response.json();

            if (!response.ok) {
                // If the response status is 400, set the error message to the result's error or status text
                if (response.status === 400) {
                    throw new Error(result?.error || 'Bad Request');
                } else {
                    throw new Error(result?.message || 'Network response was not ok');
                }
            }

            setData(result);
            setError(result?.error || null); 
        } catch (err) {
            setError(err.message); 
        } finally {
            setLoading(false);
            document.querySelector(".loaderBox")?.classList.add("d-none");
        }
    };

    return { ApiData, loading, error, post };
};



export const useGet = (url, initialData = null, idData = '') => {
  

    const [ApiData, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const LogoutData = localStorage.getItem('login');
    const [isTriggered, setIsTriggered] = useState(false);
    const get = async () => {
        setLoading(true);
        setError(null);
        document.querySelector(".loaderBox")?.classList.remove("d-none");
        try {
            const response = await fetch(base_url + url + idData, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`,
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);

        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
            document.querySelector(".loaderBox")?.classList.add("d-none");
        }
    };
    return { ApiData, loading, error, get, setData };
}


export const useDelete = (url, initialData = null, idData = '') => {
    const [ApiData, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const LogoutData = localStorage.getItem('login');
    const [isTriggered, setIsTriggered] = useState(false);
    const del = async () => {
        setLoading(true);
        setError(null);
        document.querySelector(".loaderBox")?.classList.remove("d-none");
        try {
            const response = await fetch(base_url + url + idData, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`,
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
            document.querySelector(".loaderBox")?.classList.add("d-none");
        }
    }

    return { ApiData, loading, error, del };
};