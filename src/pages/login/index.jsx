import PageWrapper from "@/Components/PageWrapper";

export default function Login() {
  return (
    <PageWrapper>
      <div className="w-full p-4 flex flex-col items-center justify-center mt-6">
        <h1 className="text-[35px] text-black font-bold font-serif">Entrar</h1>
        <form className="bg-white p-6 rounded flex flex-col gap-2 shadow-md w-full max-w-sm">
          <label className="text-sm font-bold text-gray-700">E-mail</label>
              <input
                type="email"
                className="w-full border text-black border-[#b3a3db] p-2  rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                placeholder="seu@email.com"
                required
              />
              <label className="text-sm font-bold text-gray-700">Senha</label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-2 border text-black border-[#b3a3db] rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                required
              />
              <div className="mt-6 flex justify-between">
                <button
                  type="submit"
                  className="w-full p-2 text-[#7F6AAE] bg-gradient-to-r  cursor-pointer"
                >
                  Esqueceu sua senha?
                </button>
                <button
                  type="submit"
                  className="w-full p-2 text-white rounded-3xl bg-gradient-to-r from-[#9B86F3] to-[#7F6AAE] cursor-pointer"
                >
                  Entrar
                </button>
              </div>
              <div className="mt-4">
                <p className="text-center text-[#976460]">
                  Não tem uma conta?
                  <button
                    className="text-[#9B86F3] font-bold cursor-pointer pl-2"
                    onClick={() => (window.location.href = "/login")}
                  >
                    Cadastre-se
                  </button>
                </p>
              </div>
        </form>
      </div>
    </PageWrapper>
  );
}
