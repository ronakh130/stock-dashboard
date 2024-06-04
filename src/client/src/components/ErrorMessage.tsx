import styled from 'styled-components';

type ErrorMessageProps = {
  isError: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
  height: 2rem;
  min-width: 5rem;
  margin-bottom: 1rem;
`;

const ErrorText = styled.p`
  color: red;
`;

export const ErrorMessage = ({isError}: ErrorMessageProps) => {
  return (
    <Container>
      {isError && <ErrorText>Error: Stock not found.</ErrorText>}
    </Container>
  );
};
