import "./App.css";
import "./components/Filter";
import "bootstrap/dist/css/bootstrap.css";




import Routing from "./routes/routing";

function App() {
  return (
    <>
      <div className="App">
       
        {/* <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={require(`./logo.svg`).default}
              alt="Sample Brand Logo"
              width="35"
              className="align-top d-inline-block"
              height="35"
            />
            React Web
          </Navbar.Brand>
        </Navbar> */}
       
        <Routing />
      </div>
    </>
  );
}

export default App;
