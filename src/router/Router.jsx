import { Route, Routes } from "react-router-dom";
import Step0 from "../forms/Step0";
import Step2 from "../forms/Step2";


const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Step0 />} />
        <Route path="/Step2" element={<Step2 />} />


      </Routes>
    </>
  );
};
export default Router;
