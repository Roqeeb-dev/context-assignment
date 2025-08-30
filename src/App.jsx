import FormContext from "../FormContext";
import { useState } from "react";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import Confirmation from "../Confirmation";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const formDetails = {
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
  };
  return (
    <div>
      <FormContext.Provider value={formDetails}>
        <Routes>
          <Route path="/" element={<StepOne />} />
          <Route path="/stepTwo" element={<StepTwo />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </FormContext.Provider>
    </div>
  );
}
