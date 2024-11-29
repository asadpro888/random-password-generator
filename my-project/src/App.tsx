import React, { useState } from 'react'
// import Generator from './components/Generator'
import StockShare from './components/StockShare'
const App = () => {
  const [color, setColor] = useState('red')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
       {/* <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <img src="https://images.pexels.com/photos/316149/pexels-photo-316149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=> setColor('blue')}>test</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=> setColor('yellow')}>test</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=> setColor('black')}>test</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=> setColor('white')}>test</button>

        </div>
       </div> */}
       {/* <Generator/> */}
       <StockShare/>
    </div>
  )
}

export default App