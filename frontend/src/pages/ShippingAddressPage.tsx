import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'
import { Store } from '../Store'

export default function ShippingAddressPage() {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(Store)
  const {
    userInfo,
    cart: { shippingAddress },
  } = state

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping')
    }
  }, [userInfo, navigate])

  const [fullName, setFullName] = useState(shippingAddress.fullName || '')
  const [address, setAddress] = useState(shippingAddress.address || '')
  const [city, setCity] = useState(shippingAddress.city || '')
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '')
  const [country, setCountry] = useState(shippingAddress.country || '')

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    })
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    )

    navigate('/payment')
  }

  return (
    <div>
      <Helmet>
        <title>RBG Shipping</title>
      </Helmet>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container" style={{ marginTop: '50px' }}>
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={submitHandler}>
          {/* NAME */}
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="John Smith"
            />
          </Form.Group>

          {/* ADDRESS */}
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="1234 Street Avenue"
            />
          </Form.Group>

          {/* CITY */}
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City & State</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              placeholder="Los Angeles, CA"
            />
          </Form.Group>

          {/* POSTAL CODE */}
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>ZIP Code</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              placeholder="90059"
            />
          </Form.Group>

          {/* COUNTRY */}
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              placeholder="USA"
            />
          </Form.Group>

          <div
            className="mb-3"
            style={{ textAlign: 'center', padding: '25px' }}
          >
            <Button variant="success" type="submit">
              Continue Checkout
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
