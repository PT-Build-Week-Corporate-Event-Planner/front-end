import React, { Component } from 'react'; 
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import moment from 'moment';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class EventsTasks extends Component {
   constructor () {

    super(); 
   
    this.loggedinUserID = 6;
    this.Event_id = 33;        
   }
    
  state = {
    Tasks: [],
    newTaskData: {
        task_name: '',
        event_id: '',
        task_completed: ''
   },
    editTaskData: {
        id: '',
        task_name: '',
        event_id: '',
        task_completed: ''      
    },
    newTaskModal: false,
    editTaskModal: false
  }
  componentWillMount() {
    this._refreshEvents();
  }
  toggleNewTaskModal() {
    this.setState({
      newTaskModal: ! this.state.newTaskModal
    });
  }
  toggleEditTaskModal() {
    this.setState({
      editTaskModal: ! this.state.editTaskModal
    });
  }
  addTask() {
    axiosWithAuth()
    .post('/api/events/?event_id='`${this.Event_id}`, this.state.newTaskData).then((response) => {
      let { Tasks } = this.state;

      Tasks.push(response.data);

      this.setState({ Tasks, newTaskModal: false, newTaskData: {
        task_name: '',
        completed: ''
      }})      
   })
   .catch(error => {
    console.log(error)
    })
  }
  updateTask() {
    let { task_name,task_completed } = this.state.editTaskData;
    axiosWithAuth()
    .put('/api/tasks/' + this.state.editTaskData.id, {
      task_name, task_completed
    })
    .then((response) => {
      this._refreshEvents();

      this.setState({
        editTaskModal: false, editTaskData: { id: '',task_name: '', task_completed: '' }
      })      
    })
    .catch(error => {
      console.log(error);
     
    });
  }
  editTask(id, task_name, task_completed) {
    this.setState({
      editTaskData: { id, task_name, task_completed }, editTaskModal: ! this.state.editTaskModal
    });
  }
 
  deleteTask(id) {
    axiosWithAuth()
    .delete('/api/tasks/' + id)
      .then((response) => {
      this._refreshEvents();
      })
     .catch(error => {
      console.log(error);
    });
  }

  _refreshEvents() {    
    axiosWithAuth()
		.get('/api/tasks/?event_id=' + this.Event_id)
    .then(response => {
      this.setState({
        Tasks: response.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  
  render() {
    
    /*
    let comp = '';
    
    if(Task.completed) {

      comp = 'Yes'

    } else {

      comp = 'No'

    }*/
    let Tasks = this.state.Tasks.map((Task) => {
      return (
        <tr key={Task.id}>   
         <td>{Task.id}</td>    
        <td>{Task.task_name}</td>
        <td>{Task.task_completed}</td>
                  
          <td>
            <Button color="success" size="sm" className="mr-2" onClick={this.editTask.bind(this, Task.id, Task.task_name,Task.task_completed )}>Edit Task</Button>
            <Button color="danger" size="sm" onClick={this.deleteTask.bind(this, Task.id)}>Delete Task</Button> {' '}
          </td>
        </tr>
      )
    });
    return (
      <div className="events-Container">

      <h1>Scheduled Events</h1>
      
      {'   '}<Button className="my-3" color="primary" onClick={this.toggleNewTaskModal.bind(this)}>Add Task</Button>

      <Modal isOpen={this.state.newTaskModal} toggle={this.toggleNewTaskModal.bind(this)}>
        <ModalHeader toggle={this.toggleNewTaskModal.bind(this)}>Add a new Task</ModalHeader>
        <ModalBody>
            
            {/* Add New Task Data */}  
            
            {/* Task Title */}

          <FormGroup>
            <Label for="TaskTitle">Task Title</Label>
            <Input id="TaskTitle" value={this.state.newTaskData.task_title} onChange={(e) => {
              let { newTaskData } = this.state;

              newTaskData.task_title = e.target.value;

              this.setState({ newTaskData });
            }} />
          </FormGroup>

            {/* Event Task */}

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
            <Input id="user_id"  type='hidden' value={this.state.newEventData.user_id} onChange={(e) => {
              let { newEventData } = this.state;

              newEventData.user_id = e.target.value;

              this.setState({ newEventData });
            }} />
          </FormGroup>
        
        {/* completed */} 

        <FormGroup>

            

            {/*<Label for="completed"> Completed:</Label>*/}
             <Input id="completed" type='hidden' value={false} onChange={(e) => {
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
        <ModalHeader toggle={this.toggleEditEventModal.bind(this)}>Edit/Preview Event Details</ModalHeader>
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

              editEventData.event_date = moment(e.target.value).add(1, 'days');

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
            {Tasks}
          </tbody>
        </Table>
       

      </div>
    );
  }
}

export default EventsTasks;
