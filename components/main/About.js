import styles from './About.module.scss';

import MainHeading from "./MainHeading";
import List from "./List";
import ImageComp from "../ImageComp";
import Link from "next/link";

const About = () => {
  return ( <>

    <div className={styles.about}>
        <MainHeading text={'About'} />
        <div className={styles.wrapper}>
              <div className={styles.content}>
                <h4>Heading</h4>
                <p>Hi! My name is Thor-Erik and I enjoy to build stuff that ends up on the great web. My interest in coding started in 2016 and have since been my passion.</p>
                <p>Now, I have just finished my studies and have been a part of various interesting projects. Anything from design/homepage to a bookting site.My focus lies with happy customers.</p>
                <div className={styles.url}>
                    <Link href="https://github.com/thorerik88">
                      <a>My Github account!</a>
                    </Link>
                </div>
                <p>Here are some tehcnologies I've worked with lately:</p>
                <List listItems={['React', 'Next.js', 'Google Firebase']} />
              </div>
              <div className={styles.profileImage}>
                <ImageComp imageLink={'/profile.jpg'} height={1250}/>
              </div>
            </div>
      </div> 

  </> );
}
 
export default About;
