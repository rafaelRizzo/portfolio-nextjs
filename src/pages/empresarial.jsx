import Link from "next/link";

export default function Empresarial() {
  return (
    <>
      <div className="flex items-center justify-center text-center max-w-3xl mx-auto p-2 flex-col">Poxa... Este projeto foi desenvolvido como parte de uma iniciativa empresarial. Eu adoraria compartilhar mais detalhes com você, mas, por enquanto, precisamos seguir algumas diretrizes. Não se preocupe, em breve teremos muitos outros projetos surgindo, e você terá a oportunidade de explorá-los livremente. Fique atento para mais novidades em breve!
        <Link href="/" className="mx-auto text-center underline mt-2" >Voltar</Link>
      </div>
    </>

  )
}