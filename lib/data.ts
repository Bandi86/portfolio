import webshopImg from '@/public/webshop.png'
import weatherapp from '@/public/weatherapp.png'

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
      title: 'Weather App',
      description:
        'A webalkalmazás egy egyszerű időjárás előrejelző alkalmazás. A felhasználók megadhatják a város nevét, és a webalkalmazás megjeleníti az aktuális időjárást.',
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
      imageUrl: weatherapp,
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