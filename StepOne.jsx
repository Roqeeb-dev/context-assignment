import { useNavigate } from "react-router-dom";
import FormContext from "./FormContext";
import { useContext } from "react";
export default function StepOne() {
  const { name, setName, email, setEmail } = useContext(FormContext);
  const navigate = useNavigate();
  return (
    <div className="border p-2 w-[500px] mx-auto mt-10 flex flex-col items-center gap-2">
      <h1 className="font-semibold">Step one form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/stepTwo");
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name here"
          className="border p-1 my-3 rounded-sm text-sm"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email here"
          className="border p-1 rounded-sm text-sm"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <button className="bg-black text-white py-1 px-3 my-2">Next</button>
      </form>
    </div>
  );
}
