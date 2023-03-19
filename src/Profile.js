import { useState } from "react";

function Profile({currentName, writeNameOnNavBar}) {
  const [name, setName] = useState("");

  //Fake sign in and fake sing out
  const handleSubmit = (event) => {
    event.preventDefault();
    setName(name)
    writeNameOnNavBar(name)
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form></div>
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
 }

 export default Profile;