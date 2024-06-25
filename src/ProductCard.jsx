import { useState } from "react"

export function ProductCard ({priceFormat, image = 'https://unavatar.io/serv/', brand = 'unknown', name = 'unknown', price = '0', stock = '0', initialIsInCart = false})/*Datos base*/ {
    
    const [isInCart, setInCart] = useState(initialIsInCart) /*[valor, forma de actualizarlo] */

    /*los parametros deberian ser inmutables, se deben crear constantes en lugar de modificar el parametro */
    const imageSrc = `https://unavatar.io/${image}`
    const buttonCardStateText = isInCart ? 'En carrito': 'Añadir al carrito'
    const buttonCardClass = isInCart ? 'button_card_inCart' : 'button_card'

    const handleClick = () =>{
        setInCart(!isInCart)
    }

    return (
        <div className='article_card'>
            <div className='image_container'>
                <img src={imageSrc} alt="Avatar"/>
            </div>
            <div className='data_container'>
                <h3 className='product_brand'>{brand}</h3>
                <h1 className='product_name'>{name}</h1>
                <div className='stok_price'>
                    <p className='product_price'>{priceFormat(price)}</p>
                    <p className='product_stock'>Stock: {stock}</p>
                </div> 
            </div>
            <div className="button_container">
                <button className={buttonCardClass} onClick={handleClick}>
                    <span className="button_card_productText">{buttonCardStateText}</span>
                    <span className="button_card_productOut">Quitar de carrito</span>
                </button>
            </div>
        </div>
    )
}