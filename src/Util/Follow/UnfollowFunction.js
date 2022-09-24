import AxiosHttpInstance from "../Axios";

async function UnfollowFunction(id) {
  const response = await AxiosHttpInstance.delete("api/follow?id=" + id);
  console.log(id);
}

export default UnfollowFunction;
