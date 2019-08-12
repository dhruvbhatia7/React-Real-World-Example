import React, {Component} from 'react';
import './EventDetail.css';

class EventDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sent_event = this.props.location.state.data;
        const event_id = sent_event.event_id.toString();
        const event_name = sent_event.event_name.toString();
        const event_type = sent_event.event_type.toString();
        const event_img = sent_event.event_img.toString();
        const event_date = sent_event.event_date.toString();
        const event_description = sent_event.event_description.toString();

        return(
            <div className="event-detail-info">  
                <h3>{event_name}</h3>
                <img className="event-detail-img" src={event_img}/>
                <div className="event-detail-text">Date: {event_date}</div>
                <div className="event-detail-text">Genre: {event_type}</div>
                <div className="event-detail-text">{event_description}</div>
            </div>
        );
    }
}

export default EventDetail;