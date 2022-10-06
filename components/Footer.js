import Link from 'next/link';
import styles from './Footer.module.scss';
import ImageComp from './ImageComp';
import MainHeading from './main/MainHeading';
import { email, phone } from './variables/Variables';
import ImageCompPlain from "./ImageCompPlain";

const Footer = () => {
  return ( 
    <footer className={styles.footer}>
        <MainHeading text={'Contact'}/>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.image}>
              <ImageComp imageLink={'/profile.jpg'} height={1250}/>
            </div>
            <div className={styles.info}>
              <p>Thor-Erik Stoevland</p>
              <Link href={`mailto:${email}`}>
                <a>{email}</a>
              </Link>
              <Link href={`tel:${phone}`}>
                <a>{phone}</a>
              </Link>
            </div>
          </div>
          <div className={styles.statement}>
            <div className={styles.heading}>
              <h3>Contact me today for non-binding chat</h3>
            </div>
            <div className={styles.social}>
              <span classname={styles.icon}>
                <ImageCompPlain imageLink={'/facebook-white.svg'} height={1000}/>
              </span>
              <span classname={styles.icon}>
                <ImageCompPlain imageLink={'/linkedin-white.svg'} height={1000}/>
              </span>
            </div>
          </div>
        </div>
      </footer>
   );
}
 
export default Footer;