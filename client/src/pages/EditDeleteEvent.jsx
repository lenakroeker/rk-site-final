import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod.js";
import { NavLink } from "react-router-dom";

export default function EditDeleteEvent() {
  const [events, setEvents] = useState([]); // Correct variable name

  useEffect(() => {
    const getEvents = async () => {
      // Corrected function name
      try {
        const res = await publicRequest.get("/events"); // Added leading slash for proper endpoint
        setEvents(res.data); // Correct variable name

        console.log(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    getEvents();
  }, []);

  const deleteEvent = async (id) => {
    const token = localStorage.getItem("accessToken");
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setEvents(events.filter((event) => event._id !== id)); // Correct variable name and ID reference
    } catch (error) {
      console.error("Error deleting the event:", error);
    }
  };

  return (
    <Wrapper>
      <NavLink to="/admin/home">&#8678; Back to Admin Home</NavLink>

      <EventGrid>
        {events &&
          events.map((item) => (
            <EventCard key={item._id}>
              <Name>{item.title}</Name>
              <Edit to={`/admin/edit-event/${item._id}`}>Edit</Edit>
              <Delete onClick={() => deleteEvent(item._id)}>Delete</Delete>
            </EventCard>
          ))}
      </EventGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px 20vw;
  padding: 30px;
`;

const EventGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const EventCard = styled.div`
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
  border: none;
  cursor: pointer;
`;