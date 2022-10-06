import Head from 'next/head'
import Posts from '../components/main/Posts'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.scss'
import Footer from '../components/Footer'
import About from '../components/main/about'

export default function Home() {
  
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>Thor-Erik</title>
        <meta name="viewport" content="initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav />
      <Hero />
      <div className={styles.main}>
        
        <div id={"about"}></div>
        <About />
        <div id={"projects"}></div>
        <Posts 
          name={'Projects'}
          heading={'Rør & Service Beitostølen'}
          // logo={'/rorogservice.svg'}
          text1={'Home page for a local plumming company'} 
          url={'https://rorogservice.no'}
          listItems={['Design', 'HTML', 'CSS', 'Javascript']}
          imageLink={'/rorservice.png'}
        />

        <Posts 
          heading={'Holidaze'}
          // logo={'/holidaze.svg'}
          text1={'Booking site for accomodation (multiple pages and login functionality'} 
          url={'https://proteq.no'}
          listItems={['Design', 'HTML', 'CSS', 'Javascript', 'React', 'Next.js', 'Google Firebase']}
          imageLink={'/holidaze.png'}
        />

        <Posts 
          heading={'Nordic Footwear'}
          text1={'An E-commerce website project (studies)'}
          listItems={['Vanilla JS', 'SASS', 'Bootstrap']}
          imageLink={'/footwear.png'}
        />

        <Posts 
          heading={'Javascript Project'}
          text1={'A Javascript project to handle GET requests, localstorage and filtering search results'}
          listItems={['HTML', 'LocalStorage', 'Search Functionality']}
          imageLink={'/javascript.png'}
        />

      </div>
      <div id="contact"></div>
      <Footer />
      <div className={styles.copy}>&copy;{year}</div>
    </div>
  )
}
