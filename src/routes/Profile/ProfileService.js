import { gql, graphql } from 'react-apollo';

const showPayload = ({ data }) => {
  console.log(data);
}

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


// export
// const userData = (
//   gql`update {
//     User(id: "cj7dads0w90wx0158t9ix6p9i") { name gender id birthDate }
//   }`
// )