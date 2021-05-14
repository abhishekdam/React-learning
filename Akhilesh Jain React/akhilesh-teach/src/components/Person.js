import React from "react";
import { useState } from "react";

const Person = (props) => {
  //   const [name, setName] = useState(props.name);
  //   const [marital_status, setMarital_status] = useState(props.marital_status);

  const [userDetails, setUserDetails] = useState({
    name: props.name,
    marital_status: props.marital_status,
  });

  function btnClickHandler() {
    setUserDetails({
      ...userDetails,
      name: "Dam",
    });
  }
  function maritalStatusChanger() {
    setUserDetails({
      ...userDetails,
      marital_status: "Engaged",
    });

    setUserDetails((prevState) => {
      return {
        ...prevState,
        marital_status: "Married",
      };
    });
  }

  return (
    <div>
      <h2>
        This is person js file {userDetails.name} & {userDetails.marital_status}
        {props.children}
      </h2>
      <button onClick={btnClickHandler}>Click Me!</button>
      <button onClick={maritalStatusChanger}>Get Engaged</button>
    </div>
  );
};

export default Person;
