import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { projects } from "../../content_option";
import logocodepapu from '../../assets/images/logo.png';

export const Project = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Projects | code.papu</title>
          <meta name="description" content="code.papu" />
          <link rel="icon" href={logocodepapu} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My Project's</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h4 className="color_sec py-4">{project.name}</h4>
                <div className="d-flex flex-wrap justify-content-start" style={{ flexWrap: "nowrap", overflowX: "auto" }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline-secondary"
                      className="m-2 cus-btn"
                      style={{ minWidth: "150px", whiteSpace: "nowrap" }}
                    >
                      <i className="bi bi-globe" style={{ marginRight: "8px" }}></i>
                      {project.name}
                      <i className="bi bi-arrow-right-circle-fill" style={{ marginLeft: "12px" }}></i>
                    </Button>
                  </a>
                </div>
                <p>{project.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
