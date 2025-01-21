import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import logocodepapu from '../../assets/images/logo.png';

import oracleImg from '../../assets/images/svg-icon/oracle-original.svg';
import mysqlImg from '../../assets/images/svg-icon/mysql-original.svg';
import postgresqlImg from '../../assets/images/svg-icon/postgresql-original.svg';
import mariadbImg from '../../assets/images/svg-icon/mariadb-original.svg';
import mongodbImg from '../../assets/images/svg-icon/mongodb-original.svg';
import jiraImg from '../../assets/images/svg-icon/jira-original.svg';
import gradleImg from '../../assets/images/svg-icon/gradle-original.svg';
import mavenImg from '../../assets/images/svg-icon/maven-original.svg';
import gitImg from '../../assets/images/svg-icon/git-original.svg';
import svnImg from '../../assets/images/svg-icon/svn-original.svg';
import lombokImg from '../../assets/images/svg-icon/lombok-original.png';
import log4jImg from '../../assets/images/svg-icon/log4j-original.png';
import slf4jImg from '../../assets/images/svg-icon/slf4j-original.png';
import postmanImg from '../../assets/images/svg-icon/postman-original.svg';
import gitlabImg from '../../assets/images/svg-icon/gitlab-original.svg';
import jenkinsImg from '../../assets/images/svg-icon/jenkins-original.svg';
import eclipseImg from '../../assets/images/svg-icon/eclipse-original.svg';
import stsImg from '../../assets/images/svg-icon/sts-original.svg';
import vscodeImg from '../../assets/images/svg-icon/vscode-original.svg';
import intellijImg from '../../assets/images/svg-icon/intellij-original.svg';
import jasperImg from '../../assets/images/svg-icon/jasper-original.png';


import {
  backendSkills,
  frontendSkills,
} from "../../content_option";

const toolsData = [
  {
    label: "Databases",
    items: [
      { name: "Oracle", icon: <img src={oracleImg} alt="Oracle" width="40" height="40" /> },
      { name: "MySQL", icon: <img src={mysqlImg} alt="MySQL" width="40" height="40" /> },
      { name: "PostgreSQL", icon: <img src={postgresqlImg} alt="PostgreSQL" width="40" height="40" /> },
      { name: "MariaDB", icon: <img src={mariadbImg} alt="MariaDB" width="40" height="40" /> },
      { name: "MongoDB", icon: <img src={mongodbImg} alt="MongoDB" width="40" height="40" /> },
    ],
  },
  {
    label: "Development Tools",
    items: [
      { name: "Jira", icon: <img src={jiraImg} alt="Jira" width="40" height="40" /> },
      { name: "Gradle", icon: <img src={gradleImg} alt="Gradle" width="40" height="40" /> },
      { name: "Maven", icon: <img src={mavenImg} alt="Maven" width="40" height="40" /> },
      { name: "Git", icon: <img src={gitImg} alt="Git" width="40" height="40" /> },
      { name: "SVN", icon: <img src={svnImg} alt="SVN" width="40" height="40" /> },
      { name: "Lombok API", icon: <img src={lombokImg} alt="Lombok API" width="40" height="40" /> },
      { name: "Log4J", icon: <img src={log4jImg} alt="Log4J" width="40" height="40" /> },
      { name: "SLF4J", icon: <img src={slf4jImg} alt="SLF4J" width="40" height="40" /> },
      { name: "Postman", icon: <img src={postmanImg} alt="Postman" width="40" height="40" /> },
    ],
  },
  {
    label: "DevOps Tools",
    items: [
      { name: "GitLab", icon: <img src={gitlabImg} alt="GitLab" width="40" height="40" /> },
      { name: "Jenkins", icon: <img src={jenkinsImg} alt="Jenkins" width="40" height="40" /> },
    ],
  },
  {
    label: "IDEs",
    items: [
      { name: "Eclipse", icon: <img src={eclipseImg} alt="Eclipse" width="40" height="40" /> },
      { name: "STS", icon: <img src={stsImg} alt="STS" width="40" height="40" /> },
      { name: "VS Code", icon: <img src={vscodeImg} alt="VS Code" width="40" height="40" /> },
      { name: "IntelliJ", icon: <img src={intellijImg} alt="IntelliJ" width="40" height="40" /> },
      { name: "Jaspersoft Studio", icon: <img src={jasperImg} alt="Jaspersoft Studio" width="40" height="40" /> },
    ],
  },
];

export const Skills = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Skill's | code.papu</title>
          <meta name="description" content="code.papu" />
          <link rel="icon" href={logocodepapu} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Skill's</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Backend Skills</h3>
          </Col>
          <Col lg="7">
            {backendSkills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Frontend Skills</h3>
          </Col>
          <Col lg="7">
            {frontendSkills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp"> 
          <Col lg="12">
            {toolsData.map((section, index) => (
              <div key={index} className="mb-4">
                <h4 className="color_sec py-4">{section.label}</h4>
                <div className="d-flex flex-wrap justify-content-start" style={{ flexWrap: "nowrap", overflowX: "auto" }}>
                  {section.items.map((item, idx) => (
                    <Button
                      key={idx}
                      variant="outline-secondary"
                      className="m-2"
                      style={{ minWidth: "150px", whiteSpace: "nowrap" }}
                    >
                      <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                        {item.icon}
                      </span>
                      {item.name}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
