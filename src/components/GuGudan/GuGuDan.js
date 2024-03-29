import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Back = styled.div`
  border: solid red 1px;
`

function GuGuDan() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      alert('정답');
      setResult(`${first} X ${second} = ${value} 정답 ㅎㅎ`);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    } else {
      alert('땡');
      setResult(`${first} X ${second} = 이걸 틀려? ...`);
      setValue('');
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Back>
        <div>{first} 곱하기 {second}는?</div>
        <form onSubmit={onSubmitForm}>
          <input
            ref={inputRef}
            type="number"
            value={value}
            onChange={onChangeInput}
          />
          <button>1th</button>
        </form>
        <div className="result">{result}</div>
      </Back>
    </>
  );
};

export default GuGuDan;
