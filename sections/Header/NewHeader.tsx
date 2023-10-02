
function NewHeader() {
  return (
    <>
      {/* redes sociais */}
      <div className="flex h-5 items-center gap-4 bg-[#DE3154] px-4">
        {/* Include your SVG icons here */}
      </div>

      {/* Menu Header Principal */}
      <div className="flex items-center justify-between bg-[#F53859] px-8 py-4">
        {/* Logo da Loja */}
        <div className="mr-10">
          <img src="https://acdn.mitiendanube.com/stores/002/604/895/themes/common/logo-233164475-1669475989-3862a66356ec5fcd447afeb3d9940fcb1669475989-320-0.webp" alt="logo" />
        </div>

        {/* Caixa de Pesquisa */}
        <div className="flex-grow flex items-center justify-center w-full">
          <div className="relative w-full mx-10">
            <input type="text" placeholder="O que você está buscando?" className="rounded-lg border py-2 pl-4 pr-10 w-full text-[#F53859] placeholder:text-[#F53859]" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F53859" className="absolute right-2 top-2 h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>

        {/* Ícones de Opção */}
        <div className="flex items-center space-x-4">
          {/* Atendimento */}
          <div className="flex items-center space-x-2">
            <a href="#" className="group flex flex-col items-center text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.980 2.193-.340.027-.680.052-1.020.072v3.091l-3-3c-1.354 0-2.694-.055-4.020-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.460 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.140 1.740.194V21l4.155-4.155" />
              </svg>
              <span className="text-white transition-colors duration-300 ease-in-out">Atendimento</span>
            </a>
          </div>

          {/* Minha Conta */}
          <div className="flex items-center space-x-2">
            <a href="#" className="group flex flex-col items-center text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span className="text-white transition-colors duration-300 ease-in-out whitespace-nowrap">Minha Conta</span>
            </a>
          </div>

          {/* Meu Carrinho */}
          <div className="flex items-center space-x-2">
            <a href="#" className="group flex flex-col items-center text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <span className="text-white transition-colors duration-300 ease-in-out whitespace-nowrap">Meu Carrinho</span>
            </a>
          </div>
        </div>
      </div>

      {/* submenu */}
      <div className="flex flex-row w-full bg-[#DE3154]">
        <div className="relative group bg-[#DE3154] w-full">
          <div className="flex justify-center">
            <div>
              <span className="flex items-center text-white">
                Cozinha
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </div>
            <div className="h-auto bg-blue absolute left-0 top-full w-full opacity-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-4 px-4 py-2 bg-[#DE3154]/90">
                {/* Primeira coluna */}
                <div>
                  <a href="#" className="block text-white">Opção 1</a>
                  <a href="#" className="block text-white">Opção 2</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewHeader;
