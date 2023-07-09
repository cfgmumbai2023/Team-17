import React, { useState } from "react";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    bmcSchool: "",
    age: "",
    disability: "",
    severity: "",
    gender: "",
    level: "",
    dob: "",
    doa: "",
    aadhar: "",
    address: "",
    contact: "",
    school: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mappedData = {
      name: formData.name,
      bmcSchool: formData.bmcSchool,
      age: formData.age,
      disability: formData.disability,
      severity: formData.severity,
      gender: formData.gender,
      level: formData.level,
      dob: formData.dob,
      doa: formData.doa,
      aadhar: formData.aadhar,
      address: formData.address,
      contact: formData.contact,
      school: formData.school,
    };
    console.log(mappedData);
    /*const response = {
      "http://localhost:5000/api/student/registerStudent",
      {
        method: "POST",
        headers: {
          authorization:
            "Bearer ",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mappedData),
      }
    };*/
    // const data = await response.json();
    // console.log(data);
    alert("Student Added Successfully");
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container" style={{ width: "600px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="bmcSchool">BMC School</label>
          <input
            type="text"
            className="form-control"
            id="bmcSchool"
            name="bmcSchool"
            value={formData.bmcSchool}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="disability">Disability</label>
          <input
            type="text"
            className="form-control"
            id="disability"
            name="disability"
            value={formData.disability}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="severity">Severity</label>
          <select
            className="mx-5 rounded"
            name="severity"
            id="severity"
            defaultValue={formData.severity}
            value={formData.severity}
            onChange={handleChange}
          >
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="level">Level</label>
          <input
            type="text"
            className="form-control"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="doa">DOA</label>
          <input
            type="date"
            className="form-control"
            id="doa"
            name="doa"
            value={formData.doa}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="addhar">Aadhar</label>
          <input
            type="text"
            className="form-control"
            id="aadhar"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="school">School</label>
          <input
            type="text"
            className="form-control"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
