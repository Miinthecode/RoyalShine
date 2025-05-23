export default function Header(){
    return(
        <div className="w-full text-black bg-amber-200 h-[80px] flex items-center  justify-between p-4">
        <div>
          <button className="text-white text-[40px] font-bold ">
            Royal Shine
          </button>
        </div>
        <div className="flex items-center gap-[20px] text-xl ">
          <button className="cursor-pointer"
          onClick={() => (window.location.href = "/login")}>
            Home
          </button>
          <button className="cursor-pointer">Coleções</button>
          <button className="cursor-pointer">Destaques</button>
          <button className="cursor-pointer">Sobre</button>
          <button className="cursor-pointer">Contatos</button>
        </div>
        <div>
            {/* icons */}
        </div>
        <div className="w-[20%] h-[80px] flex items-center justify-center bg-amber-300 p-4">
          Cadastre-se
        </div>
      </div>
        
    )
}