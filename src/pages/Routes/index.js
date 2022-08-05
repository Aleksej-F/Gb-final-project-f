import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";



import {PublicRoute} from "../../hocs/PublicRoute";
import {PrivateRoute} from "../../hocs/PrivateRoute";

import Home  from '../../components/home';



export const Routes  = (props) => {
  const [auth, setAuth] = useState(true);
  
  

return (
      
  <Switch>
   
    <PrivateRoute auth={auth} exact path="/specialist">
    <h3>поиск спиалиста</h3>
    </PrivateRoute>
    
    <PrivateRoute auth={auth} exact path="/orders">
    <h3>мои заказы</h3>
    </PrivateRoute>
    
    <PrivateRoute auth={auth} exact path="/using">
    <h3>стать испольнителем</h3>
    </PrivateRoute>
    
    <PublicRoute exact path="/">
      <Home auth={auth}/>
    </PublicRoute>
    
    
    <PublicRoute auth={auth} exact path="/login">
    <h3>авторизация</h3>
    </PublicRoute>

    <PublicRoute auth={auth} exact path="/signup">
    <h3>регистрация</h3>
    </PublicRoute>

    <Route>
      <h3>Page not found</h3>
    </Route>


  </Switch>
)


};