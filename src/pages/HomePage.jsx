import React, { useState, useEffect, useRef } from "react";
import car1 from "../assets/images/car1.png";

import googlePlay from "../assets/images/googleBlack.png";
import applePlay from "../assets/images/blackApple.png";

import screenshot1 from "../assets/images/screenshot1.png";
import screenshot2 from "../assets/images/screenshot2.png";
import screenshot3 from "../assets/images/screenshot3.png";
import screenshot4 from "../assets/images/screenshot4.jpg";
import screenshot5 from "../assets/images/screenshot5.png";

import GearBenner from "../assets/images/Gear-Benner.jpg";

import whyCar from "../assets/images/chooseCar.png";

import downloadImg from "../assets/images/downloadApp.jpg";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Users, GaugeCircle, Wind, DoorOpen as Door } from "lucide-react";

import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

import yellow_line from "../assets/images/yellow-line.png"

import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import ApiService from "../services/ApiService";


const HomePage = () => {
  const navigate = useNavigate();
  const [scrollX, setScrollX] = useState(0);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const moveX = scrollPosition * 0.5;
      setScrollX(moveX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;
      console.log(totalDistance);
      const percentage = distance / totalDistance;
      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
    };

    scroll();
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  // Fetch cars data from API
  const fetchCars = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await ApiService.get('/getCars?page=1');
      
      if (response.data.status && response.data.data.cars) {
        setCars(response.data.data.cars);
      } else {
        setError('Failed to fetch cars data');
      }
    } catch (err) {
      console.error('Error fetching cars:', err);
      setError('Failed to load cars. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);


  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  return (
    <>
      <div className="img1">
        <Header />
        {/* Banner Sec */}
        <div className="header-banner bg-gradient" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12">
                <div className="header-txt1">
                  <div className="position-relative">
                    <h1 data-aos="fade-up" data-aos-delay="200" className="heading-texti">
                    Unlock New
                      <span className="mx-2">Roads</span>
                      <img
                        src={yellow_line}
                        alt="Yellow Line"
                        className="yellow_border"
                        data-aos="fade-right"
                        data-aos-delay="600"
                      />
                    </h1>
                  </div>
                  <p data-aos="fade-up" data-aos-delay="400" style={{ color: "rgba(129, 129, 129, 1)" }}>
                    <strong>Your car rental, your way </strong> — book in
                    seconds with <br className="none" /> the Gear app!
                  </p>
                </div>
                <div className="" data-aos="fade-up" data-aos-delay="600">
                  <a href="#downloadApp">
                  <button
                    type="submit"
                    className="btn fw-bold py-2 shadow"
                    style={{
                      backgroundColor: "#FEF233",
                      color: "black",
                      borderRadius: "10px",
                      width: "150px",
                    }}
                  >
                    Get Started
                  </button>
                  </a>
                </div>
              </div>
              {/* Right Side */}
              <div className="col-md-7 col-12">
                <div className="bg-clr">
                  <div className="bg-1"></div>
                  <div className="bg-2"></div>
                  <div className="bg-3"></div>
                  <div className="bg-4"></div>
                </div>
                <div className="carImg">
                  <img src={car1} alt="" data-aos="fade-left" data-aos-delay="400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it Work */}
      <div className="container" id="howitwork">
        <div className="text-center" data-aos="fade-up">
          <p className="text-secondary">How It Work</p>
          <h2>Rent with following 3 working steps</h2>
        </div>
        <div className="row my-5">
          <div class="col-md-4 col-sm-12" data-aos="fade-up" data-aos-delay="200">
            <div class="deals">
              <div className="row">
                <div className="col-12">
                  <div class="icon-1 text-center">
                    <i class="bi bi-geo-alt-fill fs-1 shadow"></i>
                  </div>
                </div>
                <div className="col-12 text-center mt-5">
                  <h6>Choose Location</h6>
                </div>
                <div className="col-12 text-center text-secondary">
                  <p style={{ fontSize: "16px" }}>
                    Choose your location and find your best car.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 rentSteps" data-aos="fade-up" data-aos-delay="400">
            <div class="deals">
              <div className="row">
                <div className="col-12">
                  <div class="icon-1 text-center">
                    <i class="bi bi-calendar2-range-fill shadow fs-1"></i>
                  </div>
                </div>
                <div className="col-12 text-center mt-5">
                  <h6>Pick-up Date</h6>
                </div>
                <div className="col-12 text-center text-secondary">
                  <p style={{ fontSize: "16px" }}>
                    Select your pick up date and time to book your car.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12" data-aos="fade-up" data-aos-delay="600">
            <div class="deals">
              <div className="row">
                <div className="col-12">
                  <div class="icon-1 text-center">
                    <i class="bi bi-car-front-fill fs-1 shadow"></i>
                  </div>
                </div>
                <div className="col-12 text-center mt-5">
                  <h6>Book your car</h6>
                </div>
                <div className="col-12 text-center text-secondary">
                  <p style={{ fontSize: "16px" }}>
                    Book your car and w will deliver it to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rental Deals Section */}

      <div className="container top" id="rentalDeals" data-aos="fade-up">
        <div className="text-center">
          <p className="text-secondary">Rental Deals</p>
          <h2>Most Popular Rental Deals this week</h2>
        </div>

        <div className="container-fluid py-5">
          <div className="container">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3.5,
                },
              }}
              className="car-swiper"
            >
              {loading ? (
                <div className="col-12 text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-3 text-muted">Loading cars...</p>
                </div>
              ) : error ? (
                <div className="col-12 text-center py-5">
                  <div className="alert alert-warning" role="alert">
                    <h5 className="alert-heading">Unable to load cars</h5>
                    <p>{error}</p>
                    <button 
                      className="btn btn-outline-primary btn-sm" 
                      onClick={fetchCars}
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              ) : cars.length === 0 ? (
                <div className="col-12 text-center py-5">
                  <div className="alert alert-info" role="alert">
                    <h5 className="alert-heading">No cars available</h5>
                    <p>No rental cars are currently available.</p>
                  </div>
                </div>
              ) : (
                cars.map((car) => (
                  <SwiperSlide key={car._id}>
                    <div
                      className="card h-100 shadow-sm"
                      style={{
                        borderRadius: "15px",
                        width: "100%",
                        minHeight: "400px",
                        maxHeight: "400px",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <img
                        src={car.images && car.images.length > 0 ? car.images[0] : "https://via.placeholder.com/300x200?text=No+Image"}
                        className="card-img-top"
                        alt={car.title}
                        style={{
                          borderTopLeftRadius: "15px",
                          borderTopRightRadius: "15px",
                          height: "200px",
                          width: "100%",
                          objectFit: "cover",
                          flexShrink: 0
                        }}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                        }}
                      />
                      <div 
                        className="card-body p-3"
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          overflow: "hidden"
                        }}
                      >
                        <div>
                          <div className="d-flex align-items-center mb-2">
                            <FaStar className="text-warning" size={16} />
                            <span className="ms-1 fs-6">
                              {car.avg_rating || 0}
                            </span>
                            <span className="text-secondary ms-1 fs-6">
                              ({car.total_trips || 0} Trips)
                            </span>
                          </div>
                          
                          <h5 className="card-title mb-1" style={{ 
                            fontSize: "0.95rem", 
                            lineHeight: "1.2",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            marginTop: "10px"
                          }}>
                            {car.title}
                          </h5>
                          
                          {car.company && car.company.length > 0 && (
                            <div className="mb-1">
                              <small className="text-muted" style={{ fontSize: "0.7rem" }}>
                                <strong>Company:</strong> {car.company[0].company_name}
                              </small>
                            </div>
                          )}
                          
                          <div className="mb-2">
                            <small className="text-muted" style={{ 
                              fontSize: "0.7rem", 
                              lineHeight: "1.2",
                              height: "2.4rem",
                              overflow: "hidden",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical"
                            }}>
                              <strong>Location:</strong> {car.location}
                            </small>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-between align-items-center border-top pt-2">
                          <div>
                            <span className="h5 mb-0">AED {car.day_price}</span>
                            <span className="text-muted small">/day</span>
                          </div>
                          {car.day_price_with_fee && car.day_price_with_fee !== car.day_price && (
                            <div className="text-end">
                              <small className="text-muted d-block" style={{ fontSize: "0.7rem" }}>Total with fees</small>
                              <span className="h6 text-primary mb-0">AED {car.day_price_with_fee}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container my-5 bottom" id="whyChooseUs">
        <div className="row">
          <div className="col-md-6 starMap-img">
            <img
              src={whyCar}
              alt=""
              className="mt-5"
              width={"100%"}
              data-aos="fade-left"
            />
          </div>
          {/* Right Side */}
          <div className="col-md-6">
            <div className="heading">
              <p className="text-secondary">Why Choose Us</p>
              <h2>We offer the best Experience</h2>
              <h2>with our rental deals</h2>
            </div>
            <div className="details">
              <div className="det-1 mt-5">
                <h5>Best price guaranteed</h5>
                <p className="text-secondary">
                  Find a lower price? We will refund you 100% of the difference.
                </p>
              </div>
              <div className="det-2 mt-5">
                <h5>Experience driver</h5>
                <p className="text-secondary">
                  Don't have a driver? Don't worry, we have many experience
                  driver for you.
                </p>
              </div>
              <div className="det-3 mt-5">
                <h5>24-hour car delivery</h5>
                <p className="text-secondary">
                  Book your car anytime and I will deliver it directly to you.
                </p>
              </div>
              <div className="det-4 mt-5">
                <h5>24/7 technical support</h5>
                <p className="text-secondary">
                  Have a question? Contract Carentall support anytime when you
                  have a problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mobile App */}
      <div className="container my-5 top" id="screenshot">
        <div className="text-center mb-4" data-aos="fade-up">
          <p className="text-secondary">Our Mobile App</p>
          <h2>Awesome Screenshots</h2>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2 screenshots">
            <img
              src={screenshot1}
              style={{ opacity: "55%" }}
              alt=""
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>
          <div className="col-md-2 screenshots">
            <img
              src={screenshot2}
              style={{ opacity: "55%" }}
              alt=""
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </div>
          <div className="col-md-2 screenshots filter mt-4">
            <img src={screenshot3} alt="" data-aos="fade-up" data-aos-delay="600" />
          </div>
          <div className="col-md-2 screenshots mt-4">
            <img
              src={screenshot4}
              style={{ opacity: "55%" }}
              alt=""
              data-aos="fade-up"
              data-aos-delay="800"
            />
          </div>
          <div className="col-md-2 screenshots">
            <img
              src={screenshot5}
              style={{ opacity: "55%" }}
              alt=""
              data-aos="fade-up"
              data-aos-delay="1000"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      {/* Download our App */}
      <div className="container download-App-main" id="downloadApp">
        <div className="row downloadApp">
          <div className="col-md-12">
            <h1 className="fw-light">
              Download the <span className="fw-bold ps-0">Gear</span> app
            </h1>
            <p>
              Book rental cars in minutes with the Gear app – your all-in-one
              <br />
              car rental solution in the UAE. Browse, compare, and reserved
              <br />
              vehicles from top rental partners, all from your phone.
            </p>

            <div
              className="btn-download-app"
              style={{ padding: "40px 0 0 141px" }}
            >
              <a
                href="https://apps.apple.com/ae/app/gear-hire-car/id6747331842"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={applePlay}
                  style={{ width: "170px", height: "63x", marginRight: "10px" }}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.devicebee.gear"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googlePlay}
                  style={{ width: "203px", height: "63px" }}
                />
              </a>
            </div>
          </div>
          <img src={downloadImg} alt="" className="ss" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
