


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
     
          <div className="container-fluid">
            <a className="navbar-brand" href="/">TextUtils</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> 
               <div className="navbar-nav">
                <a className="nav-link active" href="/Textutils">Text Utils</a> 
                <a className="nav-link active" aria-current="page" href="/about">About</a>
              </div>
              

            <div className={`form-check form-switch float-end  ms-auto  text-${props.mode === "light" ? "dark" :"light"}`}>
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckChecked" />
                  
                  <label className="form-check-label" htmlFor="switchCheckChecked">Enable {props.mode === "light" ? "dark" :"light"} Mode</label>
            </div>
            </div>
              

          </div>
      </nav>
    </>
  );
}
