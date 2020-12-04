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
        linkTo: '/itsforyou',
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
        linkTo: '/isthereacheaperalternative',
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
        linkTo: '/bestqualitypriceoption',
      },
    ],
  },
  {
    title: '¿Existe alguna alternativa más económica?',
    description:
      'Siempre hay una mejor opción, simplemente tienes que buscar en el lugar correcto. Por ejemplo, ayer encontré lo que busca en la pocilga de al lado ¡Oinc, oinc!',
    slug: '/isthereacheaperalternative',
    actions: [
      {
        name: 'Sí',
        linkTo: '/doyouhavemoneytospare',
      },
      {
        name: 'No',
        linkTo: '/bestqualitypriceoption',
      },
    ],
  },
  {
    title: '¿Es la mejor opción calidad - precio?',
    description:
      'Parece que lo tienes muy claro...pero ¿de verdad no hay algo igual de bueno y más barato? Puedes encontrar el chollo que buscas en los lugares más insospechados. ¿Seguro que has mirado bien por todos lados?',
    slug: '/bestqualitypriceoption',
    actions: [
      {
        name: 'Sí',
        linkTo: '/buyifyouneedit',
      },
      {
        name: 'No',
        linkTo: '/thinktwice',
      },
    ],
  },
  {
    title: '¿Te sobra el dinero?',
    description:
      '¡Piensa que lo que compres hoy es dinero que ya no tendrás mañana! Qué reflexión tan profunda acabo de hacer para ser un cerdo...¡Oinc!',
    slug: '/doyouhavemoneytospare',
    actions: [
      {
        name: 'Sí',
        linkTo: '/shareitwithsomeone',
      },
      {
        name: 'No',
        linkTo: '/enoughtmoneyattheendofthemonth',
      },
    ],
  },
  {
    title: '¿Llegas con suficiente dinero a final de mes?',
    description:
      'Un mes se puede hacer muy largo por una mala decisión...¿Y si esa mala decisión es darle a este botón...? Ya no podrás decir que no te han avisado...',
    slug: '/enoughtmoneyattheendofthemonth',
    actions: [
      {
        name: 'Sí',
        linkTo: '/buyifyouneedit',
      },
      {
        name: 'No',
        linkTo: '/thinktwice',
      },
    ],
  },
  {
    title: '¿Es para ti?',
    description:
      'Piensa que si te autoengañas el que sufre es tu bolsillo... Además yo te veo muy bien, con este producto sólo serás un poco más pobre.',
    slug: '/itsforyou',
    actions: [
      {
        name: 'Sí',
        linkTo: '/getitsecondhand',
      },
      {
        name: 'No',
        linkTo: '/shareitwithsomeone',
      },
    ],
  },
  {
    title: '¿Lo puedes compartir con alguien?',
    description:
      'Producto compartido, gastos a medias...¿no? También puedes probar de que lo compre la otra persona y te lo preste gratis. ¡Oinc!',
    slug: '/shareitwithsomeone',
    actions: [
      {
        name: 'Sí',
        linkTo: '/itsapresent',
      },
      {
        name: 'No',
        linkTo: '/itsforagoodcause',
      },
    ],
  },
  {
    title: '¿Es por una buena causa?',
    description:
      '¡Qué bonito es colaborar por una bonita causa! Eso sí, como no digas la verdad esta mentira te va a perseguir toda la vida...¿Podrás soportar eso? ¡Oinc!',
    slug: '/itsforagoodcause',
    actions: [
      {
        name: 'Sí',
        linkTo: '/donthesitate',
      },
      {
        name: 'No',
        linkTo: '/whatareyouthinking',
      },
    ],
  },
  {
    title: '¿Es un regalo?',
    description:
      '¿Qué mejor que celebrar algo que con un buen regalo? Eso sí, tu empieza a gastar que lo que hoy es celebración a final de mes quizás se convierte en un drama...',
    slug: '/itsapresent',
    actions: [
      {
        name: 'Sí',
        linkTo: '/donthesitate',
      },
      {
        name: 'No',
        linkTo: '/itsforagoodcause',
      },
    ],
  },
  {
    title: '¿Lo puedes conseguir de segunda mano?',
    description:
      'Si buscas bien encuentras cosas sin apenas uso y mucho más baratas que comprándolas nuevas',
    slug: '/getitsecondhand',
    actions: [
      {
        name: 'Sí',
        linkTo: '/doyouhavemoneytospare',
      },
      {
        name: 'No',
        linkTo: '/borrowingfromsomeone ',
      },
    ],
  },
  {
    title: '¿Lo puedes pedir prestado?',
    description:
      'Sé que tu primer impulso es comprar esto...¿pero seguro que no hay nadie de tu entorno para poder pedírselo prestado? Tendrás lo que buscas sin gastarte nada. ¡Es genial!',
    slug: '/borrowingfromsomeone',
    actions: [
      {
        name: 'Sí',
        linkTo: '/whatareyouthinking',
      },
      {
        name: 'No',
        linkTo: '/doityourself',
      },
    ],
  },
  {
    title: '¿Lo puedes hacer tu mismo/a?',
    description:
      'Además de desarrollar tu parte más creativa, hacer algo manual siempre es más especial y seguro que hace más ilusión...¿A qué no te lo habías ni planteado? Yo alguna vez lo he intentado pero con mis patitas no me dan para mucho...¡Oinc, oinc!',
    slug: '/doityourself',
    actions: [
      {
        name: 'Sí',
        linkTo: '/reviewyourpriorities',
      },
      {
        name: 'No',
        linkTo: '/buyifyouneedit',
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
        external: true,
        linkTo: 'https://chrome.google.com/webstore/category/extensions?hl=es',
      },
      {
        name: 'Sácame de aquí ',
        external: true,
        linkTo: 'https://www.google.es/',
      },
    ],
  },
  {
    title: 'Piénsalo dos veces',
    description:
      'Vas a "gastar por gastar" y estás intentando autoengañarte...Por el bien de tu bolsillo mi consejo es que huyas de aquí como cerdo que huye de la ducha...¡Oinc, oinc!',
    slug: '/thinktwice',
    actions: [
      {
        name: 'Valorar extensión',
        external: true,
        linkTo: 'https://chrome.google.com/webstore/category/extensions?hl=es',
      },
      {
        name: 'Sácame de aquí ',
        external: true,
        linkTo: 'https://www.google.es/',
      },
    ],
  },
  {
    title: '¡En qué estás pensando!',
    description:
      '¡Oinc! ¡Oinc! ¡Oinc! Perdona mi exaltación, que vengo a máxima velocidad (lo que alcanzan mis patitas) para impedir que cometas un error como este...Piénsatelo bien, aún estás a tiempo de tomar la decisión correcta...',
    slug: '/whatareyouthinking',
    actions: [
      {
        name: 'Valorar extensión',
        external: true,
        linkTo: 'https://chrome.google.com/webstore/category/extensions?hl=es',
      },
      {
        name: 'Sácame de aquí ',
        external: true,
        linkTo: 'https://www.google.es/',
      },
    ],
  },
  {
    title: 'No lo dudes más',
    description:
      'A esto en mi casa se le llama comprar "bueno, bonito y barato"...¡Como cerdo experto en el ahorro te doy el visto bueno a esta compra! Disfruta de este producto ¡Oinc, oinc!',
    slug: '/donthesitate',
    actions: [
      {
        name: 'Sácame de aquí ',
        external: true,
        linkTo: 'https://www.google.es/',
      },
      {
        name: 'Déjame comprar',
        linkTo: 'close',
      },
    ],
  },
  {
    title: 'Cómpralo si de verdad lo necesitas',
    description:
      'Todo gasto no justificado al 100% pasa a ser una compra más emocional que racional...Entiendo que ahí vosotros los humanos lo tenéis complicado para detener el impulso...¡oinc, oinc!',
    slug: '/buyifyouneedit',
    actions: [
      {
        name: 'Sácame de aquí ',
        external: true,
        linkTo: 'https://www.google.es/',
      },
      {
        name: 'Déjame comprar',
        linkTo: 'close',
      },
    ],
  },
  {
    title: 'No hay mucho más que decir...Si lo quieres lo puedes tener',
    description:
      '¡Oinc! Llegas a fin de mes, pero por lo que me has dicho no te sobra el dinero...Tú  decides si haces feliz a este humilde cerdito ahorrador (y a tu cartera) y huyes de esta web o sacias tu despiada parte consumista que tienes como humano. Ya ves que mi frase no te condiciona para nada, eh? ¡Oinc, oinc!',
    slug: '/nothingelsetosay',
    actions: [
      {
        name: 'Sácame de aquí ',
        external: true,
        linkTo: 'https://www.google.es/',
      },
      {
        name: 'Déjame comprar',
        linkTo: 'close',
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
