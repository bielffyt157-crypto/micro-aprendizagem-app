"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, Award, BookOpen, CheckCircle, X, ArrowLeft, Lock } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { lessonsData } from '@/lib/lessons-data';
import { Lesson, SubscriptionStatus } from '@/lib/types';

export default function LicoesPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizResult, setQuizResult] = useState<'correct' | 'incorrect' | null>(null);
  const [subscription, setSubscription] = useState<SubscriptionStatus>({ isSubscribed: false });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    const subscriptionData = JSON.parse(localStorage.getItem('subscription') || '{"isSubscribed": false}');
    
    setSubscription(subscriptionData);
    
    const updatedLessons = lessonsData.map(lesson => ({
      ...lesson,
      completed: completedLessons.includes(lesson.id)
    }));
    setLessons(updatedLessons);
  }, [isClient]);

  const handleLessonClick = (lesson: Lesson) => {
    // Verificar se a lição está bloqueada
    if (!lesson.isFree && !subscription.isSubscribed) {
      router.push('/assinatura');
      return;
    }

    setSelectedLesson(lesson);
    setShowQuiz(false);
    setSelectedAnswer(null);
    setQuizResult(null);
  };

  const handleFinishReading = () => {
    setShowQuiz(true);
  };

  const handleAnswerSelect = (index: number) => {
    if (quizResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmitQuiz = () => {
    if (selectedAnswer === null || !selectedLesson || !isClient) return;

    const isCorrect = selectedAnswer === selectedLesson.quiz.correctAnswer;
    setQuizResult(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      // Atualizar progresso
      const userProgress = JSON.parse(localStorage.getItem('userProgress') || '{"totalPoints": 0, "lessonsCompleted": 0, "level": 1}');
      const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');

      if (!completedLessons.includes(selectedLesson.id)) {
        userProgress.totalPoints += selectedLesson.points;
        userProgress.lessonsCompleted += 1;
        userProgress.level = Math.floor(userProgress.lessonsCompleted / 3) + 1;
        completedLessons.push(selectedLesson.id);

        localStorage.setItem('userProgress', JSON.stringify(userProgress));
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));

        // Atualizar estado local
        setLessons(lessons.map(l => 
          l.id === selectedLesson.id ? { ...l, completed: true } : l
        ));
      }
    }
  };

  const handleCloseLesson = () => {
    setSelectedLesson(null);
    setShowQuiz(false);
    setSelectedAnswer(null);
    setQuizResult(null);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  if (selectedLesson) {
    return (
      <div className="min-h-screen bg-white pb-20">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center gap-3 z-10">
            <button
              onClick={handleCloseLesson}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex-1">
              <h2 className="font-semibold text-gray-900">{selectedLesson.title}</h2>
              <p className="text-sm text-gray-600">{selectedLesson.category}</p>
            </div>
          </div>

          {!showQuiz ? (
            // Conteúdo da lição
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedLesson.duration} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span>{selectedLesson.points} pontos</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {selectedLesson.content}
                </p>
              </div>

              <button
                onClick={handleFinishReading}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                Fazer Quiz
              </button>
            </div>
          ) : (
            // Quiz
            <div className="p-6">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  Quiz Rápido
                </h3>
                <p className="text-gray-600 text-center">
                  Responda para ganhar {selectedLesson.points} pontos
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  {selectedLesson.quiz.question}
                </p>

                <div className="space-y-3">
                  {selectedLesson.quiz.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={quizResult !== null}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        selectedAnswer === index
                          ? quizResult === 'correct'
                            ? 'border-green-500 bg-green-50'
                            : quizResult === 'incorrect'
                            ? 'border-red-500 bg-red-50'
                            : 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      } ${quizResult !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedAnswer === index
                            ? quizResult === 'correct'
                              ? 'border-green-500 bg-green-500'
                              : quizResult === 'incorrect'
                              ? 'border-red-500 bg-red-500'
                              : 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedAnswer === index && quizResult === 'correct' && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                          {selectedAnswer === index && quizResult === 'incorrect' && (
                            <X className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span className="text-gray-900">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {quizResult === null ? (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={selectedAnswer === null}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirmar Resposta
                </button>
              ) : (
                <div className={`rounded-2xl p-6 text-center ${
                  quizResult === 'correct' ? 'bg-green-50' : 'bg-red-50'
                }`}>
                  {quizResult === 'correct' ? (
                    <>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-green-900 mb-2">
                        Parabéns! 🎉
                      </h4>
                      <p className="text-green-800 mb-4">
                        Você ganhou {selectedLesson.points} pontos!
                      </p>
                      <button
                        onClick={handleCloseLesson}
                        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                      >
                        Voltar para Lições
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500 flex items-center justify-center">
                        <X className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-red-900 mb-2">
                        Ops! Tente novamente
                      </h4>
                      <p className="text-red-800 mb-4">
                        Revise a lição e tente de novo
                      </p>
                      <button
                        onClick={() => {
                          setShowQuiz(false);
                          setSelectedAnswer(null);
                          setQuizResult(null);
                        }}
                        className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                      >
                        Reler Lição
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-20">
      <div className="max-w-lg mx-auto p-4 pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lições</h1>
          <p className="text-gray-600">Escolha uma lição e comece a aprender</p>
        </div>

        <div className="space-y-4">
          {lessons.map((lesson) => {
            const isLocked = !lesson.isFree && !subscription.isSubscribed;
            
            return (
              <button
                key={lesson.id}
                onClick={() => handleLessonClick(lesson)}
                className={`w-full bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all text-left relative overflow-hidden ${
                  isLocked ? 'opacity-75' : ''
                }`}
              >
                {lesson.completed && (
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                {isLocked && (
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2">
                    {lesson.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 pr-10">
                    {lesson.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.duration} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span>{lesson.points} pts</span>
                  </div>
                  {isLocked && (
                    <div className="flex items-center gap-1 text-gray-500">
                      <Lock className="w-4 h-4" />
                      <span className="font-semibold">Premium</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA para assinatura se não for assinante */}
        {!subscription.isSubscribed && (
          <div className="mt-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-6 shadow-2xl text-white">
            <h3 className="text-xl font-bold mb-2">Desbloqueie Todas as Lições</h3>
            <p className="text-blue-100 mb-4">
              Acesso completo a todo conteúdo por apenas R$ 19,90/mês
            </p>
            <button
              onClick={() => router.push('/assinatura')}
              className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              Ver Planos
            </button>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  );
}
