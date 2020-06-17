import React from 'react'
import { ButtonBackToHome } from '../components/buttonBackToHome'

export const NotFound = () => {
    return (
        <div>
            <h1 className = 'title'>404!</h1>
            <h2 className = 'subtitle'>Page not Found</h2>       
            <ButtonBackToHome />
        </div>
    )
}
