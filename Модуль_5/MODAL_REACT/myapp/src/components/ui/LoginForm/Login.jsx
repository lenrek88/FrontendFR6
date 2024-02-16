function LoginForm() {

    function handlerClick(event) {
      event.preventDefault();
      let login = event.target.previousSibling.previousSibling.value;
      let password = event.target.previousSibling.value;
      console.log(`
      Пользователь успешно авторизован
      Логин: ${login}
      Пароль: ${password}
      `)
    };

    return(
      <>
        <div className="LoginForm">
        <h3>Login Form</h3>
          <form>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <button onClick={handlerClick}>LOGIN</button>
          </form>
        </div>
      </>
  
    );
  }

  export default LoginForm;