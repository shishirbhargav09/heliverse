import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Card from "../Components/Card";
import styled from "styled-components";
import {  useSelector } from "react-redux";

import Filter from "../Components/Filter";

const Home = () => {

  const data = useSelector((state) => state.user.users);
  
  
  

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / 20);
  const lastUserIndex = currentPage * 20 + 1;
  const firstUserIndex = lastUserIndex - 20;

  let usersdata = data.slice(firstUserIndex, lastUserIndex);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  //Searching
  const [searchUser, setSearchUser] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState([]);

  



  return (
    <Container>
      
<Filter/>
      <div className="right">
        {" "}
        <div className="search">
          <input
            type="text"
            placeholder="Search Here"
            onChange={(e) => {
              setSearchUser(e.target.value);
            }}
          />
        </div>
        <div className="users">
          {usersdata.filter((user) => {
              return (
                user.first_name.toLowerCase().includes(searchUser) ||
                user.last_name.toLowerCase().includes(searchUser)
              );
            })
            .map((user) => {
              return (
                <Card
                  key={user.id}
                  id={user.id}
                  name={`${user.first_name} ${user.last_name}`}
                  avatar={user.avatar}
                  gender={user.gender}
                  available={user.available}
                  domain={user.domain}
                  email={user.email}
                />
              );
            })}
        </div>
        <div className="pagination">
            
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 2rem;

  display: grid;
  grid-template-columns: 1fr 5fr;
  @media screen and (max-width: 1180px){
    grid-template-columns: 1fr 3fr;
  }
  @media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .users {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .pagination {
    background-color: aliceblue;
    border-radius: 500px;
    margin: 2rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

    @media screen and (max-width: 490px){
    width: 100%;
    
  }
  }

  .search {
    width: 80%;
    max-width: 25rem;
    overflow: hidden;
    input {
      height: 2rem;
      padding: 0.5rem;
      width: 100%;
      outline: none;
      /* border-radius: 500px; */
    }
    /* background-color: aliceblue; */
    margin: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
  .left {
    background-color: aliceblue;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 80vh;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    position: sticky;
    top: 100px;
    button{
        margin: 1rem;
        margin-top: 2.5rem;
    }
    input{
        margin-right: 5px;
    }
    @media screen and (max-width: 800px){
    position: static;
    /* width: 70%; */
  }
  }
`;
