import { Formik } from "formik";
import { NavLink } from "react-router-dom";

import { Button, TextField } from "@mui/material";
import "./signup.css";
import appConfig from "../config";
import Swal from "sweetalert2";

const UpdateForm = (props) => {
  const url = appConfig.api_url;

//   const updateForm = {
//     email: "",
//     name: "",
//     password: "",
//   };

  const updateSubmit = (formdata) => {
    console.log(formdata);
    //three things are required to 1.request address  2.httprequestethod 3.data and its format

    const reqOpt = {
      method: "PUT",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/update"+props.updateFormData._id, reqOpt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Updated",
        });
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <div className="row">
            {/* <!-- column --1 --> */}
            <div className="col-md">
              <div className="img-back"></div>
            </div>

            <div className="col-md">
              <div className="my-card-body">
                <p className="h3 text-center"> Start Building Your Future</p>
                <p className="text-muted text-center">Update</p>
                <hr />
                <Formik initialValues={props.updateFormData} onSubmit={updateSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      {/* <!-- <div className="form-floating">
                                <input type="email" className="form-control" placeholder="Email"/>
                                <label for="email">Email</label>
                            </div> --> */}

                      {/* <label for="email" className="mt-3">Email</label>
                            <input type="email" name="" id="email" className="form-control" placeholder="Email"value={values.email} onChange={handleChange}/> */}

                      <TextField
                        className="w-100 mt-5"
                        variant="filled"
                        id="email"
                        type="email"
                        label="Email Address"
                        value={values.email}
                        onChange={handleChange}
                        required
                      />

                      {/* <label for="name" className="mt-3">Full Name</label>
                            <input type="text" name="name" id="name" className="form-control" placeholder="Full Name"value={values.name} onChange={handleChange}/> */}

                      <TextField
                        className="w-100 mt-3"
                        variant="filled"
                        id="name"
                        type="Name"
                        label="Full Name"
                        value={values.name}
                        onChange={handleChange}
                      />

                      {/* <label for="password" className="mt-3">Email</label>
                            <input type="password" name="" id="password" className="form-control" placeholder="Password"value={values.password} onChange={handleChange}/> */}

                      <TextField
                        className="w-100 mt-3"
                        variant="standard"
                        id="password"
                        type="password"
                        label="Password"
                        value={values.password}
                        onChange={handleChange}
                      />

                      <div className="text-center">
                        {/* <button className="btn btn-primary w-25 mt-5" type="submit">
                                Sign Up
                            </button> */}
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="mt-5 "
                        >
                          {" "}
                          Update
                        </Button>
                      </div>

                      <NavLink
                        to="#"
                        className="text-muted mt-5"
                        style={{ display: "block" }}
                      >
                        {" "}
                        Already have an account?
                      </NavLink>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
