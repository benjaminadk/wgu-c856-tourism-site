import React, { Component } from 'react'
import { Image, Grid, Row, Col, Panel } from 'react-bootstrap'
import banner_family from '../images/banner_family-min.jpg'
import family_1 from '../images/1_family-min.jpg'
import family_2 from '../images/2_family-min.jpg'
import banner_romance from '../images/banner_romance-min.jpg'
import romance_1 from '../images/1_romance-min.jpg'
import romance_2 from '../images/2_romance-min.jpeg'
import banner_outdoors from '../images/banner_outdoors-min.jpg'
import outdoors_1 from '../images/1_outdoors-min.jpg'
import outdoors_2 from '../images/2_outdoors-min.jpg'
import banner_culture from '../images/banner_culture-min.jpg'
import culture_1 from '../images/1_culture-min.jpg'
import culture_2 from '../images/2_culture-min.jpg'
import banner_night from '../images/banner_night-min.jpg'
import night_1 from '../images/1_night-min.jpg'
import night_2 from '../images/2_night-min.jpg'
import banner_lodging from '../images/hotel_over-min.jpg'
import lodging_1 from '../images/1_lodging-min.jpg'
import lodging_2 from '../images/2_lodging-min.jpg'
import banner_cuisine from '../images/banner_cuisine-min.jpg'
import cuisine_1 from '../images/cuisine-min.jpg'
import cuisine_2 from '../images/2_cuisine-min.jpg'

const DATA = [
  { title: 'Family Fun', banner: banner_family, photo1: family_1, photo2: family_2, header1: 'Snorkeling', header2: 'Bowling', 
    message1: 'Past the beautiful beaches you can explore the ocean snorkeling. Tropical fish, exotic vegetation and crystal clear ocean water will fascinate the family for hours at an affordable price. The water temperature is 74F all year round.',
    message2: 'Cap off a day outdoors with a night of bowling. There are many food options as well as adult beverages for parents. The Tanitian Bowling Club contains over 30 lanes and as well as a video game arcade. Open until midnight daily.' },
  { title: 'Romance', banner: banner_romance, photo1: romance_1, photo2: romance_2, header1: 'Honeymoon', header2: 'Weddings',
    message1: 'There is no better place to celebrate the beauty of love than Taniti. Taniti was made for lovers. Long walks on white sand beaches and alone time with that special someone. Honeymoon in Taniti and make memories that will last until your second honeymoon here.',
    message2: 'Weddings are also popular her on Taniti. Choose between an authentic Tanitian ceremony or any traditional religion.  The biggest challenge will be picking a location, because everywhere it perfect. Make yours a destination wedding and be the envy of your friends.' },
  { title: 'Outdoors', banner: banner_outdoors, photo1: outdoors_1, photo2: outdoors_2, header1: 'Volcanos', header2: 'Rainforest',
    message1: 'For the adventurous traveler, we have Mount Taniti, a steep, semi-active volcano. Plan for a full days hike totaling 16 miles round trip. The view from the top makes it totally worth the effort to get there. Indigenous tribes beleive god lives at the summit.',
    message2: 'Exploring the tropical rainforest that makes up most of the island, could take an entire lifetime. Waterfalls, rare species and a massive zip line make up the highlights of this trek. Do not miss the rocky beaches. The formations are amazing and they are usually quiet.' },
  { title: 'Art & Culture', banner: banner_culture, photo1: culture_1, photo2: culture_2, header1: 'Museums', header2: 'Art Galleries',
    message1: 'Get a taste of local history at the Tanitian Museum. The culture dates back thousands of years and there are still many indigenous natives on the island. Highlights of the museum tour include the ancient tools, masks, sculptures, weapons and handmade wooden canoes.',
    message2: 'If you are looking for an item to remember your Tanitian vacation head over to one of our local art galleries. Local artists capture the stunning beauty of their surroundings with the paint brush. Even if you are not in the market for a piece, stop by a take a look.' },
  { title: 'Night Life', banner: banner_night, photo1: night_1, photo2: night_2, header1: 'Microbrewery', header2: 'Night Clubs',
    message1: 'Visit Taniti Microbrewery for a wide variety of delicous craft beers. They offer over a dozen brews and come up with seasonal specialties. We reccommend the sampler tray to get a taste of each flavor. Taniti Microbrewery also sells six packs and special order kegs.',
    message2: 'After a relaxing day in the sun, let loose at our brand new nightclub. Expect the latest in club beats from a full time DJ and top of the line tropical mix drinks. Call ahead to reserve a VIP or private room if you are a large party celebrating a special occasion.' },
  { title: 'Lodging', banner: banner_lodging, photo1: lodging_1, photo2: lodging_2, header1: 'Location', header2: 'Luxury',
    message1: 'Located in the heart of Taniti City, this four star resort is in the perfect spot for both business and pleasure. Whether you are visiting with your family of five, on your honeymoon or here by yourself for work, our hotel has all the modern ammenities to meet your needs.',
    message2: 'No expense has been spared and no detail has gone unnoticed in the design of this resort. The sheets are top of the line, the televisions are top of the line, the fitness center is top of the line, and most importantly of 24 hour, around the clock service is top of the line.'},
  { title: 'Cuisine', banner: banner_cuisine, photo1: cuisine_1, photo2: cuisine_2, header1: 'Local Cuisine', header2: 'Home Cooking',
    message1: 'Taniti is world reknown for its delicous fresh seafood. Many of the eleven local restaurants serve traditional fish and rice dishes. Not only do these meal taste amazing, they are also super healthy. While on vacation here you cannot miss out on a plate of local Ahhi tuna.',
    message2: 'Sometimes a taste of home is what is in order. Taniti has three American style establishments to satisfy this demand. For those vacationers that wish to cook there own meals, our supermarkets are full service and remain open 24 hours a day. There is something for everyone.'}
]

class Experience extends Component {
  render() {
    const { id } = this.props.match.params
    return(
      <div style={styles.container}>
        <div>
          <Image style={styles.mainImage} src={DATA[id].banner}/>
        </div>
        <div style={styles.overlay}>
          <h1 style={styles.headline}>{DATA[id].title}</h1>
        </div>
        <Grid>
          <Row style={styles.medRow}>
            <Col xs={12} md={6} style={styles.medCol}>
              <Image src={DATA[id].photo1} style={styles.medImage} />
            </Col>
            <Col xs={12} md={6} style={styles.medCol}>
              <Panel style={styles.medPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.link}>{DATA[id].header1}</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={styles.type}>{DATA[id].message1}</Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col xs={12} md={6} style={styles.medCol}>
              <Image src={DATA[id].photo2} style={styles.medImage} />
            </Col>
            <Col xs={12} md={6} style={styles.medCol}>
              <Panel style={styles.medPanel}>
                <Panel.Heading>
                  <Panel.Title style={styles.link}>{DATA[id].header2}</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={styles.type}>{DATA[id].message2}</Panel.Body>
              </Panel>
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
  medRow: {
    marginBottom: '10vh'
  },
  medCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  medImage: {
    height: '40vh',
    width: '50vh'
  },
  medPanel: {
    width: '50vh',
    textAlign: 'justify'
  },
  link: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  row: {
    marginBottom: '10vh'
  },
  type: {
    fontSize: 16
  }
}

export default Experience