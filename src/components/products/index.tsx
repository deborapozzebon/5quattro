import Image from 'next/image'
import { ProductsStyled } from './styled'

const Products = () => {
  return (
    <ProductsStyled id="products">
      <div className="container">
        <div className="title">
          <div className="vertical-line"></div>
          <span className="main-title">Conheça alguns de nossos produtos</span>
        </div>

        <div className="images">
          <div className="first-column">
            <Image
              src="/products1.jpg"
              width={300}
              height={300}
              alt=""
            />
            <Image
              src="/products2.JPG"
              width={300}
              height={300}
              alt=""
            />
          </div>
          <div className="second-column">
            <Image
              src="/products3.jpg"
              width={350}
              height={600}
              alt=""
            />
          </div>
          <div className="third-column">
            <Image
              src="/products4.png"
              width={300}
              height={300}
              alt=""
            />
            <Image
              src="/products5.jpg"
              width={300}
              height={300}
              alt=""
            />
          </div>
          <div className="fourth-column">
            <Image
              src="/products6.JPG"
              width={350}
              height={600}
              alt=""
            />
          </div>
        </div>
      </div>
    </ProductsStyled>
  )
}

export default Products