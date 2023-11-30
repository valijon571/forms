import { Route, Routes } from "react-router-dom";
import Tablisa from "../forms/Tablisa";
import Gazbalon from "../forms/Gazbalon";
import Balon from "../forms/Balon";


const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Tablisa />} />
        <Route path="/gaz" element={<Gazbalon />} />
        <Route path="/balon" element={<Balon />} />


      </Routes>
    </>
  );
};
export default Router;
