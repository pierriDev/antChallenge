import { useGetAnts } from "../../api/ants/hooks";
import React, { useEffect, useState } from 'react'

import './Ant.css';
// import Ants from "../../components/ants/Ants";

export const useAntScreen = () => {
    const [ants, setAnts] = useState([]);
    const {data: data} = useGetAnts();

    useEffect(() => {
        setAnts(data?.ants)
    }, [data])

    // const generateAntWinLikelihoodCalculator = () => {
    //     const delay = 7000 + Math.random() * 7000;
    //     const likelihoodOfAntWinning = Math.random();
      
      
    //     return (callback) => {
    //       setTimeout(() => {
    //         callback(likelihoodOfAntWinning);
    //       }, delay);
    //     };
    // }
    function generateAntWinLikelihoodCalculator() {
        const delay = 7000 + Math.random() * 7000;
        const likelihoodOfAntWinning = Math.random();
      
        return (callback) => {
          setTimeout(() => {
            callback(likelihoodOfAntWinning);
          }, delay);
        };
    }


    const handleOds =  ()  => {
        const generateCalculation =  generateAntWinLikelihoodCalculator();
        console.log(generateCalculation.callback)
    }

    const handleAnts = () => {

        return(
            ants?.map((ant) => (
                
                <div key={ant.name} className='row'>
                    <div className='antField'>
                        {ant.name}
                    </div>
                    <div className='antField'>
                        {ant.length}
                    </div>
                    <div className='antField'>
                        {ant.color}
                    </div>
                    <div className='antField'>
                        {ant.weight}
                    </div>
                    
                </div>
            ))
        )
    }


    return {
        ants,
        handleAnts,
        handleOds
    };
}