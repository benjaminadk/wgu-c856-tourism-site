import React, { Component } from 'react'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, Modal } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
import Homepage from './components/Homepage'
import Experience from './components/Experience'
import Travel from './components/Travel'
import About from './components/About'
import FAQ from './components/FAQ'

class App extends Component {

  state = {
    email: '',
    show: false,
    message: ''
  }

  handleEmail = () => {
    const { email } = this.state
    const re = /(.+)@(.+){2,}\.(.+){2,}/
    if(!re.test(email)) {
      this.setState({ show: true, message: 'Please enter a valid email' })
    } else {
      this.setState({ show: true, message: 'Thank you for signing up for our newsletter', email: '' })
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleClose = () => this.setState({ show: false })

  render() {
    return ([
      <BrowserRouter key='main'>
        <div>           
          <Navbar collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" style={styles.brand}>Taniti Island</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
              <NavDropdown eventKey={3} title="Experiences" id="basic-nav-dropdown" style={styles.navText}>
                  <MenuItem eventKey={3.1} style={styles.dropText}>
                    <Link to='/experience/0' style={styles.dropLink}>Family Fun</Link>
                  </MenuItem>
                  <MenuItem eventKey={3.2} style={styles.dropText}>
                    <Link to='/experience/1' style={styles.dropLink}>Romance</Link>
                  </MenuItem>
                  <MenuItem eventKey={3.3} style={styles.dropText}>
                    <Link to='/experience/2' style={styles.dropLink}>Outdoors</Link>
                  </MenuItem>
                  <MenuItem eventKey={3.4} style={styles.dropText}>
                    <Link to='/experience/3' style={styles.dropLink}>Art & Culture</Link>
                  </MenuItem>
                  <MenuItem eventKey={3.5} style={styles.dropText}>
                    <Link to='/experience/4' style={styles.dropLink}>Night Life</Link>
                  </MenuItem>
                </NavDropdown>
                <NavItem eventKey={1} href="/experience/5" style={styles.navText}>Lodging</NavItem>
                <NavItem eventKey={2} href="/experience/6" style={styles.navText}>Cuisine</NavItem>
                <NavItem eventKey={3} href="/travel" style={styles.navText}>Travel</NavItem>
                <NavItem eventKey={1} href="/about" style={styles.navText}>About Us</NavItem>
                <NavItem eventKey={2} href="/faq" style={styles.navText}>FAQ</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div style={styles.container}>
            <Switch>
              <Route exact path='/' component={Homepage}/>
              <Route path='/experience/:id' component={Experience}/>
              <Route path='/travel' component={Travel}/>
              <Route path='/about' component={About}/>
              <Route path='/faq' component={FAQ}/>
            </Switch>
          </div>
          <Navbar style={styles.footer}>
              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl 
                    type="text" 
                    name='email'
                    placeholder="Email Address" 
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>{' '}
                <Button onClick={this.handleEmail} bsStyle='info'>Sign Up For Newsletter</Button>
              </Navbar.Form>
              <Navbar.Text>Copyright &copy; 2018  /  Government of Taniti  /  Benjaminadk Digital Production</Navbar.Text>
              <div style={styles.icons}>
                <SocialIcon network='facebook' url='http://www.facebook.com' style={styles.icon}/>
                <SocialIcon network='twitter' url='http://www.twitter.com' style={styles.icon}/>
                <SocialIcon network='instagram' url='http://www.instagram.com' style={styles.icon}/>
              </div>
          </Navbar>
        </div>
      </BrowserRouter>,
      <Modal key='modal' show={this.state.show} onHide={this.handleClose} bsSize='sm'>
        <Modal.Header componentClass='h2' closeButton>
          <Modal.Title>Sign Up For Taniti Newletter</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.state.message}</Modal.Body>
        <Modal.Footer>
            <Button onClick={this.handleClose} bsStyle='info'>Close</Button>
          </Modal.Footer>
      </Modal>
    ])
  }
}

const styles = {
  brand: {
    fontSize: 30,
    marginRight: 100
  },
  navText: {
    fontSize: 24,
    marginRight: 10
  },
  dropText: {
    fontSize: 20
  },
  dropLink: {
    color: '#4f4f4f'
  },
  container: {
    marginTop: 50,
    minHeight: '90vh'
  },
  footer: {
    marginBottom: 0,
    height: '13vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icons: {
    marginLeft: '4vw'
  },
  icon: {
    marginRight: '2vw'
  }
}

export default App
