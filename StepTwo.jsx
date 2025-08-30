import { useContext } from "react";
import FormContext from "./FormContext";
import { useNavigate } from "react-router-dom";

export default function StepTwo() {
  const navigate = useNavigate();
  const { address, setAddress } = useContext(FormContext);

  return (
    <div className="border p-4 w-full max-w-md mx-auto mt-10 flex flex-col items-center gap-4 rounded-lg">
      <h1 className="font-semibold text-lg md:text-xl text-center">
        Step Two Form
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/confirmation");
        }}
        className="w-full flex flex-col items-center gap-3"
      >
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter your address here"
          className="border p-2 rounded-sm text-sm w-full"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <button className="bg-black text-white py-2 px-4 rounded-md w-full sm:w-auto">
          Next
        </button>
      </form>
    </div>
  );
}
