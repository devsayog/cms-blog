import { Heading2 } from 'components/Typography/Headings/Headings'
import Paragraph from 'components/Typography/Paragraph/Paragraph'
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <section className={styles.container}>
      <Heading2>Subscribe to our newsletter</Heading2>
      <Paragraph className={styles.p}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia reprehenderit,
        consequuntur deserunt dolores iste fugit.
      </Paragraph>
      <form className={styles.form}>
        <input className={styles.input} type="email" placeholder="Enter your email address" />
        <button type="submit" className={styles.btn}>
          subscribe
        </button>
      </form>
    </section>
  )
}

export default Newsletter
