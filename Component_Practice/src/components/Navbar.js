import React, {Component} from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state
    return (<nav>
      <Segment>
        <Menu pointing="pointing" secondary="secondary">

          <NavLink to="/">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
          </NavLink>

          <NavLink to="/projects">
            <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick}/>
          </NavLink>

          <NavLink to="/contact">
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
          </NavLink>

        </Menu>
      </Segment>
    </nav>)
  }
}
