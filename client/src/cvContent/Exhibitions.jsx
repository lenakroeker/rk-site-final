import React from "react";
import styled from "styled-components";

export default function Exhibitions() {
  return (
    <Wrapper>
      <Text>
        <Bold>2015</Bold>
        Solomon R Guggenheim Foundation Exhibition, Guggenheim Helsinki Design
        competition proposals exhibition, Helsinki Kunsthalle. April 25 –May 16,
        2015
      </Text>
      <Text>
        <Bold>2011</Bold>
        Ghost 13: Ideas in Things, International Architecture Conference
        exhibiter, panelist and speaker . Kingsburg, Nova Scotia
      </Text>
      <Text>
        <Bold>2010</Bold>
        International Architecture Award Winners, The ChIcago Athenaeum & The
        European Centre for Architecture, Art Design and Urban Studies November
        10, 2010 Madrid, Spain, then touring Europe
      </Text>
      <Text>
        <Bold>2010</Bold>
        Penser Tout Haut / Faire l’Architecture : exhibiter. UQUAM, Montreal 11
        February – 18 April 2010
      </Text>
      <Text>
        <Bold>2010</Bold>
        ‘Om Vi Vill” Wood 2010 exhibition at Virserum Art Museum, Virserum,
        Sweden, May 9 – Septeber 29 , 2010, then touring Europe until 2012
      </Text>
      <Text>
        <Bold>2009</Bold>A Question of Place: Chebucto. Installation exhibition
        Toronto Harbourfront Centre Gallery Exhibition September 26, 2009 –
        January 3, 2010
      </Text>
      <Text>
        <Bold>2009</Bold>
        Venice Biennale, Exhibiter, Canada Pavillion Exhibition
      </Text>
      <Text>
        <Bold>2008</Bold>
        World Festival of Architectuure Awards Finalists Exhibition Barcelona,
        Spain
      </Text>
      <Text>
        <Bold>2006</Bold>
        Living Spaces – Trianon Gallery Lethbridge Alberta
      </Text>
      <Text>
        <Bold>2005</Bold>
        44 to 66 : Regional Responses to Sustainable Architecture in Canada -
        Cambridge Ontario
      </Text>
      <Text>
        <Bold>2005</Bold>
        Living Spaces - Cambridge Ontario
      </Text>
      <Text>
        <Bold>2005</Bold>
        Living Spaces - Halifax NS
      </Text>
      <Text>
        <Bold>2004</Bold>
        Living Spaces- Toronto Harbourfront
      </Text>
      <Text>
        <Bold>2001</Bold>
        Kajaani Design Path Civic Centre Kajaani, Finland
      </Text>
      <Text>
        <Bold>2001</Bold>
        Dalhousie Art Gallery - Group Exhibition: Parliamentary Village for
        Lilongwe, Malawi
      </Text>
      <Text>
        <Bold>2000</Bold>
        Connection: Mary E. Black Gallery. Halfax, N.S. invited exhibitor
      </Text>
      <Text>
        <Bold>2000</Bold>
        One to One: Nova Scotia College of Art and Design. Halifax, N.S.
        exhibition of students' work
      </Text>
      <Text>
        <Bold>2000</Bold>
        Returning: Dalhousie School of Architecture Gallery solo exhibition,
        Canada Council for the Arts - projects
      </Text>
      <Text>
        <Bold>1999</Bold>
        Edsel and Eleanor Ford House Museum. Detroit, Michigan exhibition of
        paintings
      </Text>
      <Text>
        <Bold>1998</Bold>
        World Conference on Timber Engineering. Lausanne, Switzerland invited
        exhibitor
      </Text>
      <Text>
        <Bold>1998</Bold>
        Spaces of Childhood. Exhibition University of Michigan, Ann Arbor
        invited exhibitor
      </Text>
      <Text>
        <Bold>1997</Bold>
        Dalhousie Art Gallery Halifax, Canada invited exhibitor
      </Text>
      <Text>
        <Bold>1997</Bold>
        Industrial Evolution: Dalhousie Faculty of Architecture Gallery.
        Halifax, N.S. invited exhibitor
      </Text>
      <Text>
        <Bold>1997</Bold>
        Beaverbank. touring exhibition of student work University of Toronto
      </Text>
      <Text>
        <Bold>1996</Bold>
        The Thing in the Garden: Mary Black Gallery.Halifax, Canada. invited
        exhibitor, group exhibit
      </Text>
      <Text>
        <Bold>1996</Bold>
        Harbour Front, Toronto, Canada. invited co-presenter with Neil Forrest:
        students' work
      </Text>
      <Text>
        <Bold>1991</Bold>
        L'Art de Vivre en Ville: Montreal exhibition of competition finalists
      </Text>
      <Text>
        <Bold>1989</Bold>
        Square Gallery: Pond Square, London, U.K. solo exhibition of paintings
        and sculptures
      </Text>
      <Text>
        <Bold>1987</Bold>
        Manitoba Arts Council Exhibition: Winnipeg, Canada. invited exhibitor -
        sculpture
      </Text>
      <Text>
        <Bold>1985</Bold>
        Virtu: Toronto, Canada. Group exhibition of Canadian Furniture Design
        Competition winners: lighting category and furniture category
      </Text>
      <Text>
        <Bold>1985</Bold>
        Fleet Gallery, Winnipeg, Canada. solo exhibition of paintings
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
  font-weight: bold;
  margin-right: 0.5em;
`;
