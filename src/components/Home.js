import React, { useState, useEffect } from "react";
import myPic from "../assets/Subject.png";

function Home() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [helloState, setHelloState] = useState("false");
  let delay = 200;
  let text = "Abhilash";
  let text2 = "SoftwareEngineer";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setName((prevName) => prevName + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  const handleMouseHello = () => {
    setHelloState(true);
  };

  const handleMouseHelloClose = () => {
    setHelloState(false);
  };

  return (
    <div className='flex flex-row w-[100vw] items-center justify-center'>
      <div className='text-white flex justify-center items-cente w-1/2  text-5xl'>
        <p className='w-max text-green-500'> hello, world!</p>
      </div>
      <div className='h-[90vh] flex flex-col justify-center items-center text-white w-1/2'>
        <img
          src={myPic}
          alt='profilepic'
          className='ml-8 h-40 w-30 animate-pulse'
        />
        <p className='text-2xl '>Software Engineer</p>
        <p className='text-8xl'>{name}</p>
      </div>
    </div>
  );
}

export default Home;
