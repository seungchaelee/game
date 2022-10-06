import React, { useRef, useState } from 'react';
import './App.css';

function GuGuDan() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      alert('정답');
      setResult(`${first} X ${second} = ${value} 정답 ㅎㅎ`);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputEl.current.focus();
    } else {
      alert('땡');
      setResult(`${first} X ${second} = 이걸 틀려? ...`);
      setValue('');
      inputEl.current.focus();
    }
  };

  return (
    <div className='gugudan'>
      <div>{first} 곱하기 {second}는?</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </div>
  );
};

export default GuGuDan;
