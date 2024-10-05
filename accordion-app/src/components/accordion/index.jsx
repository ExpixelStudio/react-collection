import { useState } from "react";

import data from "./data";
import './style.css';

export default function Accordion(){

    const  [selected, setSelected] = useState(null); //stores selected item ID for single selection.
    const [enableMultiSelect, setEnableMultiSelect] = useState(false); //enable or disable multi selection.
    const [multiple, setMultiple] = useState([]); // stores multiple IDs for multi selection.

    function handleSingleSelection(getCurrentId){
        //console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId); //closes component if already open
    }

    console.log(selected);
    return (
        <div className="wrapper">
            <button>Enable Multi-Selection</button>
            <div className="accordion">
                {
                    data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ? 
                                <div className="content">{dataItem.answer}</div>
                                : null
                                
                            }
                            
                        </div> 
                        ))
                    )
                    :( 
                        <div>No data Found!</div>
                    )
                }
            </div>
        </div>
        
    );
};