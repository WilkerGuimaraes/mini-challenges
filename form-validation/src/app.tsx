export function App() {
  return (
    <main className="flex h-screen flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-xl">Validação de Formulário</h1>
      <form className="flex max-w-xs w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
          />
        </div>

        <button
          type="submit"
          className="h-10 bg-emerald-600 font-bold rounded outline-none hover:bg-emerald-500"
        >
          Salvar
        </button>
      </form>
    </main>
  );
}
