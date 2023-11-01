
import React,{useState,useEffect} from "react";

export default function useFetch(url) {
  const [responseJSON, setResponseJSON] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  console.log(url);
  useEffect(() => {
    
    let shouldCancel = false;
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (shouldCancel) return;
        setResponseJSON(data);
        setError(null);
      } catch (nerror) {
        if (shouldCancel) return;
        setError(nerror);
        setResponseJSON(null);
      }
      setIsLoading(false);
    };
    getData();
    console.log(responseJSON);
    return () => (shouldCancel = true);
  }, [url]);

  return { responseJSON, isLoading, error };
}

