import styled from "styled-components";
const StyledContainer = styled.main`
  background-color: var(--cor-background);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContent = styled.div`
  border-radius: 20px;
  background-color: white;
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PaginaBaseFormulario({ children }: { children: React.ReactNode }) {
  return (
    <StyledContainer>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
}

export default PaginaBaseFormulario;
