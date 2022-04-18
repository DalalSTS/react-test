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
    
      <div className="container border ">
        <form onSubmit={handleSubmit} className="signUpForm">
            <div className="row border justify-content-center">
              <div className="col-sm-2">
                <label className="signUpLabelUsername">Enter our name:
                  <input 
                      placeholder="What is your name?"
                      className="Input"
                      type="text" 
                      name="username" 
                      value={inputs.username || ""} 
                      onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-2 border">
                <label className="signUpLabelEmail">Enter your e-mail:
                <input 
                className="Input"  
                type="text" 
                name="email" 
                value={inputs.email || ""} 
                onChange={handleChange}
                />
                </label>
                </div>
              </div>
              <div className="row justify-content-center border">
                <div className="col-sm-2">
                  <input className="Submit" type="submit" />
                </div>
              </div>
        </form>
    </div>
  )
}

//ReactDOM.render(<SignUp />, document.getElementById('root'));
//export default SignUpOld;