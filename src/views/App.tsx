import React, { useEffect } from "react";
import { 
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AppBar } from "../ui/components/app-bar/app-bar";
import { APP_ROUTES, IAppRoutes } from "../common/routes/app-routes";
import { Income } from "./income/income";
import Banner from "../ui/components/banner/banner";

const App = () => {
  useEffect(() => {
    setInterval(() => {
      window.location.reload();
    }, 18000)
  },[])
  return (
    <div style={{padding: '10px', height: '100vh', background: 'mintcream'}}>
      <Banner words={['Привіт, маю надію, що в тебе все добре!']}/>
      <Banner words={['Якщо відчуваеш смуту, бажаю тобі світла!']} time={4500}/>
      <Banner words={['Впевненного настрою тобі, та доброго вечора!']} time={9000}/>
      <Banner words={['P.S. - відправив тобі пісню']} time={14000}/>
    </div>
  );
}

export default App;
