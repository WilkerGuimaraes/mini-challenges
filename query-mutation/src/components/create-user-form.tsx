export function CreateUserForm() {
  return (
    <div className="my-6">
      <form className="flex gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xl">
            Nome:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xl">
            E-mail:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
          />
        </div>

        <div className="flex flex-col justify-end">
          <button
            type="submit"
            className="h-10 w-20 bg-emerald-600 rounded font-bold"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
