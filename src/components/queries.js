import { gql } from 'apollo-boost'

export const SUBMIT_CONTACT_FORM = gql`
  mutation newContactSubmission(
    $name: String!
    $email: String!
    $message: String!
  ) {
    createContactSubmission(
      data: { name: $name, email: $email, message: $message }
    ) {
      _id
      name
      email
      message
    }
  }
`