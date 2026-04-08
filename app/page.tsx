// 1. Importar o componente Image do Next.js
import Image from "next/image";

export default function Home() {
  return (
    <main className="container-principal">
      {/* Seção Hero */}
      <div className="secao-hero">
        
        {/* --- NOVA SEÇÃO DA FOTO REDONDA E CENTRALIZADA --- */}
        <div className="flex justify-center mb-8">
          <div className="foto-perfil-circulo">
            <Image
              src="/Perfil.jpeg" // <-- Mude aqui para o nome EXATO do seu arquivo na pasta public
              alt="Foto de perfil de João Pedro Viegas"
              fill // Preenche o container pai
              className="object-cover" // Garante que a foto não fique esticada
              priority // Carrega esta imagem com prioridade (bom para SEO)
            />
          </div>
        </div>
        {/* ------------------------------------------------- */}

        <h1 className="titulo-nome">
          João Pedro Viegas
        </h1>
        <p className="subtitulo-profissao">
          Estudante de Ciência da Computação | Desenvolvedor Full Stack
        </p>
        
        <div className="flex gap-4">
          <button className="botao-primario">
            Ver Projetos
          </button>
          <button className="botao-secundario">
            Contato
          </button>
        </div>
      </div>

      {/* Seção Sobre Mim */}
      <section className="mt-32 w-full max-w-4xl font-sans">
        <h2 className="text-2xl font-semibold border-b border-slate-800 pb-2 mb-8 text-teal-300">
          Sobre Mim
        </h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          Desenvolvedor em formação com foco em Python, Java e agora explorando o ecossistema React com Next.js. 
          Atualmente cursando Ciência da Computação na Newton Paiva, busco oportunidades para aplicar meus conhecimentos em projetos desafiadores.
        </p>
      </section>
    </main>
  );
}