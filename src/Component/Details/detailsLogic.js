import React,{useState,useEffect} from 'react';
import './details.css';
import axios from 'axios';

import {useSearchParams} from 'react-router-dom';



const base_url = "https://udemycourse-yhgr.onrender.com";

const DetailDisplay = () => {

    
    let [searchParams] = useSearchParams()
    let [courseDetails, setcourseDetails] = useState()
    
    let id = searchParams.getAll('id');
    const courseDetail = async() => {
        const rdata = await axios.get(`${base_url}/details/${id}`);
        setcourseDetails(rdata.data)
    }

    useEffect(() => {
        courseDetail() 
    },[])

    return(
        <>
           
           <div className='main'>
                <div className='tileImage'>
                <div className='imageClass'>
                        <img src={courseDetails.image}
                        alt={courseDetails.name}/>
                    </div>
                    
                </div>
                <div className='tileContent'>

                    
                </div>
           </div>
        
        
        
        </>
    )
    }    



export default DetailDisplay