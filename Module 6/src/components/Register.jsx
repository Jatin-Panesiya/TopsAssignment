import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="grid gap-2 w-96 mx-auto my-5">
      <h1 className="text-center text-xl py-2">User Registration</h1>
      <input
        type="text"
        className="border outline-none px-3 py-1 rounded border-black "
        placeholder="Username *"
      />
      <input
        type="password"
        className="border outline-none px-3 py-1 rounded border-black"
        placeholder="Password  *"
      />
      <div className="flex items-center justify-between">
        <span className="flex gap-2">
          <p>Already an User ?</p>
          <Link to={"/login"} className="text-blue-500 cursor-pointer">
            Login
          </Link>
        </span>
      </div>
      <button className="bg-emerald-300 py-1 rounded text-lg">Register</button>
    </div>
  );
};

export default Register;
