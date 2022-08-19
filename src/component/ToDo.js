import React from 'react'


const style = {textDecorationLine:'line-through'}
export default class ToDo extends React.Component {
    state = {
        item:[],
        store:[],
        complete:''
    }
                      
    handleChange=(event) => {
        event.preventDefault()
        console.log("printing",event.target.value)
        this.setState({item:event.target.value})
    }

    handleClick = () => {
    //  const newList = this.state.store.concat(this.state.item)
     const newList = [...this.state.store, this.state.item]
     this.setState({store:newList})
    //  this.state.newStore.push(this.state.item)
    //  this.setState({store:this.state.newStore})
    }
    handleComplete=(i)=>{
        this.setState({complete:this.state.store[i]})
    }
    render(){
        return(
            <React.Fragment>
                <input value={this.state.item} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add</button>
        <h2>Items are:</h2>
        <ul>
            {this.state.store.map((acc,i)=>(
                <>
               <li key={i}>{acc}</li>
                <button onClick ={()=>this.handleComplete(i)}>Complete</button>
                </>
            ))}
        </ul>
       {/* {this.state.complete && <p style={{textDecoration:}}>{this.state.complete}</p>}  */}
            </React.Fragment>
        )
    }
}