import "./App.css";
import { Routes, Route } from "react-router-dom";
import { JSX } from "react";

import { HomePage, Backe } from "./components/HomePage";
import { Stars } from "./components/films/Stars";
import { Listing } from "./components/listing/Listing";
import json from "./components/listing/data/etsy.json";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/Task1"
          element={
            <>
              <Backe />
              Stars
              <Stars count={2} />2<hr></hr>
              <Stars count={3} />3<hr></hr>
              <Stars count={10} />
              10
              <hr></hr>
              {/* <Stars count={"falskdjflj"} />
              "falskdjflj"
              <hr></hr> */}
              <Stars count={5} />
              <hr></hr>
            </>
          }
        />
        <Route
          path="/Task2"
          element={
            <>
              <Backe />
              <Listing data={json} />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
