import './App.css';

function LoginForm() {
  return(
    <>
      <div className="LoginForm">
      <h3>Login Form</h3>
        <form>
        <input placeholder="Username"></input>
        <input placeholder="Password"></input>
        <button>LOGIN</button>
        </form>
      </div>
    </>


  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm/>
      </header>
    </div>
  );
}

export default App;
