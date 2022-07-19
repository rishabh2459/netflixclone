import Row from "./Row";
import "./App.css";
import requests from "./requests";
import Nav from "./Nav";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Banner />
        <Row
          title="Netflix Original"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
        <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Row
          title="Documentries"
          fetchUrl={requests.fetchDocumentaries}
        />
        <h2>Made by Rishabh Pratap Singh</h2>
        <p>Email: rishabh2459@hmail.com</p>
      </header>
    </div>
  );
}

export default App;
