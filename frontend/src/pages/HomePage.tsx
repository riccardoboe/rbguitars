import { Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { useGetProductsQuery } from '../hooks/productHooks'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'

export default function Home() {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>RB Guitars</title>
      </Helmet>
      <div>
        <img
          src="/images/background.jpg"
          alt="background"
          className="home-background"
        />
        <div className="home-background-container">
          <h1 className="home-background-text">RBGUITARS</h1>
          <p>
            As a company made up of musicians and music lovers, we're driven by
            our shared belief that music is the greatest unifying force in the
            world. And that idea fuels our mission to fill the world with music.
            To give people the tools they need to create and connect. To be seen
            and heard. And recently, to help and to heal. Music can stir the
            soul and change the frequency of the planet. So let's make some
            noise. Because the world needs to hear what you have to play.
          </p>
          <a
            href="https://rbg-customshop.netlify.app/"
            className="link"
            target="_blank"
          >
            Visit our website!
          </a>
        </div>
        <h1
          style={{
            textAlign: 'center',
            marginTop: '100px',
            marginBottom: '50px',
            fontSize: '3rem',
          }}
        >
          Our Products
        </h1>
      </div>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}
