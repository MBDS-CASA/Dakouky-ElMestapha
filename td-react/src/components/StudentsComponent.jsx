import React from 'react';

const StudentsComponent = ({ data }) => {
  // Liste unique des étudiants
  const students = Array.from(
    new Set(data.map((item) => JSON.stringify(item.student)))
  ).map((student) => JSON.parse(student));

  return (
    <div className="students-list">
        <h2>Liste des Étudiants</h2>
        <div>
            {students.map((student) => (
            <div key={student.id} className="student-item">
                <span>{student.firstname} {student.lastname}</span>
                <span>ID: {student.id}</span>
            </div>
            ))}
        </div>
    </div>
  );
};

export default StudentsComponent;
