import './App.css';
import { useEffect, useState} from "react";



function App() {

    const [text, setText] = useState('');

    const [gender, setGender] = useState('');
    
    useEffect(() => {
        const serverUrl = 'https://api.genderize.io';
        const URL = `${serverUrl}?name=${text}`;
        fetch(URL)
        .then(promise => promise.json())
        .then(result => {
            if (result.gender === 'male') {
                setGender('Мужской')
            } else {
                setGender('Женский')
            }
        })
    }, [text])



  return (
      <div className="App">
          <form><input type="text" onChange={(e) => setText(e.target.value)}></input></form>
          <p>Ваш пол: {gender}</p>
      </div>
  );
}

export default App;
