import AxiosHttpInstance from "../Axios";

async function FollowFunction(id) {
  const data = {
    whoFollowId: localStorage.getItem("user_id"),
    followToId: id,
  };
  if (data.whoFollowId == data.followToId) return;
  await AxiosHttpInstance.post("api/follow", data);
}

export default FollowFunction;
