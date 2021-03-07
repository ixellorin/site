import Landing from '../components/Landing';
import Nodes from '../components/Tree';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Head from 'next/head'
import Scroller from '../components/Scroller';
import AccountCardIcon from '../components/icons/AccountCardIcon';
import CameraCardIcon from '../components/icons/CameraCardIcon';
import ComputerCardIcon from '../components/icons/ComputerCardIcon';
import LayersCardIcon from '../components/icons/LayersCardIcon';

import AccountIcon from '../components/icons/AccountIcon';
import CameraIcon from '../components/icons/CameraIcon';
import ComputerIcon from '../components/icons/ComputerIcon';
import LayersIcon from '../components/icons/LayersIcon';


import ComicIcon from '../components/icons/ComicIcon';
import ControllerIcon from '../components/icons/ControllerIcon';
import EmailIcon from '../components/icons/EmailIcon';
import MapIcon from '../components/icons/MapIcon';
import PokedexIcon from '../components/icons/PokedexIcon';
import PokemonIcon from '../components/icons/PokemonIcon';
import WebsiteIcon from '../components/icons/WebsiteIcon';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [doScroll, setDoScroll] = useState(null);

  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  
  const [nodes, setNodes] = useState([
    { label: 'About', icon: <AccountCardIcon />, description: "Read a little more about myself, my goals and my passions.", target: aboutRef },
    { label: 'Experience', icon: <ComputerCardIcon />, description: "A summary of skills, previous work experience and other industry-related events such as hackathons; an online resume of sorts.", target: experienceRef },
    { label: 'Projects', icon: <LayersCardIcon />, description: "Library of small projects with links to source code and/or live examples, including those from hackathons.", target: projectsRef },
    { label: 'Photography', icon: <CameraCardIcon />, description: "Gallery of some of my photographs; practice makes progress.", target: null },
  ]) 

  const [scrollerSections, setScrollerSections] = useState([
    { label: 'About', icon: <AccountIcon className="scrollIcon" />, description: "Read a little more about myself, my goals and my passions.", target: aboutRef },
    { label: 'Experience', icon: <ComputerIcon className="scrollIcon" />, description: "A summary of skills, previous work experience and other industry-related events such as hackathons; an online resume of sorts.", target: experienceRef },
    { label: 'Projects', icon: <LayersIcon className="scrollIcon" />, description: "Library of small projects with links to source code and/or live examples, including those from hackathons.", target: projectsRef },
    { label: 'Photography', icon: <CameraIcon className="scrollIcon" />, description: "Gallery of some of my photographs; practice makes progress.", target: null },])

  const projects = [
    {
      title: 'Website',
      languages: 'Next.js, HTML, CSS',
      description: 'Designed and prototyped in Adobe XD, developed from the ground-up in Next.JS, and deployed to GitHub Pages to serve as a personal website. Getting in some practice with React/Next.JS.',
      icon: <WebsiteIcon />,
    },
    {
      title: 'My Pokémon App',
      languages: 'React, HTML, CSS',
      description: 'Simple app made for use as a visual companion with live-streaming. Getting in some practice with React. Add Pokémon to your  collection and your party to help viewers keep track of your game status.',
      icon: <PokemonIcon />,
      gitHubURL: 'https://github.com/ixellorin/Pokemon-React-App',
      externalURL: 'https://ixellorin.github.io/Pokemon-React-App/',
    },
    {
      title: 'TF-IDF on Enron Emails',
      languages: 'Python',
      description: 'Python playground; running term frequency-inverse document frequency on the released Enron emails dataset.',
      icon: <EmailIcon />,
      gitHubURL: 'https://github.com/ixellorin/Enron',
    },
    {
      title: 'Kapow! Comic Collaboration',
      languages: 'TypeScript, Fabric.js, AngularJS',
      description: 'Collaborate to create comics and add comments to your art. Leveraging a RESTful API, Fabric.js for drawing and image insertion. School Project.',
      icon: <ComicIcon />,
      gitHubURL: 'https://github.com/ixellorin/Team3',
    },
    {
      title: 'Source, a side-scroller',
      languages: 'Blender, Unity, C#',
      description: 'Part of the 2016 Global Game Jam. Led design, and tried my hand at 3D asset modeling while contributing to development.',
      icon: <ControllerIcon />,
      gitHubURL: 'https://github.com/ixellorin/GGJ2016',
      externalURL: 'https://globalgamejam.org/2016/games/source',
    },
    {
      title: 'Freeze Frame!',
      languages: 'Unity, C#',
      description: 'Probably the project I\'m most proud of; part of the 2015 Global Game Jam. Led gameplay and level design, coordinated and participated in development. Ask me about this, and I\'ll have a story for you.',
      icon: <ControllerIcon />,
      gitHubURL: 'https://github.com/ixellorin/FreezeFrame',
      externalURL: 'https://globalgamejam.org/2015/games/freeze-frame',
    },
    {
      title: 'Pokémon Database',
      languages: 'SQL, PHP',
      description: 'Search through a database of Pokémon to find out information on the original 151. School Project',
      icon: <PokedexIcon />,
      gitHubURL: 'https://github.com/ixellorin/PokemonDB',
    },
    {
      title: 'Runner',
      languages: 'Java, XML',
      description: 'Endearingly described as "Crappy First Android Game", this was my first (Android) game, and first side project that I developed with friends.',
      icon: <ControllerIcon />,
      gitHubURL: 'https://github.com/ixellorin/Runner/tree/master/Runner',
    },
    {
      title: 'Resource Centre Locator App',
      languages: 'Java, XML',
      description: 'Locate resources cetres of the Family Resource Programs of british Columbia; from my first hackathon!',
      icon: <MapIcon />,
      gitHubURL: 'https://github.com/ixellorin/FRP-BC',
    }
  ]

  return (
    <div>
      <Head>
        <title>Cio Ellorin</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Two+Tone|Material+Icons+Sharp"/>
      </Head>

      <main>
        <Landing />
        <Nodes nodes={nodes} />
        <Scroller sections={scrollerSections} active={null} />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Projects projects={projects} ref={projectsRef} />
      </main>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }


        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        .scrollIcon {    
          color: var(--grey-md);
          transition: .4s ease-out;
        }

        .scrollIcon:hover {
          color: var(--grn-md);
          cursor: pointer;
        }


      `}</style>

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  )
}
