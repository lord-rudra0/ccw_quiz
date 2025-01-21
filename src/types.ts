export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: number[];
  showResults: boolean;
  isAnswered: boolean;
  selectedAnswer: number | null;
}