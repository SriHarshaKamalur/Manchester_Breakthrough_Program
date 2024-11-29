import React from "react";

const SuggestionBox = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Suggestion Box</h1>
      <p>Have any suggestions? Submit them below:</p>
      <form>
        <textarea rows="4" cols="50" placeholder="Write your suggestion here..." />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SuggestionBox;
