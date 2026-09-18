function Footer({ano, nomeLoja}){
    return(
        <footer>
            <p>────────────────────────────</p>
            <p>{nomeLoja} &copy; {ano}</p>
            <p>Sua loja de peças automotivas</p>
        </footer>
    )
}

export default Footer;