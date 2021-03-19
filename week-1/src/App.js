import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{
      border:'1px solid #eee',  
      width: '100vw', 
      margin: "30px auto",
      padding: "20px",
      display: "flex",
      maxWidth: '400px',
      flexDirection: "column",
    }}>
      <h1 style={{
        color:"green",
      }}>안녕하세요!</h1>
      <hr style={{width: '100%'}} />
      <p style ={{textAlign: "left"}}>이름을 입력해주세요.</p>
      <input type="text"/>
    </div>
  );
}

export default App;
