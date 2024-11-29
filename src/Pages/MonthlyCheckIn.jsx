import React, { useState } from "react";
import "./MonthlyCheckIn.css";

const MonthlyCheckIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    advisor: "",
    academics: "",
    academicsElaboration: "",
    mentalHealth: "",
    mentalHealthElaboration: "",
    socialEmotional: "",
    socialEmotionalElaboration: "",
    sixCs: "",
    smartGoal: "",
    pastGoalReflection: "",
    assistance: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your responses have been submitted!");
  };

  return (
    <div className="monthly-checkin-container">
      <h1>BTM-CB Monthly Check-In</h1>
      <p>
        Students, please respond to the following questions before attending
        each CB Saturday. Responses will be shared with your advisor!
      </p>

      <form className="checkin-form" onSubmit={handleSubmit}>
        {/* Name and Advisor */}
        <label htmlFor="name">
          First and Last Name
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>

        <label htmlFor="advisor">
          Advisor's Name
          <select
            id="advisor"
            name="advisor"
            value={formData.advisor}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your advisor
            </option>
            <option value="advisor1">Advisor 1</option>
            <option value="advisor2">Advisor 2</option>
          </select>
        </label>

        {/* Textarea Questions */}
        {[
          {
            label:
              "Respond to the following questions about your academics and professional growth.",
            name: "academics",
          },
          {
            label:
              "Elaborate on your responses above. How do you feel like you're currently doing academically and in your journey toward a successful career/life? (Anything to celebrate? Any concerns or challenges?)",
            name: "academicsElaboration",
          },
          {
            label:
              "Respond to the following questions about your sense of self and mental health.",
            name: "mentalHealth",
          },
          {
            label:
              "Elaborate on your responses above. How do you feel like your mental health has been recently? What have you done for self-care?",
            name: "mentalHealthElaboration",
          },
          {
            label:
              "Respond to the following questions about how you're feeling relationally/social-emotionally.",
            name: "socialEmotional",
          },
          {
            label:
              "Elaborate on your responses above. How do you feel like you've been doing relationally and social-emotionally recently?",
            name: "socialEmotionalElaboration",
          },
          {
            label:
              "Which one of the 6Cs do you need to work on before the next CB Saturday?",
            name: "sixCs",
          },
          {
            label:
              "Come up with one SMART (Specific, Measurable, Achievable, Relevant, Timely) goal you can accomplish before next CB Saturday.",
            name: "smartGoal",
          },
          {
            label:
              "If you set a goal last month, how did it go? Were you successful? Do you need to recalibrate? (Don't forget to copy your goal so you can reflect next month)",
            name: "pastGoalReflection",
          },
          {
            label: "Is there anything you may need assistance or resources for?",
            name: "assistance",
          },
          {
            label:
              "Anything else your advisor should know or that Breakthrough can help with?",
            name: "additionalInfo",
          },
        ].map((question, index) => (
          <label key={index} htmlFor={question.name}>
            {question.label}
            <textarea
              id={question.name}
              name={question.name}
              value={formData[question.name]}
              onChange={handleChange}
              placeholder="Type your response here..."
              required
            ></textarea>
          </label>
        ))}

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MonthlyCheckIn;
