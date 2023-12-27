import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medical from "../../Assets/Projects/brain.gif";
import text from "../../Assets/Projects/giphy.gif";
import churn from "../../Assets/Projects/churn_c.gif";
import Multiple from "../../Assets/Projects/disease.gif";
//import suicide from "../../Assets/Projects/suicide.png";
//import leaf from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Multiple}
              isBlog={false}
              title="Disease-Prediction"
              description="Multiple Disease Prediction Project is done by using various Machine learning Models like Logistic Regression and Support vector machine.This is used for Predicting disease like diabetes and heart using  various features."
              ghLink="https://github.com/ruchi-04/Multiple-Disease-Prediction"
              demoLink="https://multiple-disease-prediction-by-ruchi.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medical}
              isBlog={false}
              title="Brain Segmentation"
              description="using opencv library in MRI images this Project Predicts that whether person have tumor or not.I have used Support vector Machine and it gave us 97.5% Accuracy"
              ghLink="https://github.com/ruchi-04/Brain_Segmentation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text Generation"
              description="used the stroies dataset from kaggle and using nltk library, Markov chain model I created this project to create small sentence using different tokenized words.Which helps to create small stories and novels on the basis of frequency of different words."
              //ghLink="https://github.com/soumyajit4419/Editor.io"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn}
              isBlog={false}
              title="Customer_churn-Predition"
              description="A churn ML model is a machine learning model that predicts customer churn, which is the loss of customers or subscribers. The model uses supervised learning methods to analyze various attributes of customers, such as their lifetime, activity, consumption, billing, and service calls3. The model aims to identify the customers who are most likely to churn and help businesses to retain them with effective strategies"
              ghLink="https://github.com/ruchi-04/customer_churn_prediction"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
