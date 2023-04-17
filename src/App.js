import SunF from './components/SunF';
import './App.css';
import Navbar from './components/Navbar';
import Date from './components/Date';
import { useState } from 'react';
import MainLayout from './layout/MainlLayout';
import image from './images/image.png';


function App() {
  const [name, setName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Favorite type of rose ' + name);
  };



  const handleSubmitNew = (event) => {
    event.preventDefault();
    setStudents(currentFlowers => [...currentFlowers, name]);
    setName('');
  }



  const [flowers, setStudents] = useState(['Sunflower', 'Cardinalflower','Rad tulips']);
  
 
  const num= 'sunflower';

  return (
    <MainLayout>
       <Navbar />
      <div className="App">
        <SunF num={num}/>
        
      
        <Date />

        <form onSubmit={handleSubmit}>
          <h2 className='rose'>WHAT IS YOUR FAVORITE TYPE OF ROSE?</h2>
          <input  type='text' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='submit' value='click' />
        </form>
        <br></br>

<hr></hr>
<br></br>
<hr></hr>

       

        
        <form className='add' onSubmit={handleSubmitNew}>
          <h2>Add a new flower</h2>
        
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='submit' value='Submit' />


        </form >
        <h3 className='ADD'>ALL FLOWER</h3>
        <ul>
          {flowers.map((flower,index) =><li key={index}>{flower}</li>)}
        </ul>

       <br></br>
       <image></image>
      </div>
    </MainLayout>
  );
}

export default App;

