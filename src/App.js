import "./App.css";

const imagePaths = {
  jenkins: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  ducky: "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg"
}

function clickMe(e) {
  e.target.src === imagePaths.jenkins ? e.target.setAttribute("src", imagePaths.ducky) : e.target.setAttribute("src", imagePaths.jenkins);
}

export const profile = (
  <div>
    <h1>I am Jenkins</h1>
    <img
      style={{maxWidth: '500px', maxHeight: '250px'}} 
      src={imagePaths.jenkins}
      alt="Jenkins The Elephant"
      onClick={clickMe}
    /><br />
    <button onClick={clickMe}>Jenkins</button><br />
    <article>
      I like to sit<br />
      Jenkins is my name<br />
      Thanks a lot
    </article>
  </div>
);

export default clickMe;