import { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSignupMutation } from '../hooks/userHooks'
import { Store } from '../Store'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'

export default function SignupPage() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { state, dispatch } = useContext(Store)
  const { userInfo } = state

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  const { mutateAsync: signup, isLoading } = useSignupMutation()
  //maybe delete this
  {
    isLoading
  }

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    try {
      const data = await signup({
        name,
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

  return (
    <Container className="small-container">
      <Helmet>
        <title>RBG Sign Up</title>
      </Helmet>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
        Sign up your new account
      </h1>
      <Form onSubmit={submitHandler}>
        {/* NAME */}
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your name:</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        {/* EMAIL */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Your email:</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        {/* PASSWORD */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="mb-3" style={{ textAlign: 'center', padding: '25px' }}>
          <Button type="submit" variant="success">
            Create Account
          </Button>
        </div>
        <div className="mb-3" style={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>
        </div>

        <div
          className="mb-3"
          style={{ textAlign: 'center', fontWeight: '200', color: 'gray' }}
        >
          Demo account available in sign in page
        </div>
      </Form>
    </Container>
  )
}
