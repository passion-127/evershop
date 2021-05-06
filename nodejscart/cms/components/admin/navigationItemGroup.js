import React from "react";
import Area from "../../../../lib/components/area";

export default function MenuItemGroup({id, name}) {
    return <li className="nav-item">
        <span className="root-label">{name}</span>
        <ul className="list-unstyled">
            <Area id={id} noOuter={true}/>
        </ul>
    </li>
}