import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
    

     <div className="container">
     <div className="header">
      {/* Password text and Copy */}
     
     <div >njw7362%6</div>
     <button className='btn-cpy' onclick>Copy</button>

     </div>

     {/* Character Length */}
     <div className="charlength">
      <span>
        <label> Character Length</label>
        <label> 4</label>
      </span>

      <span>
        <input 
        type='range'
        min='4'
        max='20'
     
        // onchange={}
    



        />

      </span>
      </div>




     {/*Strength*/}





     {/*Generate Button*/}







     </div>




    </div>
  );
}

export default App;
