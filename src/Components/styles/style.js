import styled from "styled-components";

export const Headers = styled.div`
  margin: 10px 220px 1px;
  text-align: center;
  display: flex;
  flex-direction: row;
  padding: 0px;
  h1 {
    color: #000;
    font-family: "McLaren", cursive;
    font-weight: 200;
  }
  p {
    position: relative;
    top: 25px;
    left: 360px;
    margin: 10px;
    color: black;
    .btn {
        -webkit-border-radius: 28;
        -moz-border-radius: 28;
        border-radius: 28px;
        font-family: Arial;
        color: #ffffff;
        font-size: 20px;
        background: #df4759;
        padding: 10px 20px 10px 20px;
        border: solid #df4759 2px;
        text-decoration: none;
        margin-top: -13px;
      }
      
      .btn:hover {
        background: #df4759;
        text-decoration: none;
      }
  }
`;
