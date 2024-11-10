import { useState } from "react"
import MenuList from "./MenuList"

export default function MenuItem({item}){ 
    /* item data passed from MenuList component after mapping there */

    const [displayCurrentChild, setDisplayCurrentChild] = useState({});

    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChild({
            ...displayCurrentChild,
            [getCurrentLabel] : !displayCurrentChild[getCurrentLabel]
        });
    }

    console.log(displayCurrentChild);
    return (
        <li className="menu-item-container">
            <div>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ? <span onClick={()=>handleToggleChildren(item.label)}>
                    {
                        displayCurrentChild[item.label] ? '-' : '+'
                    }
                    </span> :null 
                }
            </div>

            {
                item && item.children && item.children.length > 0 && displayCurrentChild[item.label] ? ( /* checks if the item in data.js has a children */
                    <MenuList list={item.children} />
                ) : null
            }
        </li>
    )
}