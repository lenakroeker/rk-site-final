import React from "react";
import styled from "styled-components";

export default function Published() {
  return (
    <Wrapper>
      <Text>
        MacKay-Lyons, Brian, McCarter, Robert, editor. Local Architecture:
        Building Place, Craft, and Community, pp 98-101. Princeton Architectural
        Press 2015
      </Text>
      <Text>
        Van Uffelen, Chris, editor. The Book of Architecture Drawings and
        Sketches, pp 200 – 204. Braun Publishing AG , Salenstein, Switzwerland
        2014
      </Text>
      <Text>
        Kroeker, Richard. Lernen von der Architektur der Indigenen Volker
        Amerikas. DETAIL Review of Architecture. Serie 2013.5 Institut fur
        internationale Arkitektur-Dokumentation GmbH & Co. Munchen
      </Text>
      <Text>
        Kroeker , Richard & Singh, V. "Culture of Sacred Sites" in Faith and
        Form: The Interfaith Journal on Religion, Art and Architecture, June
        2008
      </Text>
      <Text>
        Kroeker, Richard & Singh, V. “ Culture, Place, and Studio” in Design
        Studio Pedagogy: Horizons for the Future. Editors: Salama, Ashraf &
        Wilkinson, Nicholas. The Urban International Press, Gateshead, United
        Kingdom. 2007
      </Text>
      <Text>
        Kroeker, Richard with Cavanagh, T. "Sustainability and the Case for
        Wood" in Sustainable Architectures: Critical Explorations of Green
        Building Practice in Europe and North America . editor Dr. Steven A.
        Moore. Routledge Press. London. 2005
      </Text>
      <Text>
        Kroeker, Richard. "Space and Identity - Architecture as the Focus of
        Social Value Systems." in UIA Berlin 2002 Resource Architecture: Main
        Congress Report and Outlook. Birkhauser. Basil, Boston, Berlin, 2002
      </Text>
      <Text>
        Kroeker, Richard. " Development of New Timber Structures Based on
        Indigenous North American Culture of Wood Use." In Proceedings of the
        Lausanne Conference on Timber Engineering 1998: Swiss Federal Institute
        of Technology, Lausanne, 1998.
      </Text>
      <Text>
        Kroeker, Richard. Long Cove Interview with Jennifer Corson original
        television interview 1997 Life Network WTN Global Network Six Canada
        -wide Broadcasts:1997, 98, 99, 2000, 2001, 2002
      </Text>
      <Text>
        Kroeker, Richard, Beaverbank Interview with Jennifer Corson original
        television interview 1997 Life Network WTN Global Network Six
        Canada-wide Broadcasts: 1997, 1998, 1999, 2000, 2001, 2002
      </Text>
      <Text>
        Kroeker, Richard,Eskasoni Project Interview with Peter Henry original
        television Interview 1996 Life Network WTN Global Network Six
        Canada-wide Broadcasts: 1996, 97, 98, 99, 2000, 2001, 2002
      </Text>
      <Text>
        Radio CKEC New Glasgow / Pictou Reporter Robert Griffin interview on
        Exhibition of student projects Nova Scotia Black Cultural Centre July 6,
        2002
      </Text>
      <Text>
        Kroeker, Richard. essay entitled "Green Chicken Design" in Tumaco. TUNS
        Press, Halifax 1995
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
