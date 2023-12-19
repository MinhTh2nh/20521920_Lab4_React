import axios from "axios";

const request = () => {
  const getAvatar = () => {
    return axios
      .get("https://api.sampleapis.com/avatar/info")
      .then((res) => res.data)
      .catch((error) => {
        // Handle the error, log it, or throw a custom error
        console.error("Error fetching avatar:", error);
        throw error;
      });
  };

  return {
    getAvatar,
  };
};

export default request;