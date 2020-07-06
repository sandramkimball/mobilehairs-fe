
import React, { useState } from 'react';

function RangeSlider(props){
    let min = props.min || 0
    let max = props.max
    let [leftValue, setLeftValue] = useState(min)
    let [rightValue, setRightValue] = useState(max)
    // let rangeType = props.rangeType

    const handleLeft = (e, value) => {
        e.preventDefault()
        setLeftValue(value)
    } 
    const handleRight = (e, value) => {
        e.preventDefault()
        setLeftValue(value)
    }
    
    
    return (
        <div className="slide-container">
            <input type="range" min={0} max={max} value={10} className="slider" name='inputLeft' onChange={e=>handleLeft(e,min)}/>
            <input type="range" min={0} max={max} value={10000} className="slider" name='inputRight' onChange={e=>handleRight(e,max)}/>

            <div class="slider">
                <div class="track"></div>
                <div class="range"></div>
                <div class="thumb left" style={{left: min+leftValue}}></div>
                <div class="thumb right" style={{right: max-rightValue}}></div>
            </div>
        </div>
    )
}

export default RangeSlider