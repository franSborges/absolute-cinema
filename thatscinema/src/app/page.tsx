import styles from "./page.module.css";
import axios from 'axios';

export default async function Home() {
const API_KEY = 'ad0bacf19dd081a4660865acc4bbe47a'
const query = 'Amelie'

await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`).then(res => {
  console.log(res.data)
})
.catch(error => {
  console.error(error)
})

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
