"use client";

import { useRouter } from 'next/navigation';
import { X, Check, Lock } from 'lucide-react';

export default function AssinaturaPage() {
  const router = useRouter();

  const handleSubscribe = () => {
    window.location.href = 'https://pay.kiwify.com.br/5DA4ASV';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <button
          onClick={() => router.back()}
          className="mb-4 p-2 hover:bg-white/10 rounded-full transition-colors ml-auto block"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-3">
              Pare de Procrastinar e Faça Acontecer Agora
            </h1>
            
            <p className="text-orange-100 text-lg">
              Aprenda produtividade e disciplina em 5 minutos por dia.
            </p>
          </div>

          <div className="p-8">
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">
                    Organize sua rotina sem teoria inútil
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">
                    Desenvolva disciplina que dura
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">
                    Fale e seja levado a sério
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">
                    Lide com pressão sem surtar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">
                    Tenha clareza para crescer na carreira
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">
                    Transforme ações diárias em resultados
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 mb-6 border-2 border-slate-200">
              <div className="text-center mb-4">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">R$ 19</span>
                  <span className="text-2xl font-semibold text-gray-700">,90</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Cancele quando quiser</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubscribe}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mb-4"
            >
              <Lock className="w-5 h-5" />
              Desbloquear acesso completo por R$ 19,90/mês
            </button>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                Pagamento seguro via Kiwify
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
