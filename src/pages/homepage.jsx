import React from 'react';
import './homepage.css';
import { HomeContainer } from "./homepage.styles";

import  Directory  from "../components/directory-menu.jsx";

const Homepage = () =>(
        <HomeContainer>
          <Directory/>
        </HomeContainer>
        
    );

export default Homepage;