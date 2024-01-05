import { useMutation, gql } from "@apollo/client";
import { findById } from '@/mutation/todo';
import createApolloClient from '@/app/login/aplloClient';


export const fetchAllList = {
  query: `
          query ExampleQuery {
            allUser: getAllTodo {
              _id,
              title,
              description
            }
          }
        `,

}

export const findbyid = `
  mutation FindById($findById: ID!) {
    findById(id: $findById) {
      _id
      completed
      description
    }
  }
`;
