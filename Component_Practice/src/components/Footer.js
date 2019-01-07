import React, {Component} from 'react';
import '../App.css';

export default class Footer extends Component {

  render() {
    return (<div id="footer-container">
      <footer>
        <div className="footer-content">
          <span>
            <a href="https://www.linkedin.com/in/robert-beavin-8b6a28175/">
              <i className="fab fa-linkedin-square"></i>
            </a>
          </span>
          <span>
            <a href="https://github.com/rmbeavin">
              <i className="fab fa-github-square"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>)
  }
}
