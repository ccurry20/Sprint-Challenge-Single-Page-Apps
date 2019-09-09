import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterCard from "./CharacterCard.js";
import CharacterList from "./CharacterList";
//import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";


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
            <NavLink exact to ="/CharacterList"> Characters
              </NavLink>
              </li>
              <li>
              <NavLink exact to ="/LocationsList"> Location
              </NavLink>
            </li>
            </ul>
            <Route exact path="/" component={WelcomePage}/>
            
            <Route exact path="/CharacterList" component={CharacterList}/>

            <Route exact path="/LocationsList" component={LocationsList}/>

         </div>
    )}
    
