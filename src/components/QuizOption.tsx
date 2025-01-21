import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizOptionProps {
  option: string;
  index: number;
  selected: boolean;
  correct: boolean | null;
  disabled: boolean;
  onSelect: () => void;
}

export const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  index,
  selected,
  correct,
  disabled,
  onSelect,
}) => {
  const letters = ['A', 'B', 'C', 'D'];
  
  const getBackgroundColor = () => {
    if (!selected) return 'bg-white hover:bg-gray-50';
    if (correct === null) return 'bg-blue-50';
    return correct ? 'bg-green-50' : 'bg-red-50';
  };

  const getBorderColor = () => {
    if (!selected) return 'border-gray-200';
    if (correct === null) return 'border-blue-500';
    return correct ? 'border-green-500' : 'border-red-500';
  };

  return (
    <button
      className={`w-full p-4 ${getBackgroundColor()} border-2 ${getBorderColor()} 
                 rounded-lg mb-3 flex items-center justify-between transition-all
                 ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
      onClick={onSelect}
      disabled={disabled}
    >
      <div className="flex items-center">
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 font-medium">
          {letters[index]}
        </span>
        <span className="text-gray-700">{option}</span>
      </div>
      {selected && correct !== null && (
        correct ? (
          <CheckCircle className="w-6 h-6 text-green-500" />
        ) : (
          <XCircle className="w-6 h-6 text-red-500" />
        )
      )}
    </button>
  );
};