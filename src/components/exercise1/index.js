import React, { useState, useEffect } from 'react';

const Exercise1 = () => {
    const [counter, setCounter] = useState(0);
    const [type, setType] = useState("dog");
    const [url, setUrl] = useState();
  
  
    const increaseCounter = () => {
      setCounter((pre) => pre + 1);
    };
  
  
    const changeURL = () => {
      setUrl("https://loremflickr.com/320/240/" + type);
    };
  
  
    const changeType = () => {
      if (type === "dog") {
        setType("cat");
      } else setType("dog");
    };  
  
    useEffect(() => {
    console.log("change url");
    changeURL(type);
    }, [type]);

  return (
    <div className="us-page">
    <div className="result">{counter}</div>
    <button onClick={increaseCounter} size="lg">
      Click
    </button>
    <hr />
    <button onClick={changeType} size="lg">
      Change
    </button>
    {url && <img src={url} alt="" />}
  </div>
);
}

export default Exercise1;
