import React from 'react'


const Ants = ({ ants }) => (
  <div>
    {ants.map((ant, index) =>
      <Ant key={ index }>
        <Figure>
          <Name>{ ant.name }</Name>
          <List>
            <Item>
              <Title>Color: </Title>
              <Value>{ ant.color }</Value>
            </Item>
            <Item>
              <Title>Length: </Title>
              <Value>{ ant.length }mm</Value>
            </Item>
            <Item>
              <Title>Weight: </Title>
              <Value>{ ant.weight }mg</Value>
            </Item>
          </List>
          {/* <Calculation ant={ ant }
                        /> */}
          <Image src={ ant.image } alt={ ant.name } />
        </Figure>
      </Ant>
    )}
  </div>
)


export default Ants