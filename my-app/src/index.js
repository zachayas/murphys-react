import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List} from 'semantic-ui-react';

const src1 ='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'
const src2="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"

class TopMenu extends React.Component{
  render() {
    return(
        <Menu borderless className="topmenu">
        <Container>
          <Image src={src1}/>
          <Menu.Item position='right'>Home</Menu.Item>

          <Dropdown item text="About Us" icon="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>Lol </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>St. Patrick Day</Menu.Item>

          <Dropdown item text="Menus" icon="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>Food Lol </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>Bars</Menu.Item>

          <Menu.Item Icon='search'></Menu.Item>

        </Container>
        </Menu>
    )
  }
}

class MiddleSection extends React.Component{
  render(){
    const gstyle = {height: "500px"};
    return(
        <div class="murphys-background">
          <Container>
            <Grid columns={2} style={gstyle} verticalAlign="middle" centered>
              <Grid.Row>

              <Grid.Column>
                <Image src={src2}/>
              </Grid.Column>

                <Grid.Column>
                  <h3>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</h3>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (

        <Grid columns={3} centered className="footer-background">

          <Grid.Column>
            Lunch
            <hr/>
            <List>
              <List.Item>Monday-Friday: 11:00am-2:30pm</List.Item>
              <List.Item>Saturday-Sunday: Not open for lunch</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column>
            Bar
            <hr/>
            <List>
              <List.Item>Monday-Friday 11:00am</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column>
           Dinner
            <hr/>
            <List>
              <List.Item>Monday-Friday 11:00am</List.Item>
            </List>
          </Grid.Column>


        </Grid>
    )
  }
}


class Murphys extends React.Component {
          render() {
          return (
          <div>
          <TopMenu/>
          <MiddleSection/>
          <Footer/>
          </div>
          )
        }
        }

ReactDOM.render(<Murphys/>, document.getElementById('root'));