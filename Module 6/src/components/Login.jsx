import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="grid gap-2 w-96 mx-auto my-5">
        <h1 className="text-center text-xl py-2">User Login</h1>
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
          <p
            onClick={() => alert("register new account :(")}
            className="text-blue-500 cursor-pointer"
          >
            Forgot password ?
          </p>
          <span className="flex gap-2">
            <p>New User ?</p>
            <Link to={"/register"} className="text-blue-500 cursor-pointer">
              Register
            </Link>
          </span>
        </div>
        <Link
          to={"/admin-login"}
          className="flex justify-end text-red-500 font-bold cursor-pointer"
        >
          Admin ?
        </Link>
        <button className="bg-emerald-300 py-1 rounded text-lg">Login</button>
      </div>
    </>
  );
};

export default Login;
