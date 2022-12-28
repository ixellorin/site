import Head from 'next/head'

import Landing from '../components/landing/Landing';
import Tree from '../components/landing/Tree';
import About from '../components/About';
import Experience from '../components/jobs/Experience';
import Projects from '../components/projects/Projects';
import Scroller from '../components/scroller/Scroller';
import SectionLayout from '../components/layouts/SectionLayout';
import Skills from '../components/skills/Skills';
import Hackathons from '../components/hackathons/Hackathons';

import { RefObject, useEffect, useRef, useState } from 'react';
import { Flex, Show, VStack } from '@chakra-ui/react';
import { IScrollerSection } from '../types';
import Photography from '../components/photography/Photography';

export default function Home() {

  const [doScroll, setDoScroll] = useState({doScroll: false, dir: "incr"});

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const photographyRef =useRef(null)
  
  const [scrollerSections, setScrollerSections] = useState<IScrollerSection[]>([
    { label: 'About', icon: '/icons/card_icons/ic_account_circle_24px.svg', description: "Read a little more about myself, my goals, and my passions.", target: aboutRef },
    { label: 'Experience', icon: '/icons/card_icons/ic_camera_24px.svg', description: "A summary of skills, previous work experience and other industry-related events such as hackathons; an online resume of sorts.", target: experienceRef },
    { label: 'Projects', icon: '/icons/card_icons/ic_layers_24px.svg', description: "Library of small projects with links to source code and/or live examples, including those from hackathons.", target: projectsRef },
    { label: 'Photography', icon: '/icons/card_icons/ic_camera_24px.svg', description: "(Coming soon) Gallery of some of my photographs; practice makes progress.", target: photographyRef },
  ]) ;



  const [sectionIndex, setSectionIndex] = useState<number>(0);

  const sectionIndexMap: { [key:string]: RefObject<HTMLDivElement>} = {}

  scrollerSections.map((section, n) => {
    if (section.target) {
      sectionIndexMap[n] = section.target
    }
  })

  const handleScroll = () => {
    for (const section in Object.keys(sectionIndexMap)) {
      if (sectionIndexMap[section] != null && sectionIndexMap[section].current) {
        if (-100 < (sectionIndexMap[section].current?.getBoundingClientRect().top || -101)
          && (sectionIndexMap[section].current?.getBoundingClientRect().top || -101) < 100) {
          console.log("Setting current section", section)
          setSectionIndex(Number(section))
        }
      }
    }
  }
  
  useEffect(() => {

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    if (doScroll["doScroll"]) {
      if (doScroll["dir"] == "incr") {
        sectionIndexMap[sectionIndex].current?.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        sectionIndexMap[sectionIndex].current?.scrollIntoView({ behavior: "smooth",  block: "start" })
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doScroll]); // Empty array ensures that effect is only run on mount

  function incrSection() {
    scrollerSections.map((section, n) => {
      if (n == Number(sectionIndex) + 1) {
        if (sectionIndex < scrollerSections.length - 1 && scrollerSections[n + 1] != null) {
          console.log(section.target, n)
          section.target?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    })
  }

  function decrSection() {
    scrollerSections.map((section, n) => {
      console.log(n, Number(sectionIndex), n == Number(sectionIndex) - 1, scrollerSections[n - 1])
      if (n == Number(sectionIndex) - 1) {
        if (sectionIndex > 0 && scrollerSections[sectionIndex - 1] != null) {
          console.log(section.target, n)
          section.target?.current?.scrollIntoView({ behavior: "smooth",  block: "start" })
        }
      }
    })
  }

  return (
    <div>
      <Head>
        <title>Cio Ellorin </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex maxW={'100vw'} h={'100%'}>
          <VStack spacing={0} h={'100%'} w={'100%'}>
            <Landing />
            <Tree nodes={scrollerSections} />
            <Show above="md">
              <Scroller sections={scrollerSections} incrSection={incrSection} decrSection={decrSection}/>
            </Show>
            <SectionLayout background={'primary.blue.400'}>
              <About ref={aboutRef}/>
            </SectionLayout>
            <SectionLayout background={'primary.yellow'}>
              <Experience ref={experienceRef} />
            </SectionLayout>
            <SectionLayout background={'primary.blue.white'}>
              <Skills />
            </SectionLayout>
            <SectionLayout background={'primary.green.400'}>
              <Hackathons/>
            </SectionLayout>
            <SectionLayout  background={'primary.blue.400'}>
              <Projects ref={projectsRef}/>
            </SectionLayout>
            <SectionLayout  background={'primary.blue.400'}>
              <Photography ref={photographyRef}/>
            </SectionLayout>
          </VStack>
        </Flex>
      </main>

      <footer>
        <small>
          This site is still under construction - more coming soon! Visit my (really) old site at <a href="https://ixellorin.github.io/" title="old site" target="_blank" rel="noreferrer">https://ixellorin.github.io/</a>
        </small>
      </footer>
    </div>
  )
}
