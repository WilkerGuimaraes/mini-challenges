import { Check, Mail, X } from "lucide-react";
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
            <Notification.Root>
              <Notification.Icon icon={Mail} />
              <Notification.Content
                text="O curso 'Introdução à Programação' já está disponível. Inscreva-se agora
        e comece a aprender!"
                period="Há 3 min"
              />
            </Notification.Root>

            <Notification.Root>
              <Notification.Icon icon={Mail} />
              <Notification.Content
                text="Uma nova atualização do aplicativo está disponível. Atualize
                  agora para acessar novos recursos e melhorias!"
                period="Há 2 horas"
              />

              <Notification.Actions>
                <Notification.Action
                  icon={X}
                  className="bg-red-800 hover:bg-red-900"
                />
                <Notification.Action
                  icon={Check}
                  className="bg-green-600 hover:bg-green-700"
                />
              </Notification.Actions>
            </Notification.Root>

            <Notification.Root>
              <Notification.Icon icon={Mail} />
              <Notification.Content
                text="Você recebeu uma nova tarefa: 'Revisar documento de projeto'.
                  Prazo: 30/05 às 17h."
                period="Há 7 horas"
              />

              <Notification.Actions>
                <Notification.Action
                  icon={X}
                  className="bg-red-800 hover:bg-red-900"
                />
                <Notification.Action
                  icon={Check}
                  className="bg-green-600 hover:bg-green-700"
                />
              </Notification.Actions>
            </Notification.Root>
          </div>
        </div>

        {/* Old Section */}

        <div>
          <div className="bg-zinc-950 font-medium px-5 py-2 text-sm text-zinc-400">
            Antigas
          </div>

          <div className="divide-y-2 divide-zinc-950">
            <Notification.Root>
              <Notification.Icon icon={Mail} />
              <Notification.Content
                text="Lembrete: o evento 'Workshop de Fotografia' acontece amanhã às
                  14h. Não perca!"
                period="Há 2 dias"
              />
              <Notification.Actions>
                <Notification.Action
                  icon={X}
                  className="bg-red-800 hover:bg-red-900"
                />
              </Notification.Actions>
            </Notification.Root>

            <Notification.Root>
              <Notification.Icon icon={Mail} />
              <Notification.Content
                text="Seu pedido #12345 foi confirmado com sucesso! Acompanhe a
                  entrega pelo nosso aplicativo."
                period="Há 3 dias"
              />

              <Notification.Actions>
                <Notification.Action
                  icon={X}
                  className="bg-red-800 hover:bg-red-900"
                />
              </Notification.Actions>
            </Notification.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
