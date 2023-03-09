import React from 'react';
import { useAntScreen } from './useAntScreen';
import AntLogo from './AntLogo.png'

const Ant = () => {
    const {
        ants,
        handleAnts,
        handleOds,
        handleLeaderBoard,
        handleRestart,
        handleData,
        isAntData,
        isRacing,
        isRaceFinished,
        isLeaderBoard
    } = useAntScreen(); 
    {}
    if(!isAntData) {
        return (
            <>
                <div className="welcomeBox">
                    <div className="welcomeText">
                        <h1>Welcome to the Ant Winning Probability check</h1>
                        <p className="welcomeInfo">
                            This app will use a API to bring data of Ants who will compete in a Race. 
                            With this information, the user will be able to press a CTA, to check the Probability (from 0 to 1) of that Ant winning the race.
                            <span className="smallInfo"> (The Probability are generated randomly, without comsidering the ants characteristics)</span>.


                        </p>
                    </div>
                    <div className='antAction'>
                        <a className='antButton' onClick={() => handleData()}>Let's get started</a>
                    </div>
                </div>
            </>
        )
    }else{
        return (
            <> 
                {
                    !isLeaderBoard? (
    
                        <div className='body'>
                            <h1>Ants Information</h1>
                            <div className='antBody'>
                                { handleAnts() }
                            </div>
                            <div className='antAction'>
                                <a className='antButton' onClick={() => handleOds()}>Start Calculations</a>
                              
                            </div>
                            
                        </div>
                    ):(
                        <>
                            <div className='leaderboardContent'>
                                <div className='leaderboardHeader'>
                                    <div>
                                        <p className="subTitle"><img src={AntLogo} alt="Logo" width={100} height={100}/></p>
    
                                        <h1 className="leaderboardTitle">Ant Ods of Winning</h1>
                                        <p className="subTitle">
                                            {isRacing && ("Calculating results")}
                                            {isRaceFinished && ("Results finished")}
                                        </p>
                                    </div>
                                </div>
                                <div className='antBody'>
                                    { handleLeaderBoard() }
                                </div> 
                            </div>
                            <div className='antAction'>
                                {/* <a className='antButton' onClick={() => handleOds()}>Start Race</a> */}
     
                                {isRacing ?(
                                    <a className='antButtonDisabled'>Calculating...</a>
                                ):
                                
                                    <a className='antButton' onClick={() => handleRestart()}>Restart Calculations</a>
                                }
                              
                            </div>
                        </>
                    )
                
                }
            </>
        )
    }
}

export default Ant;