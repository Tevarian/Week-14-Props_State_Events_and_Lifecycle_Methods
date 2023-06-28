import Nav from "./components/Nav";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import afaLogo from "./assets/a-funny-angle.svg";
import "./styles/App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="main-logo">
        <img src={afaLogo} className="logo" alt="a funny angle" />
      </div>
      <Header />
      <MovieList />
      <Footer />
    </>
  );
}

export default App;
