import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <div className="h-[60vh] w-[100vw] bg-[#8E99AA] relative flex flex-col ">
        <div className="h-[50%] w-[100vw] pl-[80px] pt-[80px]">
          <div className="h-[50px] w-[400px]">Logo</div>
          <p className="h-[100px] w-[350px] text-[16px] font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo, imperdiet in,aliquam sit amet, feugiat eu, orci.</p>
        </div>
        <div className="h-[50%] w-[100vw] relative flex flex-col items-center justify-end pb-[30px]">
          <div className="h-[80px] w-[300px] flex flex-row justify-between">
            <div className="h-[50px] w-[50px] cursor-pointer group inline-block relative hover:text-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-110">
                <FontAwesomeIcon icon={faSquareXTwitter} style={{ color: "#000000" }} />
            </div>
            <div className="h-[50px] w-[50px] cursor-pointer group inline-block relative hover:text-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-110">
                <FontAwesomeIcon icon={faSquareFacebook} style={{color: "#000000",}} />
            </div>
            <div className="h-[50px] w-[50px] cursor-pointer group inline-block relative hover:text-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-110">
                <FontAwesomeIcon icon={faSquareInstagram} style={{color: "#000000",}} />
            </div>
            <div className="h-[50px] w-[50px] cursor-pointer group inline-block relative hover:text-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-110">
                <FontAwesomeIcon icon={faLinkedin} style={{color: "#000000",}} />
            </div>

          </div>
          <div className="h-[30px] w-[750px] flex flex-row justify-around text-[14px] font-normal cursor-pointer">
            <p>About Us</p>
            <p>Terms of Use</p>
            <p>Legal Notic</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    )
  }

  export default Footer;