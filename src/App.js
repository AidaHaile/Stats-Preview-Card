import React from "react";
import styled from 'styled-components';
import Picture from './images/image-header-desktop.jpg'

function App() {
  return (
    <MainContainer className="Bodyclass">
      <LeftBox>
        <Title>Get <span>insights</span> that help your business grow.</Title>
        <Section>
          Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
        </Section>
        <NumSection>
        <NumberOne>10k+</NumberOne>
        <NumberTwo>314</NumberTwo>
        <NumberThree>12M+</NumberThree>
        </NumSection>
        <TextSection>
        <TextOne>Companies</TextOne>
        <TextTwo>Templates</TextTwo>
        <TextThree>Queries</TextThree>
        </TextSection>
      </LeftBox>
      <RightBox></RightBox>
    </MainContainer>
  );
}



const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  "left right";
  padding-left: 19vw;
  padding-right: 19vw;
  padding-top: 14vw;
  padding-bottom: 18vw;
  text-align: left;


  @media only screen and (max-width: 550px){
    grid-template-columns: 1fr;
    grid-template-rows: 240px 1fr;
    grid-template-areas:
    "right"
    "left";
    text-align: center;
    padding: 0;
  }
`;


const LeftBox = styled.div`
  background-color: hsl(244, 38%, 16%);
  max-height: 550px;
  border-radius: 5px 0px 0px 5px;
  grid-area: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 0.25fr 0.2fr;
  padding-top: 5rem;
  padding-left: 5rem;
  padding-bottom: 3rem;
  padding-right: 9rem;
  grid-template-areas: 
  "title"
  "section"
  "numsection"
  "textsection";


  @media only screen and (max-width: 550px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr repeat(6,35px);
    grid-template-areas:
    "title"
    "section"
    "num1"
    "text1"
    "num2"
    "text2"
    "num3"
    "text3";
    padding: 20px 20px 50px 20px;
    border-radius: 0px 0px 5px 5px;
  }

`;


const Title = styled.div`
  grid-area: title;
  font-size: 35px;
  font-weight: bold;
  color: white;

  span{
    color: hsl(277, 64%, 61%);
  }

  @media only screen and (max-width: 550px){
    font-size: 29px;
    padding-bottom: 15px;
  }

`;

const Section = styled.div`
  grid-area: section;
  line-height: 25px;
  //background-color: purple;
  color: hsla(0, 0%, 100%, 0.75);
  font-size: 15px;
  padding-bottom: 50px;
`;


const NumSection = styled.div`
  grid-area: numsection;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
  "num1 num2 num3";
  font-size: 23px;
  color: white;
  font-weight: bold;

  @media only screen and (max-width: 550px){
    display: contents
  }

`;

const NumberOne = styled.div`
  grid-area: num1;
  //background-color: orange;

`;


const NumberTwo = styled.div`
  grid-area: num2;
  //background-color: pink;
`;
const NumberThree = styled.div`
  grid-area: num3;
  //background-color: yellow;
`;

const TextSection = styled.div`
  grid-area: textsection;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
  "text1 text2 text3";
  font-size: 15px;
  color: hsla(0, 0%, 100%, 0.6);


  @media only screen and (max-width: 550px){
    display: contents;
  }

`;

const TextOne = styled.div`
  grid-area: text1;
  //background-color: brown;
  
  @media only screen and (max-width: 550px){
    padding-bottom: 20px;
  }

`;

const TextTwo = styled.div`
  grid-area: text2;
  //background-color: green;

  @media only screen and (max-width: 550px){
    padding-bottom: 20px;
  }
`;

const TextThree = styled.div`
  grid-area: text3;
  //background-color: grey;

  @media only screen and (max-width: 550px){
    padding-bottom: 20px;
  }
`;

const RightBox = styled.div`
  border-radius: 0px 5px 5px 0px;
  max-height: 550px;
  grid-area: right;
  //background-color: brown;
  background-image:  linear-gradient(  
    rgba(83, 14, 126, 0.57), 
    rgba(83, 14, 126, 0.57)
  ), url(${Picture});
  background-repeat: no-repeat;
  background-size: 100% 100%; // fits the entire image

  @media only screen and (max-width: 550px){
    background-color: orange;
    border-radius: 5px 5px 0px 0px;
  }
`;

export default App;
