import React from 'react';
import {Link} from 'react-router-dom';





const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item) => {
                    return(
                       
                        <div className='item' key={item._id}>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <img src={item.image} alt={item.image}
                                    className='Image'/>
                                </div>
                                <div className='col-md-7'>
                                    <div className='hotelname'>
                                       <Link to={`/details/${item._id}`} className='hotelnamelnk'>
                                            {item.name}
                                        </Link>
                                    </div>
                                    
                                    <div className='cityname'>Author : {item.author}</div>
                                    <div className='cityname'>Price: {item.price}</div>
                                    <div className='cityname'>Edition : {item.edition}</div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }else{
                return(
                    <h2>No Data Found</h2>
                )
            }
        }else{
            return(
                <div>
                    <h2>Loading</h2>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loader"/>
                </div>
            )
        }
    }

    return(
       
        <div id="content">
            {renderData(props)}
        </div>
        
    )
}

export default ListingDisplay