import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import { SUBMIT_CONTACT_FORM } from '../components/queries'
import SEO from '../components/SEO'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [show, setShow] = useState(false)
  const [disabled, setDisabled] = useState(false)
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
  const handleClose = () => {
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setDisabled(false)
    setShow(false)
  }
  useEffect(() => {
    if (name === '' || email === '' || phone === '' || message === '') return;
    setDisabled(true)
    setShow(true)
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
          <Button variant="primary" type="submit" disabled={disabled}>Submit</Button>
        </Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>😀 Thank you for reaching out to me!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              📧 I'll make sure to email you back at <strong>{email}</strong>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <p>
              🙏🏻 Thank you again {name}!
            </p>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  )
}

export default Contact