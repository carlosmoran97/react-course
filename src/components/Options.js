import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map( (option, index) => (
                        <Option
                            key={index}
                            optionText={option}
                            handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                        />
                    )
                )
            }
        </div>
    );
};

export default Options;