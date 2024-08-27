"use client";

// import { useUser } from '@auth0/nextjs-auth0/client';

// export default function LoginTest() {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h1>Welcome {user.name}</h1>
//           <a href="/api/auth/logout">Logout</a>
//         </div>
//       ) : (
//         <a href="/api/auth/login">Login</a>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const supabase = createClient();

  const signInWithEmail = async (email) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false, // Set this according to your use case
        emailRedirectTo: 'http://localhost:3000/survey', // Change to your redirect URL
      },
    });

    if (error) {
      console.error('Error sending OTP:', error.message);
      setMessage('Error sending OTP. Please try again.');
      return;
    }

    setMessage('OTP sent to your email. Please check your inbox.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmail(email);
  };

  return (
    <div>
      <h1>Sign In with OTP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send OTP</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignInPage;
