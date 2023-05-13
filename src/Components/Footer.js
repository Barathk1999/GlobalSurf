import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {

    return(
        <div className="container-fluid my-5">
        <footer className="text-center text-lg-start text-white" >
          <div className="container-fluid p-4 pb-0" style={{backgroundColor: '#df4759'}}>
            <section className>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mt-3" style={{ "margin-left": "50px", "padding-left": "50px"}}>
                  <h6 className="text-uppercase mb-4 font-weight-bold" style={{ "padding-left": "50px","font-size": "30px"}}>
                    Quick Links
                  </h6>
                  <p>
                    <a className="text-white text-decoration-none">Enquire Now</a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">Apply Now</a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">Student Portal</a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">Faculty Portal</a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">About Aurak</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 " style={{ "margin-top": "55px", "margin-left": "-100px"}}>
                  <p>
                    
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">LeaderShip</a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">Alumni</a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">Campus Directory</a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">Library</a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">Academic Calendar</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold" style={{ "font-size": "25px"}}>
                    Study at AURAK
                  </h6>
                  <p>
                    <a className="text-white text-decoration-none">Bachelors</a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">Masters</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3" style={{backgroundColor: '#ffffff', color:"black"}}>
                  <h6 className="text-uppercase mb-4 font-weight-bold" style={{ "font-size": "25px"}}>Aurak Campus</h6>
                  <h4>AURAK</h4>
                  <p><i className="fas fa-home mr-3" /> Ras Al Khaimah, UAE <br /> PO Box: 10021</p>
                  <p><i className="fas fa-envelope mr-3" /> info@gmail.com</p>
                  <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                </div>
              </div>
            </section>
            <hr className="my-3" />
            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <section className="mb-4">
                {/* Facebook */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                {/* Twitter */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
                {/* Google */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
                {/* Instagram */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
                {/* Linkedin */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
            
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
            </section>
                </div>
                  <div className="p-3">
                  Copyright © 2022 American University of Ras Al Khaimah. All rights reserved
                  </div>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    );
}
export default Footer;
