import styles from './Hero.module.scss';

import Button from './Button';
import ImageCompPlain from './ImageCompPlain';

const Hero = () => {

  return ( 
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Thor-Erik Støvland.</h1>
        <h1>I build stuff for the internet.</h1>
        <div className={styles.me}>
          <p>I am a developer, who designs and code digital experiences</p>
          <p>At the moment my main focus is at React and Next.js</p>
        </div>
        <div className={styles.button}>
          <Button text={"Check out what I've done"} link={'#projects'} />
        </div>
      </div>
      <div className={styles.mockup}>
        <ImageCompPlain imageLink={'/mockup-screens-01.svg'} height={1000} altText={'Screen mockups for illustration purposes'}/>
      </div>
    </div>
  );
}
 
export default Hero;