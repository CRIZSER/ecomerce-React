import './App.css'
import { ProductCard } from './ProductCard'
export function App () {
    const priceFormat = (price) => `$${price}` /*Funsion para agregar $ al precio del producto */

    const products=[]

    const productObjectTestExample = {priceFormat:priceFormat, image:"github/mdo", brand:"lorem", name:"ipsum", price:"10.000", stock:"20", isFollowing:true} /*Se puede hacer pero no es bueno usarlo constantemente*/
    return (
        <section className='ProductCardSection'>{/* Funciona para renderizar mas de un elemtno al igual que con react.Fragment */}
            <ProductCard priceFormat = {priceFormat} image="github/mdo" brand="lorem" name="ipsum" price="10.000" stock="20" initialIsInCart={true}/>
            <ProductCard priceFormat = {priceFormat} image="github/mdu" brand="lorem" name="ipsum" price="10.000" stock="20" initialIsInCart={false}/>
            <ProductCard {... productObjectTestExample}/>{/*Se puede hacer pero no es bueno usarlo constantemente*/}
        </section>
    )
}