const routes = [
  {
    title: '¿Realmente lo necesitas?',
    description:
      '¡Oinc, oinc! ¡Te he pillado viendo este producto! Cuidado porque sitios como este te pueden dejar sin una triste moneda en el banco...¿Tanta falta te hace?',
    gif: 'https://media.giphy.com/media/26uf12pHJ1mTPVT2w/giphy-downsized.gif',
    slug: '/doyouneedit',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/canyouaffordit',
      },
      {
        name: 'noButton',
        linkTo: '/itsforyou',
      },
    ],
  },
  {
    title: '¿Te lo puedes permitir?',
    description:
      'En ocasiones hay que saber tener la cabeza fría y esperar el momento adecuado para gastar el dinero, pero este no es el momento ¡Oinc!',
    gif: 'https://media.giphy.com/media/ckNFgnUmAuFcYmWR3a/giphy.gif',
    slug: '/canyouaffordit',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/doyouneedanythingelse',
      },
      {
        name: 'noButton',
        linkTo: '/isthereacheaperalternative',
      },
    ],
  },
  {
    title: '¿Hay algo que necesites más que eso',
    description:
      'Piensa, piensa...aquello que comentaste un día que necesitabas más que nada en el mundo...¿Qué era?...Antes de gastarte el dinero consulta tu lista de la compra',
    gif: ' https://media.giphy.com/media/a5viI92PAF89q/giphy-downsized.gif',
    slug: '/doyouneedanythingelse',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/reviewyourpriorities',
      },
      {
        name: 'noButton',
        linkTo: '/bestqualitypriceoption',
      },
    ],
  },
  {
    title: '¿Existe alguna alternativa más económica?',
    description:
      'Siempre hay una mejor opción, simplemente tienes que buscar en el lugar correcto. Por ejemplo, ayer encontré lo que busca en la pocilga de al lado ¡Oinc, oinc!',
    gif: 'https://media.giphy.com/media/XdUMiySExIdwvsPOpP/giphy.gif',
    slug: '/isthereacheaperalternative',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/doyouhavemoneytospare',
      },
      {
        name: 'noButton',
        linkTo: '/bestqualitypriceoption',
      },
    ],
  },
  {
    title: '¿Es la mejor opción calidad - precio?',
    description:
      'Parece que lo tienes muy claro...pero ¿de verdad no hay algo igual de bueno y más barato? Puedes encontrar el chollo que buscas en los lugares más insospechados. ¿Seguro que has mirado bien por todos lados?',
    gif: 'https://media.giphy.com/media/3osxY8lmLf0SvhYbBe/giphy-downsized.gif',
    slug: '/bestqualitypriceoption',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/buyifyouneedit',
      },
      {
        name: 'noButton',
        linkTo: '/thinktwice',
      },
    ],
  },
  {
    title: '¿Te sobra el dinero?',
    description:
      '¡Piensa que lo que compres hoy es dinero que ya no tendrás mañana! Qué reflexión tan profunda acabo de hacer para ser un cerdo...¡Oinc!',
    gif: 'https://media.giphy.com/media/94EQmVHkveNck/giphy-downsized.gif',
    slug: '/doyouhavemoneytospare',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/shareitwithsomeone',
      },
      {
        name: 'noButton',
        linkTo: '/enoughtmoneyattheendofthemonth',
      },
    ],
  },
  {
    title: '¿Llegas con suficiente dinero a final de mes?',
    description:
      'Un mes se puede hacer muy largo por una mala decisión...¿Y si esa mala decisión es darle a este botón...? Ya no podrás decir que no te han avisado...',
    gif: 'https://media.giphy.com/media/3o6UB5RrlQuMfZp82Y/giphy-downsized.gif',
    slug: '/enoughtmoneyattheendofthemonth',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/buyifyouneedit',
      },
      {
        name: 'noButton',
        linkTo: '/thinktwice',
      },
    ],
  },
  {
    title: '¿Es para ti?',
    description:
      'Piensa que si te autoengañas el que sufre es tu bolsillo... Además yo te veo muy bien, con este producto sólo serás un poco más pobre.',
    gif: 'https://media.giphy.com/media/AgWQwLTByaABsBQ9Zf/giphy.gif',
    slug: '/itsforyou',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/getitsecondhand',
      },
      {
        name: 'noButton',
        linkTo: '/shareitwithsomeone',
      },
    ],
  },
  {
    title: '¿Lo puedes compartir con alguien?',
    description:
      'Producto compartido, gastos a medias...¿no? También puedes probar de que lo compre la otra persona y te lo preste gratis. ¡Oinc!',
    gif: 'https://media.giphy.com/media/iRYeYT5E8gDni/giphy-downsized.gif',
    slug: '/shareitwithsomeone',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/itsapresent',
      },
      {
        name: 'noButton',
        linkTo: '/itsforagoodcause',
      },
    ],
  },
  {
    title: '¿Es por una buena causa?',
    description:
      '¡Qué bonito es colaborar por una bonita causa! Eso yesButton, como no digas la verdad esta mentira te va a perseguir toda la vida...¿Podrás soportar eso? ¡Oinc!',
    gif: 'https://media.giphy.com/media/8vOEzk2nJpIAFMkyqT/giphy.gif',
    slug: '/itsforagoodcause',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/donthesitate',
      },
      {
        name: 'noButton',
        linkTo: '/whatareyouthinking',
      },
    ],
  },
  {
    title: '¿Es un regalo?',
    description:
      '¿Qué mejor que celebrar algo que con un buen regalo? Eso yesButton, tu empieza a gastar que lo que hoy es celebración a final de mes quizás se convierte en un drama...',
    gif: 'https://media.giphy.com/media/kKo2x2QSWMNfW/giphy-downsized.gif',
    slug: '/itsapresent',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/donthesitate',
      },
      {
        name: 'noButton',
        linkTo: '/itsforagoodcause',
      },
    ],
  },
  {
    title: '¿Lo puedes conseguir de segunda mano?',
    description:
      'Si buscas bien encuentras cosas sin apenas uso y mucho más baratas que comprándolas nuevas',
    gif: 'https://media.giphy.com/media/3o7budPMOMXVyvzolO/giphy-downsized.gif',
    slug: '/getitsecondhand',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/doyouhavemoneytospare',
      },
      {
        name: 'noButton',
        linkTo: '/borrowingfromsomeone ',
      },
    ],
  },
  {
    title: '¿Lo puedes pedir prestado?',
    description:
      'Sé que tu primer impulso es comprar esto...¿pero seguro que no hay nadie de tu entorno para poder pedírselo prestado? Tendrás lo que buscas sin gastarte nada. ¡Es genial!',
    gif: 'https://media.giphy.com/media/XrP2J7AL4CYmc/giphy.gif',
    slug: '/borrowingfromsomeone',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/whatareyouthinking',
      },
      {
        name: 'noButton',
        linkTo: '/doityourself',
      },
    ],
  },
  {
    title: '¿Lo puedes hacer tu mismo/a?',
    description:
      'Además de desarrollar tu parte más creativa, hacer algo manual siempre es más especial y seguro que hace más ilusión...¿A qué no te lo habías ni planteado? Yo alguna vez lo he intentado pero con mis patitas no me dan para mucho...¡Oinc, oinc!',
    gif: 'https://media.giphy.com/media/HXJUbsDk4kYKc/giphy-downsized.gif',
    slug: '/doityourself',
    actions: [
      {
        name: 'yesButton',
        secondary: true,
        linkTo: '/reviewyourpriorities',
      },
      {
        name: 'noButton',
        linkTo: '/buyifyouneedit',
      },
    ],
  },
  {
    title: '¡Revisa tus prioridades!',
    description:
      'Parece que tienes otros asuntos por resolver antes de comprar esto que tanto te interesaba al principio. No parece que sea lo más urgente que tienes que comprar ahora mismo, ayesButton que aguanta, sé fuerte y cierra esta web sin mirar atrás. ¡Tu amigo, el cerdo del ahorro, está contigo! ¡Oinc!',
    gif: 'https://media.giphy.com/media/xUA7biThNaTvj5GiZi/giphy-downsized.gif',
    slug: '/reviewyourpriorities',
    actions: [
      {
        name: 'evaluateExtensionButton',
        external: true,
        secondary: true,
        linkTo:
          'https://chrome.google.com/webstore/detail/%C2%A1no-compres/fjnifndlflhmdlcgkcalclaenojogdpj?hl=es',
      },
      {
        name: 'takeMeOutButton',
        external: true,
        linkTo: 'https://www.google.es/',
      },
    ],
  },
  {
    title: 'Piénsalo dos veces',
    description:
      'Vas a "gastar por gastar" y estás intentando autoengañarte...Por el bien de tu bolsillo mi consejo es que huyas de aquí como cerdo que huye de la ducha...¡Oinc, oinc!',
    gif: 'https://media.giphy.com/media/VqPpOjb1rOBBS/giphy-downsized.gif',
    slug: '/thinktwice',
    actions: [
      {
        name: 'evaluateExtensionButton',
        external: true,
        secondary: true,
        linkTo:
          'https://chrome.google.com/webstore/detail/%C2%A1no-compres/fjnifndlflhmdlcgkcalclaenojogdpj?hl=es',
      },
      {
        name: 'takeMeOutButton',
        external: true,
        linkTo: 'https://www.google.es/',
      },
    ],
  },
  {
    title: '¡En qué estás pensando!',
    description:
      '¡Oinc! ¡Oinc! ¡Oinc! Perdona mi exaltación, que vengo a máxima velocidad (lo que alcanzan mis patitas) para impedir que cometas un error como este...Piénsatelo bien, aún estás a tiempo de tomar la decisión correcta...',
    gif: 'https://media.giphy.com/media/AxaKe2ImWL2Du/giphy-downsized.gif',
    slug: '/whatareyouthinking',
    actions: [
      {
        name: 'evaluateExtensionButton',
        external: true,
        secondary: true,
        linkTo:
          'https://chrome.google.com/webstore/detail/%C2%A1no-compres/fjnifndlflhmdlcgkcalclaenojogdpj?hl=es',
      },
      {
        name: 'takeMeOutButton',
        external: true,
        linkTo: 'https://www.google.es/',
      },
    ],
  },
  {
    title: 'No lo dudes más',
    description:
      'A esto en mi casa se le llama comprar "bueno, bonito y barato"...¡Como cerdo experto en el ahorro te doy el visto bueno a esta compra! Disfruta de este producto ¡Oinc, oinc!',
    gif: 'https://media.giphy.com/media/3AxD04J9yX8yY/giphy.gif',
    slug: '/donthesitate',
    actions: [
      {
        name: 'takeMeOutButton',
        external: true,
        secondary: true,
        linkTo: 'https://www.google.es/',
      },
      {
        name: 'letMeBuyButton',
        linkTo: 'close',
      },
    ],
  },
  {
    title: 'Cómpralo si de verdad lo necesitas',
    description:
      'Todo gasto no justificado al 100% pasa a ser una compra más emocional que racional...Entiendo que ahí vosotros los humanos lo tenéis complicado para detener el impulso...¡oinc, oinc!',
    gif: 'https://media.giphy.com/media/6qFFgNgextP9u/giphy-downsized.gif',
    slug: '/buyifyouneedit',
    actions: [
      {
        name: 'takeMeOutButton',
        external: true,
        secondary: true,
        linkTo: 'https://www.google.es/',
      },
      {
        name: 'letMeBuyButton',
        linkTo: 'close',
      },
    ],
  },
  {
    title: 'No hay mucho más que decir...Si lo quieres lo puedes tener',
    description:
      '¡Oinc! Llegas a fin de mes, pero por lo que me has dicho no te sobra el dinero...Tú  decides si haces feliz a este humilde cerdito ahorrador (y a tu cartera) y huyes de esta web o sacias tu despiada parte consumista que tienes como humano. Ya ves que mi frase no te condiciona para nada, eh? ¡Oinc, oinc!',
    gif: 'https://media.giphy.com/media/COObcw2dmXzBm/giphy-downsized.gif',
    slug: '/nothingelsetosay',
    actions: [
      {
        name: 'takeMeOutButton',
        external: true,
        secondary: true,
        linkTo: 'https://www.google.es/',
      },
      {
        name: 'letMeBuyButton',
        linkTo: 'close',
      },
    ],
  },
  {
    title: '¡No compres!',
    description:
      '¡Oinc, oinc! Soy el cerdito ahorrador y voy a vigilar todos tus movimientos para ayudarte',
    gif: 'https://media.giphy.com/media/ND6xkVPaj8tHO/giphy-downsized.gif',
    slug: '/',
    actions: [
      {
        name: 'understoodButton',
        onClick: () => window.localStorage.setItem('userHasSeenTheIntroduction', true),
        linkTo: '/doyouneedit',
      },
    ],
  },
];

export default routes;
