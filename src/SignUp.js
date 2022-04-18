import { useState } from "react";
import ReactDOM from "react-dom";

function SignUp() {
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
    <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" novalidate>

                            <div className="col-md-12">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    name="name" 
                                    placeholder="Full Name" 
                                    required
                                    value={inputs.name || ""} 
                                    onChange={handleChange} />
                                <div className="valid-feedback">Username field is valid!</div>
                                <div className="invalid-feedback">Username field cannot be blank!</div>
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
                                <div className="valid-feedback">Email field is valid!</div>
                                <div className="invalid-feedback">Email field cannot be blank!</div>
                            </div>

                        <div className="col-md-12">
                                <select className="form-select mt-3" required>
                                    <option selected disabled value="">Position</option>
                                    <option value="jweb">Stockholmr</option>
                                    <option value="sweb">Uppsala</option>
                                    <option value="pmanager">Gävle</option>
                            </select>
                                <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Please select a position!</div>
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


                        <div className="col-md-12 mt-3">
                            <label className="mb-3 mr-1" for="gender">Gender: </label>
                            
                            {/*No JS here*/}
                            <input 
                                type="radio" 
                                class="btn-check" 
                                name="gender" 
                                id="male" 
                                autocomplete="off" 
                                required/>
                            <label className="btn btn-sm btn-outline-secondary" for="male">Male</label>

                            <input 
                                type="radio" 
                                class="btn-check" 
                                name="gender" 
                                id="female" 
                                autocomplete="off" 
                                required/>
                            <label className="btn btn-sm btn-outline-secondary" for="female">Female</label>

                            <input 
                                type="radio" 
                                class="btn-check" 
                                name="gender" 
                                id="secret" 
                                autocomplete="off" 
                                required/>
                            <label className="btn btn-sm btn-outline-secondary" for="secret">Secret</label>
                            <div className="valid-feedback mv-up">You selected a gender!</div>
                                <div className="invalid-feedback mv-up">Please select a gender!</div>
                            </div>

                        <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="" 
                            id="invalidCheck" 
                            required/>
                        <label className="form-check-label">I confirm that all data are correct</label>
                        <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                        </div>
                

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
ReactDOM.render(<SignUp />, document.getElementById('root'));
export default SignUp;
