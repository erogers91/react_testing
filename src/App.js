import React, { useState, useEffect } from 'react';
import "./App.css";

const imagePaths = {
  jenkins: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  ducky: "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg"
}

function Profile() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times.`
  },[count])

  function clickMe() {
    const target = document.getElementById('image')
    target.src === imagePaths.jenkins ? target.setAttribute("src", imagePaths.ducky) : target.setAttribute("src", imagePaths.jenkins);
    setCount(count + 1)
  }

  return (
    <div>
      <h1>I am Jenkins</h1>
      <img
        id='image'
        style={{maxWidth: '500px', maxHeight: '250px'}} 
        src={imagePaths.jenkins}
        alt="Jenkins The Elephant"
        onClick={clickMe}
      /><br />
      <button onClick={clickMe}>You clicked {count} times!</button><br />
      <article>
        I like to sit<br />
        Jenkins is my name<br />
        Thanks a lot
      </article>
    </div>
  );
}

export default Profile;