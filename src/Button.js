import React  from 'react'
import classNames from 'classnames';





export default function Button(props){

        return (
            <button className={classNames('button',
                {
                    'button--outline': props.outline,
                },
                { 'test-button': props.children },
                { 'not-becous-whe-donth-keys':props.keys },
            )}>
                {props.children}
            </button>
        )
    
}

