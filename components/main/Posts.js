import Image from 'next/image';
import Link from 'next/link';
import ImageComp from '../ImageComp';
import List from './List';
import MainHeading from './MainHeading';
import styles from './Posts.module.scss';

const Posts = ({...data}) => {
  return ( 
  <div className={styles.posts}>
    {data.name ? <MainHeading text={data.name} /> : ''}
    <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.text}>
              <h4>{data.heading}</h4>
              {data.url ? <div className={styles.url}>
                <Link href={data.url}>
                  <a>{data.url}</a>
                </Link>
              </div> : ''}
              <p>{data.text1}</p>
              <p>{data.fav}</p>
              <List listItems={data.listItems} />
            </div>
            <div className={styles.image}>
              <ImageComp imageLink={data.imageLink} height={900}/>
            </div>
          </div>
        </div>
        
  </div> 

  );
}
 
export default Posts;