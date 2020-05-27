import { gql } from 'apollo-boost'

export const SUBMIT_CONTACT_FORM = gql`
  mutation newContactSubmission(
    $name: String!
    $email: String!
    $phone: String!
    $message: String!
  ) {
    createContactSubmission(
      data: { name: $name, email: $email, phone: $phone,  message: $message }
    ) {
      _id
      name
      email
      phone
      message
    }
  }
`