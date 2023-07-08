import React, { useState, useEffect, useRef } from 'react';
import LineChart from 'components/LineChart';

function StudentSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [studentData, setStudentData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [evaluations, setEvaluations] = useState([]);
  const chartRef = useRef(null);

   
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    // Make an API call to fetch student data based on the search query
    // Replace `YOUR_API_ENDPOINT` with the actual API endpoint
    fetch(`YOUR_API_ENDPOINT?aadhar=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        setStudentData(data);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  };

  const handleViewDetailsClick = (student) => {
    setSelectedStudent(student);
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
    setEvaluations([]);
  };


  const handleAnalyticsClick = (student) => {
    fetch(`YOUR_API_ENDPOINT?student_id=${student.id}`)
      .then(response => response.json())
      .then(data => {
        setEvaluations([... data]);     

      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });

  }

   

  return (
    <div>
      <h1>Student Search</h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Enter Adhaar"
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>
      <div>
        {studentData.length === 0 ? (
          <p>No student data available.</p>
        ) : (
          studentData.map(student => (
            <div key={student.id} className="card">
              <h2>{student.name}</h2>
              <p>UDID: {student.udid}</p>
              <p>Age: {student.age}</p>
              <p>Disability: {student.disability}</p>
              <p>Severity: {student.severity}</p>
              <p>Program: {student.program}</p>
              <p>Level: {student.level}</p>
              <p>Gender: {student.gender}</p>
              <p>Address: {student.address}</p>
              <p>Contact: {student.contact}</p>
              <p>Adhaar: {student.adhaar}</p>
              <button onClick={handleViewDetailsClick(student)}>View Details</button>
            </div>
          ))
        )}
      </div>
      {selectedStudent && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h2>Name: {selectedStudent.name}</h2>
            <button onClick={() => handleAnalyticsClick(selectedStudent)}>View Analytics</button>
            {evaluations.length > 0 && (
              <div className="card">
                <h3>Evaluations</h3>
                 <LineChart evaluations = {evaluations}/>
              </div>
            )}
          </div>
        </div>
      )}
      
    </div>
  );
}

export default StudentSearch;
