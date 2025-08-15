import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <div className="title">
        <h1>That´s Cinema</h1>
        <p>Find where you can watch your movie.</p>
       </div>

       <div className="search-movie">
        <span>search...</span>
       </div>
      </main>
    </div>
  );
}
