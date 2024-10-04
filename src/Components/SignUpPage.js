// src/components/SignUpPage.js
import React, { useState } from 'react';
import './SignUpPage.css'; // Import the CSS file for styling

function SignUpPage() {
  const [name, setName] = useState('');        // New state for Name
  const [email, setEmail] = useState('');      // New state for Email ID
  const [rollNumber, setRollNumber] = useState('');  // New state for Roll Number

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Name:", name);                // Log Name
    console.log("Email ID:", email);           // Log Email ID
    console.log("Roll Number:", rollNumber);   // Log Roll Number
  };

  return (
    <div className="sign-up-page">
      <form className="sign-up-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>

        {/* Name Field */}
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email ID Field */}
        <div className="input-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Roll Number Field */}
        <div className="input-group">
          <label htmlFor="rollNumber">Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            placeholder="Enter Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;



































// // src/components/SignUpPage.js
// import React, { useState } from 'react';
// import './SignUpPage.css'; // Import the CSS file for styling

// function SignUpPage() {
//   const [id, setId] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     console.log("ID:", id);
//     console.log("Password:", password);
//   };

//   return (
//     <div className="sign-up-page">
//       <form className="sign-up-form" onSubmit={handleSignUp}>
//         <h2>Sign Up</h2>
//         <div className="input-group">
//           <label htmlFor="id">ID</label>
//           <input
//             type="text"
//             id="id"
//             placeholder="Enter ID"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignUpPage;
