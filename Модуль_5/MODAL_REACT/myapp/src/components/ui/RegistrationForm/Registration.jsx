import { useState } from "react";


function RegistrationForm() {

    const [credentials, setCredentials] = useState({email:'', password:''})

    function handlerClick(e) {
      e.preventDefault();
      console.log(`
      Пользователь успешно зарегестрирован
      Логин: ${credentials.email}
      Пароль: ${credentials.password}
      `)
    };

    return(
      <>
        <h3>Registartion Form</h3>
          <form>
          <input placeholder="Username" onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}></input>
          <input placeholder="Password" onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}></input>
          <button onClick={handlerClick}>REGISTRATION</button>
          </form>
      </>
    );
  }

  export default RegistrationForm;