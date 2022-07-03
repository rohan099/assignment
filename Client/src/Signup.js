import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("phone");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    let payload = {
      username: name,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      address: Address,
      phone: phone,
      country_code: code,
      gender: gender,
    };

    try {
      const resp = await axios.post(
        "http://localhost:8080/api/auth/signup",
        payload
      );
      console.log(resp.data);
      alert(resp.data.message);
      navigate("/login");
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e)=>{setFirstName(e.target.value)}}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput124"
                  aria-describedby="emailHelp124"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e)=>{setLastName(e.target.value)}}
                />
              </div>
            </div>

            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="w-full mb-10">
              <div>
                <label className="inline-block text-sm text-gray-600" for="color">
                  Select Your Gender
                </label>
                <div className="relative flex w-full">
                  <select
                    onChange={(val) => {
                        setGender(val.target.value)
                     // alert(JSON.stringify(val));
                    }}
                    className="block w-full py-3 pl-4 pr-8 bg-white border border-gray-300 rounded-sm appearance-none cursor-pointer focus:outline-none hover:border-gray-400"
                  >
                    <option>Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-blue-400 pointer-events-none">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div className="w-20">
                <input
                  //type="number"
                  id="company"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  placeholder="Country code"
                  required
                  value={code}
                  onChange={(e)=>{setCode(e.target.value)}}
                />
              </div>
              <div className="w-50">
                <input
                  type="tel"
                  id="phone"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  placeholder="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  value={phone}
                  onChange={(e)=>{setPhone(e.target.value)}}
                />
              </div>
            </div>

            <div className="form-group mb-6">
              <textarea
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Address"
                value={Address}
                onChange={(e)=>{setAddress(e.target.value)}}
              ></textarea>
            </div>

            <button
              //type="submit"
              className=" px-5 py-3 bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white"
              onClick={() => handleSubmit()}
            >
              Create Account
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link to="/login">login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
