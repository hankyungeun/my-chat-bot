import { useRef, useState } from 'react';
import './App.css';
import { callGpt } from './services/gptApi';

function App() {
  const inputRef = useRef();
  //버튼을 여러번 누르지 못하게 하도록 처리하기 위한 상태
  const [isCalled, setIsCalled] = useState(false);
  const [response, setResponse] = useState("");

  const callGptApi = async() => {
    setIsCalled(true);
    const inputVal = inputRef.current.value;
    const result = await callGpt(inputVal);

    setIsCalled(false);
    if('choices' in result && result.choices.length > 0){
      setResponse(result.choices[0].message.content);
    }
}

  return (
    <div className="App">
      <header className="MyChatBot" />
      <div className='title'>My Chat Bot</div>
      <input ref={inputRef} className='inputText'type='text' placeholder='내용을 입력해주세요'></input>
      <button onClick={callGptApi} disabled={isCalled}>전송</button>
      <hr />
      <textarea className='textArea' placeholder='GPT답변 대기중...' value={response}
        readOnly></textarea>
    </div>
  );
}

export default App;
