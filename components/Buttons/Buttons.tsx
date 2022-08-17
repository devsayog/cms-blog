import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './Buttons.module.css'

interface ButtonTypes {
  children: ReactNode
  href: string
  sm?: boolean
}

const PrimaryBtn = ({ children, href, sm }: ButtonTypes) => {
  return (
    <Link href={href}>
      <a className={styles[`p-${sm ? 'sm' : 'base'}-container`]}>
        <div className={styles[`p-${sm ? 'sm' : 'base'}-bg-hover`]}></div>
        <span className={styles[`p-${sm ? 'sm' : 'base'}-text`]}>{children} &rarr;</span>
      </a>
    </Link>
  )
}

const SecondaryBtn = ({ children, href }: ButtonTypes) => {
  return (
    <Link href={href}>
      <a className={styles['s-container']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 p-1 rounded-full rotate-45 bg-pink-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <span>{children}</span>
      </a>
    </Link>
  )
}

export { PrimaryBtn, SecondaryBtn }
