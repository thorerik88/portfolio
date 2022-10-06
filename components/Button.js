import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Button.module.scss';

const Button = ({...data}) => {
  
  const downloadPdf = () => {
    console.log("download")
  }

  return ( 
    {...data.download ?
    <Link href={`/`}>
      <a className={styles.button} value='download' onClick={downloadPdf}>
        {data.text}
      </a>
    </Link> 
    :
    <Link href={`${data.link}`}>
      <a className={styles.button}>
        {data.text}
      </a>
    </Link> });
}
 
export default Button;