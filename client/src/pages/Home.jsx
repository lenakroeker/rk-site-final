import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeNewsCard from "../components/HomeNewsCard";
import HomeEventCard from "../components/HomeEventCard";
import styled from "styled-components";
import Kinnistin from "../assets/kinnistin.jpg";
import Pictou from "../assets/pictou4.jpg";
import Bell from "../assets/bell.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { publicRequest } from "../../requestMethod.js";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getRecentNews = async () => {
      try {
        const res = await publicRequest.get("news/recent"); // Call the endpoint to get recent news
        setNews(res.data); // Set the retrieved data to state
      } catch (error) {
        console.error("Error fetching recent news:", error);
      }
    };
    getRecentNews(); // Call the function to fetch recent news when the component mounts
  }, []);

  const fadeImages = [Kinnistin, Pictou, Bell];

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
        {fadeImages.map((img, index) => (
          <Slide key={index}>
            <Img src={img} />
          </Slide>
        ))}
      </Slider>
      <Info>
        <News>
          <NavItem end to="/news">
            News
          </NavItem>
          {news.map((article, index) => (
            <HomeNewsCard data={article} key={index} />
          ))}

          <NavItem end to="/news">
            More News
          </NavItem>
        </News>
        <Calendar>
          <HomeEventCard />
        </Calendar>
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
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Info = styled.div`
  width: 100%;
  display: block;
  @media only screen and (min-width: 500px) {
    display: flex;
  }
`;

const Calendar = styled.div`
  width: 40vw;
`;

const News = styled.div`
  background: black;
  color: white;
  width: 100%;
  padding: 20px 4vw;
  @media only screen and (min-width: 500px) {
    width: 60vw;
    padding: 40px;
  }
`;

const NavItem = styled(NavLink)`
  color: #fff;
  padding: 15px;
  display: block;
`;
