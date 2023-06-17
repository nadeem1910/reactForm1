import React, { useState } from "react";
import './App.css';

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setFullName((prevValue) => {

      return{
        ...prevValue,
        [name]: value,
      }
      // if (name === 'fname') {
      //   return {
      //     fname: value,
      //     lname: prevValue.lname,
      //     email: prevValue.email,
      //     phone: prevValue.phone,
      //   };
      // } else if (name === 'lname') {
      //   return {
      //     fname: prevValue.fname,
      //     lname: value,
      //     email: prevValue.email,
      //     phone: prevValue.phone,
      //   };
      // } else if (name === 'email') {
      //   return {
      //     fname: prevValue.fname,
      //     lname: prevValue.lname,
      //     email: value,
      //     phone: prevValue.phone,
      //   };
      // } else if (name === 'phone') {
      //   return {
      //     fname: prevValue.fname,
      //     lname: prevValue.lname,
      //     email: prevValue.email,
      //     phone: value,
      //   };
      // }

      // Default return for other cases
      // return prevValue;
    });
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
  };

  return (
    <>
      <div className="main__div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input 
              type='text' 
              placeholder='Enter Your Name'
              name="fname" 
              onChange={inputEvent}        
              value={fullName.fname}
            />
            <input 
              type='text' 
              placeholder='Enter Your Last Name'
              name="lname" 
              onChange={inputEvent} 
              value={fullName.lname}
            />
            <input 
              type='email' 
              placeholder='Enter Your Email ID'
              name="email" 
              onChange={inputEvent} 
              value={fullName.email}
              autoComplete="off"
            />
            <input 
              type='tel' 
              placeholder='Enter Your Number'
              name="phone" 
              onChange={inputEvent} 
              value={fullName.phone}
            />
            <br/>
            <button type="submit">Click Here</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
