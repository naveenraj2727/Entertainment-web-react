import React from 'react';
import crown2 from '../images/crown2.svg';
import '../styles/App.css';
import HeaderNavigation from '../HeaderNavigation.js';
class Header extends React.Component{

    render(){
      
        return(
       <div>
        <header className="App-header">
                   <img src={crown2} className="App-logo" alt="logo" />
                   <h1 className="App-title">Naveen's Paradise</h1> 
        </header>
       <HeaderNavigation></HeaderNavigation>
        </div>
        );
    }

}

export default Header;