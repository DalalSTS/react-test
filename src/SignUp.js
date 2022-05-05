import { useState } from "react";
import { createRoot } from 'react-dom/client';



function SignUp(props) {
  const [nameControll, setNameControll] = useState(false);
  const [emailControll, setEmailControll] = useState(false);
  const [passwordControll, setPasswordControll] = useState(false);
  const [PositionControll, setPositionControll] = useState(false);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const onChangeHandler = (fieldName, value)=>{
    if(fieldName === "name"){
      setName(value);
    }
    else if(fieldName==="email"){
      setEmail(value);
    }
    else if(fieldName==="password"){
      setPassword(value);
    }
    else if(fieldName==="gender"){
      setGender(value);
    }
    else if(fieldName==="position"){
      setPosition(value);
    }
  }
  
  // const onSubmitHandler = (e)=>{
  //   e.preventDefault();
  //   if(name.trim()==="" ){
  //     setNameControll(true);
  //   }
  //   else if(email.trim() ==""){
  //     setEmailControll(true);
  //     setNameControll(false);
  //   }
  //   else if(position.trim() ==""){
  //     setPositionControll(true);
  //     setEmailControll(false);
  //     setNameControll(false);
  //   }
  //   else if(password.trim() ==""){
  //     setPasswordControll(true);
  //     setPositionControll(false);
  //     setEmailControll(false);
  //     setNameControll(false);
      
  //   }
  //   else if(gender.trim() ==""){
  //     setGenderControll(true);
  //     setPasswordControll(false);
  //     setPositionControll(false);
  //     setEmailControll(false);
  //     setNameControll(false);
  //   }
  //   else{
  //     setGenderControll(false);
  //     setPasswordControll(false);
  //     setPositionControll(false);
  //     setEmailControll(false);
  //     setNameControll(false);
  //     console.log({name,email, password, position, gender});
  //   }
  // }
  
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(1>0){
      setPasswordControll(false);
      setPositionControll(false);
      setEmailControll(false);
      setNameControll(false);
      if(name.trim()==="" ){
        setNameControll(true);
      }
      if(email.trim() ===""){
        setEmailControll(true);
      }
      if(position.trim() ===""){
        setPositionControll(true);
      }
      if(password.trim() ===""){
        setPasswordControll(true);      
  }
    else{
      setPasswordControll(false);
      setPositionControll(false);
      setEmailControll(false);
      setNameControll(false);
      console.log({name,email, password, position, gender});
    }
    }
  }


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log({name,email});
  // }

  return (
    <>
    {/* <div className="App">
      <form onSubmit={(e) => { onSubmitHandler(e); } }>
        <input type="text" value={name} onChange={(e) => { onChangeHandler("name", e.target.value); } } /> <br />
        <input type="email" value={email} onChange={(e) => { onChangeHandler("email", e.target.value); } } /> <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>  
    </div> */}


    <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <form className="requires-validation" noValidate onSubmit={(e) => { onSubmitHandler(e); } }>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      id= {`${nameControll && 'name'}`}
                      type="text"
                      name="Name"
                      placeholder="Full Name"
                      required
                      value={name}

                      onChange={(e) => { onChangeHandler("name", e.target.value); } } />
                      <div className={`${!nameControll && 'd-none'}`} id= {`${nameControll && 'nameText'}`}>Please enter your name</div>
                      
                  </div>
                  

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      id= {`${emailControll && 'email'}`}
                      type="email"
                      name="email"
                      value={email}
                      placeholder="E-mail Address"
                      required
                     
                      onChange={(e) => { onChangeHandler("email", e.target.value); } }/>
                    
                    <div className={`${!emailControll && 'd-none'}`} id= {`${emailControll && 'nameText'}`}>Please enter your E-mail</div>
                  </div>

                  <div className="col-md-12">
                    <select className="form-select mt-3"
                      name="position"
                      id= {`${PositionControll && 'position'}`}
                      onChange={(e) => { onChangeHandler("position", e.target.value); } }
                      value={position}
                      required>
                      <option selected disabled value="">Position</option>
                      <option value="Stockholm">Stockholm</option>
                      <option value="Uppsala">Uppsala</option>
                      <option value="Gävle">Gävle</option>
                    </select>
                    <div className={`${!PositionControll && 'd-none'}`} id= {`${PositionControll && 'nameText'}`}>Please select your position</div>
                    
                  </div>


                  <div className="col-md-12">
                    <input
                      className="form-control"
                      id= {`${passwordControll && 'password'}`}
                      type="password"
                      name="password"
                      placeholder="Password"
                      isrequired
                      value={password}
                      onChange={(e) => { onChangeHandler("password", e.target.value); } }
                       />
                    <div className={`${!passwordControll && 'd-none'}`} id= {`${passwordControll && 'nameText'}`}>Please enter a password</div>

                  </div>


                  <div className="col-md-12 mt-3">
                    <label className="mb-3 mr-1" htmlFor="gender" >Gender: </label>

                    {/*No JS here*/}
                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="male"
                      autoComplete="off"
                      value={gender}
                      onChange={(e) => { onChangeHandler("gender", "male"); } }
                      
                      required />
                    <label className="btn btn-sm btn-outline-secondary" htmlFor="male">Male</label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="female"
                      autoComplete="off"
                      
                      value={gender}
                      onChange={(e) => { onChangeHandler("gender", "female"); } }
                      required />
                    <label className="btn btn-sm btn-outline-secondary" htmlFor="female">Female</label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="secret"
                      autoComplete="off"
                      
                      value={gender}
                      onChange={(e) => { onChangeHandler("gender", "none"); } }
                      required />
                    <label className="btn btn-sm btn-outline-secondary" htmlFor="secret">Secret</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      isRequired />
                    <label className="form-check-label">I confirm that all data are correct</label>
                    <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                  </div>


                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      value="Submit"
                      
                      className="btn btn-primary"
                    >Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );

  
}


createRoot( document.getElementById('root')).render(<SignUp />);


export default SignUp;
