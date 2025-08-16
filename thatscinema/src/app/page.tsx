import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <div className={styles.containerTitles}>
        <h1 className={styles.title}>That´s Cinema</h1>
        <p className={styles.paragraph}>Find where you can watch your movie.</p>
       </div>

       <div className={styles.containerInput}>
        <input className={styles.searchInput} type="search" name="search..." id="" />
       </div>
      </main>
    </div>
  );
}
