
import React from 'react';

function RangeSlider(props){
    let min = props.min
    let max = props.max
    let sliderId = props.rangeType
    
    return (
        <div class="slide-container">
            <input 
                type="range" 
                min={min} 
                max={max} 
                value={min} 
                class="slider" 
                id={sliderId}
            />
            <input 
                type="range" 
                min={min} 
                max={max} 
                value={max} 
                class="slider" 
                id={sliderId}
            />
        </div>
    )
}

export default RangeSlider