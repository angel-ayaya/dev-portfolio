import styled from "styled-components";
import "./styles.css";
import Background from "../../utils/background.mp4";
import Akali from "../../utils/akali.jpg";

const Substract = () => {
  return (
    <div className="substract-container">
      <h1>Substract</h1>
      <p>Subtraction effect with css</p>
      <Card>
        <VideoBx>
          <Shadow className="shadow1 shadow-negative" />
          <Shadow className="shadow2 shadow-negative" />
          <Shadow className="shadow3 shadow-positive" />
          <Shadow className="shadow4 shadow-positive" />
          <video autoPlay loop muted>
            <source src={Background} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoBx>
        <Content>
          <span className="first">
            <p> Welcome to my porfolio </p>
          </span>
          <span className="second">
            <img src={Akali} alt="neeko" />
          </span>
          {/* <span className="third"></span> */}
        </Content>
      </Card>
    </div>
  );
};

const Card = styled.div`
  position: relative;
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const VideoBx = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 0;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Shadow = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 50%;

  &.shadow1 {
    bottom: 0;
    left: 40%;
  }

  &.shadow2 {
    bottom: 70px;
    left: 0;
  }

  &.shadow3 {
    bottom: 70px;
    right: 0;
  }

  &.shadow4 {
    bottom: 0;
    right: 20%;
  }

  &.shadow-negative {
    box-shadow: -10px 10px 0 0 black;
  }

  &.shadow-positive {
    box-shadow: 10px 10px 0 0 black;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background-color: black;
  border-radius: 15px;
  border-top-left-radius: 0;

  p {
    position: absolute;
    top: -10px;
    left: 5px;
  }

  .first {
    position: absolute;
    left: -10px;
    top: -80px;
    height: 80px;
    width: 138px;
    background-color: black;
    border: 10px solid black;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  .second {
    position: absolute;
    top: -80px;
    height: 160px;
    width: 40%;
    left: 80%;
    background-color: cadetblue;
    border: 10px solid black;

    border-radius: 25px;
  }
  .second img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  

  /* .second::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -25px;
    width: 25px;
    height: 25px;
    background-color: red;
    border-radius: 50%;
    box-shadow: -10px 10px 0 cadetblue;
  } */
`;

export default Substract;
