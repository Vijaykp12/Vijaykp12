import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './list.jsx'
import Button from './Button.jsx'
import ProfilePic from './ProfilePic.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import MyComp from './MyComp.jsx'
import MyList from './MyList.jsx'
import MyComp2 from './MyComp2.jsx'
import Effect from './Effect.jsx'
import TODO from './TODO.jsx'
import Dimension from './Dimension.jsx'
import Context from './Context.jsx'
import UsingRef from './UsingRef.jsx'
import StopWatch from './StopWatch.jsx'
import Dashboard from './Dashboard.jsx'
import PopUp from './PopUp.jsx'

function App() {
  const fruits = [{id:1,name:"apple", calories: 95}, 
                    {id:2,name:"orange", calories: 45},
                    {id:3,name:"banana", calories:105},
                    {id:4,name:"coconut", calories:158},
                    {id:5,name:"pineapple", calories:37}];

  
  const vegetables = [{id:6,name:"potato", calories: 115}, 
                    {id:7,name:"celery", calories: 15},
                    {id:8,name:"carrots", calories:25},
                    {id:9,name:"corn", calories:68},
                    {id:10,name:"broccoli", calories:37}];

  return (
    <>
      <Dashboard />
    </>
  )
}


export default App
