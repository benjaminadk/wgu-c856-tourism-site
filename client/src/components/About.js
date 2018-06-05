import React, { Component } from 'react'
import { Image, Grid, Row, Col } from 'react-bootstrap'
import Map from './Map'
import banner_about from '../images/banner_about-min.jpg'

class About extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div>
          <Image src={banner_about} style={styles.mainImage}/>
        </div>
        <div style={styles.overlay}>
          <h1 style={styles.headline}>About Us</h1>
        </div>
        <Grid>
          <Row style={styles.row}>
            <Col xs={12} md={6}>
              <h1>Information</h1>
              <p style={styles.fact}>Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture.</p>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col xs={12} md={6}>
              <h1>News</h1>
              <p style={styles.fact}>Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years.</p>
              <p style={styles.fact}>A brand new nine hole golf course will be operation by next year.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={styles.mapCol}>
              <h1>Map</h1>
              <Map/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainImage: {
    height: '85vh',
    width: '100vw',
    marginBottom: '10vh'
  },
  overlay: {
    position: 'absolute',
    top: '70vh',
    textAlign: 'center'
  },
  headline: {
    fontSize: 70,
    color: 'white',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  },
  fact: {
    fontSize: 16
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  mapCol: {
    height: '100vh'
  }
}

export default About