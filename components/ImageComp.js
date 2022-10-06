import styles from './ImageComp.module.scss';
import Image from "next/image";

const ImageComp = ({...data}) => {
  
  return ( 
    <>
      <div className={styles.image}>
        <Image  
          src={data.imageLink}
          height={data.height}
          width={1000}
          alt={data.altText}
        />
      </div>
    </>
  );
}
 
export default ImageComp;