import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchOutlined from '@mui/icons-material/SearchOutlined'

//import GlobalOutlined from '@ant-design/icons';
import { Headers } from "./styles/style";
import React from "react";
//import "./Header.css";


const Header = () => {

    function smoothScrollAbout(){
        document.querySelector("#about").scrollIntoView({
            behavior: 'smooth'
        });
    }
    function smoothScrollProgram(){
        document.querySelector("#Program").scrollIntoView({
            behavior: 'smooth'
        });
    }
    return(
        <div style={{position:"sticky", top: "0","z-index": "999"}}>
            <div style={{backgroundColor: "white"}}>
      <Headers >
        <img
          src="https://aurak.ac.ae/en/wp-content/uploads/2016/06/aurak-logo-clean.jpg"
          width={100}
          height={80}
          alt="American University of Ras Al Khaimah UAE"
          id="logo"
          data-height-percentage={54}
          data-actual-width={390}
          data-actual-height={80}
        />
        <h1 style={{color:"df4759"}}>AURAK</h1>

        <p>
        <a href='' style={{color: "black"}}><LanguageIcon /></a>
        </p>
        
        <p>
        <a href='' style={{color: "black" , textDecoration: "none" }}><PersonOutlineIcon /> Student portal</a>
        </p>

        <p>
        <a href='' style={{color: "black", textDecoration: "none"}}>{" "}
          <PersonOutlineIcon />
          Faculty portal</a>
        </p>
        <p>
        <button type="button" className="btn">Enquire Now</button>
        </p>
        <p>
        <button type="button" className="btn">Apply Now</button>
        </p>
      </Headers>
    </div>
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger" style={{"border-bottom-left-radius": "30px","border-bottom-right-radius": "30px"}}>
          <div className="container">
            <a className="navbar-brand" style= {{"margin-right": "35px"}} onClick={smoothScrollAbout} href="#ho">About</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <a className="navbar-brand" style= {{"margin-right": "35px"}} onClick={smoothScrollProgram} href="#Pro">Programs</a>
                </li>
                <li className="nav-item" >
                <a className="navbar-brand" style= {{"margin-right": "35px"}} href="#">Join Aurak</a>
                </li>
                <li className="nav-item">
                <a className="navbar-brand" style= {{"margin-right": "35px"}}  href="#">Studen Support</a>
                </li>
                <li className="nav-item">
                <a className="navbar-brand" style= {{"margin-right": "35px"}}  href="#">Alumni</a>
                </li>
                <li className="nav-item">
                <a className="navbar-brand" style= {{"margin-right": "35px"}}  href="#">Teaching</a>
                </li>
                <li className="nav-item">
                <a className="navbar-brand" style= {{"margin-right": "35px"}}  href="#">Reasearch</a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                    <a className="nav-link"n href="#">Media</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"  href="#">Contact</a>
                    </li>  
                    <li className="nav-item" style= {{"padding-top": "10px"}}>
                    <a className="searchIcon"  href="#" style= {{ "color":"black","background-color": "white", "border-radius": "12px"}}><SearchOutlined /></a>
                    </li> 
                </ul>
              
            </div>
          </div>
        </nav>
      </div>
    );
}
export default Header;
