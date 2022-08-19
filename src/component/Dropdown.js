import React, { useState, useEffect, useRef } from "react"

const Dropdown =({selected, onSelectChange, options})=>{
    console.log("testing in function body");
    const [open, setOpen] = useState(false);
    const ref = useRef()
    const renderItem = options.map((option)=>{
        if (option.label===selected.label){
            return null;
        }
        return(
            <div onClick={()=>{console.log("inside Itemrender")
            return onSelectChange(option)}} key={option.value} className='item'>
                {option.label}
            </div>
        )
    })
    const handleClick = ()=> {
        console.log("printing inside handleClick open value", open)
        setOpen(!open)
    }
    useEffect(()=> {
        console.log("printing inside useEffect",options);
        const onBodyClick = (event)=>{
            console.log("printing event",event.target)
            console.log("body event in useEffect ref value",ref)
            if(ref.current.contains(event.target)){
               return
            }
            setOpen(false)
        }
        document.body.addEventListener('click',onBodyClick,{capture:true})
        return () => {
           document.body.removeEventListener('click',onBodyClick,{capture:true}) 
        }
        },[]);
   
    console.log("printing ref", ref);
    return(
    <div ref={ref} className='ui form'>
        <div className='field'>
            <label className='label'>Select a Color</label>
            <div onClick={handleClick} className= {`ui selection dropdown ${open?'visible active': ''} `}>
                <i className='dropdown icon'></i>
                <div className='text'>{selected.label}</div>
                <div className={`menu ${open ? 'visible transition':''} `}>
                    {renderItem}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dropdown;