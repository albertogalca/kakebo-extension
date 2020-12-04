const routes = [
  {
    title: '¿Realmente lo necesitas?',
    description:
      '¡Oinc, oinc! ¡Te he pillado viendo este producto! Cuidado porque sitios como este te pueden dejar sin una triste moneda en el banco...¿Tanta falta te hace?',
    slug: '/doyouneedit',
    actions: [
      {
        name: 'Sí',
        linkTo: '/canyouaffordit',
      },
      {
        name: 'No',
        linkTo: '/',
      },
    ],
  },

  {
    title: '¿Te lo puedes permitir?',
    description:
      'En ocasiones hay que saber tener la cabeza fría y esperar el momento adecuado para gastar el dinero, pero este no es el momento ¡Oinc!',
    slug: '/canyouaffordit',
    actions: [
      {
        name: 'Sí',
        linkTo: '/doyouneedanythingelse',
      },
      {
        name: 'No',
        linkTo: '/',
      },
    ],
  },
  {
    title: '¿Hay algo que necesites más que eso',
    description:
      'Piensa, piensa...aquello que comentaste un día que necesitabas más que nada en el mundo...¿Qué era?...Antes de gastarte el dinero consulta tu lista de la compra',
    slug: '/doyouneedanythingelse',
    actions: [
      {
        name: 'Sí',
        linkTo: '/reviewyourpriorities',
      },
      {
        name: 'No',
        linkTo: '/',
      },
    ],
  },
  {
    title: '¡Revisa tus prioridades!',
    description:
      'Parece que tienes otros asuntos por resolver antes de comprar esto que tanto te interesaba al principio. No parece que sea lo más urgente que tienes que comprar ahora mismo, así que aguanta, sé fuerte y cierra esta web sin mirar atrás. ¡Tu amigo, el cerdo del ahorro, está contigo! ¡Oinc!',
    slug: '/reviewyourpriorities',
    actions: [
      {
        name: 'Valorar extensión',
        linkTo: '/',
      },
      {
        name: 'Sácame de aquí',
        linkTo: '/',
      },
    ],
  },
  {
    title: 'Ahorra con el método Kakebo',
    description:
      '¡Oinc, oinc! Soy el cerdito ahorrador y voy a vigilar todos tus movimientos para ayudarte',
    slug: '/',
    actions: [
      {
        name: 'Entendido',
        linkTo: '/doyouneedit',
      },
    ],
  },
];

export default routes;
