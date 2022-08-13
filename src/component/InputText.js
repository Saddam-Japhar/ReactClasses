import React from "react"

export default class InputText extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state ={
    //         age:'',
    //         error: false,
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    // }
    state = {
        age:'',
        error: false
    }
    handleChange=(event)=>{
        console.log("handle change is called")
        this.setState({error:false})
        this.setState({age:event.target.value})
        if(event.target.value<18){
            this.setState({error:true})
        }   
    }

    componentDidMount(){
        console.log("componentDidMount is called")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate is called");
    }
    render(){
        const {age, error} = this.state;
        console.log("render method is called")
        return (
            <React.Fragment>
            <input value={age} onChange={this.handleChange}/>
        {error && <h1>Entered age is less than 18</h1>}
            </React.Fragment>
        )
    }
}