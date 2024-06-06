import React from "react";
import styled from "styled-components";

export default function Awards() {
  return (
    <Wrapper>
      <Text>
        <Bold>2017</Bold>
        The American Architecture Bronze Medal Prize for landscape installations
        & structures, Peggie’s Bell
      </Text>
      <Text>
        <Bold>2017</Bold>
        The American Architecture Bronze Medal for small projects, Peggie’s Bell
      </Text>
      <Text>
        <Bold>2016</Bold>
        Nova Scotia Association of Architects Keystone Award for contributions
        to the profession
      </Text>
      <Text>
        <Bold>2016</Bold>
        World Architecture News Small Spaces Award shortlist, Botswana Hills of
        Music
      </Text>
      <Text>
        <Bold>2015</Bold>
        A-Z Awards: Public Good Award finalist, Botswana Hills of Music
      </Text>
      <Text>
        <Bold>2010</Bold>
        International Building of the Year Award for 2010, Chicago Athenaeum
        Museum of Architecture & The European Centre for Architecture, Art
        Design and Urban Studies, Pictou Landing
      </Text>
      <Text>
        <Bold>2009</Bold>
        Finalist, World Architecture News Awards, Health Care Category, Pictou
        Landing
      </Text>
      <Text>
        <Bold>2008</Bold>
        Erich Schelling Foundation Medal in Architecture
      </Text>
      <Text>
        <Bold>2008</Bold>
        Finalist, World Festival of Architecture Awards, Health Care Category,
        Pictou Landing
      </Text>
      <Text>
        <Bold>2008</Bold>
        Barcelona World Festival of Architecture International Building Awards
        finalist, Pictou Landing
      </Text>
      <Text>
        <Bold>2007</Bold>
        Dalhousie University Senate Environment Award for design and curriculum
        development
      </Text>
      <Text>
        <Bold>2006</Bold>
        Special Projects Award ACSA (Association of Collegiate Schools of
        Architecture) for collaborative project: Theatre Petit Circle, Cheticamp
        with Roger Mullin, Ted Cavanagh, Alden Neufeld
      </Text>
      <Text>
        <Bold>2006</Bold>
        Nova Scotia Lieutenant Governor’s Masterwork Award for Theatre Petit
        Circle designed and built with students at Dalhousie University Faculty
        of Architecture in collaboration with Ted Cavanagh and Roger Mullin
      </Text>
      <Text>
        <Bold>2004-2005</Bold>
        Special Projects Award for the Northeast Region of the ACSA (Association
        of Collegiate Schools of Architecture) for collaborative project "
        Oheyawahi - Native America" with Virajita Singh, University of
        Minnesota, Summer 2004
      </Text>
      <Text>
        <Bold>2005</Bold>
        National Post – Design Exchange Gold Medal Award: Best new Building in
        Canada 2005: Commercial and Public Buildings Category for Le Theatre
        Petit Cercle in Cheticamp, Cape Breton Island (with Ted Cavanagh, Roger
        Mullin, Alden Neufeld) – built project
      </Text>
      <Text>
        <Bold>2004</Bold>
        International Competition winner, first place: Museum and Research
        Centre of the Marshes ( in collaboration with Sahar Rassam, Riyad
        Tappuni, Sal Tappuni,Trevor Butler)
      </Text>
      <Text>
        <Bold>1993</Bold>
        Montreal Low-cost Housing Competition: L'Art de Vivre en Ville: prize
        winner
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 30px 0;
  padding: 5px 20px;
  background: #f5fbff84;
  @media only screen and (min-width: 500px) {
    margin: 50px 0;
    padding: 30px;
    min-width: 400px;
  }
`;
const Text = styled.p``;
const Bold = styled.span`
  margin-right: 0.5em;
  font-weight: bold;
`;
