function Header({nomeLoja, mensagem}){
    return(
        <header>
            <h1>🚗 {nomeLoja}</h1>
            <p>{mensagem}</p>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Carrinho</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;