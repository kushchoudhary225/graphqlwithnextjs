'use client'
import { useEffect } from "react";
import axios from 'axios'
import { fetchAllList, findbyid } from "@/queries";
import { useMutation, gql } from "@apollo/client";

const FIND_BY_ID_MUTATION = gql`
      mutation FindById($findById: ID!) {
        findById(id: $findById) {
          _id
          completed
          description
        }
      }
    `;


export default function Home() {
  const [findByIdMutation, { loading, error, data }] = useMutation(FIND_BY_ID_MUTATION, {
    variables: { findById: "6597a342c8ef7dc9c3833c74" },
  });


  useEffect(() => {
    findByIdMutation();
  }, [findByIdMutation]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // You can access the data returned by the mutation
  if (data) {
    console.log(data.findById);
  }

  return <p>Mutation completed successfully!</p>;
};

