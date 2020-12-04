import React from 'react';
import styled from 'styled-components';

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

export default ({ children }) => {
  return (
    <Wrapper>
      <Modal>{children}</Modal>
    </Wrapper>
  );
};
