import React from 'react';

const SubjectsComponent = ({ data }) => {
  // Liste unique des cours
  const subjects = Array.from(new Set(data.map((item) => item.course)));

  return (
    <div className="subjects-list">
        <h2>Liste des Matières</h2>
        <div>
            {subjects.map((subject, index) => (
            <div key={index} className="subject-item">
                {subject}
            </div>
            ))}
        </div>
    </div>
  );
};

export default SubjectsComponent;
