import styles from './Nav.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Nav = () => {

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    if(toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  return (
    <> 
      <nav className={styles.nav}>
        <div className={styles.menuMobile}>
          <a href={"/cv.docx"} className={styles.download} download>Curriculum Vitae</a>
          <FontAwesomeIcon className={styles.mobileBtn} icon={faBars} onClick={handleClick}/>
        </div>
      </nav>
      
      {toggle ? 
      <div className={styles.dropdown}>
        <div className={styles.menu}>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>  
        </div>
        <FontAwesomeIcon className={styles.close} icon={faClose} onClick={handleClick}/>    
      </div>  
      : ''}
      <nav className={styles.desktopNav}>
        <div className={styles.menu}>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>  
        </div>
        <div className={styles.downloadButton}>
          <a href={"/cv.docx"} className={styles.download} download>Curriculum Vitae</a>
        </div>
      </nav>
    </>
  );
}
 
export default Nav;