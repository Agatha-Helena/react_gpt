import Footer from './components/Footer';
import Header from './components/Header'
import ProductCard from './components/ProductCard';
import { produtos } from './data/produtos'
import { useState } from 'react'
const nomeLoja = 'AutoParts'
const mensagem = 'Encontre as peças que seu carro precisa.'
const ano = '2026'

function App() {

  const [carrinho, setCarrinho] = useState([])

  function adicionarAoCarrinho(produto){
    setCarrinho([...carrinho, produto])
    console.log(carrinho)
  }

  return(
    <>
      <Header nomeLoja={nomeLoja} mensagem={mensagem}/>
      <main>
        <br/>
        <div className='container'>
          <div className='row g-4'>
            {produtos.map((produto) =>{
              return(
                <div className='col-12 col-md-6 col-lg-4' key={produto.id}>
                  <ProductCard
                    produto={produto}
                    onComprar={adicionarAoCarrinho}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer ano={ano} nomeLoja={nomeLoja}/>
    </>
  )
}

export default App;