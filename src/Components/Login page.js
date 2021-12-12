import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import "./style.css"
import appConfig from "../config";
import Swal from "sweetalert2";

const Login = () =>
{

  const url = appConfig.api_url;

  const loginForm = {
    email: "",
    name: "",
    password: "",
  };

  const loginSubmit = (formdata) => {
    console.log(formdata);
    //three things are required to 1.request address  2.httprequestethod 3.data and its format

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/check-login", reqOpt)
      .then((res) => {
        console.log(res.status);
        if (res.status ==200){
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "You have Loged in succcesfully",
              });
        }
        else if(res.status == 300){
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Email or Password is incorrect!",
              });
              }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        
      });
  };

    return(
<div>

<div className="body">
    
<div className="my-card" >
    
    <img className="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="logo"/>
    {/* <!-- <h1 class="card-title">Login Page</h1> --> */}

    <div className="sub-header">
        <span id="active"> Log In</span>
        <span> Sign Up</span>
    </div>

    <Formik initialValues={loginForm} onSubmit ={loginSubmit}>
        { ({values,handleChange,handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <input type="text"
                 id="email" 
                 className="my-input" 
                 placeholder="Username"
                onChange={handleChange} 
                value={values.email}/>
    <input type="password"
                id="password" 
                className="my-input" 
                placeholder="Password" 
                onChange={handleChange}
                value={values.password}/>

    <div className="remember">
        <input type="checkbox"/>
        <span> Stay Sign in</span>
    </div>

    <button className="my-btn" type="submit">SIGN IN</button>
            </form>
        )}
    </Formik>

    <NavLink className="link" to="#">Forgot Password?</NavLink>

</div>
</div>
</div>
    )
}

export  default Login;