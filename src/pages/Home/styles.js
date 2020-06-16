import styled from 'styled-components';


export const Wrapper = styled.div`
  background-color: #2d3436;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 2em;
    color:white;
    margin-bottom: 10px;
  }
  p {
      margin-top:10px;
    color:white;
  }
  img{
      width:100%;
  }
  form{
      max-width:80%;
      display: flex;
      flex-direction: column;
      margin: 20px auto 0;
      padding: 0 20px;
  }
`;

export const Card = styled.div`
  background: #55efc4;
  width: 100%;
  margin: 20px auto 0;
  padding: 0 20px;
  border-radius: 8px;
  padding: 20px;
  margin-top: 15px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);
  h2 {
    font-size: 22px;
    color: #392D2D;
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const Templates = styled.div`
  width: 100%;
  height: 115px;
  background: #4acea9;
  border-radius: 8px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 30px;
  button {
    background: transparent;
    margin-right: 10px;
    border: 2px solid transparent;
    &.selected {
      border-color: #4395D8;
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const Form = styled.form`
  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #4acea9;
    padding: 0 15px;
    font-size: 14px;
    margin-bottom: 10px;
    background-color: #4acea9;
    color: #f1f1f1;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #2d3436;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease-in;
  font-size: 14px;
  border: 2px solid transparent;
  &:hover {
    background: #57696e;
  }
`;