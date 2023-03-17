import styled from "styled-components";

export const FormRoot = styled.div`
  
  border-width: 4px;
  display: flex;
  justify-content: center;
`;

export const FormWrapper = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-style: solid;
`;

export const TextInput = styled.input`
  margin: 10px 5px;
`;

export const NumberInput = styled.input`
  margin: 10px 5px;
`;

export const TextLabel = styled.label`
  align-self: flex-start;
`;

export const TextAreaInput = styled.textarea`
  margin: 10px 5px;
`

export const FormButton = styled.button`
  align-self: center;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
`

