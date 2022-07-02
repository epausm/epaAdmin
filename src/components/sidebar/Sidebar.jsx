import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">epa-Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
              <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/general" style={{ textDecoration: "none"}}>
            <li>
              <AppRegistrationOutlinedIcon className="icon" />
              <span>General Information</span>
            </li>
          </Link>
          <Link to="/courses" style={{ textDecoration: "none"}}>
            <li>
              <AppRegistrationOutlinedIcon className="icon" />
              <span>Courses</span>
            </li>
          </Link>
          <Link to="/advisor" style={{ textDecoration: "none"}}>
            <li>
              <AccountBoxOutlinedIcon className="icon" />
              <span>Advisor</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <ExitToAppIcon className="icon" />
            <Link to="/logout" style={{ textDecoration: "none" }}>
          <span>Logout</span>
        </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;