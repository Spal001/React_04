import React from 'react';

const SlotM = (props) => {
  
    let x=props.x;
    let y=props.y;
    let z=props.z;

    if ((x===y) && (y===z)){
        return(
            <>
            <div className="slot_inner">

            <h1>{x} {y} {z}</h1>
            <h1> This is Matched. </h1>
            <hr/>
            </div>
            </>
        );
    } else{
        return(
            <>
            <div className="slot_inner">

            <h1>{x} {y} {z}</h1>
            <h1> This is not Matched. </h1>
            <hr/>
            </div>
            </>
        );
    }
};
const Next = () => {
return <>
    <h1 className="heading_style"> 🎰 Welsome to <span style = {{fontWeight : 'bold'}}> Slot Machine Game </span> 🎰 </h1>
    
    <div className="slotmachine">
    <SlotM x='😃' y='😃' z='😃'/>
    <hr/ >
    <SlotM x='🍎' y='🍎' z='🍌'/>
    <hr />
    <SlotM x='⛰️' y='⛰️' z='⛰️'/>
    <hr/>
    <SlotM x='🐯' y='🐯' z='🐯'/>
    <hr />
    <SlotM x='🐯' y='🐅' z='🐯'/>
    </div>
    </>

};
export default Next;