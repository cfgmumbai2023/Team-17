import React, { useState } from "react";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);

  const fetchGroups = async () => {
    const response = await fetch(
      "http://localhost:5000/api/groups/getGroups/",
      {
        headers: {
          authorization:
            "Bearer ",
        },
        method: "GET",
      }
    );
    const data = await response.json();
    setGroups(data);
  };

  const showStudent = (group) => {
    setStudents(group.students);
  };

  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h2>Groups</h2>
          <ul>
            {groups.map((group) => (
              <li key={group.id}>
                <h5>{group.objective}</h5>
                <button className="btn-primary btn" onClick={() => showStudent(group)}>
                  Show Students
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Students</h2>
          {students.length > 0 ? (
            students.map((student) => (
              <div key={student.id}>
                <h5>{student.name}</h5>
                <p>{student.email}</p>
              </div>
            ))
          ) : (
            <p>No students to show</p>
          )}
        </div>
      </div>
      <button className="btn-primary btn" onClick={fetchGroups}>
        Load Groups
      </button>
    </div>
  );
};

export default App;
