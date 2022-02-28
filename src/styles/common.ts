import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 100vh;
  padding: 4rem 0;
`;

export const Section = styled.section`
  width: 100%;
`;

export const Flex = styled.div<{
  column?: boolean;
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;
