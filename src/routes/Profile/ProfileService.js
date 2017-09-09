import { gql } from 'react-apollo';

export const createUser =
  gql`mutation (
        $firstName: String! 
        $lastName: String! 
        $gender: String! 
        $birthDate: DateTime! 
      ) {
        createUser(
          firstName: $firstName
          lastName: $lastName
          gender: $gender
          birthDate: $birthDate
        ) { firstName lastName gender id birthDate }
      }`
