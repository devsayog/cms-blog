import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useScreenResize from 'hooks/useScreenResize'
import styles from './Navbar.module.css'
import { useQuery } from '@apollo/client'
import { Categories_QueryDocument } from 'generated/generated'

const Navbar = () => {
  const { data: categoryData, loading } = useQuery(Categories_QueryDocument)
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { isMd } = useScreenResize()

  useEffect(() => {
    if (isMd) setSidebarOpen(false)
  }, [isMd])

  const logo = (
    <Link href="/">
      <a className={styles.logoContainer} onClick={() => setSidebarOpen(false)}>
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
  )

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          {logo}
          {/* mobile menu */}
          {/* Hamburger */}
          {!isMd && (
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className={styles.hamburgerBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          )}

          {/* menu for > md devices */}
          {isMd && (
            <ul className={`${styles.navLinks}`}>
              {loading || !categoryData
                ? 'loading'
                : categoryData.categories.map((c) => (
                    <li key={c.id}>
                      <Link href={`/${c.name.toLowerCase()}`}>
                        <a
                          className={`${styles.navLink} ${styles.focusStyle} ${
                            router.asPath.includes(c.name.toLowerCase()) ? 'border-b-4' : ''
                          }`}
                        >
                          {c.name}
                        </a>
                      </Link>
                    </li>
                  ))}
            </ul>
          )}
        </div>
      </nav>
      {/* mobile sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-200"
            leaveFrom="opacity-0"
            leaveTo="opacity-100"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/50 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden z-[9999]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration 200"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="text-gray-200 w-60 min-h-screen bg-gray-700">
                    <nav className="p-4 h-full">
                      <div className="flex items-center justify-between">
                        {logo}
                        <button
                          onClick={() => setSidebarOpen(false)}
                          type="button"
                          className={`bg-white text-gray-800 rounded-full p-1 ${styles.focusStyle}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <ul className={styles.mbLinks}>
                        {loading || !categoryData
                          ? 'loading'
                          : categoryData.categories.map((c) => (
                              <li key={c.id}>
                                <Link href={`/${c.name}`}>
                                  <a
                                    onClick={() => setSidebarOpen(false)}
                                    className={`text-xl ${styles.navLink} ${styles.focusStyle} ${
                                      router.asPath.includes(c.name.toLowerCase())
                                        ? 'border-b-4'
                                        : ''
                                    }`}
                                  >
                                    {c.name}
                                  </a>
                                </Link>
                              </li>
                            ))}
                      </ul>
                    </nav>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Navbar
