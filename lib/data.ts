import webshopImg from '../../public/webshop.png'

export const links = [
    {
      name: 'Kezdolap',
      hash: '#home',
    },
    {
      name: 'Rolam',
      hash: '#about',
    },
    {
      name: 'Projektek',
      hash: '#projects',
    },
    {
      name: 'Skillek',
      hash: '#skills',
    },
    {
      name: 'Tervek',
      hash: '#plans',
    },
    {
      name: 'Kontakt',
      hash: '#contact',
    },
  ] as const;  
  
  export const projectsData = [
    {
      title: 'Webshop',
      description:
        'Egy webshop alkalmazás, ahol a felhasználók regisztrálhatnak, bejelentkezhetnek, termékeket adhatnak a kosárba, és megrendelést adhatnak le. A webshop adminisztrátorai tudnak termékeket hozzáadni, szerkeszteni, törölni, és megrendeléseket kezelni.',
      tags: ['React', 'Tailwind', 'Node.js', 'SQLite3'],
      imageUrl: webshopImg,
    },
    {
      title: 'rmtDev',
      description:
        'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
      //imageUrl: rmtdevImg,
    },
    {
      title: 'Word Analytics',
      description:
        'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
      tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
      //imageUrl: wordanalyticsImg,
    },
  ] as const;
  
  export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',    
    'React',
    'Next.js',
    'Node.js',
    'Git',
    'Tailwind',    
    'MongoDB',    
    'Express',
    'PostgreSQL',    
    'Framer Motion',
  ] as const;

  export const wantedToLearn = [
    'Prisma',
    'GraphQL',
    'Apollo',
    'Python',    
    'Cloud',
    'Rust'
  ] as const;