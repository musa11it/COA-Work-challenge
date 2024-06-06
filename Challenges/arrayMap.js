function transformString(text) {
    // Check divisibility by both 3 and 5 (highest priority)
    if (text.length % 3 === 0 && text.length % 5 === 0) {
      // Reverse first, then convert to ASCII codes
      text = text.split("").reverse().join("");
      return text.split("").map(char => char.charCodeAt(0)).join(" ");
    }
  
    // Check divisibility by 3
    if (text.length % 3 === 0) {
      return text.split("").reverse().join("");  // Reverse the string
    }
  
    // Check divisibility by 5
    if (text.length % 5 === 0) {
      return text.split("").map(char => char.charCodeAt(0)).join(" "); // Convert to ASCII codes
    }
  
    // No transformation needed
    return text;
  }
  
  // Example usage
  const text = "Hello World";
  const transformedText = transformString(text);
  console.log(transformedText);
  