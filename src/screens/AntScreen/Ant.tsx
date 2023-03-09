import React from 'react';
import { useAntScreen } from './useAntScreen';

const Ant = () => {
    const {
        ants,
        handleAnts,
        handleOds
    } = useAntScreen();

    return (
        <>
            <div className='body'>
                <h1>FUMIGA</h1>
                <div className='antContent'>
                    <div className='antHeader'>
                        <div className='row'>
                            <div className='antField'>
                                <p>Name</p>
                            </div>
                            <div className='antField'>
                                <p>Length</p>
                            </div>
                            <div className='antField'>
                                <p>Color</p>
                            </div>
                            <div className='antField'>
                                <p>Weight</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='antBody'>
                        { handleAnts() }
                    </div>
                </div>
                <div className='antAction'>
                    <a className='antButton' onClick={() => handleOds()}>Start Race</a>
                </div>
            </div>
        </>
    )
}

export default Ant;