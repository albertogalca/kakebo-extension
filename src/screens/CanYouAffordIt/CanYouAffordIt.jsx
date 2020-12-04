import React from 'react';

import { KakeboModal, H1, Paragraph } from '../../components';

const CanYouAffordIt = () => {
  return (
    <KakeboModal>
      <H1>¿Te lo puedes permitir?</H1>
      <Paragraph>
        En ocasiones hay que saber tener la cabeza fría y esperar el momento adecuado para gastar el
        dinero, pero este no es el momento ¡Oinc!
      </Paragraph>
    </KakeboModal>
  );
};

export default CanYouAffordIt;
