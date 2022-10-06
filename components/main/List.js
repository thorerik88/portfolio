import styles from './List.module.scss';

const List = ({listItems}) => {

  return ( 
  <ul className={styles.list}>
    {listItems.map((listItem, i) => {
      return (
      <div key={i} className={styles.listItem}>
        <div className={styles.icon}></div>
        <li>{listItem}</li>
      </div>)
    })}
  </ul> );
}
 
export default List;