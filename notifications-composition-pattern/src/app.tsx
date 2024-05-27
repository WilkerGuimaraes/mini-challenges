import { X, Check, Mail } from "lucide-react";
import { Notification } from "./components/Notification";

export function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[448px] rounded overflow-hidden">
        {/* Header */}
        <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
          <span className="font-bold">Notificações</span>
          <button className="text-green-500 font-bold text-xs hover:text-green-300">
            MARCAR TODAS COMO VISTAS
          </button>
        </div>

        {/* Recent Section */}
        <div>
          <div className="bg-zinc-950 font-medium px-5 py-2 text-sm text-zinc-400">
            Recentes
          </div>

          <div className="divide-y-2 divide-zinc-950">
            <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
              <Mail className="size-6 text-yellow-500 mt-3" />
              <Notification.Content
                text="O curso 'Introdução à Programação' já está disponível. Inscreva-se agora
        e comece a aprender!"
              />
            </div>

            <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
              <Mail className="size-6 text-yellow-500 mt-3" />
              <Notification.Content
                text="Uma nova atualização do aplicativo está disponível. Atualize
                  agora para acessar novos recursos e melhorias!"
              />

              <div className="flex gap-2 self-center">
                <button className="size-8 rounded flex items-center justify-center bg-red-800 hover:bg-red-900">
                  <X className="size-3 text-zinc-50" />
                </button>
                <button className="size-8 rounded flex items-center justify-center bg-green-600 hover:bg-green-700">
                  <Check className="size-3 text-zinc-50" />
                </button>
              </div>
            </div>

            <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
              <Mail className="size-6 text-yellow-500 mt-3" />
              <Notification.Content
                text="Você recebeu uma nova tarefa: 'Revisar documento de projeto'.
                  Prazo: 30/05 às 17h."
              />

              <div className="flex gap-2 self-center">
                <button className="size-8 rounded flex items-center justify-center bg-red-800 hover:bg-red-900">
                  <X className="size-3 text-zinc-50" />
                </button>
                <button className="size-8 rounded flex items-center justify-center bg-green-600 hover:bg-green-700">
                  <Check className="size-3 text-zinc-50" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Old Section */}

        <div>
          <div className="bg-zinc-950 font-medium px-5 py-2 text-sm text-zinc-400">
            Antigas
          </div>

          <div className="divide-y-2 divide-zinc-950">
            <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
              <Mail className="size-6 text-yellow-500 mt-3" />
              <Notification.Content
                text="Lembrete: o evento 'Workshop de Fotografia' acontece amanhã às
                  14h. Não perca!"
              />
            </div>

            <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
              <Mail className="size-6 text-yellow-500 mt-3" />
              <Notification.Content
                text="Seu pedido #12345 foi confirmado com sucesso! Acompanhe a
                  entrega pelo nosso aplicativo."
              />

              <div className="flex gap-2 self-center">
                <button className="size-8 rounded flex items-center justify-center bg-red-800 hover:bg-red-900">
                  <X className="size-3 text-zinc-50" />
                </button>
                <button className="size-8 rounded flex items-center justify-center bg-green-600 hover:bg-green-700">
                  <Check className="size-3 text-zinc-50" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
