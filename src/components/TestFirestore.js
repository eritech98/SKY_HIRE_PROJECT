// src/components/TestFirestore.js
import React from 'react';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const TestFirestore = () => {
  const handleTestWrite = async () => {
    const userDocRef = doc(db, 'users', 'testUser');
    await setDoc(userDocRef, {
      username: 'Test User',
      email: 'testuser@example.com',
    });
    alert('Test write successful!');
  };

  return <button onClick={handleTestWrite}>Test Firestore Write</button>;
};

export default TestFirestore;
