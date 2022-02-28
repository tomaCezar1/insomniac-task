import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 110px;

  @media ${({ theme }) => theme.breakpoints.xs} {
    height: 52px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 72px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 72px;
  }
`;

export const LogoContainer = styled.div`
  min-width: 105px;
  min-height: 65px;
  position: relative;
  margin: 20px 48px;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.xs} {
    margin: 6px 12px;
    min-width: 58px;
    min-height: 38px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 10px 36px;
    min-width: 80px;
    min-height: 52px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 10px 36px;
    min-width: 80px;
    min-height: 52px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 824px;

  @media ${({ theme }) => theme.breakpoints.xs} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

export const MenuBar = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const MenuItem = styled.li`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  transition: color ease-in-out 0.2s;
  padding: 10px 20px;

  :hover {
    color: ${({ theme }) => theme.colors.rose};
    cursor: pointer;
  }
`;

export const DownloadBtn = styled.button`
  width: 180px;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: 12px 24px;
  margin: 30px 60px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.rose};
  text-transform: capitalize;

  @media ${({ theme }) => theme.breakpoints.xs} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const CloseBtn = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
  display: none;

  :hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    display: block;
    margin: 20px 12px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: block;
    margin: 30px 36px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
    margin: 30px 36px;
  }
`;
