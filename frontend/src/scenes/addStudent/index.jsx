import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [bmcschool, setBmcschool] = useState("");
  const [age, setAge] = useState("");
  const [disability, setDisability] = useState("");
  const [severity, setSeverity] = useState("");
  const [program, setProgram] = useState("");
  const [level, setLevel] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [doa, setDoa] = useState("");
  const [udid, setUdid] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [school, setSchool] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form data from the useState variables
    console.log({
      name,
      bmcschool,
      age,
      disability,
      severity,
      program,
      level,
      gender,
      dob,
      doa,
      udid,
      aadhar,
      address,
      contact,
      school,
    });
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bmcschool" className="form-label">
            BMC School
          </label>
          <input
            type="text"
            className="form-control"
            id="bmcschool"
            value={bmcschool}
            onChange={(e) => setBmcschool(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
