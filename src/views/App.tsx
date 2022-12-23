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
  return (
    <div style={{padding: '10px'}}>
      <Banner words={['Привет, Олег!']}/>
      <Banner words={['Надеюсь ты в отличном расположении духа!']} time={2500}/>
      <Banner words={['И скоро перейдешь к следующему этапу!']} time={8000}/>
      <Banner words={['Обнял и не приподнял!']} time={12000}/>
    </div>
  );
}

export default App;
