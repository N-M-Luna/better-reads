import { useState } from "react";

function Profile({currentName, writeNameOnNavBar}) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState('');

  //Fake sign in and fake sing out
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputName = event.target.inputName.value
    setName(inputName)
    writeNameOnNavBar(inputName)
  }
  const signOut = () => {
    setName('')
    writeNameOnNavBar('fellow bookworm')
  }

  if (currentName === 'fellow bookworm') {
    return (
        <div>
          <h2>Sign in to see your profile.</h2>
          <form className="sign-in-form" onSubmit={handleSubmit}>
            <label>Username:
              <input
                type="text"
                name="inputName"
                onChange={(e) => handleSubmit}
              />
            </label>
            <label>Password:
              <input
                type="password"
                name="pass"
              />
            </label>
            <button type="submit">Sign in</button>
          </form>
        </div>
    )
  } else {
    return (
        <div className="profile">
            <h2>Your information</h2>
            <p>Userame: {name}</p>
            <p>Password: •••••••• </p>
            <p>Favorite book: </p>
            <p>Currently reading: </p>
            <p>Not you? <span className="text-link" onClick={signOut}>Sign out</span>.</p>
        </div>
    )
  }
 }// TODO add more input fields

 export default Profile;