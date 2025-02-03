import React, { useState, useContext } from "react";
import { useTheme } from "../context/ThemeContext";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import { toSentenceCase, removeExtraSpaces, reverseText } from "../utils/textUtils";
import '../styles/TextForm.css';

export default function TextForm({ showAlert }) {
  const { mode } = useTheme(); // Use the custom hook to access the current theme mode
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  const handleDownloadTxt = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "textutils-output.txt");
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();

    // Add a title to the PDF
    pdf.setFontSize(16);
    pdf.text("Text Utilities Output", 10, 10);

    // Add the text content
    pdf.setFontSize(12);
    const textLines = pdf.splitTextToSize(text, 180); // Split text to fit within 180mm
    pdf.text(textLines, 10, 20); // Start at position (10, 20)

    // Save the PDF
    pdf.save("textutils-output.pdf");
  };

  // Text-to-Speech function using the Web Speech API
  const speakText = () => {
    if (text.trim() === '') {
      alert('Please enter some text!');
      return;
    }

    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    // Create a new speech synthesis utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Optional: Adjust pitch, rate, and voice if needed
    utterance.pitch = 1;  // Normal pitch
    utterance.rate = 1;   // Normal rate of speech

    // Speak the text
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container" style={{ color: mode === "dark" ? "white" : "#042743" }}>
      <h1>Text Utilities</h1>
      <textarea
        className="form-control"
        value={text}
        onChange={handleChange}
        style={{
          backgroundColor: mode === "dark" ? "grey" : "white", 
          color: mode === "dark" ? "white" : "#042743",
          borderColor: mode === "dark" ? "#444" : "#ccc",
        }}
        rows="8"
      ></textarea>

      <button className="btn btn-primary mx-2" onClick={() => setText(text.toUpperCase())}>Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={() => setText(text.toLowerCase())}>Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={() => setText(toSentenceCase(text))}>Sentence Case</button>
      <button className="btn btn-primary mx-2" onClick={() => setText(reverseText(text))}>Reverse Text</button>
      <button className="btn btn-primary mx-2" onClick={() => setText(removeExtraSpaces(text))}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2" onClick={handleDownloadTxt}>Download TXT</button>
      <button className="btn btn-primary mx-2" onClick={handleDownloadPDF}>Download PDF</button>
      
      {/* New Text-to-Speech Button */}
      <button className="btn btn-primary mx-2" onClick={speakText}>Speak Text</button>

      <h2 style={{ color: mode === "dark" ? "white" : "#042743" }}>Text Summary</h2>
      <p style={{ color: mode === "dark" ? "white" : "#042743" }}>
        {text.split(/\s+/).filter((word) => word !== "").length} words, {text.length} characters
      </p>
    </div>
  );
}
