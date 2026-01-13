"use client";

import { useState, useEffect } from 'react';
import { Award, TrendingUp, CheckCircle, Target, Zap } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { lessonsData } from '@/lib/lessons-data';

export default function ProgressoPage() {
  const [isClient, setIsClient] = useState(false);
  const [userProgress, setUserProgress] = useState({
    totalPoints: 0,
    lessonsCompleted: 0,
    level: 1
  });
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const progress = JSON.parse(localStorage.getItem('userProgress') || '{"totalPoints": 0, "lessonsCompleted": 0, "level": 1}');
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    setUserProgress(progress);
    setCompletedLessons(completed);
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  const totalLessons = lessonsData.length;
  const progressPercentage = (userProgress.lessonsCompleted / totalLessons) * 100;
  const pointsToNextLevel = (userProgress.level * 3 - userProgress.lessonsCompleted) * 50;

  const categories = Array.from(new Set(lessonsData.map(l => l.category)));
  const categoryProgress = categories.map(category => {
    const categoryLessons = lessonsData.filter(l => l.category === category);
    const completedInCategory = categoryLessons.filter(l => completedLessons.includes(l.id)).length;
    return {
      name: category,
      completed: completedInCategory,
      total: categoryLessons.length,
      percentage: (completedInCategory / categoryLessons.length) * 100
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-20">
      <div className="max-w-lg mx-auto p-4 pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Seu Progresso</h1>
          <p className="text-gray-600">Acompanhe sua evolução no aprendizado</p>
        </div>

        {/* Level Card */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-2xl mb-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-blue-100 text-sm mb-1">Nível Atual</p>
              <h2 className="text-4xl font-bold">{userProgress.level}</h2>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-blue-100 text-sm">
            {pointsToNextLevel > 0 
              ? `Faltam ${pointsToNextLevel} pontos para o próximo nível`
              : 'Parabéns! Você atingiu um novo nível!'
            }
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-5 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-600">Total de Pontos</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{userProgress.totalPoints}</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Lições Feitas</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {userProgress.lessonsCompleted}/{totalLessons}
            </p>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900">Progresso Geral</h3>
            <span className="text-sm font-semibold text-blue-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {userProgress.lessonsCompleted} de {totalLessons} lições concluídas
          </p>
        </div>

        {/* Category Progress */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-gray-900">Progresso por Categoria</h3>
          </div>
          
          <div className="space-y-4">
            {categoryProgress.map((category) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {category.name}
                  </span>
                  <span className="text-sm text-gray-600">
                    {category.completed}/{category.total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-gray-900">Conquistas</h3>
          </div>

          <div className="space-y-3">
            <div className={`flex items-center gap-3 p-3 rounded-xl ${
              userProgress.lessonsCompleted >= 1 ? 'bg-green-50' : 'bg-gray-50'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                userProgress.lessonsCompleted >= 1 ? 'bg-green-500' : 'bg-gray-300'
              }`}>
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">Primeira Lição</p>
                <p className="text-xs text-gray-600">Complete sua primeira lição</p>
              </div>
            </div>

            <div className={`flex items-center gap-3 p-3 rounded-xl ${
              userProgress.lessonsCompleted >= 3 ? 'bg-green-50' : 'bg-gray-50'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                userProgress.lessonsCompleted >= 3 ? 'bg-green-500' : 'bg-gray-300'
              }`}>
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">Aprendiz Dedicado</p>
                <p className="text-xs text-gray-600">Complete 3 lições</p>
              </div>
            </div>

            <div className={`flex items-center gap-3 p-3 rounded-xl ${
              userProgress.lessonsCompleted >= totalLessons ? 'bg-green-50' : 'bg-gray-50'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                userProgress.lessonsCompleted >= totalLessons ? 'bg-green-500' : 'bg-gray-300'
              }`}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">Mestre do Conhecimento</p>
                <p className="text-xs text-gray-600">Complete todas as lições</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
