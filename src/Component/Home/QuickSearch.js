import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay'


const base_url = "https://udemycourse-yhgr.onrender.com";


const QuickSearch = () => {
       
      const [category_id,setcategory_id] = useState();
    
        useEffect(() => {
            fetch(`${base_url}/courses`,{method:'GET'})
            .then((res) => res.json())
            .then((data) => {
                setcategory_id(data)
            })
        },[])

    return(
        <>
        
                  <h2 className="headin1_card1">Top Courses</h2>
                  <h6 className='catedesign'>Design</h6>
                  <h6 className='catemusic'>Music</h6>
                  <h6 className='cateitsoft'>IT and Software</h6>
                  <h6 className='catepersonaldev'>Personal Development</h6>
                  <h6 className='catephoto'>Photography</h6>
                  <h6 className='catedevelop'>Development</h6>
                  <h6 className='catemarket'>Marketing</h6>
                  <h6 className='catebusnes'>Business</h6>

                  <QuickDisplay category_id={category_id}/>
        
   
        </>
    )
}

export default QuickSearch;