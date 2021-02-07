import React from "react";

import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <h2>useState</h2>
      <hr/>
      <Counter/>
      <Usuario/>

      <h2>useEffect - useRef</h2>
      <hr/>
      <TimerPadre/>

      <h2>useReducer</h2>
      <hr/>
      <ContadorRed/>

      <h2>CustomHooks</h2>
      <hr/>
      <Formulario/>

      <br/>
      <Formulario2/>

      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default App;
