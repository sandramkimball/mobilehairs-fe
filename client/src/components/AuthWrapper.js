import React from 'react'

const AuthWrapper = ({headline, children}) => {
    return(
        <div className='auth-wrapper'>
            {headline && <h2>{headline}</h2>}

            <div>
                {children && children}
            </div>
        </div>
    )
}

export default AuthWrapper