const routes = [
  {
    title: 'doYouNeedItTitle',
    description: 'doYouNeedItDescription',
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
    title: 'canYouAffordItTitle',
    description: 'canYouAffordItDescription',
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
    title: 'doYouNeedAnythingElseTitle',
    description: 'doYouNeedAnythingElseDescription',
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
    title: 'isThereACheaperAlternativeTitle',
    description: 'isThereACheaperAlternativeDescription',
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
    title: 'bestQualityPriceOptionTitle',
    description: 'bestQualityPriceOptionDescription',
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
    title: 'doYouHaveMoneyToSpareTitle',
    description: 'doYouHaveMoneyToSpareDescription',
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
    title: 'enoughtMoneyAtTheEndOfTheMonthTitle',
    description: 'enoughtMoneyAtTheEndOfTheMonthDescription',
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
    title: 'itsForYouTitle',
    description: 'itsForYouDescription',
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
    title: 'shareItWithSomeoneTitle',
    description: 'shareItWithSomeoneDescription',
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
    title: 'itsForAGoodCauseTitle',
    description: 'itsForAGoodCauseDescription',
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
    title: 'itsAPresentTitle',
    description: 'itsAPresentDescription',
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
    title: 'getItSecondHandTitle',
    description: 'getItSecondHandDescription',
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
    title: 'borrowingFromSomeoneTitle',
    description: 'borrowingFromSomeoneDescription',
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
    title: 'doItYourselfTitle',
    description: 'doItYourselfDescription',
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
    title: 'reviewYourPrioritiesTitle',
    description: 'reviewYourPrioritiesDescription',
    gif: 'https://media.giphy.com/media/xUA7biThNaTvj5GiZi/giphy-downsized.gif',
    slug: '/reviewyourpriorities',
    actions: [
      {
        name: 'evaluateExtensionButton',
        external: true,
        secondary: true,
        linkTo:
          'https://chrome.google.com/webstore/detail/%C2%A1no-compres/fjnifndlflhmdlcgkcalclaenojogdpj',
      },
      {
        name: 'takeMeOutButton',
        external: true,
        linkTo: 'https://www.notion.so/albertogallego/Directory-fc1028d87ab2412eb6fd7c9cdd48aef1',
      },
    ],
  },
  {
    title: 'thinkTwiceTitle',
    description: 'thinkTwiceDescription',
    gif: 'https://media.giphy.com/media/VqPpOjb1rOBBS/giphy-downsized.gif',
    slug: '/thinktwice',
    actions: [
      {
        name: 'evaluateExtensionButton',
        external: true,
        secondary: true,
        linkTo:
          'https://chrome.google.com/webstore/detail/%C2%A1no-compres/fjnifndlflhmdlcgkcalclaenojogdpj',
      },
      {
        name: 'takeMeOutButton',
        external: true,
        linkTo: 'https://www.notion.so/albertogallego/Directory-fc1028d87ab2412eb6fd7c9cdd48aef1',
      },
    ],
  },
  {
    title: 'whatAreYouThinkingTitle',
    description: 'whatAreYouThinkingDescription',
    gif: 'https://media.giphy.com/media/AxaKe2ImWL2Du/giphy-downsized.gif',
    slug: '/whatareyouthinking',
    actions: [
      {
        name: 'evaluateExtensionButton',
        external: true,
        secondary: true,
        linkTo:
          'https://chrome.google.com/webstore/detail/%C2%A1no-compres/fjnifndlflhmdlcgkcalclaenojogdpj',
      },
      {
        name: 'takeMeOutButton',
        external: true,
        linkTo: 'https://www.notion.so/albertogallego/Directory-fc1028d87ab2412eb6fd7c9cdd48aef1',
      },
    ],
  },
  {
    title: 'dontHesitateTitle',
    description: 'dontHesitateDescription',
    gif: 'https://media.giphy.com/media/3AxD04J9yX8yY/giphy.gif',
    slug: '/donthesitate',
    actions: [
      {
        name: 'takeMeOutButton',
        external: true,
        secondary: true,
        linkTo: 'https://www.notion.so/albertogallego/Directory-fc1028d87ab2412eb6fd7c9cdd48aef1',
      },
      {
        name: 'letMeBuyButton',
        linkTo: 'close',
      },
    ],
  },
  {
    title: 'buyIfYouNeedItTitle',
    description: 'buyIfYouNeedItDescription',
    gif: 'https://media.giphy.com/media/6qFFgNgextP9u/giphy-downsized.gif',
    slug: '/buyifyouneedit',
    actions: [
      {
        name: 'takeMeOutButton',
        external: true,
        secondary: true,
        linkTo: 'https://www.notion.so/albertogallego/Directory-fc1028d87ab2412eb6fd7c9cdd48aef1',
      },
      {
        name: 'letMeBuyButton',
        linkTo: 'close',
      },
    ],
  },
  {
    title: 'nothingElseToSayTitle',
    description: 'nothingElseToSayDescription',
    gif: 'https://media.giphy.com/media/COObcw2dmXzBm/giphy-downsized.gif',
    slug: '/nothingelsetosay',
    actions: [
      {
        name: 'takeMeOutButton',
        external: true,
        secondary: true,
        linkTo: 'https://www.notion.so/albertogallego/Directory-fc1028d87ab2412eb6fd7c9cdd48aef1',
      },
      {
        name: 'letMeBuyButton',
        linkTo: 'close',
      },
    ],
  },
  {
    title: 'appName',
    description: 'popupDescription',
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
