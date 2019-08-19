import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterCard from "./CharacterCard.js";
//import CharacterList from "./CharacterList";
//import LocationCard from "./components/LocationCard";


// TODO: Add missing tabs below
export default function TabNav() {
    return (
            <div className="App">
            <ul className="navbar">
                <li>
        <NavLink exact to ="/"> Home Page
              </NavLink>
            </li>
            <li>
            <NavLink exact to ="/CharacterCard"> Characters
              </NavLink>
              </li>
              <li>
              <NavLink exact to ="/LocationCard"> Location
              </NavLink>
            </li>
            </ul>
            <Route exact path="/" component={WelcomePage}/>
         </div>
    )}
    
