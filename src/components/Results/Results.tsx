import React from 'react';
import { RotateCcw, Trophy } from 'lucide-react';
import type { QuizState } from '../types';

interface ResultsProps {
  state: QuizState;
  resetQuiz: () => void;
}

const Results: React.FC<ResultsProps> = ({ state, resetQuiz }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Trophy className="w-16 h-16 text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-4xl font-bold text-blue-600 mb-4">
            {state.score}/{state.answers.length}
          </p>
          <p className="text-gray-600 mb-8">
            You answered {state.score} questions correctly out of {state.answers.length}.
          </p>
          <button
            onClick={resetQuiz}
            className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Retry Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
