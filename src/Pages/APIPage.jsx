import React from 'react'
import { useState,useEffect } from 'react';

const APIPage = () => {
    const [data, setData] = useState([]);
    const [num, setNum] = useState(1);

    const fetchApi = async() =>{
        try{
            const res = await fetch(' https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}');
            setData(await res.json());
            console.log(data);  
  
        }
        catch(error){
            console.log(error);
        }
    } 

    useEffect(()=>{
        fetchApi();
    },[]);
    
    
    return (
        <div>
           
        </div>
    )
}

export default APIPage
