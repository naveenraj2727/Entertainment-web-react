import React from 'react';
import App from './App';
import Shows from './Shows';
import {Route,IndexRoute} from 'react-router';

export default(
<Route path="/" component={App}>
 
  <Route path="shows" component={Shows}/>

</Route>
);