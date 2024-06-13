import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod.js";
import { NavLink } from "react-router-dom";

export default function EditDeleteProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await publicRequest.get("projects");
        setProjects(res.data.reverse());

        console.log(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    getProjects();
  }, []);

  const deleteProject = async (id) => {
    const token = localStorage.getItem("accessToken");
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      await fetch(`${API_URL}/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(projects.filter((project) => project.id !== id));
    } catch (error) {
      console.error("Error deleting the project:", error);
    }
  };

  return (
    <Wrapper>
      <NavLink to="/admin/home">&#8678; Back to Admin Home</NavLink>

      <ProjectGrid>
        {projects &&
          projects.map((item, index) => (
            <ProjectCard key={index}>
              <Name>{item.title}</Name>
              <Edit end to={`/admin/edit-project/${item._id}`}>
                Edit
              </Edit>
              <Delete onClick={() => deleteProject(item._id)}>Delete</Delete>
            </ProjectCard>
          ))}
      </ProjectGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px 20vw;
  padding: 30px;
`;

const ProjectGrid = styled.div``;

const ProjectCard = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  padding: 5px;
  border: 1px solid black;
`;

const Name = styled.div`
  width: 70%;
`;

const Edit = styled(NavLink)`
  width: 100px;
  background: #a3ffa3;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  margin: 0 10px;
`;

const Delete = styled.button`
  width: 100px;
  background: #fc9797;
`;
