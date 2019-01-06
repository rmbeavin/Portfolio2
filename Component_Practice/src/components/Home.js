import React, {Component} from 'react';
import Resume from './Resume';

export default class Home extends Component {
  render() {
    return (<div id="home">
      <section>
        <Resume/>
      </section>
    </div>)
  }
}
