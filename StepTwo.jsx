import { useContext } from "react";
import FormContext from "./FormContext";
import { useNavigate } from "react-router-dom";
export default function StepTwo() {
  const navigate = useNavigate();
  const { address, setAddress } = useContext(FormContext);
  return (
    <div className="border p-2 w-[500px] mx-auto mt-10 flex flex-col items-center gap-2">
      <h1 className="font-semibold">Step Two form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/confirmation");
        }}
      >
        <input
          type="text"
          name="address"
          id="name"
          placeholder="Enter your address here"
          className="border p-1 my-3 rounded-sm text-sm"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <br />
        <button className="bg-black text-white py-1 px-3 my-2">Next</button>
      </form>
    </div>
  );
}
