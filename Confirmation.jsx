import FormContext from "./FormContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();
  const { name, email, address, setName, setEmail, setAddress } =
    useContext(FormContext);

  function handleSubmit() {
    alert("Form submitted!");
    setName("");
    setEmail("");
    setAddress("");
    navigate("/");
  }

  return (
    <div className="border p-4 w-full max-w-md mx-auto mt-10 flex flex-col items-center gap-4 rounded-lg">
      <h2 className="font-semibold text-lg md:text-xl text-center">
        Confirm your details before submitting
      </h2>
      <p className="border p-2 m-2 rounded-sm w-full">
        {name || "no name yet"}
      </p>
      <p className="border p-2 m-2 rounded-sm w-full">
        {email || "no email yet"}
      </p>
      <p className="border p-2 m-2 rounded-sm w-full">
        {address || "no address yet"}
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-black text-white py-2 px-4 rounded-md w-full sm:w-auto"
        >
          Go back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-black text-white py-2 px-4 rounded-md w-full sm:w-auto"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
