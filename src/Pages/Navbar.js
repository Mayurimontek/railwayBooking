import React, { useContext, useEffect, useState } from "react";
import "../Main.css";
import sampleImage from "../images/banner-2.png";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContextProvider";
import { getData } from "../Service/Services";
const Navbar = () => {
  const{updateTravelDetails} = useContext(MyContext);
  const navigate = useNavigate();
  const [hideImageDiv, setHideImageDiv] = useState(true);
  const [stationList, setstationList] = useState([]);
  const [stationObj, setStationObj] = useState({
    fromStation: "",
    fromStationName: "",
    toStation: "",
    toStationName: "",
    travelDate: "",
  });
  const navigateTo = () => {
    navigate("/search");
    setHideImageDiv(false);
  };
  const getAllStation = async () => {
    try {
      getData("GetAllStations").then((result) => {
        setstationList(result);
      });
    } catch (error) {}
  };
  useEffect(() => {
    getAllStation();
  }, []);
  const handleLogin =()=>{
    setHideImageDiv(false);
    navigate("/login");
  }
  const handleChange = (field,value,name) => {
    debugger
    const updatedStationObj ={...stationObj,[field]:value,[`${field}Name`]:name};
    setStationObj(updatedStationObj);
    updateTravelDetails(updatedStationObj);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light nav-yellow  border-bottom border-top p-0">
        <div className="container">
          <a className="navbar-brand fs-4 fw-bold " href="#">
            <i
              className="fa fa-cart-shopping fs-4"
              style={{ color: "#f54242" }}
            ></i>
            <span className="text-white">Railway</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  text-center ">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-white  me-1" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-white  me-1" href="#" onClick={()=>navigate("/search")}>
                  Trains
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-white  me-1" href="#"  onClick={()=>navigate("/passenger")}>
                  Register
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold  text-white  me-1" href="#" onClick={()=>handleLogin()}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {hideImageDiv && (
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
              <div className=" text-black">
                <div className="">
                  <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-1">
                    Book Ticket
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <form className="mx-1 mx-md-4 pt-5">
                        <div className="row">
                          <div className="col-6">
                            <label className="form-label" for="form3Example1c">
                              From Station
                            </label>
                            <select
                              name=""
                              id="fromStation"
                              className="form-select"
                              onChange={(e) => {
                                const selectedOption = e.target.options[e.target.selectedIndex];
                                handleChange('fromStation', selectedOption.value, selectedOption.text);
                              }}
                            >
                              <option>Select City</option>
                              {stationList.map((station, index) => {
                                return (
                                  <option key={station.stationID} value={station.stationID}>
                                    {station.stationName}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-6">
                            <label className="form-label" for="form3Example1c">
                              To Station
                            </label>
                            <select
                              name=""
                              id="toStation"
                              className="form-select"
                              onChange={(e) => {
                                const selectedOption = e.target.options[e.target.selectedIndex];
                                handleChange('toStation', selectedOption.value, selectedOption.text);
                              }}
                            >
                              <option>Select City</option>
                              {stationList.map((station, index) => {
                                return (
                                  <option key={station.stationID} value={station.stationID}>
                                    {station.stationName}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="row pt-3">
                          <div className="col-6">
                            <label className="form-label">Date Of Travel</label>
                            <input
                              type="date"
                              id="travelDate"
                              className="form-control"
                              onChange={(e) => handleChange('travelDate',e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mt-4 mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={navigateTo}
                          >
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 pt-3 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={sampleImage}
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
