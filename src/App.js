
import React, {useState} from 'react'
// import TextColor from './component/TextColor'
// import RandomPic from './component/RandomPick'
// import Inputext from './component/InputText'
// import ToDo from './component/ToDo'
import Dropdown from './component/Dropdown'
// class App extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     const options = [{
//       label:'The color Red',
//       value:'red'
//     },
//     {
//       label:'The color Green',
//       value:'green'
//     },
//     {
//       label:'The color Blue',
//       value:'blue'
//     }
//   ]
//     return (
//     <React.Fragment>
//       {/* <TextColor /> */}
//       {/* <RandomPic/> */}
//       {/* <Inputext /> */}
//       {/* <ToDo/> */}
//       <Dropdown options={options}/>
//     </React.Fragment>
//     )
//   }
// }
const App =()=> {
  const options = [{
    label:'The color Red',
    value:'red'
  },
  {
    label:'The color Green',
    value:'green'
  },
  {
    label:'The color Blue',
    value:'blue'
  }
]
const [selected, setSelected]=useState(options[0])
const [showDropdown, setDropdown] = useState(true)
return (
  <>
   <button onClick={()=>setDropdown(!showDropdown)}>Toggle DropDown</button>
   { showDropdown?<Dropdown selected={selected} onSelectChange={setSelected} options={options}/>:null} 
  </>
)

}
export default App;