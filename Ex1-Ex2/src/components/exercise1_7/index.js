import { useEffect, useState } from "react";
import request from "./request";

function Exercise1_7() {
  const {getAvatar} = request();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    getAvatar().then((res) => {
      setAvatar(res[0]);
    });
  }, []);

  return (
    <div className="shop-page">
      {avatar && (
        <>
          <div className="title">Genre</div>
          {Array.isArray(avatar.genres) && (
            <ul className="list-group">
              {avatar.genres.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <hr />
          <div className="title">Summary</div>
          <div>{avatar.synopsis}</div>
          <hr />
          <div className="title">Year Published</div>
          <div>{avatar.yearsAired}</div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Exercise1_7;