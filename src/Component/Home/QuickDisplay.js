import React from 'react';
import {Link} from 'react-router-dom';


const QuickDisplay = (props) => {

    const listCourse = ({category_id}) => {
        if(category_id){
            return category_id.map((item) => {
                return(

               
                    <div className="col-lg-3">
                        <Link to={`/listing/${item.category_id}`} className='categorydata'>
                             
                                    <div className="card card2 zoom">
                                        <img src={item.image} alt={item.category_id}/>
                                    </div>
                                    <div className="card-body cardnamespc">
                                        {item.name}
                                    </div>
               
                        </Link>
                    </div>     
                    
                )
            })
        }
    }

    return(
        <div className="container-fluid">

            <div className="row p-4">
            {listCourse(props)} 
          </div>
        </div>
    )
}

export default QuickDisplay;























    <div className="col-lg-3">
    <div className="card card2 zoom">
        <a href="/home"><img className="card-img-top" src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt="cardimage"/>
        <div className="card-body">
        <p className="card-text text-dark fw-bold">Design</p>
        </div>
        </a>
        </div>
    </div>



