import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";

import Specialist  from '../Specialist';
import Orders  from '../Orders';
import Using  from '../Using';

import {PublicRoute} from "../../hocs/PublicRoute";
import {PrivateRoute} from "../../hocs/PrivateRoute";

import Home  from '../../components/home';



export const Routes  = (props) => {
  const [auth, setAuth] = useState(true);
  
  

return (
      
  <Switch>
  {/* PrivateRoute доступны авторизованному пользователю */}
    <PrivateRoute auth={auth} exact path="/specialist">
      {/* страница поиска специалиста */}
      <Specialist/> 
    </PrivateRoute>
    
    <PrivateRoute auth={auth} exact path="/orders">
      {/* страница просмотра моих заказов */}
      <Orders/>
    </PrivateRoute>
    
    <PrivateRoute auth={auth} exact path="/using">
      {/* страница заполнения данных для испольнителя */}
      <Using/>
    </PrivateRoute>
    
    <PublicRoute exact path="/">
      <Home auth={auth}/>
    </PublicRoute>
    
    {/* PublicRoute доступны всем пользователям*/} 
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