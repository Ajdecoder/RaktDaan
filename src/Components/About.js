import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';

export default function About() {
  return (
    <>
      <section className="article4 cid-u6jFP9tOnx" id="about-us-4-u6jFP9tOnx">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={12} lg={6} className="image-wrapper">
              <img
                className="w-100"
                src="https://m.economictimes.com/thumb/msid-83502809,width-1200,height-900,resizemode-4,imgsize-353228/blood-donation_istock.jpg"
                style={{ borderRadius: "45px" , marginTop: "6rem" , height: "37rem"}}
                alt="About Us"
              />
            </Col>
            <Col xs={12} md={12} lg>
              <div className="text-wrapper align-left">
                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2 animate__animated animate__delay-1s animate__fadeIn">
                  <strong>Blood Bank Heroes </strong>
                </h1>
                <Card>
                  <Card.Body className=' border border-2 '>
                    <Card.Text className=" rounded-4 bg-danger p-5 mbr-text mbr-fonts-style mb-3 display-7 animate__animated animate__delay-1s animate__fadeIn">
                      Welcome to the world of life-saving superheroes at Blood Bank Heroes! We are a team of passionate individuals dedicated to making a difference in the world by connecting donors with those in need.
                    </Card.Text>
                    <Card.Text className="rounded-4 bg-danger p-5 mbr-text mbr-fonts-style mb-3 display-7 animate__animated animate__delay-1s animate__fadeIn">
                      Our mission is simple yet powerful: to ensure that no one faces a blood shortage in times of crisis. With cutting-edge technology and a heart for humanity, we strive to save lives one donation at a time.
                    </Card.Text>
                    <Card.Text className="rounded-4 bg-danger p-5 mbr-text mbr-fonts-style mb-3 display-7 animate__animated animate__delay-1s animate__fadeIn">
                      Meet our extraordinary team of doctors, tech wizards, and everyday heroes who work tirelessly behind the scenes to make the magic happen. Join us in our quest to be the heroes the world needs!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
