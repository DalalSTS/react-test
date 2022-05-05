import { useState } from "react";
import { createRoot } from 'react-dom/client';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';


function SignUpOld() {
   const [inputs, setInputs] = useState({});
   

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
 
    setInputs(values =>{ return {...values, [name]: value}
  })
    
    
  };

  const  [isToggled, setIsToggled] = useState(false);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  
  

  return (
    <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" noValidate onSubmit={handleSubmit}>

                            <div className="col-md-12">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    name="Name" 
                                    placeholder="Full Name" 
                                    required
                                    value={inputs.Name || ""} 
                                    
                                    onChange={handleChange} />
                                    
                                    {isToggled && <div className="is-invalid">Name field cannot be blank!</div>}
                                
                            </div>

                            <div className="col-md-12">
                                <input 
                                    className="form-control" 
                                    type="email" 
                                    name="email" 
                                    placeholder="E-mail Address" 
                                    required  
                                    value={inputs.email || ""} 
                                    onChange={handleChange}/>
                                    {isToggled && <div className="is-invalid">Email field cannot be blank!</div>}
                                {/* <div className=".is-valid">Email field is valid!</div>
                                <div className=".is-invalid">Email field cannot be blank!</div> */}
                            </div>

                        <div className="col-md-12">
                                <select className="form-select mt-3" 
                                name="position"
                                value={inputs.position || inputs.value} 
                                onClick={handleChange}
                                required>
                                    <option selected disabled value="">Position</option>
                                    <option value="Stockholm">Stockholm</option>
                                    <option value="Uppsala">Uppsala</option>
                                    <option value="Gävle">Gävle</option>
                            </select>
                            {isToggled && <div className="is-invalid">Please select a position!</div>}
                                {/* <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Please select a position!</div> */}
                        </div>


                        <div className="col-md-12">
                            <input 
                                className="form-control" 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                isrequired
                                value={inputs.password || ""} 
                                onChange={handleChange}/>
                                {isToggled && <div className="is-invalid">Password field cannot be blank!</div>}

                            {/* <div className="valid-feedback">Password field is valid!</div>
                            <div className="invalid-feedback">Password field cannot be blank!</div> */}
                        </div>


                        <div className="col-md-12 mt-3">
                            <label className="mb-3 mr-1" htmlFor="gender">Gender: </label>
                            
                            {/*No JS here*/}
                            <input 
                                type="radio" 
                                className="btn-check" 
                                name="gender" 
                                id="male" 
                                autoComplete="off" 
                                value={inputs.gender || "Male"} 
                                onClick={handleChange}
                                required/>
                            <label className="btn btn-sm btn-outline-secondary" htmlFor="male">Male</label>

                            <input 
                                type="radio" 
                                className="btn-check" 
                                name="gender" 
                                id="female" 
                                autoComplete="off"
                                value={inputs.gender || "Female"} 
                                onClick={handleChange} 
                                required/>
                            <label className="btn btn-sm btn-outline-secondary" htmlFor="female">Female</label>

                            <input 
                                type="radio" 
                                className="btn-check" 
                                name="gender" 
                                id="secret" 
                                autoComplete="off"
                                value={inputs.gender || ""} 
                                onClick={handleChange} 
                                required/>
                            <label className="btn btn-sm btn-outline-secondary" htmlFor="secret">Secret</label>
                            <div className="valid-feedback mv-up">You selected a gender!</div>
                                <div className="invalid-feedback mv-up">Please select a gender!</div>
                            </div>

                        <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="" 
                            id="invalidCheck" 
                            isRequired/>
                        <label className="form-check-label">I confirm that all data are correct</label>
                        <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                        </div>
                

                            <div className="form-button mt-3">
                                <button 
                                id="submit" 
                                type="submit" 
                                onClick= {() =>  setIsToggled(inputs.Name != "" ||inputs.password != "" ||inputs.email != "")}
                                className="btn btn-primary"
                                >Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

createRoot( document.getElementById('root')).render(<SignUpOld />);

export default SignUpOld;
