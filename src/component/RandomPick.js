import React from "react"

class RandomPic extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            randomValue:''
        }     
    }
    handleChange =()=>{
    const luckyNumber = Math.floor(Math.random()*4);
     this.setState({randomValue:luckyNumber})
    }
    render(){
        const arr = ['CAR','BIKE','AEROPLANE','SHIP']
        return(
            <React.Fragment>
                <input/>
                <button onClick={this.handleChange}>Lucky Draw</button>
        <h1>You Have Won: {arr[this.state.randomValue]}</h1>
            </React.Fragment>
        )

    }
}

export default RandomPic;