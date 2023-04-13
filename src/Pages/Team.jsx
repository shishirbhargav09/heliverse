import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import TeamCard from '../Components/TeamCard';

const Team = () => {
    const team = useSelector(state=>state.user.team)

  return (
    <Container>
        <h2>Team Members</h2>
        <div className="team_container">
        {
            team.map((member) => {
                return <TeamCard key={member.id}
               
                id={member.id}
                name={member.name}
                avatar={member.avatar}
                gender={member.gender}
                available={member.available}
                domain={member.domain}
                email={member.email} 
                 />
            })
        }
        </div>
    </Container>
  )
}

export default Team

const Container = styled.div`

  padding: 2rem;
  display: flex;
 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  h2{
    text-align: center;
    color: #fff;
  }
 
  .team_container{
    width: 90%;
    background-color: aliceblue;
    border-radius: 8px;
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }

  
`;