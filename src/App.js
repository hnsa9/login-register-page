

function App() {
  return (
    <div className="app">
      <form>

      <img className='image' alt='IFCA' src='https://ifca.asia/wp-content/uploads/2022/03/logo-mobile.png'></img>

      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>Username</label>
          <input type='text' id='name' />
        </div>
      
      </div>

      <div className='form-control'>
          <label htmlFor='name'>Password</label>
          <input type='password' id='password' />
      </div>

      <p>Forgot password?</p>

      <div className='form-actions'>
        <button>Login</button>
        <button>Register</button>
      </div>
    </form>

    </div>
  );
}

export default App;
