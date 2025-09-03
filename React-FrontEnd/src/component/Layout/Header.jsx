import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheet/Header.css"; // file css riêng để chứa custom màu
import { Outlet } from "react-router-dom";

const Header = ({ isAuthenticated = false, userName = "User" }) => {
// Keep the initials logic as it's good
const initials = userName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

// Add hooks for responsive menu
const [isNavCollapsed, setIsNavCollapsed] = React.useState(true);
const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <a className="navbar-brand font-weight-bold" href="#">
        MeetingRooms
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Trang chủ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Phòng</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đặt chỗ</a>
          </li>
        </ul>

        <div className="d-flex align-items-center">
          <button className="btn btn-warning font-weight-bold mr-3">
            + Đặt phòng
          </button>

          {!isAuthenticated ? (
            <>
              <a href="#" className="btn btn-outline-light mr-2">Đăng nhập</a>
              <a href="#" className="btn btn-light text-dark">Đăng ký</a>
            </>
          ) : (
            <div className="dropdown">
              <div
                className="avatar-circle dropdown-toggle"
                id="userMenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {initials}
              </div>
              <div className="dropdown-menu dropdown-menu-right">
                <span className="dropdown-item-text font-weight-bold">
                  {userName}
                </span>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Hồ sơ</a>
                <a className="dropdown-item" href="#">Đăng xuất</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
      <Outlet />
    </header>
  );
};

export default Header;
