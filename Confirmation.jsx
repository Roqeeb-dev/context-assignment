import FormContext from "./FormContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();
  const { name, email, address } = useContext(FormContext);
  return (
    <div>
      <h2>Confirm your details before submitting</h2>
      <p className="border p-2 m-2 rounded-sm">{name || "no name yet"}</p>
      <p className="border p-2 m-2 rounded-sm">{email || "no email yet"}</p>
      <p className="border p-2 m-2 rounded-sm">{address || "no address yet"}</p>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-black text-white py-1 px-3 m-2"
        >
          Go back
        </button>
        <button className="bg-black text-white py-1 px-3 m-2">Submit</button>
      </div>
    </div>
  );
}
