import React from 'react';
import { Link } from 'react-router-dom';

import { KakeboModal, H1, Paragraph } from '../../components';

const DoYouNeedIt = () => {
  return (
    <KakeboModal>
      <H1>Ahorra con el método Kakebo</H1>
      <Paragraph>
        ¡Oinc, oinc! Soy el cerdito ahorrador y voy a vigilar todos tus movimientos para ayudarte
      </Paragraph>
      <Link to="/doyouneedit">Entendido</Link>
    </KakeboModal>
  );
};

export default DoYouNeedIt;
