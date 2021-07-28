import React from "react";
import styled from 'styled-components';
import Picture from './images/image-header-desktop.jpg'

function App() {
  return (
    <MainContainer className="Bodyclass">
    <ContainerOne>
    <MainBox>
      <Title className="Title">Get <span>insights</span> that help <br/> your business grow.</Title>
        <p>
          Discover the benefits of data analytics and make <br/> better decisions regarding revenue, customer <br/>
          experience, and overall efficiency.
        </p>
        <Box>
        <Number>10k+</Number>
        <Number>314</Number>
        <Number>12M+</Number>
        <Text>companies</Text>
        <Text>templates</Text>
        <Text>queries</Text>
        </Box>
      </MainBox>
    </ContainerOne>
    <ContainerTwo>
    </ContainerTwo>
    </MainContainer>
  );
}



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  wrap: nowrap;
  min-height: 100vh; // this is the height of screen -> set so don't get a zero height and object can move
`;


const MainBox = styled.div`
  margin-top: 80px;
  margin-left: 70px;
`;

const ContainerOne = styled.div`
  background-color: hsl(244, 38%, 16%);
  height: 450px;
  width: 550px;
  border-radius: 5px 0px 0px 5px;
  p{
    color: hsla(0, 0%, 100%, 0.75);
    margin-top: 25px;
    line-height: 25px;
    font-size: 15px;
  }
`;

const Title = styled.div`
  font-size: 35px;
  color: white;
  font-weight: bold;
  span {
  color: hsl(277, 64%, 61%);
  display: inline;
  }
`;

const ContainerTwo = styled.div`
  background-image:  linear-gradient(  
    rgba(83, 14, 126, 0.57), 
    rgba(83, 14, 126, 0.57)
  ), url(${Picture});
  height: 450px;
  width: 550px;
  background-repeat: no-repeat;
  background-size: 100% 100%; // fits the entire image
  border-radius: 0px 5px 5px 0px;
`;


const Box = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: auto auto auto;
  margin-top: 60px;

`;


const Number = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: white;
`;


const Text = styled.div`
  text-transform: uppercase;
  font-size: 13px;
  color: hsla(0, 0%, 100%, 0.6);
  margin-top: 5px;
  
`;

export default App;
