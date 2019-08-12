import React, {Component} from 'react';
import './App.css';
import EventCard from '../components/Event.jsx'
import { Link } from 'react-router-dom';

class App extends Component{
  state = {
    events: []
  }

  componentDidMount() {
    fetch('http://demo2365253.mockable.io/events')
    .then(res => res.json())
    .then((data) => {
      this.setState({events: data})
      console.log('events arr is ' + this.state.events);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Here are the events near you</div>
        </header>
        <body className="App-content">
          <div className="events-row">
            {
              this.state.events.map(event_obj => {
                return(
                  <EventCard event = {event_obj}></EventCard>
                );
              })
            }
          </div>
        </body>
      </div>
    );
  }
}

export default App;
