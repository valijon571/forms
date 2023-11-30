import { Route, Routes } from "react-router-dom";
import Tablisa from "../forms/Tablisa";
import Gazbalon from "../forms/Gazbalon";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Tablisa />} />
        <Route path="/gaz" element={<Gazbalon />} />

      </Routes>
    </>
  );
};
export default Router;
