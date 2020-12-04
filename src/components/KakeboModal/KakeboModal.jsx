import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { H1, Paragraph } from '../index';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(243, 144, 226, 0.4);
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

export default ({ title, description, actions }) => {
  return (
    <Wrapper>
      <Modal>
        <H1>{title}</H1>
        <Paragraph>{description}</Paragraph>
        {actions && actions.map(action => <Link to={action.linkTo}>{action.name}</Link>)}
      </Modal>
    </Wrapper>
  );
};
