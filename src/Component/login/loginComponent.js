import React,{useState} from 'react';




const Login = () => {

    
    const initialValues = {
        email: "niki@gmail.com",
        password:'12345678'
    };

    const [values, setValues] = useState(initialValues);
    const [message,setMessage] = useState()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    
    

    return(
        <>
            
            <div className="container">
                <hr/>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3>Login</h3>
                    </div>
                    <div className="panel-body">
                       
                        <div className="row">
                            <h2 style={{color:'red'}}>{message}</h2>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Password</label>
                                <input className="form-control" id="password" type="password"
                                name="password" value={values.password} onChange={handleInputChange}/>
                            </div>
                        </div>
                      
                        <button className='btn btn-danger mt-4'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login
