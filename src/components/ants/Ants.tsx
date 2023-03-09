import React from 'react'

import "./Ant.css"
const Ants = ({ ants }: any) => (
  <div className="antBox">
    {ants.map((ant: any, index: any) =>
      <div key={ index } className="ant">
          <h1 className="antTitle">{ ant.name }</h1>
          <div className="antBox">
            <div className="antInfo">
              <p className="antInfoSubtitle">
                Color: 
                <span className="antText" style={{color:ant.color}}>{ ant.color }</span>
              </p>
            </div>
            <div className="antInfo">
              <p className="antInfoSubtitle">
                Length: 
                <span className="antText">{ ant.length }mm</span>
              </p>
            </div>
            <div className="antInfo">
              <p className="antInfoSubtitle">
                Weight:
                <span className="antText">{ ant.weight }mg</span>
              </p>
            </div>
          </div>
          {/* <Calculation ant={ ant }
                        /> */}
          {/* <Image src={ ant.image } alt={ ant.name } /> */}
      </div>
    )}
  </div>
)


export default Ants