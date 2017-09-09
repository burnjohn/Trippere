import { gql, graphql } from 'react-apollo';

const showPayload = ({ data }) => {
  console.log(data);
}

export const createUser =
  gql`mutation 
        createUser(
        $firstName: String!
        $lastName: String!
        $gender: String!
        $birthDate: Date!
      ) { name gender id birthDate }`

// export
// const userData = (
//   gql`update {
//     User(id: "cj7dads0w90wx0158t9ix6p9i") { name gender id birthDate }
//   }`
// )