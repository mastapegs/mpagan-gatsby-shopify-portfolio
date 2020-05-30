import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Form, Button, Container } from 'react-bootstrap'
import { SUBMIT_CONTACT_FORM } from '../components/queries'
import SEO from '../components/SEO'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [submitForm, { data, error }] = useMutation(SUBMIT_CONTACT_FORM);
  const handleSubmit = e => {
    e.preventDefault()
    submitForm({
      variables: {
        name,
        email,
        phone,
        message
      }
    })
  }
  useEffect(() => {
    if (name === '' || email === '' || message === '') return;
    if (data) {
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      document.getElementById('name').focus()
    }
  }, [data])
  useEffect(() => {
    if (error) {
      console.log(error)
      alert('error')
    }
  }, [error])
  return (
    <>
      <SEO title='Contact' />
      <Container>
        <h1>Contact</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Phone #</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Your message"
              rows="4"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  )
}

export default Contact