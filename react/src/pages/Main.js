import "../Main.css";

import HobbyList from "./HobbyList";
import Info from "./Info";
import SpecialList from "./SpecialList";
import Darkmode from "./Darkmode";

import Data from "./Data.json";

import { useState } from "react";

const Main = () => {
  const [isDark, setIsDark] = useState(false);

  console.log(isDark);
  return (
    <>
      <div className={isDark ? "darkMode" : ""}>
        <Darkmode darkMode={setIsDark} dark={isDark} />
        <Info data={Data} dark={isDark} />
        <HobbyList data={Data} dark={isDark} />
        <SpecialList data={Data} dark={isDark} />
      </div>
    </>
  );
};

export default Main;
