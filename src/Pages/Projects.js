import React, { useEffect,useState } from 'react';
import { collection, getDocs  } from 'firebase/firestore';
import {db} from '../config/firebase'; 
import "../styles/Project.css"


function Projects() {
 const [projectData,setProjectData] = useState([{}])




 useEffect(()=>{
  const getData = async()=>{
    try{
      
      console.log("fetching")
      const data = await getDocs(collection(db,'/projects'));
      
      const filteredData = data.docs.map((doc)=>({...doc.data(),id:doc.id}))
      
      setProjectData(filteredData)
    }catch(err){
      console.error(err);
    }
   }
   getData();
 },[])
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {projectData.map((project, index) => (
        <div
          key={project?.id}
          className= "project-item" 
        >
                <div className="project-image">
                  <img src={project.photoURL} alt={project.projectTitle} />
                </div>
                <div className="project-info">
                  <h2>{project.projectTitle}</h2>
                  <p>{project.projectDescription}</p>
                </div>
             
        </div>
      ))}

    </div>
  );
}

export default Projects;
