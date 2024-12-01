import { useState, useEffect } from "react";


import data from "./data";
import './style.css';

export default function Accordion(){

    const  [selected, setSelected] = useState(null); //stores selected item ID for single selection.
    const [enableMultiSelect, setEnableMultiSelect] = useState(false); //enable or disable multi selection.
    const [multipleId, setMultipleId] = useState([]); // stores multipleId IDs for multi selection.

    function handleSingleSelection(getCurrentId){
        //console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId); //closes component if already open
    }

    function handleMultiSelection(getCurrentId){
        
        setMultipleId( tempMultipleId => { //tempMID holds current ID(s) until updated with new current ID
            if (tempMultipleId.includes(getCurrentId)) {
                // If ID is already in the array, remove it (deselect)
                return tempMultipleId.filter(id => id !== getCurrentId);
            } else {
                // If ID is not in the array, add it (select)
                return [...tempMultipleId, getCurrentId];
            }
        });
        
        console.log({multipleId});
        
    }

    useEffect(() => {
        //code we want to run
        setMultipleId(multipleId);  
        console.log(multipleId);
    } ,[multipleId]); //dependancy array

    console.log(selected);
    return (
        <div className="wrapper">

            <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}> { !enableMultiSelect 
                                                                                ? 'Enable Multi Selection' 
                                                                                : 'Disable Multi Selection'}</button> {/* !enableMulti toggles state to whatever it currently is not */}

            <div className="accordion">
                {
                    data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div className="title" onClick={ 
                                enableMultiSelect 
                                ? () => handleMultiSelection(dataItem.id) 
                                : () => handleSingleSelection(dataItem.id)} 
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                // Render content for single selection mode
                                !enableMultiSelect && selected === dataItem.id ? (
                                    <div className="content">{dataItem.answer}</div>
                                ) : null
                            }
                            {
                                // Render content for multi-selection mode
                                enableMultiSelect && multipleId.includes(dataItem.id) ? (
                                    <div className="content">{dataItem.answer}</div>
                                ) : null
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

/* {   
    enableMultiSelect ? multipleId.indexOf(dataItem.id) !== -1 &&(
        <div className="content">{dataItem.answer}</div>
    )
    :
    selected === dataItem.id && (
    <div className="content">{dataItem.answer}</div>
    )
    
} */