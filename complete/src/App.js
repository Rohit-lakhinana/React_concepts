import './App.css';
import React  from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Greet} from './Components/JSX/Greet';
import WithJsx from './Components/JSX/WithJsx';
// import WithoutJsx from './Components/WithoutJsx';
import {PropsWithFunc} from './Components/Props/PropsWithFunc';
import PropsWithClass from './Components/Props/PropsWithClass';
import State from './Components/State/StateWithClass';
import { StateWithFunc } from './Components/State/StateWithFunc';
import OnClick from './Components/EventHandlers/OnClick';
import UseState from './Components/Hooks/UseState';
import {UseEff} from './Components/Hooks/UseEff';
import { OnChange } from './Components/EventHandlers/OnChange';
import { OnSubmit } from './Components/EventHandlers/OnSubmit';
import Login from './Components/Login-Forms/Login';
import FireBsaeSignUP from './Components/FireBaseDB/FireBsaeSignUP';
import Validators from './Components/Validators/Validators';
import Calculator from './Components/Calculator/Calculator';
import Fetching from './Components/Fetching/Fetching';
import Axios from './Components/Axios/Axios';
import Home from './Components/Router/Home';
import About from './Components/Router/About';
import Contact from './Components/Router/Contact';
import NavBar from './Components/Router/NavBar';
import AboutReact from './Components/Router/AboutReact';

function App() {
  return (
    <div className="App">
      {/* ROUTING */}
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact"  element={<Contact/>} />
        <Route path="aboutreact" element={<AboutReact/>} />
      </Routes>
      </BrowserRouter>

      <Greet />

      <WithJsx />

      {/* <WithoutJsx /> */}

      {/* props will be used to display
      different inputs in the same components */}
      <PropsWithFunc name="MM" age="22" >
        <button>CLICK</button>
      </PropsWithFunc>
      <PropsWithFunc name="MADHAN" age="22" >
        <p>here, we are adding app.js para text in Props.js, with props.children</p>
      </PropsWithFunc>

      <PropsWithClass name="MM" movie="HARRY-POTTER Series" />
      <PropsWithClass name="KK" movie="MISSION IMPOSSIBLE" />

      <State />

      <StateWithFunc />

      <OnClick />
      <UseState />
      <UseEff />
      <OnChange />
      <OnSubmit />
      <br/>
      <br/>
      <Login />
      <br/>
      <br/>
      <FireBsaeSignUP />
      <Validators />
      <Calculator />
      <Fetching/>
      <Axios/>
    </div>
  );
}

export default App;

