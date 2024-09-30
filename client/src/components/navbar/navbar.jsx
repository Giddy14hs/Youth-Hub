import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import image17 from "../../images/image17.jpg"
import {logout} from "../../actions/authentication.js"

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-warning ">
      <div class="container-fluid">
        <iframe src={image17} title="Logo" type="PDF" style={{width: "50px", height: "50px"}} scrolling="auto"/>
      <a class="navbar-brand" href="#"><b>Youth Hub</b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle active" aria-current="page" to="/">Home</Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#work">Our Work</a></li>
            <li><a class="dropdown-item" href="#product">Why Choose Us</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle active" aria-current="page"  to="/EntrepreneurDashboard">Entrepreneur</Link>
          <ul class="dropdown-menu">
          
          {/* <li><Link className="dropdown-item" to="/InvestorDashboard"></Link>Business Overview</li> */}
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle active" to="/InvestorDashboard" aria-expanded="false" aria-current="page">
            Investor
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownProducts">
                  <li><Link className="dropdown-item" to="/InvestorDashboard">Investment Portfolio</Link></li>
                  <li><Link className="dropdown-item" to="/InvestorDashboard">My Opportunities</Link></li>
                </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle active" to="/MentorDashboard" role="button" aria-expanded="false" aria-current="page">
            Mentor
          </Link>
            </li>
            <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;