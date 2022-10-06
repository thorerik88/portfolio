import styles from './MainHeading.module.scss';

const MainHeading = ({text}) => {
  return ( 
    <div id={text}>
      <h3 className={styles.heading}>{text}</h3>
      <div className={styles.headingAfter}></div>
    </div> );
}
 
export default MainHeading;