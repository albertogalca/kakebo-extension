import React, { useState } from 'react';
import styled from 'styled-components';

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
  max-width: 600px;
  padding: 32px;
  text-align: center;
  margin: 16px;
`;

const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({ title, description, actions }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <Wrapper>
        <Modal>
          <H1>{title}</H1>
          <Paragraph>{description}</Paragraph>
          <Footer>
            {actions &&
              actions.map(action => {
                if (!action.external && action.linkTo === 'close')
                  return (
                    <Button secondary={action.secondary} onClick={() => setIsVisible(false)}>
                      {action.name}
                    </Button>
                  );

                if (action.external)
                  return (
                    <Button secondary={action.secondary} as="a" href={action.linkTo}>
                      {action.name}
                    </Button>
                  );

                return (
                  <Button secondary={action.secondary} as="link" to={action.linkTo}>
                    {action.name}
                  </Button>
                );
              })}
          </Footer>
        </Modal>
      </Wrapper>
    )
  );
};
