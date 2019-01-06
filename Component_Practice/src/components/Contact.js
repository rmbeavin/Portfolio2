import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    return (<div id="contact">
      <header>
        <h2>Contact Me</h2>
        <form>
          <label for="name">Name</label>
          <input type="text" name="name"/>
          <label for="name">Email</label>
          <input type="text" name="email"/>
          <textarea rows="10" cols="50"></textarea>
          <input type="submit" value="Submit"/>
        </form>
      </header>
    </div>)
  }
}
