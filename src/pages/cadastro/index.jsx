import PageWrapper from "@/Components/PageWrapper";
import { useState } from "react";

export default function Cadastro() {
  const [opcao, setOpcao] = useState("cliente");

  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center mt-6">
        <h1 className="text-[35px] mt-4 text-black font-bold font-serif">
          Crie sua conta
        </h1>
        <div className="p-2 rounded flex flex-col items-center justify-center shadow-md w-[40%]">
          <div className="mt-6 w-full flex gap-4 justify-between">
            <button
              onClick={() => setOpcao("cliente")}
              className=" bg-[#8772c1] text-white p-2 w-1/2 rounded-3xl hover:bg-[#b3a3db] cursor-pointer"
            >
              Cliente
            </button>
            <button
              onClick={() => setOpcao("empresa")}
              className=" bg-white text-black border-1 border-[#8671BF] w-1/2 p-2 rounded-3xl hover:bg-[#b3a3db] cursor-pointer"
            >
              Empresa
            </button>
          </div>
        </div>

        <form className="bg-white p-4 rounded flex flex-col gap-2 shadow-md w-[40%]">
          {opcao === "cliente" ? (
            <>
              <label className="text-sm font-bold text-gray-700">Nome</label>
              <input
                type="email"
                className="w-full border p-2 text-black border-[#b3a3db] rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                placeholder="Nome"
                required
              />
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
              <label className="text-sm font-bold text-gray-700">
                Confirme sua Senha
              </label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-2 border text-black border-[#b3a3db] rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                required
              />
              <div className="mt-6 flex justify-between">
                <button
                  type="submit"
                  className="w-full p-2 text-white rounded-3xl bg-gradient-to-r from-[#9B86F3] to-[#7F6AAE] cursor-pointer"
                >
                  Criar conta
                </button>
              </div>
              <div className="mt-4">
                <p className="text-center text-[#976460]">
                  Já tem uma conta?
                  <button
                    className="text-[#9B86F3] font-bold cursor-pointer pl-2"
                    onClick={() => (window.location.href = "/login")}
                  >
                    Faça Login
                  </button>
                </p>
              </div>
            </>
          ) : (
            <div className="bg-white p-4 rounded flex flex-col gap-2 ">
              <label className="text-sm font-bold text-gray-700">Nome da Empresa</label>
              <input
                type="email"
                className="w-full border p-2 text-black border-[#b3a3db] rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                placeholder="Nome"
                required
              />
              <label className="text-sm font-bold text-gray-700">CNPJ</label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-2 border text-black border-[#b3a3db] rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                required
              />
              <label className="text-sm font-bold text-gray-700">Nome do Responsável</label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-2 border text-black border-[#b3a3db] rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                required
              />
              <label className="text-sm font-bold text-gray-700">E-mail</label>
              <input
                type="email"
                className="w-full border text-black border-[#b3a3db] p-2  rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                placeholder="seu@email.com"
                required
              />
              <label className="text-sm font-bold text-gray-700">Telefone</label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-2 border text-black border-[#b3a3db] rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                required
              />
              <label className="text-sm font-bold text-gray-700">Endereço</label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-2 border text-black border-[#b3a3db] rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                required
              />
              <label className="text-sm font-bold text-gray-700">Senha</label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-2 border text-black border-[#b3a3db] rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                required
              />
              <label className="text-sm font-bold text-gray-700">Confirme sua Senha</label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-2 border text-black border-[#b3a3db] rounded focus:outline-none focus:ring-2 focus:ring-[#b3a3db]"
                required
              />
              <div className="mt-6 flex justify-between">
                <button
                  type="submit"
                  className="w-full p-2 text-white rounded-3xl bg-gradient-to-r from-[#9B86F3] to-[#7F6AAE] cursor-pointer"
                >
                  Criar conta
                </button>
              </div>
              <div className="mt-4">
                <p className="text-center text-[#976460]">
                  Já tem uma conta?
                  <button
                    className="text-[#9B86F3] font-bold cursor-pointer pl-2"
                    onClick={() => (window.location.href = "/login")}
                  >
                    Faça Login
                  </button>
                </p>
              </div>
            </div>
            
            
          )}
        </form>
      </div>
    </PageWrapper>
  );
}
