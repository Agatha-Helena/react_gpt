import Footer from './components/Footer';
import Header from './components/Header'
import ProductCard from './components/ProductCard';
import { produtos } from './data/produtos'
const nomeLoja = 'AutoParts'
const mensagem = 'Encontre as peças que seu carro precisa.'
const ano = '2026'

function App() {
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
                    nome={produto.nome}
                    categoria={produto.categoria}
                    preco={produto.preco}
                    imagem={produto.imagem}
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