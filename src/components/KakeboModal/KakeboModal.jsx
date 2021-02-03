import React, { useState } from 'react';
import styled from 'styled-components';
import { useResponsive } from 'react-hooks-responsive';

import { H1, Paragraph, Button } from '../index';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(243, 144, 226, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  text-align: center;
  margin: 16px;
  box-sizing: border-box;
  box-shadow: 0 11px 23px 0 rgba(0, 0, 0, 0.18);
  position: relative;

  ${props =>
    props.isDesktop
      ? `
    max-width: 671px;
    padding: 56px 100px;
  `
      : `
    padding: 32px;
  `}
`;

const StyledImg = styled.img`
  width: 100%;
  height: 271px;
  object-fit: cover;
  margin: 24px 0;
`;

const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.isDesktop
      ? `
    flex-flow: row nowrap;
  `
      : `
    flex-flow: column nowrap;
  `}
`;

const Logo = styled.img`
  position: absolute;
  left: 32px;
`;

const ButtonWrapper = styled.div`
  ${props =>
    !props.isDesktop &&
    `
    margin-bottom: 12px;
`}
`;

const breakpoints = { xs: 0, sm: 480, md: 1024 };

export default ({ title, description, gif, actions }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { screenIsAtLeast } = useResponsive(breakpoints);

  const isDesktop = screenIsAtLeast('md');

  return (
    isVisible && (
      <Wrapper>
        <Modal isDesktop={isDesktop}>
          {isDesktop && <Logo src="https://i.imgur.com/EFaR68V.png" width="70" alt="logo" />}
          <H1>{title}</H1>
          <Paragraph>{description}</Paragraph>
          <StyledImg src={gif} alt={title} />
          <Footer isDesktop={isDesktop}>
            {actions &&
              actions.map(action => {
                if (!action.external && action.linkTo === 'close')
                  return (
                    <ButtonWrapper isDesktop={isDesktop}>
                      <Button secondary={action.secondary} onClick={() => setIsVisible(false)}>
                        {chrome.i18n.getMessage(action.name)}
                      </Button>
                    </ButtonWrapper>
                  );

                if (action.external)
                  return (
                    <ButtonWrapper isDesktop={isDesktop}>
                      <Button secondary={action.secondary} as="a" href={action.linkTo}>
                        {chrome.i18n.getMessage(action.name)}
                      </Button>
                    </ButtonWrapper>
                  );

                return (
                  <ButtonWrapper isDesktop={isDesktop}>
                    <Button
                      onClick={action.onClick}
                      secondary={action.secondary}
                      as="link"
                      to={action.linkTo}
                    >
                      {chrome.i18n.getMessage(action.name)}
                    </Button>
                  </ButtonWrapper>
                );
              })}
          </Footer>
        </Modal>
      </Wrapper>
    )
  );
};
