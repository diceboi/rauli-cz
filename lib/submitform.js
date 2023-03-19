import { gql } from '@apollo/client';
import client from '../apollo-client';

const SUBMIT_FORM = gql`
  mutation SubmitForm($input: SubmitFormInput!) {
    submitForm(input: $input) {
      entry {
        id
      }
    }
  }
`;

const submitForm = async (variables) => {
  const { data } = await client.mutate({
    mutation: SUBMIT_FORM,
    variables,
  });

  return data.submitForm.entry.id;
};

export default submitForm;