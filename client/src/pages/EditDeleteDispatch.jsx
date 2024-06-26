import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod.js";
import { NavLink } from "react-router-dom";

export default function EditDeleteDispatch() {
  const [essays, setEssays] = useState([]);

  useEffect(() => {
    const getEssays = async () => {
      try {
        const res = await publicRequest.get("essays");
        setEssays(res.data.reverse());
      } catch (error) {
        console.error("Error fetching essays:", error);
      }
    };
    getEssays();
  }, []);

  const deleteEssay = async (id) => {
    const token = localStorage.getItem("accessToken");
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      await fetch(`${API_URL}/essays/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setEssays(essays.filter((essay) => essay.id !== id));
    } catch (error) {
      console.error("Error deleting the Essay:", error);
    }
  };

  return (
    <Wrapper>
      <NavLink to="/admin/home">&#8678; Back to Admin Home</NavLink>

      <EssayGrid>
        {essays &&
          essays.map((item, index) => (
            <EssayCard key={index}>
              <Name>{item.title}</Name>
              <Edit end to={`/admin/edit-dispatch/${item._id}`}>
                Edit
              </Edit>
              <Delete onClick={() => deleteEssay(item._id)}>Delete</Delete>
            </EssayCard>
          ))}
      </EssayGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px 20vw;
  padding: 30px;
`;

const EssayGrid = styled.div``;

const EssayCard = styled.div`
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
