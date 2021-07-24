import React, { useState , useRef} from "react";
import './App.css';
import ReactDOM from 'react-dom';
import Ress from './Ress'



const App = () => {
    
  // const [na, setNa] = useState([{id:1, name:'name1',from:'50' , to:"60"}])
  const [na, setNa] = useState([])
  const curr_name = useRef()
  const curr_fr = useRef()
  const curr_to = useRef()

  const tb3 = (e) => {
      const name = curr_name.current.value
      const from = curr_fr.current.value
      const to = curr_to.current.value

      setNa(prevNa =>{
        return [...prevNa, { name:name, from:from , to:to}]
      })

      ReactDOM.render(<Ress na={na}/>,document.getElementById('nat'));
  }

    return(
      <div className="all">
        <h1>Billing Report</h1><br />

        <div className="box">
          <h4>Generate List of Signed Vist Notes by Encounter Date</h4> <br />

          <div className="d-flex justify-content-around">
            <form onSubmit={tb3}>

              <div className="prr p-2 col-example text-left">

                <label htmlFor="pro" >Provider:</label>
                <select ref={curr_name}>
                  <option value="name1">name 1</option>
                  <option value="name2">name 2</option>
                  <option value="name3">name 3</option>
                  <option value="name4">name 4</option>
                </select>

              </div>


              <div className="frr p-2 col-example text-left">
                <label htmlFor="F" >From:</label>
                <input ref={curr_fr} type="date" id="F"></input>
              </div>
              
              <div className="trr p-2 col-example text-left">
                <label htmlFor="T" >To:</label>
                <input ref={curr_to} type="date" id="F"></input>
              </div>

              {/* <button onClick={tb3} type="submit" className="btn btn-primary btn-block">Update List</button> */}
              <button type="submit" className="btn btn-primary btn-block">Update List</button>
            </form>
          </div>
          
        </div>
      </div>
    )
}



export default App;
