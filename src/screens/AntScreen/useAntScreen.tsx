import { useGetAnts } from "../../api/ants/hooks";
import React, { useEffect, useState } from 'react'

import './Ant.css';
// import Ants from "../../components/ants/Ants";

export const useAntScreen = () => {
    const [ants, setAnts] = useState<any>([]);
    const [isRacing, setIsRacing] = useState(false);
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
      
        return (callback: any) => {
          setTimeout(() => {
            callback(likelihoodOfAntWinning);
          }, delay);
        };
    }


    const handleOds =  async ()  => {
        setIsRacing(!isRacing)
    

        const updatedAnts = ants.map((ant: any) => ({ ...ant }));
        for (let i = 0; i < updatedAnts.length; i++) {
            console.log("NEW ANT");
            const calculator = generateAntWinLikelihoodCalculator();
            const updatedAnt = await new Promise((resolve) => {
            calculator((result: any) => {
                const tempAnt = { ...updatedAnts[i], time: result };
                resolve(tempAnt);
            });
            });
            updatedAnts[i] = updatedAnt;
            updatedAnts.sort((a: any, b: any) => {
            if (!a.time) {
                return 1;
            } else if (!b.time) {
                return -1;
            } else {
                return b.time - a.time;
            }
            });
            setAnts([...updatedAnts]); // create a new copy of the array before updating it
        }

        console.log(ants);
        setIsRacing(false)

    }

    const handleAnts = () => {
        
            
        return(
            ants?.map((ant: any) => (
                
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
                    <div className='antField'>
                        {ant.time}
                    </div>
                </div>
            ))
        )
    }


    return {
        ants,
        handleAnts,
        handleOds,
        isRacing
    };
}