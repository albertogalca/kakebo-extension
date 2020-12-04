import React from 'react';
import { Link } from 'react-router-dom';

import { KakeboModal, H1, Paragraph } from '../../components';

const DoYouNeedIt = () => {
  return (
    <KakeboModal>
      <H1>¿Realmente lo necesitas?</H1>
      <Paragraph>
        ¡Oinc, oinc! ¡Te he pillado viendo este producto! Cuidado porque sitios como este te pueden
        deajr sin una triste moneda en el banco...¿Tanta falta te hace?
      </Paragraph>

      <Link to="/canyouaffordit">Sí</Link>
      <Link to="/">No</Link>
    </KakeboModal>
  );
};

export default DoYouNeedIt;
