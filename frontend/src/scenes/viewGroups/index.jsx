import React, { useEffect, useState } from "react";

const ViewGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Fetch the groups data
    fetchGroups();
  }, []);

  // Function to fetch groups data
  const fetchGroups = async () => {
    try {
      const response = await fetch("", {
        headers: {
          Authorization: "Bearer your-access-token",
        },
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setGroups(data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  return (
    <div>
      {/* Render the groups data */}
      {groups.map((group) => (
        <div key={group.id}>
          <h3>{group.name}</h3>
          {/* Render other group details */}
        </div>
      ))}
    </div>
  );
};

export default ViewGroups;
