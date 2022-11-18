import React from "react";
import Link from "next/link";
function Intro() {
  return (
    <>
      <section className="mt-7 py-0">
        <div
          className="bg-holder w-50 bg-right d-none d-lg-block"
          style={{
            backgroundImage: `url("assets/img/gallery/flatbed-tow-truck.jpg")`,
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5 py-xl-5 py-xxl-7">
              <h1 className="display-2 text-1000 fw-normal">
                Get connected to
              </h1>
              <h1 className="display-4 text-primary  fw-bold">
                the best towing services
              </h1>

              <div className="pt-5">
                <nav>
                  <div
                    className="nav nav-tabs voyage-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <i className="fas fa-map-marker-alt"></i>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="fas fa-plane"></i>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="fas fa-hotel"></i>
                    </button>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddress1"
                            >
                              Address 1
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddress1"
                              type="text"
                              placeholder="From where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddress2"
                            >
                              Address 2
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddress2"
                              type="text"
                              placeholder="To where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputdateOne"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateTwo"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputPersonOne"
                            >
                              Person
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPersonOne"
                            >
                              <option selected="selected">2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-xl-10 col-lg-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddressThree"
                            >
                              Address 1
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddressThree"
                              type="text"
                              placeholder="From where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddressFour"
                            >
                              Address 2
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddressFour"
                              type="text"
                              placeholder="To where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateThree"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateFour"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputPeopleTwo"
                            >
                              People
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPeopleTwo"
                            >
                              <option selected="selected">2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateFive"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateSix"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputPeopleThree"
                            >
                              Person
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPeopleThree"
                            >
                              <option selected="selected">2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="fw-main-row  ls section_padding_top_50 section_padding_bottom_50 columns_padding_0"
        id="about"
      >
        <div class="container">
          <div class="row">
            <div
              class="fw-column col-xs-12 col-md-6  text-center col-lg-7"
              data-animation="fadeInLeft"
            >
              <div class="fw-column-inner padding_30">
                <img
                  class="shortcode-media-image"
                  src={"assets/img/truck.png"}
                  alt="assets/img/truck.png"
                />{" "}
              </div>
            </div>
            <div
              class="fw-column col-xs-12 col-md-6  text-left col-lg-5"
              data-animation="fadeInRight"
            >
              <div class="fw-column-inner">
                <div class="numbered-header text-left">
                  <h3 class=" section_header ">
                    <span class=" thin text-uppercase">
                      What <strong>WE OFFER</strong>{" "}
                    </span>
                  </h3>
                  <p class="  paragraph">
                    <span class="  text-uppercase">
                      effective flatbed transportation{" "}
                    </span>
                  </p>
                </div>
                <div class="fw-divider-zebra">
                  <hr class="zebra_bg divider_left" />
                </div>
                <div
                  class="fw-divider-space "
                  style={{ paddingTop: `10px` }}
                ></div>
                <div class="text-block">
                  <p>
                    We provide fast, courteous and inexpensive towing services
                    in New York. We are fully insured and been in business since
                    1986. We are ready to respond to all your vehicle emergency
                    needs 24 hours a day, seven days a week.
                  </p>
                </div>
                <div class="icons-list">
                  <ul class="list1 no-bullets with-border">
                    <li>
                      <div class="media small-teaser shortcode-icon">
                        <div class="media-left">
                          <div class="icon-wrap">
                            <i class="fa fa-check highlight fontsize_18"></i>
                          </div>
                        </div>
                        <div class="media-body">
                          <span class="title">More than </span>
                          <span class="text">
                            <strong>30 years of experience</strong>{" "}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media small-teaser shortcode-icon">
                        <div class="media-left">
                          <div class="icon-wrap">
                            <i class="fa fa-check highlight fontsize_18"></i>
                          </div>
                        </div>
                        <div class="media-body">
                          <span class="title">Short arrival time of </span>
                          <span class="text">
                            <strong>30 minutes or less</strong>{" "}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media small-teaser shortcode-icon">
                        <div class="media-left">
                          <div class="icon-wrap">
                            <i class="fa fa-check highlight fontsize_18"></i>
                          </div>
                        </div>
                        <div class="media-body">
                          <span class="title">
                            Honest competitive prices -{" "}
                          </span>
                          <span class="text">
                            <strong>zero hidden fees</strong>{" "}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media small-teaser shortcode-icon">
                        <div class="media-left">
                          <div class="icon-wrap">
                            <i class="fa fa-check highlight fontsize_18"></i>
                          </div>
                        </div>
                        <div class="media-body">
                          <span class="title">Friendly and </span>
                          <span class="text">
                            <strong>professional service</strong>{" "}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media small-teaser shortcode-icon">
                        <div class="media-left">
                          <div class="icon-wrap">
                            <i class="fa fa-check highlight fontsize_18"></i>
                          </div>
                        </div>
                        <div class="media-body">
                          <span class="title">Available </span>
                          <span class="text">
                            <strong>24 hours</strong> a day,{" "}
                            <strong>7 days</strong> a week{" "}
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="fw-main-row  ds section_padding_top_130 section_padding_bottom_130 columns_padding_15 parallax section_overlay fullwidth-section background_cover"
        style={{
          backgroundImage: `url(assets/img/counters.jpg)`,
        }}
      >
        <div class="container-fluid">
          <div class="row">
            <div class="fw-column col-xs-12 col-md-3">
              <div class="fw-column-inner">
                {" "}
                <div class="teaser text-center ">
                  <div class="teaser_icon size_big highlight">
                    <i class="toyicon-star"></i>
                  </div>
                  <h3
                    class="counter"
                    data-from="0"
                    data-to="30"
                    data-speed="2200"
                  >
                    0
                  </h3>

                  <p>Years of Experience </p>
                </div>
              </div>
            </div>
            <div class="fw-column col-xs-12 col-md-3">
              <div class="fw-column-inner">
                {" "}
                <div class="teaser text-center ">
                  <div class="teaser_icon size_big highlight">
                    <i class="toyicon-buildings"></i>
                  </div>
                  <h3
                    class="counter"
                    data-from="0"
                    data-to="74"
                    data-speed="3000"
                  >
                    0
                  </h3>

                  <p>Offices Worldwide </p>
                </div>
              </div>
            </div>
            <div class="fw-column col-xs-12 col-md-3">
              <div class="fw-column-inner">
                {" "}
                <div class="teaser text-center ">
                  <div class="teaser_icon size_big highlight">
                    <i class="toyicon-truck"></i>
                  </div>
                  <h3
                    class="counter"
                    data-from="0"
                    data-to="3720"
                    data-speed="1600"
                  >
                    0
                  </h3>

                  <p>Vehicles Towed </p>
                </div>
              </div>
            </div>
            <div class="fw-column col-xs-12 col-md-3">
              <div class="fw-column-inner">
                {" "}
                <div class="teaser text-center ">
                  <div class="teaser_icon size_big highlight">
                    <i class="toyicon-group"></i>
                  </div>
                  <h3
                    class="counter"
                    data-from="0"
                    data-to="874"
                    data-speed="1200"
                  >
                    0
                  </h3>

                  <p>Workers in Team </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-0" id="flights">
        <div class="container-fluid">
          <div class="row h-100">
            <div class="col-lg-7 mx-auto text-center mb-6">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">
                Flights to Popular Places at the Best Costs
              </h5>
            </div>
          </div>
          <div class="row g-0 flex-center">
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#240D8C`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Chittagong</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#3011BB`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Sylhet</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#4914DC`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Chittagong</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#6213D2`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Chittagong</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#4611BC`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Coxs Bazar</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#7013CE`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Sylhet</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#4611BC`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Coxs Bazar</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#6213D2`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Chittagong</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#240D8C`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Coxs Bazar</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#4914DC`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Sylhet</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#3011BB`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Chittagong</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                class="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#4611BC`,
                  minHeight: `230px`,
                }}
              >
                <h5 class="text-light">Dhaka - Coxs Bazar</h5>
                <h6 class="text-light fw-normal fs-0">From $100</h6>
                <i class="fas fa-arrow-right text-light mt-4"></i>
                <a class="stretched-link" href="#!"></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">
          {location ? `Rooms in ${location}` : "All Rooms"}
        </h2>

        <div className="bg-holder w-50 bg-right d-none d-lg-block">
          asdasdadadasdasdadsaa
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5 py-xl-5 py-xxl-7">
              <h1 className="display-3 text-1000 fw-normal">
                Let’s make a tour
              </h1>
              <h1 className="display-3 text-primary fw-bold">
                Discover the beauty
              </h1>
              <div className="pt-5">
                <nav>
                  <div
                    className="nav nav-tabs voyage-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <i className="fas fa-map-marker-alt"></i>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="fas fa-plane"></i>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="fas fa-hotel"></i>
                    </button>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddress1"
                            >
                              Address 1
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddress1"
                              type="text"
                              placeholder="From where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddress2"
                            >
                              Address 2
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddress2"
                              type="text"
                              placeholder="To where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputdateOne"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateTwo"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputPersonOne"
                            >
                              Person
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPersonOne"
                            >
                              <option selected="selected">2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-xl-10 col-lg-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddressThree"
                            >
                              Address 1
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddressThree"
                              type="text"
                              placeholder="From where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddressFour"
                            >
                              Address 2
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddressFour"
                              type="text"
                              placeholder="To where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateThree"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateFour"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputPeopleTwo"
                            >
                              People
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPeopleTwo"
                            >
                              <option selected="selected">2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateFive"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateSix"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputPeopleThree"
                            >
                              Person
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPeopleThree"
                            >
                              <option selected="selected">2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Intro;
