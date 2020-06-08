import React from 'react';
import data from "./skills.json"

function Skills() {
    return (
        <div>
            {
                data.map((data, i) => {
                    return (
                        <div key={i}>
                                <p>{data.name}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Skills