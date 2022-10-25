import React, { useState, useRef } from 'react';
import '../App.css';

export default function WordRelay() {
  const [word, setWord] = useState('이승채');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div className='result'>{result}</div>
    </>
  );
};

// export default WordRelay;
