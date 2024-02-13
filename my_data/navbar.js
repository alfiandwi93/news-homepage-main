const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md my-3">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="assets/images/logo.svg" alt="Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
        <span><img src="assets/images/icon-menu.svg" /></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"><span><img src="assets/images/icon-menu-close.svg" /></span>
        </button>
      </div>
        <div className="offcanvas-body mt-5 mt-md-0">
          <ul className="navbar-nav ms-auto">
            <Navlink MenuName="Home" />
            <Navlink MenuName="New" />
            <Navlink MenuName="Popular" />
            <Navlink MenuName="Trending" />
            <Navlink MenuName="Categories" />
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

const Navlink = ({ MenuName }) => {
  return (
    <li className="nav-item mb-2 mb-md-0">
      <a className="nav-link ms-2 ms-md-4" href="#">{MenuName}</a>
    </li>
  );
};



ReactDOM.render(
  <Navbar />,
  document.getElementById('navigation')
);