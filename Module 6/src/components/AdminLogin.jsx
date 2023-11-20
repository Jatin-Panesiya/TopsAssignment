import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <>
      <div className="grid gap-2 w-96 mx-auto my-5">
        <h1 className="text-center text-xl py-2">Hello Admin </h1>
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

        <Link
          to={"/admin"}
          className="bg-emerald-300 py-1 rounded text-lg text-center"
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default AdminLogin;
