import About from '../components/About'
import Contact from '../components/Contact'
import Plans from '../components/Plans'
import Projects from '../components/Projects'
import SectionDivider from '../components/SectionDivider'
import Skills from '../components/Skills'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Plans />
      <Contact />
    </main>
  );
}
