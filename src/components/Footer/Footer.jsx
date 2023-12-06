import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
// Socials
import { FaSquareGithub } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";

import { Link } from 'react-router-dom';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

import "./footer.scss";

export default function Footer() {
  return (
    <div style={{ minHeight: '110vh', position: 'relative', height: '100px'}}>
        <MDBFooter className='bg-secondary text-white text-center' style={{ position: 'absolute', bottom: 0, width: '100%' }}>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Content</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
            </p>
          </MDBCol>
          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            {/* <h5 className='text-uppercase'>Links</h5> */}
            <ul className='list-unstyled mb-0'>
              <li>
                <Link to="/Products" className='text-white'>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className='text-white'>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className='text-white'>
                  Contact
                </Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Social</h5>
            <ul className='list-unstyled' style={{fontSize: '30px'}}>
              <li>
                <Link className='text-black' to="https://github.com/DenisFR2727">
                    <FaSquareGithub />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com">
                    <SiLinkedin/>
                </Link>
              </li>
              <li>
               <Link to="https://www.instagram.com/" className='text-white'>
                    <GrInstagram />
               </Link>
              </li>
              <li>
               <Link to="https://twitter.com/?lang=uk" className='text-black'>
                    <RiTwitterXLine />
               </Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
       <Link className='text-white my-name' to="https://github.com/DenisFR2727">
              Denis
       </Link>
      </div>
    </MDBFooter>
  </div>  
  );
}