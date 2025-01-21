import React from 'react';
import { Brain, LightbulbIcon } from 'lucide-react';
import { ProgressBar } from '../ProgressBar';
import { QuizOption } from '../QuizOption';

const Quiz = ({ state, setState, questions }) => {
  const currentQuestion = questions[state.currentQuestion];

  const handleAnswerSelect = (answerIndex) => {
    if (state.isAnswered) return;

    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    setState((prev) => ({
      ...prev,
      selectedAnswer: answerIndex,
      isAnswered: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, answerIndex],
    }));
  };

  const handleNextQuestion = () => {
    if (state.currentQuestion === questions.length - 1) {
      setState((prev) => ({ ...prev, showResults: true }));
    } else {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        isAnswered: false,
        selectedAnswer: null,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Brain className="w-8 h-8 text-blue-600 mr-2" />
            <h1 className="text-xl font-bold">COA Module 5</h1>
          </div>
          <div className="text-sm text-gray-500">
            Question {state.currentQuestion + 1} of {questions.length}
          </div>
        </div>

        <ProgressBar current={state.currentQuestion + 1} total={questions.length} />

        <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <QuizOption
                  key={index}
                  option={option}
                  index={index}
                  selected={state.selectedAnswer === index}
                  correct={
                    state.isAnswered ? index === currentQuestion.correctAnswer : null
                  }
                  disabled={state.isAnswered}
                  onSelect={() => handleAnswerSelect(index)}
                />
              ))}
            </div>
          </div>

          <div
            className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-500 ease-in-out transform ${
              state.isAnswered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            {state.isAnswered && (
              <div className="space-y-4">
                <div className="flex items-center text-blue-600">
                  <LightbulbIcon className="w-6 h-6 mr-2" />
                  <h3 className="text-lg font-semibold">Explanation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Next Question Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleNextQuestion}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
