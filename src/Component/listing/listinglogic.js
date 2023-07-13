import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams} from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios';


const base_url = "https://udemycourse-yhgr.onrender.com";


const Listing = () => {

    let params = useParams();

    const [courseList,setCourseList] = useState();
   
    useEffect(() => {
        let category_id = params.category_id;
    
        axios.get(`${base_url}/course?categoryId=${category_id}`)
        .then((res) => {
            setCourseList(res.data)
        })
    },[])



    return(
        <>
        
         <div className='container'>
           <div className='row'>
            <div className='col-lg-12'>
               
                      <ListingDisplay listData={courseList}/>
                 </div>
           </div>
        </div>

        </>
 )
}

export default Listing
