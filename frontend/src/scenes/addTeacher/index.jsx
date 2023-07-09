import React, { useState } from "react";

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    email: "",
    mobile: "",
    qualification: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = (
      "http://localhost:5000/api/admin/createTeacher",
      {
        method: "POST",
        headers: {
          authorization: `Bearer `,
        },
        body: JSON.stringify(formData),
      }
    );
    // const data = await response.json();
    alert("Teacher Added Successfully");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
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
        <div className="form-group mt-2">
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
        <div className="form-group mt-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            className="form-control"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          style={{ background: "#cca752" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
