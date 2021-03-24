import "../styles/index.scss";
import React from 'react';
import Countdown from './Countdown';
import EditEvent from './EditEvent';
forceEnable: true
import { Component } from "react";





class App extends Component{
    constructor(){
        super();
        this.state = {
            events: [
                { id: 0, name: "śniadanie", hour: "7", minute: "00"},
                { id: 1, name: "łobiad", hour: "12", minute: "00"},
                { id: 2, name: "kolacjones", hour: "19", minute: "00"}
            ],
            editEvents: {
                id: Date(),
                name: "",
                hour: "",
                minute: ""
            }
        };
        this.handleEditEvent = this.handleEditEvent.bind(this)
        this.handleSaveEvent = this.handleSaveEvent.bind(this)
    }

    handleEditEvent(val) {
        this.setState(prevState => {
            return{
                editEvents: Object.assign(prevState.editEvents, val)
            };
        });
    }
    handleSaveEvent(){
        this.setState(prevState => ({
            events: [...prevState.events, prevState.editEvents],
            editedEvent: {
            id: "",
            name: "",
            hour: "",
            minute: ""
            }
        }));
    }


    render(){
        const events = this.state.events.map(el =>
            <Countdown key={el.id} name={el.name} hour={el.hour} minute={el.minute} />);

        return (
            <>
                <div className="app">{events}</div>
                <EditEvent
                name={this.state.editEvents.name}
                hour={this.state.editEvents.hour}
                minute={this.state.editEvents.minute}
                onInputChange={val => this.handleEditEvent(val)} 
                onSave={val => this.handleSaveEvent(val)}/>
            </>
        );
    }
};

export default App;