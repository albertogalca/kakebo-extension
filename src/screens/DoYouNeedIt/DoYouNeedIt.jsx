import React from 'react';
import { KakeboModal } from '../../components';

import { Link } from 'react-router-dom';

const DoYouNeedIt = () => {
  return (
    <KakeboModal>
      <h1>¿Realmente lo necesitas?</h1>
      <p>
        ¡Oinc, oinc! ¡Te he pillado viendo este producto! Cuidado porque sitios como este te pueden
        deajr sin una triste moneda en el banco...¿Tanta falta te hace?
      </p>

      <Link to="/canyouaffordit">Sí</Link>
      <Link to="/">No</Link>
    </KakeboModal>
  );
};

export default DoYouNeedIt;
