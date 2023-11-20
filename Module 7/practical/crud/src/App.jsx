import { useSelector, useDispatch } from "react-redux";
import { login } from "./redux/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const users = useSelector((state) => state.authReducer.users);

  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(username));

    if (username !== "") {
      navigate("/home");
    } else if (users === "") {
      navigate("/");
    } else {
      alert("Fill up data");
    }
  };

  return (
    <>
      <div>
        <div className="grid gap-2 w-96 mx-auto my-5">
          <h1 className="text-center text-xl py-2">Login</h1>
          <p className="text-center text-gray-500">
            Enter any username & password
          </p>
          <input
            type="text"
            className="border outline-none px-3 py-1 rounded border-black "
            placeholder="Username *"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="border outline-none px-3 py-1 rounded border-black"
            placeholder="Password  *"
          />
          <button
            onClick={handleLogin}
            className="bg-emerald-300 py-1 rounded text-lg"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
