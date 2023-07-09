import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ViewGroups = () => {
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  
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
  useEffect(() => {
    fetchGroups()
  }, [])
  const showStudent = (group) => {
    setStudents(group.students);
  };

  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h2>Groups</h2>
          <table>
            <thead>
              <tr>
                <th>Objective</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group.id}>
                  <td>{group.objective}</td>
                  <td>
                    <button
                      style={{ background: "#cca752" }}
                      className="btn-primary btn"
                      onClick={() => showStudent(group)}
                    >
                      Show Students
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ flex: 1 }}>
          {students.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <a
                    key={student.id}
                    onClick={() => navigate("/studentSearch")}
                  >
                    <ul>
                      <li>{student.name}</li>
                    </ul>
                  </a>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No students to show</p>
          )}
        </div>
      </div>
      {/* <button className="btn-primary btn" onClick={fetchGroups}>
        Load Groups
      </button> */}
    </div>
  );
};

export default ViewGroups;