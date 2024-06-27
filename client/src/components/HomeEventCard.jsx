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
    <>
      {events && (
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
                {event.link ? (
                  <EventLink href={event.link} target="_blank">
                    More Info
                  </EventLink>
                ) : (
                  <NoEventLink></NoEventLink>
                )}
              </Event>
            ))}
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding: 10px 10vw;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
  @media only screen and (min-width: 500px) {
    margin: 10px 0;
  }
`;

const Event = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const EventTitle = styled.div`
  font-weight: bold;
`;
const EventLocation = styled.div``;
const EventDate = styled.div``;
const EventLink = styled.a`
  padding: 3px 10px;
  background: white;
  border-radius: 5px;
  border: 1px solid black;
  text-align: center;
`;

const NoEventLink = styled.a`
  background: transparent;
  width: 200px;
`;
