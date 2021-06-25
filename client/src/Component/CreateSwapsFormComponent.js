import React, { Component } from "react";
import { Container, Header, Button, Image, Form, Input, Grid } from 'semantic-ui-react'

class CreateSwapsFormComponent extends Component {

    constructor(){
        super()
        this.state = {
            start: "",
            end: "",
            name: ""
        }
    }

    createNewSwap = (swapObj) => {
        console.log("createNewSwap function")
        let optimizedSwapObj = {...swapObj, start: new Date(swapObj.start), end: new Date(swapObj.end)}
        if((optimizedSwapObj.end > optimizedSwapObj.start) && (optimizedSwapObj.start > Date.now())){
            console.log("good if")
            fetch("http://localhost:3000/swaps", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.token}`
                },
                body: JSON.stringify(swapObj)
            })
            .then(res => res.json())
            .then(newlyCreatedSwap => {
                this.props.getAllSwaps()
                console.log(newlyCreatedSwap)
            })
        } else {
            if(optimizedSwapObj.end <= optimizedSwapObj.start){
                console.log("bad if end before swap")
                alert("Swap end must be later than start")
            } else if(optimizedSwapObj.start < Date.now()) {
                console.log("bad if past start")
                alert("Swap must be in the future")
            }
        }
    }

    render() {
        return(
            <Container textAlign="center" className="centered-container content-margin">
                <Header as='h2'>Create a New Swap</Header>
                <Grid centered>
                    <Form textAlign="center" className="form-width" onSubmit={(event) => {
                        event.preventDefault()
                        this.createNewSwap(this.state)
                        event.target.reset()
                    }}>
                        <Form.Input onChange={(event) => this.setState({name: event.target.value})} placeholder='Swap Name' type="text" id="name" name="name" value={this.state.name} />
                        <Form.Input onChange={(event) => this.setState({start: event.target.value})} placeholder='Start' type="datetime-local" id="start" start="start" value={this.state.start} />
                        <Form.Input onChange={(event) => this.setState({end: event.target.value})} placeholder='End' type="datetime-local" id="end" end="end" value={this.state.end} />
                        <Input type="submit" value="Create" />
                    </Form>
                </Grid>
            </Container>
        )
    }
}

export default CreateSwapsFormComponent;