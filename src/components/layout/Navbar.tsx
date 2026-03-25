import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import resumePdf from '../../assets/Calimot_resume.pdf'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  useEffect(() => {
    function handleScroll() {
      if (location.pathname !== '/') {
        setActiveSection('')
        return
      }

      const workSection = document.getElementById('selected-work')
      const aboutSection = document.getElementById('about')
      const contactSection = document.getElementById('contact')

      const isInView = (element: HTMLElement | null) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        const triggerTop = window.innerHeight * 0.35
        const triggerBottom = window.innerHeight * 0.35
        return rect.top <= triggerTop && rect.bottom >= triggerBottom
      }

      if (isInView(workSection)) {
        setActiveSection('work')
      } else if (isInView(contactSection)) {
        setActiveSection('contact')
      } else if (isInView(aboutSection)) {
        setActiveSection('about')
      } else {
        setActiveSection('')
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [location.pathname])

  const handleAboutClick = () => {
    setMenuOpen(false)

    if (location.pathname !== '/') {
      window.location.href = '/#about'
      return
    }

    const section = document.getElementById('about')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleHeroClick = () => {
    setMenuOpen(false)

    if (location.pathname !== '/') {
      window.location.href = '/#hero'
      return
    }

    const section = document.getElementById('hero')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleWorkClick = () => {
    setMenuOpen(false)

    if (location.pathname !== '/') {
      window.location.href = '/#selected-work'
      return
    }

    const section = document.getElementById('selected-work')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleContactClick = () => {
    setMenuOpen(false)

    if (location.pathname !== '/') {
      window.location.href = '/#contact'
      return
    }

    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const desktopLinkBase =
    'relative text-sm font-medium tracking-[0.18em] text-[var(--color-cream)]/78 transition-all duration-300 hover:text-[var(--color-cream)] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:bg-[var(--color-cream)] after:transition-all after:duration-300'

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--color-cream)]/10 bg-[#495F4A] backdrop-blur-md">
        <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            onClick={handleHeroClick}
            className="text-base font-medium tracking-[0.18em] text-[var(--color-cream)] transition-opacity duration-300 hover:opacity-70"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            CHAR ALIMOT
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={handleWorkClick}
              className={`${desktopLinkBase} ${
                activeSection === 'work'
                  ? 'after:w-full text-[var(--color-cream)]'
                  : 'after:w-0'
              }`}
            >
              Work
            </button>

            <button
              onClick={handleAboutClick}
              className={`${desktopLinkBase} ${
                activeSection === 'about'
                  ? 'after:w-full text-[var(--color-cream)]'
                  : 'after:w-0'
              }`}
            >
              About Me
            </button>

            <button
              onClick={handleContactClick}
              className={`${desktopLinkBase} ${
                activeSection === 'contact'
                  ? 'after:w-full text-[var(--color-cream)]'
                  : 'after:w-0'
              }`}
            >
              Contact
            </button>

            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-cream)]/18 px-4 py-2 text-sm font-medium tracking-[0.18em] text-[var(--color-cream)] transition-all duration-300 hover:border-[var(--color-cream)]/30 hover:bg-[var(--color-cream)]/8"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-cream)]/14 bg-[var(--color-cream)]/5 text-[var(--color-cream)] transition-all duration-300 hover:bg-[var(--color-cream)]/10 md:hidden"
          >
            <Menu size={18} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
            />

            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="fixed right-5 top-24 z-50 w-[min(280px,calc(100vw-2.5rem))] overflow-hidden rounded-[28px] border border-[var(--color-cream)]/12 bg-[#495F4A]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="mb-2 flex items-center justify-between px-2 pt-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-cream)]/55">
                  Menu
                </p>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-cream)]/7 text-[var(--color-cream)] transition hover:bg-[var(--color-cream)]/12"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <button
                  onClick={handleWorkClick}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium tracking-[0.18em] transition duration-300 ${
                    activeSection === 'work'
                      ? 'border-[var(--color-cream)]/20 bg-[var(--color-cream)]/12 text-[var(--color-cream)]'
                      : 'border-transparent bg-[var(--color-cream)]/5 text-[var(--color-cream)] hover:border-[var(--color-cream)]/10 hover:bg-[var(--color-cream)]/10'
                  }`}
                >
                  Work
                </button>

                <button
                  onClick={handleAboutClick}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium tracking-[0.18em] transition duration-300 ${
                    activeSection === 'about'
                      ? 'border-[var(--color-cream)]/20 bg-[var(--color-cream)]/12 text-[var(--color-cream)]'
                      : 'border-transparent bg-[var(--color-cream)]/5 text-[var(--color-cream)] hover:border-[var(--color-cream)]/10 hover:bg-[var(--color-cream)]/10'
                  }`}
                >
                  About Me
                </button>

                <button
                  onClick={handleContactClick}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium tracking-[0.18em] transition duration-300 ${
                    activeSection === 'contact'
                      ? 'border-[var(--color-cream)]/20 bg-[var(--color-cream)]/12 text-[var(--color-cream)]'
                      : 'border-transparent bg-[var(--color-cream)]/5 text-[var(--color-cream)] hover:border-[var(--color-cream)]/10 hover:bg-[var(--color-cream)]/10'
                  }`}
                >
                  Contact
                </button>

                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-transparent bg-[var(--color-cream)]/8 px-4 py-3 text-sm font-medium tracking-[0.18em] text-[var(--color-cream)] transition duration-300 hover:bg-[var(--color-cream)]/14"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
