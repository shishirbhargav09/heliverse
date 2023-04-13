import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>

      <div className="nav">
        <Link to="/">
            <Button>Home</Button>
        </Link>
        <Link to="/team"><Button>Team</Button></Link>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`

  background-color: aliceblue;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  box-shadow: 3px 4px 17px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 4px 17px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 4px 17px -1px rgba(0, 0, 0, 0.75);
  a{
    text-decoration: none;
  }
`;
