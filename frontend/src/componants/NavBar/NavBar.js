import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <header class="site-header bg-dark text-white-0_5">
        <div class="container">
          <div class="row align-items-center justify-content-between mx-0">
            <ul class="list-inline d-none d-lg-block mb-0">
              <li class="list-inline-item mr-3">
                <div class="d-flex align-items-center">
                  <i class="ti-email mr-2"></i>
                  <a href="mailto:support@educati.com">support@educati.com</a>
                </div>
              </li>
              <li class="list-inline-item mr-3">
                <div class="d-flex align-items-center">
                  <i class="ti-headphone mr-2"></i>
                  <a href="tel:+8801740411513">+8801740411513</a>
                </div>
              </li>
            </ul>

            <ul class="list-inline mb-0">
              <li class="list-inline-item mr-0 p-md-3 p-2 border-right border-left border-white-0_1">
                <a href="page-login.html">Login</a>
              </li>
              <li class="list-inline-item mr-0 p-md-3 p-2 border-right border-white-0_1">
                <a href="page-signup.html">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <nav class="ec-nav sticky-top bg-white">
        <div class="container">
          <div class="navbar p-0 navbar-expand-lg">
            <div class="navbar-brand">
              <a class="logo-default" href="index.html">
                <img alt="" src="assets/img/sust-logo.png" />
                <img alt="" src="assets/img/sust_name.png" />
              </a>
            </div>
            <span
              aria-expanded="false"
              class="navbar-toggler ml-auto collapsed"
              data-target="#ec-nav__collapsible"
              data-toggle="collapse"
            >
              <div class="hamburger hamburger--spin js-hamburger">
                <div class="hamburger-box">
                  <div class="hamburger-inner"></div>
                </div>
              </div>
            </span>
            <div
              class="collapse navbar-collapse when-collapsed"
              id="ec-nav__collapsible"
            >
              <ul class="nav navbar-nav ec-nav__navbar ml-auto"></ul>
            </div>
            <div class="nav-toolbar">
              <ul class="navbar-nav ec-nav__navbar"></ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
