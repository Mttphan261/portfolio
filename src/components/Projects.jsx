import { useState, React } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Projects() {
  return (
    <>
      <h2 className="section-header">Projects</h2>
      <div className="project-wrapper">
        <Row sm={1} md={3}>
          <Col>
            <Card className="project-card">
              <Card.Img src="https://raw.githubusercontent.com/Mttphan261/portfolio/main/.github/imgs/Artboard%201.png" />
              <Card.Body className="project-body">
                <Card.Title>The Street Fighter Lab Assistant</Card.Title>
                <Card.Text>
                  Resource for Street Fighter players, allowing them to track
                  and enhance their training by accessing character information,
                  movelists, user-submitted videos, and personalized notes.
                </Card.Text>
                <div className='project-skills'>
                <span className="project-skill">
                    React
                </span>
                <span className="project-skill">
                    React-Bootstrap
                </span>
                <span className="project-skill">
                    Flask
                </span>
                <span className="project-skill">
                    Flask-Restful
                </span>
                <span className="project-skill">
                    SQLAlchemy
                </span>
                <span className="project-skill">
                    PostgreSQL
                </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-card">
              <Card.Img src="https://raw.githubusercontent.com/Mttphan261/portfolio/main/.github/imgs/gunplapal.png" />
              <Card.Body>
                <Card.Title>Gunpla Pal</Card.Title>
                <Card.Text>
                  Dedicated database and collection tracker for Gunpla
                  enthusiasts. A comprehensive collection of Gunpla kits for
                  users to explore, track and manage in their collection.
                </Card.Text>
                <div className='project-skills'>
                <span className="project-skill">
                    React
                </span>
                <span className="project-skill">
                    React-Bootstrap
                </span>
                <span className="project-skill">
                    Flask
                </span>
                <span className="project-skill">
                    Flask-Restful
                </span>
                <span className="project-skill">
                    SQLAlchemy
                </span>
                <span className="project-skill">
                    PostgreSQL
                </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-card">
              <Card.Img src="https://raw.githubusercontent.com/Mttphan261/portfolio/main/.github/imgs/bitesnbrews.png" />
              <Card.Body>
                <Card.Title>Bites & Brews</Card.Title>
                <Card.Text>
                  Recipe/Cocktail site that allows users to browse meal and
                  cocktail recipes, complete with their ingredients list and
                  directions. Allows for favoriting and submitting of recipes as
                  well as a pairing recommendation.
                </Card.Text>
                <div className='project-skills'>
                <span className="project-skill">
                    React
                </span>
                <span className="project-skill">
                    React-Bootstrap
                </span>
                <span className="project-skill">
                    Flask
                </span>
                <span className="project-skill">
                    Flask-Restful
                </span>
                <span className="project-skill">
                    SQLAlchemy
                </span>
                <span className="project-skill">
                    PostgreSQL
                </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div> 
    </>
  );
}

export default Projects;
