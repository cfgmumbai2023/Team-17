import React, { useState } from 'react';
import LineChart from 'components/LineChart';
import './index.css'

 

function StudentSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [studentData, setStudentData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [evaluations, setEvaluations] = useState([]);
  const [barData, setbarData] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    // Simulate API call or replace with your own data retrieval logic
    const dummyData = [
      {
        id: 1,
        name: 'John Doe',
        udid: 'UDID123',
        age: 18,
        disability: 'None',
        severity: 'Low',
        program: 'Program A',
        level: 'Level 1',
        gender: 'Male',
        address: '123 Main Street',
        contact: '123-456-7890',
        adhaar: '1234567890',
        evaluations: [
          {
            quarter: 'Q1',
            year: 2023,
            totalscore: 90,
            parameters: [
              { name: 'Parameter 1', score: 85 },
              { name: 'Parameter 2', score: 92 },
              { name: 'Parameter 3', score: 88 },
            ],
          },
          {
            quarter: 'Q2',
            year: 2023,
            totalscore: 88,
            parameters: [
              { name: 'Parameter 1', score: 82 },
              { name: 'Parameter 2', score: 90 },
              { name: 'Parameter 3', score: 85 },
            ],
          },
          {
            quarter: 'Q3',
            year: 2023,
            totalscore: 92,
            parameters: [
              { name: 'Parameter 1', score: 88 },
              { name: 'Parameter 2', score: 95 },
              { name: 'Parameter 3', score: 90 },
            ],
          },
          {
            quarter: 'Q4',
            year: 2023,
            totalscore: 86,
            parameters: [
              { name: 'Parameter 1', score: 80 },
              { name: 'Parameter 2', score: 88 },
              { name: 'Parameter 3', score: 85 },
            ],
          },
        ],
      },
    ];


    const totalScores = dummyData.map((student) =>
    student.evaluations.map((evaluation) => evaluation.totalscore)
  );

 

    // Filter the dummy data based on the search query
    const filteredData = dummyData.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the student data with the filtered results
    setStudentData(filteredData);
    setbarData(totalScores);
    console.log(barData);
  };

  const handleViewDetailsClick = (student) => {
    setSelectedStudent(student);
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
    setEvaluations([]);
  };

  const handleAnalyticsClick = (student) => {
    // Retrieve the evaluations from the selected student
    const { evaluations } = student;
    setEvaluations(evaluations);
  };

  return (
    <div>
      <h1 className='form-group mt-3 heading'>Student Search</h1>
      <div className='form-group mt-3'>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Enter Roll no."
          className='search-input'
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>
      <div>
        {studentData.length === 0 ? (
          <p className='no-data-message'>No student data available.</p>
        ) : (
          studentData.map((student) => (
            <div key={student.id} className="student-card ">
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
              <button onClick={() => handleViewDetailsClick(student)}>View Details</button>
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
                <LineChart evaluations={evaluations} />
              </div>
            )}
          </div>
           

        </div>
      )}
    </div>
  );
}

export default StudentSearch;

 