import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePost } from "./redux/postsSlice";

const Update = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.posts.posts);

  const [selectedData] = data.filter((state) => state.id == id);
  const [udata, setuData] = useState(selectedData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleUpdate = () => {
    dispatch(updatePost(udata));
    navigate("/");
  };
  const handleChange = (e) => {
    setuData({ ...udata, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="grid w-96 mx-auto my-3 gap-2 bg-slate-200 p-5 rounded-md">
        <p className="text-center text-xl py-5 font-serif">Update Items</p>
        <input
          type="text"
          name="itemName"
          placeholder="Item Name *"
          value={udata.itemName}
          onChange={handleChange}
          className="border border-black rounded px-3 py-1"
        />
        <input
          type="text"
          name="price"
          placeholder="Price *"
          value={udata.price}
          onChange={handleChange}
          className="border border-black rounded px-3 py-1"
        />
        <input
          type="text"
          name="category"
          placeholder="Category *"
          value={udata.category}
          onChange={handleChange}
          className="border border-black rounded px-3 py-1"
        />
        <button
          className="bg-emerald-400 py-1 rounded  font-semibold"
          onClick={HandleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;
