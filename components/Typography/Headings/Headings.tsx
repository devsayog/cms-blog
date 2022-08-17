import { ReactNode } from 'react'
import styles from './Headings.module.css'

const Heading2 = ({ children }: { children: ReactNode }) => {
  return <h2 className={styles.h2}>{children}</h2>
}
const Heading3 = ({ children }: { children: ReactNode }) => {
  return <h3 className={styles.h3}>{children}</h3>
}

export { Heading2, Heading3 }
