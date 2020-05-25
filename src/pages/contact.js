import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <>
      <h1>Contact</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>
  )
}

export default Contact