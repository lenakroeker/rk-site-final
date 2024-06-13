import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethod.js";

export default function ProjectDetail() {
  const location = useLocation();
  const [project, setProject] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProjectById = async () => {
      console.log(id);
      try {
        const res = await publicRequest.get(`/projects/find/${id}`);
        setProject(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching the project:", error);
      }
    };

    getProjectById();
  }, [id]);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Wrapper>
      {project && (
        <>
          <Title>{project.title}</Title>
          <Location>{project.location}</Location>
          <Text>{project.text}</Text>
          <ImgWrapper>
            {project.images &&
              project.images.map((image, index) => {
                if (index > 0) {
                  return (
                    <Img
                      src={image}
                      key={index}
                      onClick={() => openModal(image)}
                    />
                  );
                }
              })}
          </ImgWrapper>
        </>
      )}
      {modalImage && (
        <Modal onClick={handleModalClick}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>close</CloseButton>
            <ModalImage src={modalImage} />
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 100px 12vw;
  width: 100vw;
  text-align: center;
  @media only screen and (min-width: 500px) {
    padding: 100px 0;
  }
`;

const Title = styled.h2`
  text-align: center;
`;
const Location = styled.h3`
  font-weight: bold;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
  grid-gap: 20px;
  @media only screen and (min-width: 500px) {
    margin: 50px 20px;
  }
`;

const Img = styled.img`
  max-width: 100vw;

  @media only screen and (min-width: 500px) {
    height: 300px;
    width: auto;
    object-fit: contain;
    background-color: #cfdee4;
    cursor: pointer;
  }
`;

const Text = styled.p`
  max-width: 800px;
  margin: auto;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 85vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
