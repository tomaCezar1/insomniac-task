import Image from 'next/image';

import {
  HeaderContainer,
  LogoContainer,
  DownloadBtn,
  MenuBar,
  MenuItem,
  Nav,
  CloseBtn,
} from './HeaderStyles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src="/IDS.svg" layout="fill" alt="IDS logo" />
      </LogoContainer>
      <Nav>
        <MenuBar>
          <MenuItem>ABOUT US</MenuItem>
          <MenuItem>KNOWLEDGE MANAGEMENT JOURNEY</MenuItem>
          <MenuItem>KNOWLEDGE SOLUTIONS</MenuItem>
        </MenuBar>
      </Nav>
      <DownloadBtn>DOWNLOAD PDF</DownloadBtn>
      <CloseBtn>
        <Image src="/CloseBtn.svg" layout="fill" alt="Close button" />
      </CloseBtn>
    </HeaderContainer>
  );
};

export default Header;
