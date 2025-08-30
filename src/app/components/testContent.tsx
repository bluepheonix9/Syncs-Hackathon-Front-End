"use client";
import React, { useState } from "react";
import Link from "next/link";

const quizData = [
  {
    category: "Electricity",
    options: [
      "Turned off lights when leaving a room",
      "Turned off fan/heater when not needed",
      "Unplugged chargers and devices when not in use",
      "Set devices to sleep mode when idle",
    ],
  },
  {
    category: "Water",
    options: [
      "Turned off the tap while soaping hands or brushing teeth",
      "Took shorter showers",
      "Collected rainwater for gardening or cleaning",
      "Reused water where possible (e.g., washing vegetables, watering plants)",
    ],
  },
  {
    category: "Waste & Recycling",
    options: [
      "Recycled paper, plastic, and metals properly",
      "Avoided single-use plastics (bags, straws, bottles)",
      "Donated or reused items instead of throwing away",
      "Sorted trash correctly for disposal",
    ],
  },
  {
    category: "Additional Sustainability Habits",
    options: [
      "Used reusable bags, containers, or bottles",
      "Participated in community cleanups or tree planting",
      "Reduced paper usage at work or school",
      "Avoided fast fashion or bought second-hand",
    ],
  },
];

const TestYourself: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleToggle = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const getFeedback = (score: number) => {
  if (score >= 1 && score <= 4) 
    return "Your habits this week weren’t very sustainable. Try to take small steps to improve.";
  if (score >= 5 && score <= 8)
    return "Your habits this week were somewhat sustainable. There’s room for improvement!";
  if (score >= 9 && score <= 12)
    return "Your habits are fairly sustainable. Keep building on them!";
  if (score >= 13 && score <= 16) 
    return "Excellent! Your habits are very sustainable. Keep up the great work!";
  return "No actions selected yet.";
};

  const getFeedbackBg = (score: number) => {
    if (score >= 1 && score <= 4) return "bg-red-300";
    if (score >= 5 && score <= 12) return "bg-yellow-00";
    if (score >= 13 && score <= 16) return "bg-green-300";
    return "bg-gray-200";
  };
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Test Yourself: Waste Saving Quiz</h1>

      {quizData.map((q) => (
        <div key={q.category} className="bg-white rounded-lg p-6 shadow space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">{q.category}</h2>
          <div className="space-y-2">
            {q.options.map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(opt)}
                  onChange={() => handleToggle(opt)}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

    {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      )}

      {submitted && (
        <div
            className={`border p-4 rounded-lg transition-colors duration-700 ease-in-out ${getFeedbackBg(
            selectedOptions.length
            )}`}
        >
            <h2 className="font-semibold text-lg mb-2">
            Your Score: {selectedOptions.length} / 16
            </h2>
            <p className="mb-2">{getFeedback(selectedOptions.length)}</p>
            <p className="mb-4 text-gray-700">
            However, no one's perfect. This is okay! We all learn. To see ways to improve your sustainability habits, check out tips below.
            </p>
            <Link
            href="/tips"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block"
            >
            View More Tips
            </Link>
        </div>
        )}

    </div>
  );
};


export default TestYourself;
