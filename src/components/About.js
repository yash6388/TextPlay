// About.js
import React from "react";
import '../styles/About.css'; // Importing CSS from styles folder

export default function About() {
  return (
    <div className="container my-3">
      <h2>About TextPlay</h2>
      <p>
        TextPlay is a powerful text manipulation app built using React. It
        provides users with various text utilities to transform and manipulate
        their input text efficiently. You can:
      </p>
      <ul>
        <li>Convert text to uppercase or lowercase</li>
        <li>Change text to sentence case</li>
        <li>Remove extra spaces between words</li>
        <li>Reverse the input text</li>
        <li>Download your transformed text as a .txt or .pdf file</li>
      </ul>
      <p>
        Built with React and Bootstrap, TextPlay is designed for simple and
        seamless text editing. Whether you’re a developer or just looking to
        clean up your text, TextPlay provides all the essential tools in one
        place.
      </p>
      <p>
        <strong>Version 1.0.0</strong>
      </p>
      <p>
        <strong>Developer:</strong> Yash Kumar Singh
      </p>
    </div>
  );
}
