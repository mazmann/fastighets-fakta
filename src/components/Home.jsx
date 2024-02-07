import React from 'react'
import DrawingOfHouse from '../images/seconddrawing.png';

const Home = () => {
  return (
    <div className='App-home'>

      {/* <h6>Home</h6> */}
      <img src={DrawingOfHouse} alt="Description" style={{ width: '500px', height: '500px' }} />


    </div>
  )
}

export default Home