import { useQuery } from '@apollo/client'
import Skeleton from 'components/Skeleton/Skeleton'
import { Heading3 } from 'components/Typography/Headings/Headings'
import Paragraph from 'components/Typography/Paragraph/Paragraph'
import { Categories_QueryDocument } from 'generated/generated'
import Link from 'next/link'
import styles from './Footer.module.css'

const infoList = ['about', 'carrers']
const getIntouch = ['about us', 'contact', 'support']

const Footer = () => {
  const { data: categoryData, loading } = useQuery(Categories_QueryDocument)
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.mainGrid}>
          <div className={styles.socialLogoContainer}>
            <Link href="/">
              <a className={styles.logoContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-9 md:w-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <p className={styles.logoText}>Learn Coding</p>
              </a>
            </Link>
            <div className={styles.socialLinksContainer}>
              <a
                className={styles.socialLink}
                target="_blank"
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                className={styles.socialLink}
                target="_blank"
                href="https://www.twitter.com/"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                className={styles.socialLink}
                target="_blank"
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                className={styles.socialLink}
                target="_blank"
                href="https://www.linkedin.com/"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
          </div>
          {/* Footer links */}
          <div className={styles.footerLinksContainer}>
            <div className="px-4">
              <Heading3>Info</Heading3>
              <nav className="list-none mb-10">
                {infoList.map((i) => (
                  <li key={i}>
                    <a className={styles.navLink}>{i}</a>
                  </li>
                ))}
              </nav>
            </div>
            <div className="px-4">
              <Heading3>get in touch</Heading3>
              <nav className="list-none mb-10">
                {getIntouch.map((i) => (
                  <li key={i}>
                    <a className={styles.navLink}>{i}</a>
                  </li>
                ))}
              </nav>
            </div>
            <div className="px-4">
              <Heading3>categories</Heading3>
              <nav className={`list-none mb-10 ${(loading || !categoryData) && 'h-20'}`}>
                {loading || !categoryData ? (
                  <Skeleton width="200px" />
                ) : (
                  categoryData.categories.map((c) => (
                    <li key={c.id}>
                      <Link href={`/${c.name}`}>
                        <a className={styles.navLink}>{c.name}</a>
                      </Link>
                    </li>
                  ))
                )}
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="py-5">
            <Paragraph className="text-center">
              © 2022 learn code —
              <a
                href="https://twitter.com/"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @sayog
              </a>
            </Paragraph>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
