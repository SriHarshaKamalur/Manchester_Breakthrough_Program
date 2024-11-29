import React, { useState } from "react";
import DynamicTable from "../Components/DynamicTable";


const SixCPoints = () => {
  // Dummy data for participants
  const [participants, setParticipants] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      name: `Student ${i + 1}`,
      advisor: `Advisor ${Math.ceil((i + 1) / 10)}`,
      class: ["Axolots", "Cheetahs", "Grizzlies"][(i % 3)],
      points: Math.floor(Math.random() * 100) + 1,
    }))
  );

  // Split data into two tables
  const table1Data = participants.slice(0, 15);
  const table2Data = participants.slice(15, 30);

  return (
    <div className="px-4 py-6 lg:px-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <h1 className="text-5xl font-bold text-center text-blue-800 mb-8">
        6C Points Leaderboard
      </h1>
      <p className="text-center text-lg text-gray-700 mb-8">
        Updated every Tuesday! Stay motivated and track your progress.
      </p>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <DynamicTable data={table1Data} />
        <DynamicTable data={table2Data} />
      </div>

      {/* Description Section */}
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            What are 6C Points?
          </h2>
          <p className="text-gray-700">
            BTM-CB’s 6C Points are a way to reward you, the students, for being
            6C learners. The more you show that you are growing in character,
            citizenship, communication, critical-thinking, collaboration, and
            creativity, the more points you will earn.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            How do I earn points and who keeps track?
          </h2>
          <p className="text-gray-700">
            You can earn points by completing small tasks focused on the 6Cs.
            Your advisor and the director will award you points based on the
            tasks you’ve completed and keep track for you!
          </p>
        </section>
      </div>

      {/* Quick Links Section */}
      <footer className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Quick Links</h3>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Ben’s Email
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            College Board
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Common App
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SixCPoints;
