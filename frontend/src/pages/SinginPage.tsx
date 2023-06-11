import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Container, Form } from 'react-bootstrap'
import { useSigninMutation } from '../hooks/userHooks'
import { toast } from 'react-toastify'
import { Store } from '../Store'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import { Helmet } from 'react-helmet-async'
import LoadingBox from '../components/LoadingBox'

export default function SigninPage() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { state, dispatch } = useContext(Store)
  const { userInfo } = state

  const { mutateAsync: signin, isLoading } = useSigninMutation()

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const data = await signin({
        email,
        password,
      })
      dispatch({ type: 'USER_SIGNIN', payload: data })
      localStorage.setItem('userInfo', JSON.stringify(data))
      navigate(redirect)
    } catch (err) {
      toast.error(getError(err as ApiError))
    }
  }

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  return (
    <Container className="small-container">
      <Helmet>
        <title>RBG Sign In</title>
      </Helmet>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
        Sign in to your account
      </h1>
      <Form onSubmit={submitHandler}>
        {/* EMAIL */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Your email:</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* PASSWORD */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Your password:</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* BUTTON */}
        <Form.Group className="mb-3" controlId="password">
          <div
            className="mb-3"
            style={{ textAlign: 'center', padding: '25px' }}
          >
            <Button disabled={isLoading} type="submit" variant="success">
              Sign In
            </Button>
            {isLoading && <LoadingBox />}
          </div>
          <div className="mb-5" style={{ textAlign: 'center' }}>
            New here?{' '}
            <Link to={`/signup?redirect=${redirect}`}>Create an account</Link>
          </div>

          <div
            className="mb-3"
            style={{ textAlign: 'center', fontWeight: '200', color: 'gray' }}
          >
            &darr; Demo account &darr;
            <br />
            <strong>
              email: user@mail.com <br />
              password: secret123
            </strong>
          </div>
        </Form.Group>
      </Form>
    </Container>
  )
}
