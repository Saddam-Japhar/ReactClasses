
import React from 'react'
// import TextColor from './component/TextColor'
// import RandomPic from './component/RandomPick'
import Inputext from './component/InputText'

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <React.Fragment>
      {/* <TextColor /> */}
      {/* <RandomPic/> */}
      <Inputext />
    </React.Fragment>
    )
  }
}

export default App;