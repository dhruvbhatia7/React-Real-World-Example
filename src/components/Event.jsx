import React, {Component} from 'react';
import './Event.css';
import {withRouter} from 'react-router-dom';

class EventCard extends Component {

    eventDetail(event_obj) {
        this.props.history.push({
            pathname: '/event/' + event_obj.event_id,
            state: { data: event_obj }
            
        });   
    }

    render() {
        return (
            <div className="event-card" onClick={this.eventDetail.bind(this, this.props.event)}>
                <img className="event-img" alt="" src={this.props.event.event_img} />
                <div className="event-details">
                    <div className="event-name">{this.props.event.event_name}</div>
                    <div className="event-category">{this.props.event.event_type}</div>
                    <div className="event-date">{this.props.event.event_date}</div>
                </div>
            </div>
            
        );
    }   
}


export default withRouter(EventCard);