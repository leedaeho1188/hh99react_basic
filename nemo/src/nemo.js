import React from 'react';

const Nemo = (props) => {
  const [count, setCount] = React.useState(3);

  const addNemo = () => {
    if (count < 5){
      setCount(count+1);
    } else {
      window.alert('Thats enough')
    }
  }

  const removeNemo = () => {
    setCount(count > 0? count-1 : 0)

  }


  console.log(count)
  const nemo_count = Array.from({length: count}, (v, i) => (i));
  return (
    <div className="App">
      {nemo_count.map((num, idx)=>{
        return (
        <div 
          key = {idx}
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: '#eee',
            margin: '10px'
          }}>
          nemo
        </div>
    )
  })}
  <button onClick={addNemo}>하나 추가</button>
  <button onClick={removeNemo}>하나 빼기</button>
</div>
  )
}

export default Nemo;