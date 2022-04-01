import React from "react";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import './App.css';
import Main from "./components";




function App() {
  Enzyme.configure({ adapter: new Adapter() });
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
