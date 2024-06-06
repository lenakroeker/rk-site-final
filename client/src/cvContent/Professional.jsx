import React from "react";
import styled from "styled-components";

export default function Professional() {
  return (
    <Wrapper>
      <Text>
        <Bold>2017</Bold>
        Botswana housing proposal
      </Text>
      <Text>
        <Bold>2016</Bold>
        Forest Green Rovers football eco-stadium competition, Stroud, UK
        finalist
      </Text>
      <Text>
        <Bold>2015</Bold>
        Peggie’s Bell acoustic space. Bethelehem Pennsylvania
      </Text>
      <Text>
        <Bold>2015</Bold>
        Dalieh – Beirut waterfront competition
      </Text>
      <Text>
        <Bold>2015</Bold>
        Chicago kiosk competition design
      </Text>
      <Text>
        <Bold>2014</Bold>
        Helsinki Guggenheim Museum competition entry
      </Text>
      <Text>
        <Bold>2014</Bold>
        Hills of Music Performance Theatre – Rasesa, Botswana
      </Text>
      <Text>
        <Bold>2014</Bold>
        Winnipeg Forks – solar warmer & mobile warming hut
      </Text>
      <Text>
        <Bold>2013</Bold>
        Acadia First Nation community centre – Gold River, Nova Scotia
      </Text>
      <Text>
        <Bold>2013</Bold>
        Marina, boat sales and maintenance – Lake of the Woods, Ontario
      </Text>
      <Text>
        <Bold>2013</Bold>
        Sisson residence extension (comleted 2014): Elm Creek, Manitoba
      </Text>
      <Text>
        <Bold>2012</Bold>
        Cann - MacWilliams residence – Elm Creek, Manitoba
      </Text>
      <Text>
        <Bold>2011</Bold>
        Bakgatla Bolokang Matshelo hospice paviiion: Mochudi, Botswana
      </Text>
      <Text>
        <Bold>2010</Bold>
        Pow wow Structure, Kinistin Saulteaux Nation with Brad Pickard,
        Dalhousie Cities & Environment Unit
      </Text>
      <Text>
        <Bold>2010</Bold>
        Winnipeg Forks project – warming huts
      </Text>
      <Text>
        <Bold>2009</Bold>
        Makkah: Passive cooling strategies, Central Mosque, in collaboration
        with Trevor Butler, Archineers
      </Text>
      <Text>
        <Bold>2008</Bold>
        Long Cove Studio
      </Text>
      <Text>
        <Bold>2007</Bold>
        Gurukula, Vrindavan, India. School design consultant
      </Text>
      <Text>
        <Bold>2006</Bold>
        Halifax Islamic Academy Mosque and gymnasium
      </Text>
      <Text>
        <Bold>2005</Bold>
        Pictou Landing First Nation Health Centre
      </Text>
      <Text>
        <Bold>2005</Bold>
        Theatre du Petit Cercle, Cheticamp, Cape Breton Island in collaboration
        with Ted Cavanagh, Roger Mullin & students of Dalhousie University
      </Text>
      <Text>
        <Bold>2005</Bold>
        Centre for the Restoration of Marsh Arab Culture; International
        competition first prize winner
      </Text>
      <Text>
        <Bold>2004</Bold>
        Nova Scotia College of Art and Design, Dartmouth Campus Design Proposal
      </Text>
      <Text>
        <Bold>2002</Bold>4 Unit Apartment - Eskasoni
      </Text>
      <Text>
        <Bold>2002</Bold>
        Marshall Studio : Eskasoni (Dalhousie Collaboration)
      </Text>
      <Text>
        <Bold>2002</Bold>
        Eco lodges, Northern Quebec (collaboration with L'OEUF)
      </Text>
      <Text>
        <Bold>2002</Bold>
        Flight Simulator upgrade CAE Industries (collaboration with L'OEUF and
        FILUM)
      </Text>
      <Text>
        <Bold>2001</Bold>
        Regional Development Design Strategies workshops, Kajaani Finland
      </Text>
      <Text>
        <Bold>2001</Bold>
        Design Path Civic Centre, Kajaani Finland
      </Text>
      <Text>
        <Bold>2001</Bold>
        AGNS Sculpture : "Hummingbird"- design & structural consultant
      </Text>
      <Text>
        <Bold>2000</Bold>
        Lilongwe Parliamentary Village, Malawi
      </Text>
      <Text>
        <Bold>2000</Bold>
        Mi'kmaq Assembly House and Museum proposal
      </Text>
      <Text>
        <Bold>1999</Bold>
        Goat Island Ecological Centre
      </Text>
      <Text>
        <Bold>1997</Bold>
        Long Cove Residence
      </Text>
      <Text>
        <Bold>1996</Bold>
        Chebogue Point Artesanal Cheese Factory
      </Text>
      <Text>
        <Bold>1995</Bold>
        Montreal "Bridging" Competition
      </Text>
      <Text>
        <Bold>1995</Bold>
        Toronto Waterfront Competition
      </Text>
      <Text>
        <Bold>1994</Bold>
        Beaverbank Project (Dalhousie , NSCAD Collaboration)
      </Text>
      <Text>
        <Bold>1994</Bold>
        Eskasoni Early Childhood Education Centre
      </Text>
      <Text>
        <Bold>1993</Bold>
        Montreal Low-cost Housing Competition : L’Art de Vivre en Ville: Second
        prize winner
      </Text>
      <Text>
        <Bold>1989 - 1890</Bold>
        Ian Ritchie Architects, London, U.K. - principal designer Natural
        History Museum Ecology Gallery - designer: Addition to Gallery Reina
        Sofia, Madrid
      </Text>
      <Text>
        <Bold>1988</Bold>
        Stirling Wilford Associates, London, U.K. - design team leader: West
        Ferry Circus Competition
      </Text>
      <Text>
        <Bold>1987 - 1989</Bold>
        YRM Architects, London, U.K. - design team: Thames Quay - design team:
        British Aerospace Headquarters Competition- winning entry - design team
        : Strand Offices, London, U.K.
      </Text>
      <Text>
        <Bold>1986 - 1987</Bold>
        Napinka Inc. , Winnipeg (Principal) - Lighting and Furniture Design :
        winner Virtu Design Competition 1986 - design: Scotswood Links Golf
        Course and Clubhouse 1986 - Lindsay Residence, Winnipeg, Canada
      </Text>
      <Text>
        <Bold>1986 - 1987</Bold>
        Design instructor - part time, Faculty of Architecture University of
        Manitoba
      </Text>
      <Text>
        <Bold>1985 - 1986</Bold>
        Smith Carter Partners - Architects, Winnipeg, Canada - principal
        designer, Bairdmore Elementary School, Winnipeg published in Canadian
        Architect
      </Text>
      <Text>
        <Bold>1984 - 1985</Bold>
        Gaboury Associates Architects, Winnipeg, Canada
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
