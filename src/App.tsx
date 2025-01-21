import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Results/Results';
import type { QuizState, Question } from './types';
import questionsData from './data/questions.json';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [questions] = useState<Question[]>(questionsData.questions);
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    showResults: false,
    isAnswered: false,
    selectedAnswer: null,
  });

  const handleStartQuiz = () => setShowHome(false);

  const resetQuiz = () => {
    setState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      showResults: false,
      isAnswered: false,
      selectedAnswer: null,
    });
    setShowHome(true);
  };

  if (showHome) return <Home onStart={handleStartQuiz} />;
  if (state.showResults) return <Results state={state} resetQuiz={resetQuiz} />;
  return <Quiz state={state} setState={setState} questions={questions} />;
}

export default App;
