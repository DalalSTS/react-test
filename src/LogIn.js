import { useState } from "react";
import { createRoot } from 'react-dom/client';
import axios from "axios";

function LogIn() {
    let exist = true;
    let password1 = "1234";
    const [emailControllog, setEmailControllog] = useState(false);
    const [passwordControllog, setPasswordControllog] = useState(false);
    
    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeHandler = (fieldName, value)=>{
    if(fieldName==="email"){
        setEmail(value);
      }
      else if(fieldName==="password"){
        setPassword(value);
      }
    }
    
    const onSubmitHandler = (e)=>{
      e.preventDefault();
      axios
        .post("/api/users/login/", {"email": email, "password":password})
      //.then((res) => console.log(res));
      if(1>0){
        setPasswordControllog(false);   
        setEmailControllog(false);
        if(email.trim() ===""){
            setEmailControllog(true);
        }
        if(exist !== true){
            setEmailControllog(true);
        }
        if(password.trim() ===""){
            setPasswordControllog(true);
        }

        if(emailControllog === true){
            setPasswordControllog(true);
        }

        // if(password !== password1){
        //     setPasswordControllog(true);
        // }
        
        else{
            console.log({email, password});
            axios
            .post("/api/users/login/", {"email": email, "password":password})
            .then(function (res) {
                localStorage.setItem("Token",res.data.token);
                window.location.href= '/'
                })
            .catch(err => {
                alert(err.response.data)});

            
        }
        }
    }

  return (
    <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Welcome Back!</h3>
                        <p>LogIn Here</p>
                        <form className="requires-validation" noValidate onSubmit={(e) => { onSubmitHandler(e); } }>

                            

                            <div className="col-md-12">
                                <input 
                                    className="form-control" 
                                    id= {`${emailControllog && 'email'}`}
                                    type="email" 
                                    name="email" 
                                    placeholder="E-mail Address" 
                                    required  
                                    value={email}
                                    onChange={(e) => { onChangeHandler("email", e.target.value); } }/>
                                {/* <div className="valid-feedback">Email field is valid!</div>
                                <div className="invalid-feedback">Email field cannot be blank!</div> */}
                                <div className={`${!emailControllog && 'd-none'}`} id= {`${emailControllog && 'nameText'}`}>The e-mail is wrong or does not exist</div>
                            </div>

                       


                        <div className="col-md-12">
                            <input 
                                className="form-control"
                                id= {`${passwordControllog && 'password'}`} 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                required
                                value={password}
                                onChange={(e) => { onChangeHandler("password", e.target.value); } }/>
                            <div className={`${!passwordControllog && 'd-none'}`} id= {`${passwordControllog && 'nameText'}`}>The password is wrong</div>
                        </div>


                        
                            
                            {/*No JS here*/}
                           
                        
                

                            <div className="form-button mt-3">
                                <button id="submit" type="submit"  className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default LogIn;