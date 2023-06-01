import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'
import { Store } from '../Store'

export default function PaymentMethodPage() {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(Store)
  const {
    cart: { shippingAddress, paymentMethod },
  } = state

  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || 'PayPal'
  )
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping')
    }
  }, [shippingAddress, navigate])

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName })
    localStorage.setItem('paymentMethod', paymentMethodName)
    navigate('/placeorder')
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>RBG Payment</title>
        </Helmet>
        <h1 className="my-3">Select payment method</h1>
        <Form onSubmit={submitHandler}>
          {/* PAYPAL SELECT */}
          <div className="mb-3">
            <Form.Check
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethod === 'PayPal'}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Button type="submit" variant="success">
              Continue checkout
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
