"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Zap, CheckCircle, Award, ArrowRight, Sparkles, Target } from 'lucide-react';
import Navbar from '@/components/custom/navbar';

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [userProgress, setUserProgress] = useState({ totalPoints: 0, lessonsCompleted: 0, level: 1 });
  const [subscription, setSubscription] = useState({ isSubscribed: false });
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    const storedName = localStorage.getItem('userName');
    const storedProgress = localStorage.getItem('userProgress');
    const storedSubscription = localStorage.getItem('subscription');
    
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
    
    if (storedName) {
      setUserName(storedName);
    }

    if (storedProgress) {
      setUserProgress(JSON.parse(storedProgress));
    }

    if (storedSubscription) {
      setSubscription(JSON.parse(storedSubscription));
    }
  }, [isClient]);

  const onboardingSteps = [
    {
      title: "Aprenda o que funciona",
      description: "Lições diretas de 3 minutos. Sem enrolação, só o essencial.",
      icon: Zap,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Aplique no mesmo dia",
      description: "Cada lição tem uma ação prática. Você sai fazendo, não só lendo.",
      icon: Target,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Evolua de verdade",
      description: "Acompanhe seu progresso real. Disciplina vira hábito.",
      icon: Award,
      color: "from-blue-400 to-indigo-500"
    }
  ];

  const handleFinishOnboarding = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      if (isClient) {
        localStorage.setItem('hasSeenOnboarding', 'true');
      }
      setShowOnboarding(false);
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      if (isClient) {
        localStorage.setItem('userName', userName.trim());
      }
      handleFinishOnboarding();
    }
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

  if (showOnboarding) {
    const step = onboardingSteps[currentStep];
    const Icon = step.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {step.title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              {step.description}
            </p>

            {currentStep === onboardingSteps.length - 1 && !userName ? (
              <form onSubmit={handleNameSubmit} className="mb-6">
                <input
                  type="text"
                  placeholder="Como quer ser chamado?"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-center text-lg mb-4"
                  maxLength={20}
                />
              </form>
            ) : null}

            <div className="flex gap-2 justify-center mb-6">
              {onboardingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentStep 
                      ? 'w-8 bg-blue-600' 
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleFinishOnboarding}
              disabled={currentStep === onboardingSteps.length - 1 && !userName}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {currentStep === onboardingSteps.length - 1 ? 'Começar Agora' : 'Próximo'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-20">
      <div className="max-w-lg mx-auto p-4 pt-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Olá, {userName || 'Estudante'}! 👋
              </h1>
              <p className="text-gray-600">Pronto para evoluir hoje?</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
              {userProgress.totalPoints} pts
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Concluídas</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{userProgress.lessonsCompleted}</p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-600">Nível</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{userProgress.level}</p>
          </div>
        </div>

        {/* CTA Card Principal */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-2xl mb-6 text-white">
          <h2 className="text-2xl font-bold mb-2">
            {subscription.isSubscribed ? 'Continue Sua Jornada' : 'Comece Sua Transformação'}
          </h2>
          <p className="mb-6 opacity-90">
            {subscription.isSubscribed 
              ? 'Acesso completo a todas as lições práticas'
              : '2 lições grátis para você testar agora'
            }
          </p>
          <button
            onClick={() => router.push('/licoes')}
            className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            {subscription.isSubscribed ? 'Ver Todas as Lições' : 'Começar Grátis'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Benefícios Rápidos */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">O que você vai aprender</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Zap className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-gray-700 text-sm">
                <strong>Produtividade real:</strong> técnicas que funcionam no dia a dia
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Target className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-gray-700 text-sm">
                <strong>Disciplina prática:</strong> construa hábitos que duram
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Award className="w-4 h-4 text-purple-600" />
              </div>
              <p className="text-gray-700 text-sm">
                <strong>Soft skills essenciais:</strong> comunicação, negociação e networking
              </p>
            </li>
          </ul>
        </div>

        {/* CTA Assinatura (se não for assinante) */}
        {!subscription.isSubscribed && (
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-3xl p-6 shadow-2xl text-white">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Oferta Especial</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Desbloqueie Todo o Conteúdo</h3>
            <p className="text-purple-100 mb-4">
              Acesso completo a todas as lições por apenas <strong>R$ 19,90/mês</strong>
            </p>
            <button
              onClick={() => router.push('/assinatura')}
              className="w-full bg-white text-purple-600 py-3 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Ver Oferta Completa
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  );
}
