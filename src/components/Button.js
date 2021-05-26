import React  from 'react'
import classNames from 'classnames';





export default function Button({children, keys,  outline, className, onClick}){




        return (
            <button 
           
                onClick={onClick}
            className={classNames('button', className,
                {
                    'button--outline': outline,
                },
                { 'test-button': children },
                { 'not-becous-whe-donth-keys':keys },
            )}>
                
                {children}
            </button>
        )
    
}





