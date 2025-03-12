import './Login.css';

function Login() {
    return (
        <>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <label for="email">Email: </label>
                <input id="email" type="text" />
                <label for="password">Password: </label>
                <input id="password" type="password" />
                <button>OK</button>
            </div>
        </>
    );
}

export default Login;
