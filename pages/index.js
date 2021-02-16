import Landing from '../components/Landing';
import Nodes from '../components/Tree';
import About from '../components/About';
import Experience from '../components/Experience'
import Head from 'next/head'
import Hidden from '@material-ui/core/Hidden';
import Scroller from '../components/Scroller';
import AccountCardIcon from '../components/icons/AccountCardIcon';
import CameraCardIcon from '../components/icons/CameraCardIcon';
import ComputerCardIcon from '../components/icons/ComputerCardIcon';
import LayersCardIcon from '../components/icons/LayersCardIcon';

export default function Home() {
  const nodes = [
    { label: 'About', icon: <AccountCardIcon />, description: "Read a little more about myself, my goals and my passions." },
    { label: 'Experience', icon: <ComputerCardIcon />, description: "A summary of skills, previous work experience and other industry-related events such as hackathons; an online resume of sorts." },
    { label: 'Projects', icon: <LayersCardIcon />, description: "Library of small projects with links to source code and/or live examples, including those from hackathons." },
    { label: 'Photography', icon: <CameraCardIcon />, description: "Gallery of some of my photographs; practice makes progress." },
  ];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Two+Tone|Material+Icons+Sharp"/>
      </Head>

      <main>
        <Landing />
        <Nodes nodes={nodes} />
        <Scroller nodes={nodes}/>
        <About />
        <Experience />
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
