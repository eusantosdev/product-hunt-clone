export default function Home() {
  return (
    <>
      <header className="p-8 bg-[#FFFFFF] text-[#3E3F3E] rounded-md text-base flex justify-between">
        <span>Logo</span>
        <div className="flex gap-4">
            <a className="hover:text-[#DA552F]" href="#">Produtos</a>
            <a className="hover:text-[#DA552F]"href="#">Categorias</a>
            <a className="hover:text-[#DA552F]"href="#">Sobre</a>
        </div>
        <div className="flex gap-4">
          <a href="#">Login</a>
          <a href="#">Sing-Up</a>
        </div>
      </header>
    </>
  );
}
