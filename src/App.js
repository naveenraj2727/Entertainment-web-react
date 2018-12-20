import React from 'react';
import './App.css';
import Header from './containers/Header.js';
import Footer from './containers/Footer.js';
import ParentBodyDiv from './ParentBodyDiv.js';

function App(props){
return(
     <div className="App">
        <Header/>
        <ParentBodyDiv/>
        <Footer/>
      </div>

);


}

export default App;
