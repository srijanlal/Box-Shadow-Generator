
import { useState } from 'react';
import './App.css';

function App() {

  const [hori, setHori] = useState(10)
  const [ver, setVer] = useState(10)
  const [blur, setBlur] = useState(5)
  const [boxColor, setBoxColor] = useState("#ffae00");
  const [color, setColor] = useState("#000000");
  const [outline, setOutline] = useState(false)


  return (
    <div className="main-container">
      <h2 style={{ color: `${boxColor}` }}>Box Shadow Generator</h2>
      <div className='container'>
        <div className="inputs">
          <div className="label-input" >
            <label htmlFor="" >Horizontal Length</label> <span><input type="" value={hori} onChange={(e) => setHori(e.target.value)} /><span>px</span></span>
          </div>
          <input type="range" id="test5" min="-200" max="200" onChange={(e) => setHori(e.target.value)} value={hori} />
          <div className="label-input" >
            <label htmlFor="" >Vertical Length Length</label> <span><input type="" value={ver} onChange={(e) => setVer(e.target.value)} /><span>px</span></span>
          </div>
          <input type="range" id="test5" min="-200" max="200" onChange={(e) => setVer(e.target.value)} value={ver} />
          <div className="label-input" >
            <label htmlFor="" >Blur</label> <span><input type="" value={blur} onChange={(e) => setBlur(e.target.value)} /><span>px</span></span>
          </div>
          <input type="range" id="test5" min="0" max="200" onChange={(e) => setBlur(e.target.value)} value={blur} />
          <label htmlFor="">Box Color : </label>
          <input type="color" id="favcolor" name="favcolor" value="#ff0000" onChange={(e) => {
            setBoxColor(e.target.value)
            console.log(e.target.value)
          }}></input>
          <br />
          <label htmlFor="">Box Shadow Color : </label>
          <input type="color" id="favcolor" name="favcolor" value="#ff0000" onChange={(e) => setColor(e.target.value)}></input>
          <br />
          <div className="switch">
            <label>
              outline
              <input type="checkbox" onChange={() => setOutline(!outline)} value={outline} />
              <span className="lever"></span>
              inset
            </label>
            <button onClick={() => {
              setHori(10)
              setVer(10)
              setBlur(10)
              setOutline(false)
            }}>Reset</button>
          </div>

        </div>
        <div className="box" style={{ boxShadow: `${hori}px ${ver}px ${blur}px ${outline ? "inset" : " "} ${color}`, background: `${boxColor}` }} >
          <div className="about-box">
            <h5>Horizontal Length : {hori}</h5>
            <h5>Vertical Length : {ver}</h5>
            <h5>Blur : {blur}</h5>
            <h5>Box Shadow Color : {color}</h5>
            <br />
            <input type="text-field" value={`box-shadow : ${hori}px ${ver}px ${blur}px ${color} ;`} />
            <br />
            <input type="text-field" value={`background-color : ${boxColor} ;`} />
          </div>
        </div>
      </div>
      <h4>Made with ❤️ by Srijan</h4>
    </div>
  );
}

export default App;
