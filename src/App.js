import './App.css';

function App() {
  return (
    <div classNameNameName="App">
        <nav className="navbar navbar-expand-sm navbar-light ">
        <a className="navbar-brand" href="../public/index.html"> <img src="../public/img/logo.png" heigth="96px" width="170px"
                alt="logo"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="btn btn-sm btn-outline-secondary" href="#">HOME</a>
                <a className="btn btn-sm btn-outline-secondary" href="#">NOSOTROS</a>
                <a className="btn btn-sm btn-outline-secondary" href="#">TIENDA</a>
                <a className="btn btn-sm btn-outline-secondary" href="#">SERVICIOS</a>
                <a className="btn btn-sm btn-outline-secondary" href="#">CONTACTO</a>
            </div>
        </div>
    </nav>
    </div>
  );
}

export default App;
