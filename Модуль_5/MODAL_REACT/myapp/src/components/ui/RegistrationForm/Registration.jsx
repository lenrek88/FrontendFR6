function RegistrationForm() {
 
    function handlerClick(event) {
      event.preventDefault();
      let login = event.target.previousSibling.previousSibling.value;
      let password = event.target.previousSibling.value;
      console.log(`
      Пользователь успешно зарегестрирован
      Логин: ${login}
      Пароль: ${password}
      `)
    };

    return(
      <>
        <h3>Registartion Form</h3>
          <form>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <button onClick={handlerClick}>REGISTRATION</button>
          </form>
      </>
    );
  }

  export default RegistrationForm;