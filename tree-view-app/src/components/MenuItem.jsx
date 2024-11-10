import { useState } from "react"
import MenuList from "./MenuList"

export default function MenuItem({item}){ 
    /* item data passed from MenuList component after mapping there */

    const [displayCurrentChild, setDisplayCurrentChild] = useState({});
    return (
        <li className="menu-item-container">
            <p>{item.label}</p>

            {
                item && item.children && item.children.length > 0 ? ( /* checks if the item in data.js has a children */
                    <MenuList list={item.children} />
                ) : null
            }
        </li>
    )
}