import styled from 'styled-components';

export const MessageSectionContainer = styled.div`
  display: flex;
  align-items: left;

  @media ${({ theme }) => theme.breakpoints.xs} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const MessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  min-width: 308px;
  max-width: 770px;
  height: 660px;
  padding: 120px 114px 94px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  text-align: left;

  @media ${({ theme }) => theme.breakpoints.xs} {
    padding: 50px 20px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 50px 20px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 70px 60px;
    width: 388px;
    height: 742px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 110px 90px;
  }
`;

export const MessageHeading = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 30px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 30px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 30px;
  }
`;

export const MessageSubheading = styled.h2`
  color: ${({ theme }) => theme.colors.magenta};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin: 20px 0 30px;

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const MessageContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.black};
  line-height: 28px;

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 24px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 24px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 24px;
  }
`;

export const RedBox = styled.div`
  width: 180px;
  height: 424px;
  background-color: ${({ theme }) => theme.colors.red};

  @media ${({ theme }) => theme.breakpoints.xs} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 532px;
    width: 36px;
  }
`;

export const BlueBox = styled.div`
  width: 100%;
  min-width: 12px;
  height: 516px;
  background-color: ${({ theme }) => theme.colors.cyan};

  @media ${({ theme }) => theme.breakpoints.xs} {
    height: 355px;
    max-width: 24px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 400px;
    max-width: 24px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 355px;
    min-width: 36px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 48px;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 180px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 308px;
  max-width: 444px;
  height: 516px;

  @media ${({ theme }) => theme.breakpoints.xs} {
    min-width: 308px;
    height: 355px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-width: 308px;
    height: 400px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    min-width: 308px;
    height: 355px;
  }
`;

export const MessageContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 444px;
  height: 264px;
  padding: 40px 65px 60px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};

  & > * {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    height: 260px;
    min-width: 308px;
    padding: 50px 88px 50px 20px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 260px;
    min-width: 308px;
    padding: 50px 88px 50px 20px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 458px;
    max-width: 308px;
    padding: 50px 46px 244px;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 24px;

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 20px;
  }
`;

export const ContactDetails = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 28px;
  margin: 18px 0 12px;

  @media ${({ theme }) => theme.breakpoints.xs} {
    margin: 10px 0 20px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ContactEmail = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 16px;
  }
`;
