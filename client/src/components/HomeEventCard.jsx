import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod.js";
import styled from "styled-components";

export default function HomeEventCard() {
  const [events, setEvents] = useState([]);

  const formatDate = (isoString) => {
    return isoString.slice(0, 10);
  };

  useEffect(() => {
    console.log("getting events");
    const getEvents = async () => {
      try {
        const res = await publicRequest.get("events");
        setEvents(res.data);
      } catch {}
    };
    getEvents();
  }, []);

  return (
    <Wrapper>
      <Title>Upcoming Events</Title>
      {events
        .filter((event) => new Date(event.date) > new Date())
        .map((event, index) => (
          <Event key={index}>
            <EventTitle>{event.title}</EventTitle>
            <EventLocation>
              <b>Location:</b> {event.location}
            </EventLocation>
            <EventDate>
              <b>Date:</b> {formatDate(event.date)}
            </EventDate>
            <EventLink href={event.link} target="_blank">
              More Info
            </EventLink>
          </Event>
        ))}
      <Title>Passed Events</Title>
      {events
        .filter((event) => new Date(event.date) < new Date())
        .map((event, index) => (
          <Event key={index}>
            <EventTitle>{event.title}</EventTitle>
            <EventLocation>
              <b>Location: </b>
              {event.location}
            </EventLocation>
            <EventDate>
              <b>Date:</b> {formatDate(event.date)}
            </EventDate>
          </Event>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 60px 5vw;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  margin: 20px 0;
  font-weight: bold;
  text-decoration: underline;
`;

const Event = styled.div`
  width: 100%;
  height: auto;
  padding-left: 20px;
  margin: 50px 0;
  border-left: 1px solid black;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const EventTitle = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
`;
const EventLocation = styled.div`
  width: 45%;
`;
const EventDate = styled.div`
  width: 50%;
`;
const EventLink = styled.a`
  padding: 3px;
  background: white;
  border-radius: 5px;
  border: 1px solid black;
  width: 30%;
  margin: 20px 70% 0px 0px;
  text-align: center;
`;
