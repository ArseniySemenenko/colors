import React, {useState} from 'react';
import Panel from "./components/Panel";

function App() {

    const [color , setColor] = useState(String('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));
    const [color2 , setColor2] = useState(String('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));
    const [color3 , setColor3] = useState(String('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));
    const [color4 , setColor4] = useState(String('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));
    const [color5 , setColor5] = useState(String('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));
    const [color6 , setColor6] = useState(String('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));

    const [locked , setLocked] = useState(false);
    const [locked2 , setLocked2] = useState(false)
    const [locked3 , setLocked3] = useState(false);
    const [locked4 , setLocked4] = useState(false);
    const [locked5 , setLocked5] = useState(false);
    const [locked6 , setLocked6] = useState(false);

    function reset(){
        if(!locked){
            setColor(String('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));
        }
        if(!locked2) {
            setColor2(String('#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()));
        }
        if(!locked3){
            setColor3(String('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));
        }
        if(!locked4) {
            setColor4(String('#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()));
        }
        if(!locked5){
            setColor5(String('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));
        }
        if(!locked6){
            setColor6(String('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()));
        }
    }

    return (
    <div className="h-screen w-screen flex justify-center">
        <button
            className="absolute bottom-20 px-20 py-10 rounded-full bg-blue-400"
            onClick={reset}
        ></button>
      <Panel color={color} locked={locked} setLocked={setLocked}/>
      <Panel color={color2} locked={locked2} setLocked={setLocked2}/>
      <Panel color={color3} locked={locked3} setLocked={setLocked3}/>
      <Panel color={color4} locked={locked4} setLocked={setLocked4}/>
      <Panel color={color5} locked={locked5} setLocked={setLocked5}/>
      <Panel color={color6} locked={locked6} setLocked={setLocked6}/>
    </div>
  );
}

export default App;


