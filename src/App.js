import "./App.scss";

function App() {
  return (
    <div className="App">
      <div id="intro">
        <div id="intro-left"></div>
        <div id="intro-right"></div>
      </div>
      <div id="text-fe">& I want to be your next frontend developer</div>
      <div id="work-for-you">
        <div id="work-for-you-left">Why I want to work for you</div>
        <div id="work-for-you-right">
          <img
            src="../assets/image1.jpg"
            alt="Product from FromRachel's website"
          ></img>
        </div>
      </div>
      <div id="hire-me">Why you should consider hiring me</div>
      <div id="thank-you">Thank you..</div>
      <footer>Static page created by Ashley Hynes using React.js</footer>
    </div>
  );
}

export default App;
