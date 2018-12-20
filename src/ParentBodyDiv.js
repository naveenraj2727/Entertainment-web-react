import React from 'react';
import { Route,Switch } from 'react-router-dom'
import Shows from './Shows';
import Home from './Home';
class ParentBodyDiv extends React.Component{

    render(){
        return(
           <main>
                <Switch>
            
                <Route path='/shows' component={Shows} />
                <Route path='/' component={Home} />
                </Switch>
           </main>
        );
    }

}

export default ParentBodyDiv;