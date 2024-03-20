import { useState } from "react";
// import { useEffect } from "react";
// import { useContext } from "react";
// import { UserContext } from "../../App";
// import axios from "axios";

const CustomerLogin = () => {
  // const {state, dispatch} = useContext(UserContext);

  // const [Data, setData] = useState({ post: [] });

  // useEffect(() => {
  //     axios.get('/empSearchResults').then((response) => {

  //         const data = response.data;

  //         setData({ post: data });

  //         if (data.status === 4000) {
  //             console.log("Sorry wrong credentials!")
  //         } else {

  //             console.log("Login Successful.")

  //             //dispatch function here
  //             dispatch({ type : "USER", payload : false })

  //         }

  //         console.log("data fetch successfully");
  //     }).catch((err) => { console.log(err) })

  // }, [])

  let name, value;
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="main-div">
        <div className="login-main-div">
          <h1 className="title_heading">Consumer Login </h1>
          <h3>
            {" "}
            If not Registered Yet , Please visit{" "}
            <a className="redirecting_link" href="/CustomerRegistration">
              {" "}
              Signup Page{" "}
            </a>{" "}
            :{" "}
          </h3>

          {/* Form Starts Here */}
          <form className="loginForm" action="/customerlogin" method="POST">
            <div className="loginCSS">
              <div className="">
                <div className="">
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    className="loginFormInput"
                    placeholder=" Email "
                  />
                </div>

                <div className="">
                  <div className="col-sm-10">
                    <input
                      type="password"
                      name="password"
                      onChange={handleInput}
                      className="loginFormInput"
                      placeholder=" Password "
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                value="signUp"
                className="login_btn"
                style={{ float: "right" }}
              >

                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CustomerLogin;
