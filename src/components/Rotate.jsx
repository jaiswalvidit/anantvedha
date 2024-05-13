import React, { useContext, useState } from 'react';
import { AccountContext } from './context/AccountProvider';
import { Button } from 'bootstrap';
import { Brightness7, Brightness3 } from '@mui/icons-material'; // Import MUI icons
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function Rotate() {
  const { mode, setMode } = useContext(AccountContext);
  const [clicked, setClicked] = useState(false);

  const toggleMode = () => {
    setClicked(true);
    console.log(mode);
    setMode(prevMode => !prevMode);
    setTimeout(() => setClicked(false), 300); // Reset clicked state after 300 milliseconds
  };

  return (
    <div style={{color:'red', backgroundColor: !mode ? 'black' : 'white' , height:'40px',width:'40px' ,position:'fixed',top:'40%',left:'1%',zIndex:'20' ,borderRadius:'10px'}}>
      <div className="bg-green-500"> {/* Apply Tailwind CSS class to create a box with green background */}
        <div style={{ backgroundColor: mode ? 'black' : 'black', backgroundRadius:'20%' }} className="fixed z-10 top-40% left-1/100 transform -translate-y-1/2">
          <label className={`swap swap-rotate relative ${clicked ? 'scale-90' : ''}`}  style={{ borderRadius: '50%', transition: 'transform 0.3s ease-in-out' }}>
            

            
            <div className={`absolute  ${mode ? 'block' : 'hidden'}`} style={{color:'black',left:'4px'}}>
              {/* Replace the sun SVG with MUI Brightness7 icon */}
              <WbSunnyIcon onClick={toggleMode} sx={{ fontSize: 30 }} /> 
            </div>

            
            <div className={`absolute ${mode ? 'hidden' : 'block'}`} style={{color:'white',left:'4px'}}>
              {/* Replace the moon SVG with MUI Brightness3 icon */}
              <DarkModeIcon onClick={toggleMode} sx={{ fontSize: 30 }} /> 
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
