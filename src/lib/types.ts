// Tipos do aplicativo de micro-aprendizagem

export interface Lesson {
  id: string;
  title: string;
  category: string;
  duration: number; // em minutos
  points: number;
  content: string;
  videoUrl?: string;
  quiz: Quiz;
  completed: boolean;
  isFree: boolean; // Nova propriedade para controle de paywall
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number; // índice da resposta correta
}

export interface UserProgress {
  totalPoints: number;
  lessonsCompleted: number;
  currentStreak: number;
  level: number;
}

export interface OnboardingStep {
  title: string;
  description: string;
  icon: string;
}

export interface SubscriptionStatus {
  isSubscribed: boolean;
  subscribedAt?: string;
}
