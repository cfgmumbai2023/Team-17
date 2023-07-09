import React, { useState } from 'react';

const AddSchool = () => {
  const [schoolName, setSchoolName] = useState('');
  const [schoolAddress, setSchoolAddress] = useState('');

  const handleSchoolNameChange = (event) => {
    setSchoolName(event.target.value);
  };

  const handleSchoolAddressChange = (event) => {
    setSchoolAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make an API call to post the school data to the database
    const postData = {
      name: schoolName,
      address: schoolAddress,
    };

    // Replace `YOUR_API_ENDPOINT` with the actual API endpoint
    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log('Data posted successfully:', data);
        // Reset the form fields
        setSchoolName('');
        setSchoolAddress('');
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit} className="add-school-form">
        <div className="form-group" >
          <label htmlFor="exampleInputEmail1">School Name</label>
          <input
            type="Text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group " >
          <label htmlFor="exampleInputEmail1">School Address</label>
          <input
            type="Text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>

  );
}

export default AddSchool;
