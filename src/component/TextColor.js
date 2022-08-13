import React from 'react'

class TextColor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            colorValue:'blue'
        }
    }
   handleColor = (event) => {
       console.log("event.target", event.target);
    this.setState({colorValue:`${event.target.value}`})
   }
    render(){
        const latestColor = this.state.colorValue==='blue'? 'blue' : 'red'
        const colorToChange = latestColor==='red'? 'blue':'red'
        return(
            <>
            <h1 style={{color:`${latestColor}`}}>I am {latestColor}</h1>
        <button value={colorToChange} onClick={this.handleColor}>Change To {colorToChange}</button>
            </>
        )
    
    }
}

export default TextColor;