import React from "react";
import Nav from "./components/Nav";
import Counter from "./Counter";
import CounterFBC from "./CounterFBC";
import DisplayMyDetails from "./DisplayMyDetails";

const App = () => {

  const name = "Geetanjali";
  const rollno = "21ME123";
  const course = "B.Tech Mechanical";
  const phoneno = "9876543210";
  const collegename = "JNTUGV Engineering College";
  const role = "Student";

  return (
    <>
      <Nav />
      <Counter />
      
      <CounterFBC
        name={name}
        rollno={rollno}
        course={course}
        phoneno={phoneno}
        collegename={collegename}
        role={role}
      />

      <DisplayMyDetails
        name={name}
        rollno={rollno}
        course={course}
        phoneno={phoneno}
        collegename={collegename}
        role={role}
      />
    </>
  );
};

export default App;