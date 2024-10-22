import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../config/firebase'; // Import Firestore config

function ProjectsComponent() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("Fetching top 2 projects...");

        // Correct query with collection and limit passed correctly
        const q = query(collection(db, 'projects'), limit(2));
        const data = await getDocs(q);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);

        setProjectData(filteredData);
      } catch (err) {
        console.error("Error fetching projects: ", err);
      }
    };
    getData();
  }, []);

  return (
    <div className="projectsComponent">
      <h2 className="projects__title">Projects</h2>
      {projectData.map((project) => (
        <div
          key={project.id}
          className="projectsComponent-item" // Class for styling
        >
            <div className="projectsComponent-image">
              <img src={project.photoURL} alt={project.projectTitle} />
            </div>
            <div className="projectsComponent-info">
              <h2>{project.projectTitle}</h2>
              <p>{project.projectDescription}</p>
            </div>
        </div>
      ))}
      <div className='ReadMore__button'><Link to="/projects" >View More</Link></div>
      
    </div>
  );
}

export default ProjectsComponent;
