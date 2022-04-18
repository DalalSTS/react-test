import { useState } from "react";
import ReactDOM from "react-dom";

function LogIn() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div classNam="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Welcome Back!</h3>
                        <p>LogIn Here</p>
                        <form className="requires-validation" novalidate>

                            

                            <div className="col-md-12">
                                <input 
                                    className="form-control" 
                                    type="email" 
                                    name="email" 
                                    placeholder="E-mail Address" 
                                    required  
                                    value={inputs.email || ""} 
                                    onChange={handleChange}/>
                                <div className="valid-feedback">Email field is valid!</div>
                                <div className="invalid-feedback">Email field cannot be blank!</div>
                            </div>

                       


                        <div className="col-md-12">
                            <input 
                                className="form-control" 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                required
                                value={inputs.password || ""} 
                                onChange={handleChange}/>
                            <div className="valid-feedback">Password field is valid!</div>
                            <div className="invalid-feedback">Password field cannot be blank!</div>
                        </div>


                        
                            
                            {/*No JS here*/}
                           
                        
                

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

ReactDOM.render(<LogIn />, document.getElementById('root'));
export default LogIn;