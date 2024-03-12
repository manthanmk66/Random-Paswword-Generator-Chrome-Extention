import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {


  const checkboxData=[
    {title:"Include Uppercase Letters",state:false},
    {title:"Include Lowercase Letters",state:false},
    {title:"Include Numbers",state:false},
    {title:"Include Symbols",state:false},

  ]
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

    
        <input 
        type='range'
        min='4'
        max='20'
     
        // onchange={}
    
        />

      </div>

      {/* CheckBoxex */}
      <div className="checkboxex">
        {checkboxData.map((checkbox,index)=>{
          return <div key={index}>

            <input
            type="checkbox" checked={checkbox.state}/>
            <label>{checkbox.title}</label>
          </div>
        })}

        

      </div>




     {/*Strength*/}





     {/*Generate Button*/}

     <button className='generateBtn'>Generate Password</button>









     </div>




    </div>
  );
}

export default App;
