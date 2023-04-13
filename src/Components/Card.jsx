import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTeam } from "../Store/userSlice";
const Card = (props) => {
  const { name, avatar, gender, available, domain, email, id } = props;
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="user_avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="user_details">
        <h3>{name}</h3>
        <p>{gender}</p>
        <p>{domain}</p>
        <p>{email}</p>
        <p>{available?`Available` : `Not Available`}</p>
        <br />
        <Button variant="contained" onClick={
         (e) => {
          dispatch(addTeam({name, gender, domain, email, available, id, avatar}))
         }
        }>Add to Team</Button>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 20rem;
  height: 12rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  box-shadow: 3px 4px 17px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 4px 17px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 4px 17px -1px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  @media screen and (max-width: 450px){
    height: auto;
    flex-direction: column;
  }
  .user_avatar {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

    

    &:hover {
      transform: translateY(-10px);
    }
  }
  .user_details {
    height: 100%;
    width: 50%;
    padding: 0.3rem;
    /* background-color: gray; */
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
      word-wrap: break-word;
    }
    h3{
      margin-bottom: 1rem;
    }
  }
`;
