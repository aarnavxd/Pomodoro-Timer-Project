import logo from './logo.svg';
import './App.css'; // importing the css file
import Timer from './components/Timer'; // importing the timer from components

function App() { // creating main app
  return (
    <>
      <div className={'intro'}>
        <h1>Welcome to Pomodoro Timer</h1>
      </div>
      <main> 
        <Timer />
      </main>
      
    </>
    
  );
}

export default App;
