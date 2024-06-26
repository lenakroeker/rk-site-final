import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeNewsCard from "../components/HomeNewsCard";
import HomeEventCard from "../components/HomeEventCard";
import styled from "styled-components";
import Main1 from "../assets/main1.jpg";
import Main2 from "../assets/main2.jpg";
import Main3 from "../assets/main3.jpg";
import Main4 from "../assets/main4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { publicRequest } from "../../requestMethod.js";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getRecentNews = async () => {
      try {
        const res = await publicRequest.get("news/recent");
        setNews(res.data);
      } catch (error) {
        console.error("Error fetching recent news:", error);
      }
    };
    getRecentNews();
  }, []);

  const fadeImages = [Main1, Main2, Main3, Main4];

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {fadeImages &&
          fadeImages.map((img, index) => (
            <Slide key={index}>
              <Img src={img} />
            </Slide>
          ))}
      </Slider>
      <Info>
        <Calendar>
          <HomeEventCard />
        </Calendar>
        <News>
          <NavItem end to="/news">
            News
          </NavItem>
          {news &&
            news.map((article, index) => (
              <HomeNewsCard data={article} key={index} />
            ))}

          <NavItem end to="/news">
            More News
          </NavItem>
        </News>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
`;
const Slide = styled.div`
  height: 80vh;
  width: 100%;
  overflow: hidden;
  @media only screen and (min-width: 500px) {
    height: 90vh;
    width: 100%;
  }
`;

const Img = styled.img`
  height: 100%;
  margin-left: -60vw;
  @media only screen and (min-width: 500px) {
    margin-left: 0;
    object-fit: cover;
    width: 100%;
    overflow-x: hidden;
  }
`;

const Info = styled.div`
  width: 100%;
  display: block;
`;

const Calendar = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  margin-top: -10px;
`;

const News = styled.div`
  background: white;
  color: black;
  width: 100%;
  padding: 20px 4vw;
`;

const NavItem = styled(NavLink)`
  color: black;
  font-size: 20px;
  width: 100%;
  text-align: center;
  padding: 15px;
  display: block;
  margin: 20px 0;
`;
