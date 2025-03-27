import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.appBody)}>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input type="email" id="email" name="email" className={css(styles.input)} />
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input type="password" id="password" name="password" className={css(styles.input)} />
        <button type="submit" className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  appBody: {
    padding: '40px',
  },
  p: {
    fontSize: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  label: {
    fontSize: '20px', // From .App-body label
    fontFamily: 'Arial, sans-serif', // From .App-body label
    fontWeight: 'bold', // From form label
    display: 'inline-block', // From form label
    marginRight: '10px', // From form label
  },
  input: {
    fontWeight: 'bold', // From form input
    display: 'inline-block', // From form input
    marginRight: '10px', // From form input
    border: '1px solid #ccc', // From form input
  },
  button: {
    borderRadius: '4px', // From form button
    border: '1px solid #ccc', // From form button
    backgroundColor: 'white', // From form button
  },
});

export default Login;
