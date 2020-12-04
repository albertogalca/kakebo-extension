import React from 'react';
import { KakeboModal } from '../../components';

import { Link } from 'react-router-dom';

const DoYouNeedIt = () => {
  return (
    <KakeboModal>
      <h1>Ahorra con el método Kakebo</h1>
      <p>
        ¡Oinc, oinc! Soy el cerdito ahorrador y voy a vigilar todos tus movimientos para ayudarte
      </p>
      <Link to="/doyouneedit">Entendido</Link>
    </KakeboModal>
  );
};

export default DoYouNeedIt;
