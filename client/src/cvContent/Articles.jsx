import React from "react";
import styled from "styled-components";

export default function Articles() {
  return (
    <Wrapper>
      <Text>
        Lam, Elsa, Livsey, Graham, Canadian Modern Architecture 1967 to the
        Present. New York, New York, Princeton Architectural Press 2019
        (Articles by Odile Henault and Brian Carter)
      </Text>
      <Text>
        Acumen. The Magazine of Lehigh University College of Arts and Sciences.
        Spring 2016 Peggie’s Bell p. 2
      </Text>
      <Text>
        New York Times. In Winnipeg, a Skating Rink That Doubles as a Sculpture
        Park. December 21, 2014 edition, page TR5
      </Text>
      <Text>
        McMinn, John editor, Liminal States: Landscapes of Scarcity and Excess.
        Toronto, Riverside Press 2011 – written chapter with images of work.
        Jencks, Charles, Heathcote, Edwin. p. 77.The Architecture of Hope.
        London: Frances Lincoln Limited Publishers 2010
      </Text>
      <Text>
        Davidi, Yaniv, editor. ArcHeb: Long Cove Residence, Ambient Material.
        online website for architecture news in Israel
      </Text>
      <Text>
        Gullbring, Leo. Tra, issue no 4 2009, p. 24. Tra-information: Lund,
        Sweden
      </Text>
      <Text>
        Teleman, Henrik, editor. Om Vi Vill (tr.: If We Want To) . Virserum,
        Sweden, Virserums Konsthall 2010
      </Text>
      <Text>
        Chodikoff, Ian. Warming Up To Winter. article in Canadian Architect
        vol55, n.03 March 2010
      </Text>
      <Text>
        Macaulay, Patrick. “Harbourfront Architecture” article on p.26 in
        Architecture and Ideas vol ix 2009
      </Text>
      <Text>
        Karacizmeli, Enise B. “Gelenekten Gelen”cover story and editorial in XXI
        Magazine pp 40- 43. Yimibir,Istanbul. 2009
      </Text>
      <Text>
        Nickl, Hans & Nickl-Weller, Christine. Masterpieces: Hospital
        Architecture and Design. Berlin Braun Publishing AG. 2009
      </Text>
      <Text>
        Montaner, Berto Gonzalez, Las Lecciones de la Tradicion. cover story &
        editorial in ARQ, Clarin. Buenos Aires, Argentina. July 14, 2009
      </Text>
      <Text>
        Bonnemaison, Sarah & Eisenbach, Ronit. Installations by Architects:
        experiments in building and design. New York: Princeton Architectural
        Press 2009
      </Text>
      <Text>
        Macy, Christine. Free Lab. pp 30-39, pp 48,49 pp 54,55 pp 66-67 TUNS
        Press. 2008
      </Text>
      <Text>
        Nango, Joar, editor. Dwellings in a Saamii Cultural Context, AAR 4510
        Housing design. Faculty of Architecture and Fine Arts NTTU. Trondheim
        2008
      </Text>
      <Text>
        Tayona, Nova. Healthy Landing in Azure Magazine vol. 24 no. 187 pp
        90-94. Markham Ontario. October 2008
      </Text>
      <Text>
        Molesky, Susan. Richard Kroeker – Architect. Architecture and Ideas vol
        vii. Kelly Crossman publisher. 2007
      </Text>
      <Text>
        Cruikshank, Tom. A Natural Approach. feature article in Harrowsmith
        Country Life volxxx number 187. Malcolm Publishing Inc. April 2006
      </Text>
      <Text>
        Carter, B. and LeCuyer, A. Off the Radar p.7 Academy Editions Vol 73
        January - February 2003
      </Text>
      <Text>
        Editorial, Intelligente Architektur. Page 10, review of presentation by
        Richard Kroeker at the Twenty Third International Congress on World
        Architecture November - December 2002
      </Text>
      <Text>
        Yeadon, Peter. "Bau Wow: Shall We Bark or Bite" Report on the Twenty
        Third International Congress on Architecture, Berlin 2002." Canadian
        Architect, October 2002
      </Text>
      <Text>
        Pictou Advocate Interview Reporter Janna MacGregor on Exhibtion of
        student projects Nova Scotia Black Cultural Centre, New Glasgow July 6,
        2002
      </Text>
      <Text>
        Halifax Daily News July 10, 2002 Front page Feature on "Eye to Eye"
        Installation, Cornwallis Square
      </Text>
      <Text>
        Truro Daily News July 10, 2002 "Eye to Eye" Installation, Cornwallis
        Square
      </Text>
      <Text>The Coast Summer Issue "Eye to Eye" Installation July 2002</Text>
      <Text>
        Goodenough, Elizabeth. "Secret Spaces of Childhood" MIchigan Quarterly
        Review volume 39 Spring 2000, University of Michigan
      </Text>
      <Text>
        Architectural Review . "Hummingbird" consultant on project by Filum,
        April 2001
      </Text>
      <Text>
        Blakeney, Peter, editor. "The Shape of Information: Richard Kroeker." in
        No Frontiers: The Place of Co-incidence, Ginko Press, Vienna 1999
      </Text>
      <Text>
        McMinn, John. "Building as Teaching" Canadian Architect, March 1999
      </Text>
      <Text>
        Macy, Christine. "Appropriate Technology: The Work of Halifax Based
        Architect Richard Kroeker ." Canadian Architect, February 1998
      </Text>
      <Text>
        Chui, Frank. Beaverbank - Between Material and Process. TUNS Press,
        Halifax 1995 The documentation of an experimental structure built by Art
        and Architecture students under the direction of Neil Forrest and
        Richard Kroeker
      </Text>
      <Text>MacEachern, Grant (editor). Tumaco. TUNS Press, Halifax. 1995</Text>
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
const Bold = styled.p`
  margin-right: 0.5em;
  font-weight: bold;
`;
