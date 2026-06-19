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

      <footer className="p-26 bg-[#3E3F3E] text-sm">
        <h2>Principais categorias</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="">Card 1</div>
            <div className="">Card 2</div>
            <div className="">Card 3</div>
            <div className="">Card 4</div>
          </div>
      </footer>
    </>
  );
}
