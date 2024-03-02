"use client"
import React, {useState } from 'react'
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


const projectsData = [
    {
      id: 1,
      title: "Finance Trivia",
      description: "Project 1 description",
      image: "/images/about-image.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/mksahota10/Project-1---Trivia",
      previewUrl: "https://mksahota10.github.io/Project-1---Trivia/",
    },
    {
      id: 2,
      title: "Drink Up",
      description: "Curate your own drink",
      image: "/images/about-image.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/mksahota10/project2-DrinkUp",
      previewUrl: "https://drinkitup.herokuapp.com/",
    },
    {
      id: 3,
      title: "Fomo Nomo",
      description: "Find Events happeing in your area using Ticketmaster API",
      image: "/images/about-image.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/orgs/SFX818/teams/brogrammers/repositories",
      previewUrl: "https://fomo-nomo-frontend.surge.sh",
    },
    {
      id: 4,
      title: "E-Commerce",
      description: "Candel Shop using Stripe Payments",
      image: "/images/about-image.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/mksahota10/Store/tree/main/ecommerce",
      previewUrl: "/",
    },
    // {
    //   id: 5,
    //   title: "React Firebase Template",
    //   description: "Authentication and CRUD operations",
    //   image: "/images/about-image.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
    // {
    //   id: 6,
    //   title: "Full-stack Roadmap",
    //   description: "Project 5 description",
    //   image: "/images/about-image.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
  ];

const ProjectSection = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag); 
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    )



  return (
    <>
     <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 text-white py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag ==="All"}/>
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag ==="Web"}/>
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag ==="Mobile"}/>
      </div>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
    {filteredProjects.map((project) => (
         <ProjectCard 
         key={project.id}
          title={project.title} 
          description={project.drescription} 
          imgURL={project.image} 
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          />
          ))}
          </div>

    </>
  )
}

export default ProjectSection