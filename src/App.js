import "bulma/css/bulma.css";
import "./App.css";
import Courses from "./Courses";
import angular from "./images/angular.jpg";
import bootstrap from "./images/bootstrap5.png";
import ccsharp from "./images/ccsharp.png";
import kompleweb from "./images/kompleweb.jpg";

function App() {
  const desc =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Courses title="Angular" desc={desc} img={angular} />
            </div>
            <div className="column">
              <Courses title="Bootstrap" desc={desc} img={bootstrap} />
            </div>
            <div className="column">
              <Courses title="React" desc={desc} img={ccsharp} />
            </div>
            <div className="column">
              <Courses title="Vue" desc={desc} img={kompleweb} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
