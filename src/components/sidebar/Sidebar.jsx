import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
//import LocalShippingIcon from "@mui/icons-material/LocalShipping";
//import CreditCardIcon from "@mui/icons-material/CreditCard";
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
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
          {/*<Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
  </Link>*/}
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
          {/*<Link to="/information" style={{ textDecoration: "none"}}>
            <li>
              <MenuBookOutlinedIcon className="icon" />
              <span>Information</span>
            </li>
          </Link>*/}
          <p className="title">COURSES</p>
          <Link to="/semester1" style={{ textDecoration: "none"}}>
            <li>
              {/*<AppRegistrationOutlinedIcon className="icon" />*/}
              <span>Semester 1</span>
            </li>
          </Link>
          <Link to="/semester2" style={{ textDecoration: "none"}}>
            <li>
              {/*<AppRegistrationOutlinedIcon className="icon" />*/}
              <span>Semester 2</span>
            </li>
          </Link>
          <Link to="/semester3" style={{ textDecoration: "none"}}>
            <li>
              {/*<AppRegistrationOutlinedIcon className="icon" />*/}
              <span>Semester 3</span>
            </li>
          </Link>
          <Link to="/semester4" style={{ textDecoration: "none"}}>
            <li>
              {/*<AppRegistrationOutlinedIcon className="icon" />*/}
              <span>Semester 4</span>
            </li>
          </Link>
          <Link to="/semester5" style={{ textDecoration: "none"}}>
            <li>
              {/*<AppRegistrationOutlinedIcon className="icon" />*/}
              <span>Semester 5</span>
            </li>
          </Link>
          <Link to="/semester6" style={{ textDecoration: "none"}}>
            <li>
              {/*<AppRegistrationOutlinedIcon className="icon" />*/}
              <span>Semester 6</span>
            </li>
          </Link>
          <Link to="/semester7" style={{ textDecoration: "none"}}>
            <li>
              {/*<AppRegistrationOutlinedIcon className="icon" />*/}
              <span>Semester 7</span>
            </li>
          </Link>
          <Link to="/semester8" style={{ textDecoration: "none"}}>
            <li>
              {/*<AppRegistrationOutlinedIcon className="icon" />*/}
              <span>Semester 8</span>
            </li>
          </Link>
          
          {/*<p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
  </li> 
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
</li> 
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
</li> */}
          <p className="title">USER</p>
          {/*<li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>*/}
          <li>
            <ExitToAppIcon className="icon" />
            <Link to="/logout" style={{ textDecoration: "none" }}>
          <span>Logout</span>
        </Link>
          </li>
        </ul>
      </div>
      {/*<div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
        </div>*/}
    </div>
  );
};

export default Sidebar;