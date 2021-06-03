import React  from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types'




 function Button({children, keys,  outline, className, onClick}){




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



Button.propTypes ={
    onClick:PropTypes.func,
}

export default Button;