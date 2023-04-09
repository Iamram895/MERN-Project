import React from 'react'
import Client from "../component/client";
import Projects from "../component/projects";
import AddClientModal from "../component/addClientModal";
import AddProjectModal from "../component/addProjectModal";


const Home = () => {
  return (
    <>
     <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Client />
    </>
  )
}

export default Home