import { useNavigate } from "react-router-dom";
import FormContext from "./FormContext";
import { useContext } from "react";

export default function StepOne() {
  const { name, setName, email, setEmail } = useContext(FormContext);
  const navigate = useNavigate();
  return (
    <div className="border p-4 w-full max-w-md mx-auto mt-10 flex flex-col items-center gap-4 rounded-lg">
      <h1 className="font-semibold text-lg md:text-xl text-center">
        Step One Form
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/stepTwo");
        }}
        className="w-full flex flex-col items-center gap-3"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name here"
          className="border p-2 rounded-sm text-sm w-full"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email here"
          className="border p-2 rounded-sm text-sm w-full"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button className="bg-black text-white py-2 px-4 rounded-md w-full sm:w-auto">
          Next
        </button>
      </form>
    </div>
  );
}
