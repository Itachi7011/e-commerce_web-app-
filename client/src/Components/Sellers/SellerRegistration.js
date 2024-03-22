import React, { useState } from "react";

const SellerRegistration = () => {
  let name, value;

  const [productsData , setProductsData] =useState([]);

  const handleProductsInput = (e) => {
    setProductsData([...productsData, e.target.value]);
  }
  // const handleProductsInput1 = (e) => {
  //   setTimeout(() => {
  //     setProductsData([...productsData, e.target.value]);
  //   }, 10000); 
  // }


  const [user, setUser] = useState({
    accountStatus: "active",
    email: "",
    name: "",
    fatherName: "",
    dateOfBirth: "",
    phoneNo_1: "",
    country: "",
    state: "",
    district: "",
    fullAddress: "",
    products: [],
    dateOfFormSubmission: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // const [inputs, setInputs] = useState([]);
  // const handleAddInput = (e) => {
  //   e.preventDefault();
  //   setInputs([...inputs, inputs.length + 1]);
  // };

  return (
    <>
      <div className="main-body1">
        <div className="nav-btn" style={{ textAlign: "center" }}>
          <h1 className="title_heading"> New Seller Registration : </h1>
        </div>
        <div className="registrationForm">
          <form action="/newSellerRegistration" method="POST">
            <div className="mb-3 formDivRegistraion">
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="name"
                placeholder=""
              />
            </div>

            <div className="mb-3 formDivRegistraion">
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="email"
                placeholder="Official Email Id only"
              />
            </div>

            {/* Hidden Date Of Form Submission : */}
            <input
              type="hidden"
              name="dateOfFormSubmission"
              value={new Date()}
            ></input>

            <div className="mb-3 formDivRegistraion">
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Father's Name{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="fatherName"
                placeholder=""
              />
            </div>

            <div className="mb-3 formDivRegistraion">
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Date Of Birth :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="date"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="dateOfBirth"
                placeholder=""
              />
            </div>

            <div className="mb-3 formDivRegistraion">
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                {" "}
                Phone Number (1) :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="number"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="phoneNo_1"
                placeholder=""
              />
            </div>

            <div className="mb-3 formDivRegistraion">
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Country :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="country"
                placeholder="whichever country's citizenship do you have"
              />
            </div>

            <div className="mb-3 formDivRegistraion">
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                State :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="state"
                placeholder=""
              />
            </div>

            <div className="mb-3 formDivRegistraion">
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                District :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="district"
                placeholder=""
              />
            </div>

            <div className="mb-3 formDivRegistraion">
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Full Address :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="fullAddress"
                placeholder=""
              />
            </div>
            <div className="mb-3 formDivRegistraion">
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Products :{" "}
              </label>
              <br />
              <div className="checkboxSellerRegistration">
                <div className="checkbox-wrapper-14">
                  <div className="checkbox-wrapper-14">
                    Mobiles : &nbsp; &nbsp;{" "}
                    <input
                      id=""
                      type="checkbox"
                      className="switch"
                      onChange={handleProductsInput}
                      name="products"
                      placeholder=""
                      value="Mobiles"
                    />
                  </div>
                </div>
                <br />
                <div className="checkbox-wrapper-14">
                  Electronics : &nbsp; &nbsp;{" "}
                  <input
                    id=""
                    type="checkbox"
                    className="switch"
                    
                    onChange={handleProductsInput}
                    name="products"
                    placeholder=""
                    value="Electronics"
                  />
                </div>
                <br />
                <div className="checkbox-wrapper-14">
                  Clothes : &nbsp; &nbsp;{" "}
                  <input
                    id=""
                    type="checkbox"
                    className="switch"
                    onChange={handleProductsInput}
                    name="products"
                    placeholder=""
                    value="Clothes"
                  />
                </div>
                <br />
                <div className="checkbox-wrapper-14">
                  Fashion : &nbsp; &nbsp;{" "}
                  <input
                    id=""
                    type="checkbox"
                    className="switch"
                    onChange={handleProductsInput}
                    name="products"
                    placeholder=""
                    value="Fashion"
                  />
                </div>
                <br />
                <div className="checkbox-wrapper-14">
                  Books : &nbsp; &nbsp;{" "}
                  <input
                    id=""
                    type="checkbox"
                    className="switch"
                    onChange={handleProductsInput}
                    name="products"
                    placeholder=""
                    value="Books"
                  />
                </div>
                {/* <br />
                Others &nbsp; &nbsp;
                <button onClick={handleAddInput}> + </button>
                {inputs.map((index) => (
                   <input
                    key={index}
                    type="text"
                    onChange={handleProductsInput1}
                    name="ohterProducts"
                    style={{margin:"1rem 0.6rem"}}
                    placeholder={`${index}`}
                  /> 
                  
                ))} */}
            
                <br />
              </div>
            </div>

            <div className="mb-3 formDivRegistraion">
              <div className="mb-3 formDivRegistraion">
                {" "}
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Password :{" "}
                </label>
                <input
                  autoComplete="off"
                  onChange={handleInput}
                  type="password"
                  className="form formInputRegistraion"
                  id="exampleFormControlInput1"
                  name="password"
                  placeholder="create a strong , unpredectible password"
                />
              </div>

              <div className="mb-3 formDivRegistraion">
                {" "}
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Confirm Password :{" "}
                </label>
                <input
                  autoComplete="off"
                  onChange={handleInput}
                  type="password"
                  className="form formInputRegistraion"
                  id="exampleFormControlInput1"
                  name="cpassword"
                  placeholder="Password must be atleast 8 digits and create a strong , unpredectible password"
                />
              </div>

              <button
                type="submit"
                value="signUp"
                className="login_btn"
                style={{ float: "right" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SellerRegistration;
