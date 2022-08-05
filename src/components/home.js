
import React from "react";
import {Link} from "react-router-dom";

const Home = (props) => {
      const auth = props.auth
    return (
      <div >
        <hr/>
        Домашняя
        <hr/>
        &nbsp;
        { !auth ? 
          <><div>
              <Link to="/login">Авторизоваться</Link>
            </div>
              &nbsp;
            <div>
              <Link to="/signup">Зарегистрироваться</Link>
            </div>
          </> : ""
        }

        
        &nbsp;
        <div>
          <Link to="/login"> 
            <div
              >
              Выйти
            </div>
          </Link>
        </div>
        
      </div>
    
    ) 
    
   

};


export default Home ;