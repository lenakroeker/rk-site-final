import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";
import styled from "styled-components";
import DispatchCard from "../components/DispatchCard.jsx";
import { publicRequest } from "../../requestMethod.js";

export default function Essays() {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const n = 5;
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

  useEffect(() => {
    setFilterData(
      essays.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [essays, page]);

  return (
    <Wrapper>
      <Title>Dispatches</Title>
      <Feed>
        {filterData &&
          filterData.map((item, index) => (
            <DispatchCard essay={item} key={index} />
          ))}
      </Feed>
      <ReactPaginate
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        activeClassName={"active"}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={Math.ceil(essays.length / n)}
        breakLabel="..."
        previousLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "30px" }}>
            <IoIosArrowBack onClick={window.scrollTo(0, 0)} />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "30px" }}>
            <IoIosArrowForward onClick={window.scrollTo(0, 0)} />
          </IconContext.Provider>
        }
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 100px 12vw;
  width: 98vw;
  @media only screen and (min-width: 500px) {
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const Feed = styled.div`
  width: 100%;
`;
