import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod.js";
import styled from "styled-components";

export default function HomeEventCard() {
  const [events, setEvents] = useState([]);

  const formatDate = (isoString) => {
    return isoString.slice(0, 10);
  };

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await publicRequest.get("/events");
        setEvents(res.data);
      } catch {}
    };
    getEvents();
  }, []);

  return (
    <Wrapper>
      <Title>Upcoming Events</Title>

      {events &&
        events
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
      {/* <Title>Passed Events</Title>
      {events &&
        events
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
          ))} */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding: 10px 2vw;
  /* 
  @media only screen and (min-width: 500px) {
    width: 100%;
    padding: 60px 5vw;
  } */
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
  @media only screen and (min-width: 500px) {
    margin: 1px 0;
  }
`;

const Event = styled.div`
  width: 100%;
  height: auto;
  padding: 3px 3px 5px 20px;
  margin: 10px 0;
  border-left: 1px solid black;
  position: relative;
  display: flex;
`;

const EventTitle = styled.div`
  width: 20%;
  font-size: 18px;
  font-weight: bold;
`;
const EventLocation = styled.div`
  width: 20%;
`;
const EventDate = styled.div`
  width: 20%;
`;
const EventLink = styled.a`
  width: 20%;

  padding: 3px;
  background: white;
  border-radius: 5px;
  border: 1px solid black;
  margin: 0px 20% 0px 0px;
  text-align: center;
`;
