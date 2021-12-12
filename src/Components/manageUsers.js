import { useEffect, useState } from "react";
import appConfig from "../config";
import { Button } from "@mui/material";
import UpdateForm from "./updateForm";

const ManageUsers = () => {
  const url = appConfig.api_url;

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [snackbar, setsnackbar] = useState(false);

  //to control update
  const [showUpdateForm, setshowUpdateForm] = useState(false);

  //to
  const [updateFormData, setupdateFormData] = useState({});

  //for fetching data

  const fetchUserData = (props) => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
        setLoading(false);
      });
  };

  //for showing data
  const deleteUser = (id) => {
    const reqOpt = {
      method: "DELETE",
    };
    fetch(url + "/user/delete/" + id, reqOpt)
      .then((res) => {
        if (res.status === 200) {
          console.log("item deleted");
          fetchUserData();
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  };

  const updateUser = (user) => {
    setshowUpdateForm(true);
    setupdateFormData(user);
  };

  const showUsers = () => {
    if (!loading) {
      return userList.map((user) => (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>
            <Button
              variant="contained"
              color="error"
              onClick={(e) => {
                deleteUser(user._id);
              }}
            >
              <i className="fas fa-trash"></i>&nbsp; Delete
            </Button>
          </td>
          <td>
            <Button
              onClick={() => {
                updateUser(user);
              }}
              variant="contained"
              color="warning"
            >
              <i className="fas fa-pen"></i>
              &nbsp; Edit
            </Button>
          </td>
        </tr>
      ));
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="container">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete User</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>{showUsers()}</tbody>
      </table>
      <div className="mt-5">
        {showUpdateForm ? (
          <UpdateForm
            updateFormData={updateFormData}
            fetchUsersData={fetchUserData}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default ManageUsers;
