import React, { useContext } from 'react'
import Carousal from './Carousal'
import Contactus from './Contactus'
import AboutUs from './About'
// import Footer from './Footer'
import Card from './Card'
import Team from './Team'
import Rotate from './Rotate'
import { AccountContext } from './context/AccountProvider'
import FirstScreen from './FirstScreen'
import Text from './Text'
import Event from './Event'
// import AccountProvider from './context/AccountProvider'
// import Carousal from './Carousal'


export default function Home() {
  const { mode, setMode } = useContext(AccountContext);
  console.log(mode);
  console.log(mode);
  return (
    <>
    <div  style={{backgroundColor: mode ? '#1a1a00' : 'white'}}>
     
    <Carousal/>
    <Text/>
    <Card/>
   <Event/>
    
    <Team/>
    <AboutUs/>
    {/* <FirstScreen/> */}
    <Contactus/>
    {/* <Footer/> */}
    
   
    </div>
    </>

  )
}
