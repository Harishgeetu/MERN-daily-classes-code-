import React from "react";
import ClassBasedComponent from "./ClassBasedComponent";
import RegisterForm from "./RegisterForm";
import "./formstyling.css";

const App = () => {
  return (
    <div>
      <RegisterForm />
      <ClassBasedComponent />
      <h1>React App Using Vite</h1>
    </div>
  );
};

export default App;