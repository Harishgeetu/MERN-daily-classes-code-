const DisplayMyDetails = (props) => {
  return (
    <>
      <h3>Function Based Component</h3>

      <h4>Student Details:</h4>
      <p>Name: {props.name}</p>
      <p>Roll No: {props.rollno}</p>
      <p>Course: {props.course}</p>
      <p>Phone No: {props.phoneno}</p>
      <p>College Name: {props.collegename}</p>

      <h4>Role: {props.role}</h4>
    </>
  );
};

export default DisplayMyDetails;