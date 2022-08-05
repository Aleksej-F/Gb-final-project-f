import React from 'react';
import {Link} from "react-router-dom";


export const Layout = ({children}) => {
  return (
    <div className="App">
      <div className="wrapper">
        
        <ul className="menu">
          <img src="src/img/log1.jpg"></img>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/specialist">Найти специалиста</Link>
          </li>
          <li>
            <Link to="/orders">Мои заказы</Link>
          </li>
          <li>
            <Link to="/using">Стать испольнителем</Link>
          </li>
        </ul >
      </div>
      <div >
        {children}
      </div>
    </div>
  );
};