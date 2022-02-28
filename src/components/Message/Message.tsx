import Image from 'next/image';

import {
  MessageBox,
  MessageSectionContainer,
  MessageContact,
  MessageContent,
  MessageHeading,
  MessageSubheading,
  RedBox,
  BlueBox,
  ImageContainer,
  ContactTitle,
  ContactDetails,
  ContactEmail,
} from './MessageStyles';
import { Section, Flex } from 'styles/common';
import { messageData, contactData } from 'mocks/mockData';

const Message: React.FC = () => {
  return (
    <Section>
      <Flex>
        <BlueBox />
        <MessageSectionContainer>
          <Flex column alignItems="end">
            <ImageContainer className="aaaa">
              <Image src="/astronaut.png" alt="" layout="fill" />
            </ImageContainer>
            <MessageContact>
              <ContactTitle>{contactData.title}</ContactTitle>
              <ContactDetails>{contactData.details}</ContactDetails>
              <ContactEmail>{contactData.email}</ContactEmail>
            </MessageContact>
          </Flex>
          <Flex alignItems="end">
            <MessageBox>
              <MessageHeading>{messageData.heading}</MessageHeading>
              <MessageSubheading>{messageData.subheading}</MessageSubheading>
              <MessageContent>{messageData.content}</MessageContent>
            </MessageBox>
            <RedBox />
          </Flex>
        </MessageSectionContainer>
      </Flex>
    </Section>
  );
};

export default Message;
