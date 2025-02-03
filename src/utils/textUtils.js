// // Utility functions for text transformations

// export const toSentenceCase = (text) => {
//     return text
//       .toLowerCase()
//       .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
//   };
  
//   export const removeExtraSpaces = (text) => {
//     return text.replace(/\s+/g, " ").trim();
//   };
  
//   export const reverseText = (text) => {
//     return text.split("").reverse().join("");
//   };
  

// Utility functions to transform text
export const toSentenceCase = (text) => {
    return text
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
  };
  
  export const removeExtraSpaces = (text) => {
    return text.replace(/\s+/g, " ").trim();
  };
  
  export const reverseText = (text) => {
    return text.split("").reverse().join("");
  };
  