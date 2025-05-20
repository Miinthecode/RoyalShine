export default function Cadastro() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-[35px] text-black font-bold">Crie sua conta</h1>
      <div className="flex items-center">
        <button className="text-[#8672C1] p-4">Cliente</button>
        <button className="text-[#8672C1]">Empresa</button>
      </div>

      <form className="bg-white p-6 rounded flex flex-col gap-2 shadow-md w-full max-w-sm ">
        <label className="block text-sm font-bold text-gray-700">
          <input type="text" id="" name=""/>
        
        </label>

        <p className="text-black">Email</p>
        <p className="text-black">Senha</p>
        <p className="text-black">Confirmar senha</p>
      </form>
    </div>
  )
}
