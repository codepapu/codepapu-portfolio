import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";  // Import Button here
import { FaDownload } from "react-icons/fa";
import resume from '../../assets/download/resume.pdf';
import logocodepapu from '../../assets/images/logo.png';

import {
  getData,
  ajdData,
} from "../../content_option";

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | code.papu</title>
          <meta name="description" content="code.papu" />
          <link rel="icon" href={logocodepapu} />
        </Helmet>
        
        {/* Row for Experience label and Download button */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">Experience</h1>
            <h3>
              <a
                href={resume}
                download="code.papu-resume.pdf" // Set the desired filename here
                className="d-flex align-items-center"
                style={{ textDecoration: "none" }} // Remove underline
              >
                Resume
                <FaDownload className="mr-2" style={{ fontSize: "1.5rem" }} />
              </a>
            </h3>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* First Experience Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h4>{getData.date}</h4>
            <h3>{getData.title}</h3>
            <h6>{getData.company}</h6>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{getData.aboutme}</p>
            </div>
          </Col>
        </Row>

        {/* Second Experience Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h4>{ajdData.date}</h4>
            <h3>{ajdData.title}</h3>
            <h6>{ajdData.company}</h6>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{ajdData.aboutme}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
