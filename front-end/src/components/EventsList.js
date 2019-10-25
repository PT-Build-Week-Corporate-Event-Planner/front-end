import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
//import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import {axiosWithAuth} from '../utils/axiosWithAuth';
//import React, { useState, useEffect } from "react";

class EventsList extends Component {
   constructor () {
    super(); 
    //this.loggedinUserID = localStorage.getItem( "userid" );
   }
     
  state = {
    Events: [],
    newEventData: {
        event_title: '',
        event_description: '',
        image_url: '',
        event_date: '',
        event_time: '',
        attendees: '',
        budget: '',
        user_id: '',
        completed: ''
    },
    editEventData: {
        id: '',
        event_title: '',
        event_description: '',
        image_url: '',
        event_date: '',
        event_time: '',
        attendees: '',
        budget: '',
        user_id: '',
        completed: ''
    },
    newEventModal: false,
    editEventModal: false
  }
  componentWillMount() {
    this._refreshEvents();
  }
  toggleNewEventModal() {
    this.setState({
      newEventModal: ! this.state.newEventModal
    });
  }
  toggleEditEventModal() {
    this.setState({
      editEventModal: ! this.state.editEventModal
    });
  }
  addEvent() {
    axiosWithAuth()
    .post('/api/events', this.state.newEventData).then((response) => {
      let { Events } = this.state;

      Events.push(response.data);

      this.setState({ Events, newEventModal: false, newEventData: {
        event_title: '',
        event_description: '',
        image_url: '',
        event_date: '',
        event_time: '',
        attendees: '',
        budget: '',
        user_id: '',
        completed: ''
      }})      
   })
   .catch(error => {
    console.log(error)
    debugger;
  })
  }
  updateEvent() {
    let {event_title,event_description,image_url,event_date,event_time,attendees,budget,user_id,completed } = this.state.editEventData;
    axiosWithAuth()
    .put('/api/events/' + this.state.editEventData.id, {
    event_title,event_description,image_url,event_date,event_time,attendees,budget,user_id,completed
    })
    .then((response) => {
      this._refreshEvents();

      this.setState({
        editEventModal: false, editEventData: { id: '',event_title: '', event_description: '', image_url: '', event_date: '', event_time: '', attendees: '', budget: '', user_id: '', completed: '' }
      })      
    })
    .catch(error => {
      console.log(error);
     
    });
  }
  editEvent(id, event_title,event_description,image_url,event_date,event_time,attendees,budget,user_id,completed) {
    this.setState({
      editEventData: { id, event_title,event_description,image_url,event_date,event_time,attendees,budget,user_id,completed }, editEventModal: ! this.state.editEventModal
    });
  }
 
  deleteEvent(id) {
    axiosWithAuth()
    .delete('/api/events/' + id)
      .then((response) => {
      this._refreshEvents();
      })
     .catch(error => {
      console.log(error);
    });
  }

  _refreshEvents() {    
    axiosWithAuth()
		.get('/api/events')
    .then(response => {
      this.setState({
        Events: response.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  
  render() {
    //console.log('loggedinuserID: ' + this.loggedinUserIDuser)
    let Events = this.state.Events.map((Event) => {
      return (
        <tr key={Event.id}>   
         <td>{Event.id}</td>    
        <td>{Event.event_title}</td>
        <td>{Event.event_description}</td>
        <td>{Event.image_url}</td>
        <td>{moment(Event.event_date).format('LL')}</td>
        <td>{moment(Event.event_time, 'HH:mm').format('LT')}</td>
        <td>{Event.attendees}</td>
        <td>{Event.budget}</td>
        <td>{Event.user_id}</td>
        <td>{Event.completed}</td>
          
          <td>
            <Button color="success" size="sm" className="mr-2" onClick={this.editEvent.bind(this, Event.id, Event.event_title, Event.event_description, Event.image_url, Event.event_date, Event.event_time, Event.attendees, Event.budget, Event.user_id, Event.completed )}>Edit Event</Button>
            <Button color="danger" size="sm" onClick={this.deleteEvent.bind(this, Event.id)}>Delete Event</Button> {' '}
            <Button color="success" size="sm" className="mr-2" onClick={this.editEvent.bind(this, Event.id, Event.event_title, Event.event_description, Event.image_url, Event.event_date, Event.event_time, Event.attendees, Event.budget, Event.user_id, Event.completed )}>Event Tasks</Button>
          </td>
        </tr>
      )
    });
    return (
      <div className="events-Container">

      <h1>Scheduled Events</h1>
      
      {'   '}<Button className="my-3" color="primary" onClick={this.toggleNewEventModal.bind(this)}>Add Event</Button>

      <Modal isOpen={this.state.newEventModal} toggle={this.toggleNewEventModal.bind(this)}>
        <ModalHeader toggle={this.toggleNewEventModal.bind(this)}>Add a new Event</ModalHeader>
        <ModalBody>
            
            {/* Add New Event Data */}  
            
            {/* Event Title */}

          <FormGroup>
            <Label for="EventTitle">Event Title</Label>
            <Input id="EventTitle" value={this.state.newEventData.event_title} onChange={(e) => {
              let { newEventData } = this.state;

              newEventData.event_title = e.target.value;

              this.setState({ newEventData });
            }} />
          </FormGroup>

            {/* Event Description */}

          <FormGroup>
            <Label for="EventDescription">Event Description</Label>
            <Input id="EventDescription" value={this.state.newEventData.rating} onChange={(e) => {
              let { newEventData } = this.state;

              newEventData.event_description = e.target.value;

              this.setState({ newEventData });
            }} />
          </FormGroup>
          
        {/* image_url */}

        <FormGroup>
            <Label for="image_url">image url</Label>
            <Input id="image_url" type="text" value={this.state.newEventData.image_url} onChange={(e) => {
              let { newEventData } = this.state;

              newEventData.image_url = e.target.value;

              this.setState({ newEventData });
            }} />
          </FormGroup>

        {/* event_date */}

        <FormGroup>
            
            <Label for="event_date">Event Date</Label>
            
                    
           <Input type="date" id="event_date"  value={this.state.newEventData.event_date} onChange={(e) => {let { newEventData } = this.state; 
           
            newEventData.event_date = e.target.value; this.setState({ newEventData }); }} /> 
      
          
          </FormGroup>

        {/* event_time */}

        <FormGroup>
            <Label for="event_time">Event Time</Label>
            <Input id="event_time" type="time" value={this.state.newEventData.event_time} onChange={(e) => {
              let { newEventData } = this.state;

              newEventData.event_time = e.target.value;

              this.setState({ newEventData });
            }} />
          </FormGroup>
        
        {/* attendees */}

        <FormGroup>
            <Label for="attendees">Attendees</Label>
            <Input id="attendees" type="number" value={this.state.newEventData.attendees} onChange={(e) => {
              let { newEventData } = this.state;

              newEventData.attendees = e.target.value;

              this.setState({ newEventData });
            }} />
          </FormGroup>
        
        {/* budget */}

        <FormGroup>
            <Label for="budget">Budget</Label>
            <Input id="budget" type="number" value={this.state.newEventData.budget} onChange={(e) => {
              let { newEventData } = this.state;

              newEventData.budget = e.target.value;

              this.setState({ newEventData });
            }} />
          </FormGroup>
        
        {/* user_id */}

        <FormGroup>
            {/*<Label for="user_id">user_id</Label> type="hidden"*/} 
            <Input id="user_id"  value={this.state.newEventData.user_id} onChange={(e) => {
              let { newEventData } = this.state;

              newEventData.user_id = e.target.value;

              this.setState({ newEventData });
            }} />
          </FormGroup>
        
        {/* completed */} 

        <FormGroup>

            

            <Label for="completed"> Completed:</Label>
             <Input id="completed" value={this.state.newEventData.completed} onChange={(e) => {
              let { newEventData } = this.state;

              newEventData.completed = e.target.value;

              this.setState({ newEventData });
            }} />
        

          </FormGroup>       


        </ModalBody>
        
        <ModalFooter>

          <Button color="primary" onClick={this.addEvent.bind(this)}>Add Event</Button>{' '}
          <Button color="secondary" onClick={this.toggleNewEventModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.editEventModal} toggle={this.toggleEditEventModal.bind(this)}>
        <ModalHeader toggle={this.toggleEditEventModal.bind(this)}>Edit Event</ModalHeader>
        <ModalBody>
          
          {/* Edit Event Data */}  
          
          {/* event_title */} 

          <FormGroup>
            <Label for="event_title">Event Title</Label>
            <Input id="event_title" value={this.state.editEventData.event_title} onChange={(e) => {
              let { editEventData } = this.state;

              editEventData.event_title = e.target.value;

              this.setState({ editEventData });
            }} />
          </FormGroup>

          {/* event_description */}

          <FormGroup>
            <Label for="event_description">Event Description</Label>
            <Input id="event_description" value={this.state.editEventData.event_description} onChange={(e) => {
              let { editEventData } = this.state;

              editEventData.event_description = e.target.value;

              this.setState({ editEventData });
            }} />
          </FormGroup>

          {/* image_url */}
          
          <FormGroup>
            <Label for="image_url">image url</Label>
            <Input id="image_url" value={this.state.editEventData.image_url} onChange={(e) => {
              let { editEventData } = this.state;

              editEventData.image_url = e.target.value;

              this.setState({ editEventData });
            }} />
          </FormGroup>

          {/* event_date */}

          <FormGroup>
            <Label for="event_date">Event Date</Label>
            <Input id="event_date" type="date" value={moment(this.state.editEventData.event_date).format('YYYY-MM-DD')} onChange={(e) => {
              let { editEventData } = this.state;

              editEventData.event_date = e.target.value;

              this.setState({ editEventData });
            }} />
          </FormGroup>
          
          {/* event_time */}

          <FormGroup>
            <Label for="event_time">Event Time</Label>
            <Input id="event_time" type="time" value={this.state.editEventData.event_time} onChange={(e) => {
              let { editEventData } = this.state;

              editEventData.event_time = e.target.value;

              this.setState({ editEventData });
            }} />
          </FormGroup>
          
          {/* attendees */}

          <FormGroup>
            <Label for="attendees">Attendees</Label>
            <Input id="attendees" value={this.state.editEventData.attendees} onChange={(e) => {
              let { editEventData } = this.state;

              editEventData.attendees = e.target.value;

              this.setState({ editEventData });
            }} />
          </FormGroup>
          
          {/* budget */}

          <FormGroup>
            <Label for="budget">budget</Label>
            <Input id="budget" value={this.state.editEventData.budget} onChange={(e) => {
              let { editEventData } = this.state;

              editEventData.budget = e.target.value;

              this.setState({ editEventData });
            }} />
          </FormGroup>
          
          {/* user_id */}

          <FormGroup>
            {/*<Label for="user_id">user_id</Label>*/} 
           
            <Input id="user_id" type="hidden" value={this.state.editEventData.user_id} onChange={(e) => {
              let { editEventData } = this.state;

              editEventData.user_id = e.target.value;

              this.setState({ editEventData });
            }} />
          </FormGroup>
          
          {/* completed */}

          <FormGroup>
            <Label for="completed">Completed</Label>{' '}
            <Input id="completed" value={this.state.editEventData.completed} onChange={(e) => {
              let { editEventData } = this.state;

              editEventData.completed = e.target.value;

              this.setState({ editEventData });
            }} />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.updateEvent.bind(this)}>Update Event</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditEventModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>


        <Table className='theEvents'>
          <thead>
            <tr>
              <th>#</th>
              <th>Event Title</th>
              <th>Event Description</th>
			  <th>image_url</th>
			  <th>Event Date</th>
			  <th>Event Time</th>
			  <th>Attendees</th>
			  <th>Budget</th>
			  <th>User_id</th>
			  <th>completed</th>
			  <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {Events}
          </tbody>
        </Table>
       

      </div>
    );
  }
}

export default EventsList;
