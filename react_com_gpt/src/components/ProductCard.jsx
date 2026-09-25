import './ProductCard.css'
import { useState } from 'react';

function ProductCard({nome, categoria, preco, imagem}){
    const [guardar, setGuardar] = useState(false)
    return(
        <div className='product-card card h-100'>
            <img src={imagem} className='card-img-top'/>
            <div className='card-body'>
                <h2 className='card-title'>{nome}</h2>
                <p className='card-text'>{categoria}</p>
                <p className='card-text product-price'>R${preco}</p>
                <button className='btn mt-3 w-100 product-button' onClick={() => {
                    setGuardar(true)
                }} >{guardar ? 'Adicionado' : 'Comprar'}</button>
                {guardar && <p>Produto adicionado ao carrinho!</p>}
            </div>
        </div>
    )
}

export default ProductCard;