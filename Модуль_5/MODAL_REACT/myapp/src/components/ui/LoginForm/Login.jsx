import { useState } from "react";


function LoginForm() {

  const [credentials, setCredentials] = useState({email:'', password:''})



    function handlerClick(e) {
      e.preventDefault();
      console.log(`
      Пользователь успешно авторизован
      Логин: ${credentials.email}
      Пароль: ${credentials.password}
      `)
    };

    return(
      <>
        <div className="LoginForm">
        <h3>Login Form</h3>
          <form>
          <input placeholder="Username" onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}></input>
          <input placeholder="Password" onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}></input>
          <button onClick={handlerClick}>LOGIN</button>
          </form>
        </div>
      </>
  
    );
  }

  export default LoginForm;