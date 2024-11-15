import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Check } from "lucide-react";

const Dashboard = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [voteRecorded, setVoteRecorded] = useState(false);

  const candidates = [
    { id: 1, name: "Person 1", avatar: "height=100&width=100" },
    { id: 2, name: "Person 2", avatar: "height=100&width=100" },
  ];

  const handleVote = (id) => {
    setSelectedPerson(id);
  };

  const submitVote = () => {
    if (selectedPerson) {
      setVoteRecorded(true);
      setTimeout(() => setVoteRecorded(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white rounded-xl shadow-2xl p-8 w-full max-w-3xl"
      >
        <h1 className="text-3xl font-bold text-center mb-8">
          Choose ACM Gensec
        </h1>

        <div className="flex justify-center gap-8">
          {candidates.map((person) => (
            <motion.div
              key={person.id}
              whileHover={{ scale: 1.05 }}
              className="bg-black-800 rounded-lg p-6 flex flex-col items-center w-64"
            >
              <img
                src={person.avatar}
                alt={person.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold mb-4">{person.name}</h2>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleVote(person.id)}
                className={`px-6 py-2 rounded-full text-white font-semibold transition-colors duration-300 ${
                  selectedPerson === person.id
                    ? "bg-blue-600"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              >
                {selectedPerson === person.id ? (
                  <>
                    <Check className="inline-block mr-2" size={18} />
                    Selected
                  </>
                ) : (
                  "Vote"
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={submitVote}
            className="px-8 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            Submit Vote
          </button>
        </motion.div>

        {voteRecorded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 p-4 bg-blue-600 text-white text-center rounded-lg"
          >
            Your vote has been recorded. Thank you for participating!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
