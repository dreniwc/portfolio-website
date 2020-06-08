import React from 'react';
import data from "./data/nav.json"

function Navigation() {
    return(
        <nav role="navigation" id="skiptonav">
            <ul>
            {
                data.map((data, i) => {
                    return (
                        <li key={i}>
                                <a href={data.href}>{data.page}</a>
                        </li>
                    );
                })
            }
            </ul>
        </nav>
    );
}

export default Navigation;