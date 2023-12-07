import { Route, Routes } from "react-router-dom";
import Step0 from "../forms/Step0";
import Step2 from "../forms/Step2";
import Step3 from "../forms/Step3";
import Step4 from "../forms/Step4";


const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Step0 />} />
        <Route path="/Step2" element={<Step2 />} />
        <Route path="/Step3" element={<Step3 />} />
        <Route path="/Step4" element={<Step4 />} />


      </Routes>
    </>
  );
};
export default Router;
