// NAVIGATION
export const NAV_LINKS = [
    { href: '@/src/app/Home/page.tsx', key: 'home', label: 'Strona Główna' },
    { href: '@/src/app/Gallery/page.tsx', key: 'gallery', label: 'Galeria prac' },
    { href: '@/src/app/Events/page.tsx', key: 'events', label: 'Nadchodzące wydarzenia' },
    { href: '@/src/app/Contact/page.tsx', key: 'kontakt', label: 'Kontakt' },
  ];
  

// function NAVLINKS({inverted}: {inverted: boolean}) {
//   return (
//     <motion.div 
//       className={clsx(
//         'flex items-center gap-8 px-8 text-xl transition-all',
//         inverted ? 'text-primary' : 'text-white'
//       )}>
//       <NavLink href='#home'>Home</NavLink>
      
//   )
// }

  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Real maps can be offline',
      icon: '/map.svg',
      variant: 'green',
      description:
        'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
      title: 'Set an adventure schedule',
      icon: '/calendar.svg',
      variant: 'green',
      description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    },
    {
      title: 'Technology using augment reality',
      icon: '/tech.svg',
      variant: 'green',
      description:
        'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
      title: 'Many new locations every month',
      icon: '/location.svg',
      variant: 'orange',
      description:
        'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Hilink',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'hilink@akinthil.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };