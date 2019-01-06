import React, {Component} from 'react';

export default class Main extends Component {

  render() {
    return (<div id="resume">
      <div id="about">
        <h1>About Me</h1>
        <img src="http://placekitten.com/g/350/450" className="profile-pic" alt="placekitten"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facere dolores magni totam sapiente libero reiciendis repellat atque error soluta sit, modi, doloremque, ab iusto nostrum reprehenderit magnam voluptatum quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facere dolores magni totam sapiente libero reiciendis repellat atque error soluta sit, modi, doloremque, ab iusto nostrum reprehenderit magnam voluptatum quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facere dolores magni totam sapiente libero reiciendis repellat atque error soluta sit, modi, doloremque, ab iusto nostrum reprehenderit magnam voluptatum quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facere dolores magni totam sapiente libero reiciendis repellat atque error soluta sit, modi, doloremque, ab iusto nostrum reprehenderit magnam voluptatum quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facere dolores magni totam sapiente libero reiciendis repellat atque error soluta sit, modi, doloremque, ab iusto nostrum reprehenderit magnam voluptatum quasi!
        </p><br/>
      </div>
      <div className="resume-skills">
        <table>
          <caption>
            <h1>Skills</h1>
          </caption>
          <td>HTML
            <i className="fab fa-html5"></i>
          </td>
          <tr></tr>
          <td>CSS
            <i className="fab fa-css3-alt"></i>
          </td>
          <tr></tr>
          <td>JavaScript
            <i className="fab fa-js-square"></i>
          </td>
          <tr></tr>
          <td>Node
            <i className="fab fa-node-js"></i>
          </td>
          <tr></tr>
          <td>jQuery
            <i className="fab fa-js-square"></i>
          </td>
          <tr></tr>
          <td>React
            <i className="fab fa-react"></i>
          </td>
          <tr></tr>
          <td>Git
            <i className="fas fa-code-branch"></i>
          </td>
          <tr></tr>
          <td>Github
            <i className="fab fa-github-square"></i>
          </td>
          <tr></tr>
        </table>
      </div>
      <div className="work">
        <ul>
          <li>Cool Place I worked at: I held this title, and stayed for a long time.</li>
          <li>Another cool place that was lucky to hire me: VP of Awesome, stayed for a year</li>
          <li>Started a non-profit: President, and still working there</li>
        </ul>
      </div>
    </div>)
  }
}
