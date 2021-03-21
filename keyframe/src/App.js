import './App.css';
import styled, {keyframes} from "styled-components"


function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}

const move = keyframes`
  0%{
    top: 20px;
    opacity:1;
    background-color: orange
  }
  25%{
    top: 30px;
    left: 40px;
    background-color: blue
  }
  50%{
    top: 200px;
    left: 200px
    opacity:0;
  }
  80%{
    top: 100px;
    left: 500px;
  }
  100%{
    top: 20px;
    opacity:1;
  }
`

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
  border-radius: 150px;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${move} 2s 1s infinite;
`


export default App;
