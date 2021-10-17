import React from "react";
import ReactDOM from "react-dom";
import AddItem from "./components/AddItem";

import "./index.scss";

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <AddItem />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
