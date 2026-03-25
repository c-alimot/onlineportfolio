import { Link, Routes, Route } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import Navbar from './components/layout/Navbar'
import EtherealShadow from './components/ui/ethereal-shadow'
import ldHero from './assets/LD hero.png'
import ld1 from './assets/LD1.png'
import ldResearch from './assets/ldresearch.png'
import ldProcess from './assets/ldprocess.png'
import ldScreens from './assets/ldscreens.png'
import aboutMePhoto from './assets/aboutme.png'
import curaHero from './assets/curahero.png'
import cura2 from './assets/cura2.png'
import cura3 from './assets/cura3.png'
import cura4 from './assets/cura4.png'

function Home() {
  const handleWorkClick = () => {
    const section = document.getElementById('selected-work')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-24 sm:px-8">
        <EtherealShadow />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl lg:-translate-y-10">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.34em] text-[var(--color-cream)]/58 sm:text-xs">
              JR. UX PRODUCT DESIGNER 
            </p>

            <h1
              className="max-w-[10ch] text-5xl leading-[0.92] text-[var(--color-cream)] sm:text-6xl md:text-7xl lg:text-[5.4rem]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Designing digital experiences with clarity, structure, &amp; purpose
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-[var(--color-cream)]/70 sm:text-base">
              Ready for a new design role in Vancouver or Remote in Canada 
            </p>

            <div className="mt-12">
              <button
                type="button"
                onClick={handleWorkClick}
                className="hero-glow inline-flex rounded-full bg-[var(--color-sage)]/60 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-cream)] transition duration-300 hover:scale-[1.02]"
              >
                View Work
              </button>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      <section id="selected-work" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]/55">
                Selected Work
              </p>
              <h2
                className="text-3xl sm:text-4xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Featured projects
              </h2>
            </div>

          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="flex min-h-[540px] flex-col rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
                Project 01
              </p>
              <Link to="/work/life-drawer" className="mt-4 min-h-0 flex-1 overflow-hidden rounded-[20px]">
                <img
                  src={ldHero}
                  alt="Life Drawer project hero preview"
                  className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                />
              </Link>
              <Link
                to="/work/life-drawer"
                className="mt-4 inline-flex w-fit text-2xl transition-opacity duration-300 hover:opacity-80"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Life Drawer
              </Link>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
                Product Design • React Native • UX Research
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-cream)]/75">
                Designing a digital sanctuary that moves away from the pressure
                of streaks to focus on meaningful, non-linear reflection
                through life phases and context.
              </p>
              <Link
                to="/work/life-drawer"
                className="mt-5 inline-flex w-fit rounded-full border border-[var(--color-cream)]/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-cream)] transition duration-300 hover:bg-[var(--color-cream)]/6"
              >
                View Case Study
              </Link>
            </article>

          <article className="flex min-h-[540px] flex-col rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              Project 02
            </p>
            <Link
              to="/work/cura"
              className="mt-4 min-h-0 flex-1 overflow-hidden rounded-[20px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/5"
            >
              <img
                src={curaHero}
                alt="Cura healthcare app preview"
                className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>
            <Link
              to="/work/cura"
              className="mt-4 inline-flex text-2xl transition-opacity duration-300 hover:opacity-80"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Cura
            </Link>
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              Healthcare UX • Next.js
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-cream)]/75">
              An elderly-friendly medical interface designed to reduce
              cognitive load and simplify complex healthcare journeys through
              radical accessibility.
            </p>
            <Link
              to="/work/cura"
              className="mt-5 inline-flex w-fit rounded-full border border-[var(--color-cream)]/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-cream)] transition duration-300 hover:bg-[var(--color-cream)]/6"
            >
              View Case Study
            </Link>
          </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]/55">
            Skills
          </p>
          <h2
            className="text-3xl sm:text-4xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What I work with
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              'UX/UI Design',
              'Visual Hierarchy and Layout',
              'User-Centered Problem Solving',
              'Project Management',
              'Agile workflow',
              'Jira',
              'Front-End Development',
              'React',
              'TypeScript',
              'Figma',
              'Responsive Design',
              'Design Systems',
              'Prototyping',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2 text-sm text-[var(--color-cream)]/82"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]/55">
            About Me
          </p>
          <h2
            className="text-3xl sm:text-4xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Designing with intention and clarity.
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
            <div className="overflow-hidden rounded-[32px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 md:h-full md:max-w-md">
              <img
                src={aboutMePhoto}
                alt="Char Alimot portrait"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="max-w-3xl">
              <p className="text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                I’m Char, a UX/UI and product designer with a growing front-end
                development background. I enjoy creating digital experiences
                that feel clear, thoughtful, and easy to use. My approach to
                design is rooted in understanding people first, then turning
                insights into interfaces that feel intentional, accessible, and
                meaningful.
              </p>
              <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                I’m especially interested in the full design process, from
                research and problem framing to wireframes, visual design, and
                developer handoff. I like thinking through how a product should
                work, how it should feel, and how each decision supports the
                user experience. My front-end knowledge also helps me design
                with implementation in mind, which allows me to bridge design
                and development more effectively.
              </p>
              <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                As a designer, I value clarity, structure, and purpose. I want
                my work to do more than just look good. I want it to solve real
                problems, support real people, and create experiences that feel
                simple and well considered.
              </p>
              <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                Outside of design, I am inspired by creativity in everyday
                life, whether that comes from visual culture, digital
                experiences, storytelling, or the small details that make
                something feel memorable. I enjoy observing how people interact
                with the world around them and bringing that awareness back
                into my design process.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2 text-sm text-[var(--color-cream)]/78">
                <MapPin size={16} />
                <span>Vancouver, BC, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 pt-20 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]/55">
            Contact
          </p>
          <h2
            className="text-3xl sm:text-4xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let’s connect
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-cream)]/78 sm:text-base">
            Whether it is a project, internship, or collaboration, I would love
            to hear from you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:alimot.charlene@outlook.com"
              className="rounded-full bg-[var(--color-sage)] px-5 py-3 text-sm tracking-[0.12em] text-[var(--color-cream)] transition duration-300 hover:opacity-90"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/char-alimot"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-cream)]/15 px-5 py-3 text-sm tracking-[0.12em] text-[var(--color-cream)] transition duration-300 hover:bg-[var(--color-cream)]/5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function Work() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] px-5 py-16 text-[var(--color-text)] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]/55">
          Work
        </p>
        <h1
          className="text-4xl sm:text-5xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Selected projects
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-cream)]/78 sm:text-base">
          A small selection of projects that reflect my approach to UX/UI,
          strategy, and front-end development.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              Product Design • React Native • UX Research
            </p>
            <Link
              to="/work/life-drawer"
              className="mt-4 inline-flex text-2xl transition-opacity duration-300 hover:opacity-80"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Life Drawer
            </Link>
            <p className="mt-3 text-sm leading-7 text-[var(--color-cream)]/75">
              Designing a digital sanctuary that moves away from the pressure
              of streaks to focus on meaningful, non-linear reflection through
              life phases and context.
            </p>
            <Link
              to="/work/life-drawer"
              className="mt-5 inline-flex w-fit rounded-full border border-[var(--color-cream)]/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-cream)] transition duration-300 hover:bg-[var(--color-cream)]/6"
            >
              Open Case Study
            </Link>
          </article>

          <article className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              Healthcare UX • Next.js
            </p>
            <Link
              to="/work/cura"
              className="mt-4 block overflow-hidden rounded-[20px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/5"
            >
              <img
                src={curaHero}
                alt="Cura healthcare app preview"
                className="aspect-[16/10] w-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>
            <Link
              to="/work/cura"
              className="mt-4 inline-flex text-2xl transition-opacity duration-300 hover:opacity-80"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Cura
            </Link>
            <p className="mt-3 text-sm leading-7 text-[var(--color-cream)]/75">
              An elderly-friendly medical interface designed to reduce
              cognitive load and simplify complex healthcare journeys through
              radical accessibility.
            </p>
            <Link
              to="/work/cura"
              className="mt-5 inline-flex w-fit rounded-full border border-[var(--color-cream)]/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-cream)] transition duration-300 hover:bg-[var(--color-cream)]/6"
            >
              Open Case Study
            </Link>
          </article>
        </div>
      </div>
    </main>
  )
}

function LifeDrawerCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] px-5 py-16 text-[var(--color-text)] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]/55">
          Case Study
        </p>
        <h1
          className="max-w-3xl text-4xl sm:text-5xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Life Drawer
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-cream)]/82 sm:text-xl">
          Designing a pressure-free, context-driven journaling experience.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-[var(--color-cream)]/65">
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            Role: Solo Product Designer & Front-end Developer
          </span>
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            Tools: Figma
          </span>
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            React Native
          </span>
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            Supabase
          </span>
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            TypeScript
          </span>
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            Timeline: 12 Weeks (Capstone Project)
          </span>
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4">
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(238,232,213,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(183,143,104,0.16),transparent_36%),linear-gradient(135deg,rgba(89,67,47,0.72),rgba(213,184,151,0.3))]" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0,transparent_92%,rgba(255,248,236,0.08)_92%,rgba(255,248,236,0.08)_100%)] bg-[length:100%_28px] opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,244,226,0.18),transparent_38%)]" />
            <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6 sm:min-h-[360px] sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,245,230,0.8)]">
                Journaling UX concept
              </p>
              <p className="mt-3 max-w-xl text-2xl leading-tight text-[rgba(255,249,240,0.96)] sm:text-4xl">
                A reflective interface designed for calm, context, and
                meaningful memory keeping.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              01. The Challenge: The "Consistency Trap"
            </p>
            <div className="mt-4 overflow-hidden rounded-[22px] border border-[var(--color-cream)]/10">
              <img
                src={ld1}
                alt="Life Drawer challenge preview"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              Most journaling tools treat reflection like a productivity habit,
              utilizing streaks and loud notifications to drive daily
              engagement. My research suggested that for many, these
              productivity metrics transform a therapeutic act into a chore. If
              a user misses two days, they feel they have failed their journal.
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              The mission was to pivot from daily productivity to long-term
              self-understanding. I set out to build a digital sanctuary where
              value is found in the meaning of the entry, not the date it was
              written.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              02. The Discovery: Beyond the Timeline
            </p>
            <div className="mt-4 overflow-hidden rounded-[22px] border border-[var(--color-cream)]/10">
              <img
                src={ldResearch}
                alt="Life Drawer research insights"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              To understand the emotional friction of journaling, I conducted
              user interviews and affinity mapping. I discovered that human
              memory is not a chronological list; it is a web of connections.
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              <li>
                <span className="font-medium text-[var(--color-cream)]">
                  Linearity is a Limiter:
                </span>{' '}
                We do not remember "March 12th"; we remember "the month I was
                feeling burnt out at work."
              </li>
              <li>
                <span className="font-medium text-[var(--color-cream)]">The Guilt Gap:</span>{' '}
                Users reported abandoning apps after breaking a streak because
                the UI focused on what they missed rather than what they had
                already built.
              </li>
              <li>
                <span className="font-medium text-[var(--color-cream)]">
                  The "Write-and-Forget" Problem:
                </span>{' '}
                Most apps are great at capturing data but lack the structure to
                help users retrieve and find patterns in that data later.
              </li>
            </ul>
          </section>

          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              03. The Solution: Three Layers of Meaning
            </p>
            <div className="mt-4 overflow-hidden rounded-[22px] border border-[var(--color-cream)]/10">
              <img
                src={ldProcess}
                alt="Life Drawer process and information architecture"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              I redesigned the information architecture to mimic how our brains
              actually categorize experiences. Instead of a single vertical
              timeline, entries are cross-pollinated across three buckets.
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-cream)]/78 sm:text-base">
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  Drawers (Macro):
                </span>{' '}
                Broad domains of life such as Career, Healing, and
                Relationships.
              </p>
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  Tags (Micro):
                </span>{' '}
                Granular emotional threads such as Anxiety, Small Wins, and
                Gratitude.
              </p>
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  Life Phases (Context):
                </span>{' '}
                Temporal chapters that anchor reflections to a specific season,
                like University Years or the Move to Vancouver.
              </p>
            </div>
            <p className="mt-5 rounded-[20px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/5 p-4 text-sm leading-7 text-[var(--color-cream)]/76 sm:text-base">
              <span className="font-medium text-[var(--color-cream)]">
                UX Strategy:
              </span>{' '}
              "Low-Floor, High-Ceiling." I designed an optionality-first flow
              so users can vent immediately without friction, then add
              structure later when they are in a more reflective state.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              04. Design System: The "Slow Media" Aesthetic
            </p>
            <div className="mt-4 overflow-hidden rounded-[22px] border border-[var(--color-cream)]/10">
              <img
                src={ldScreens}
                alt="Life Drawer app screens"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              The UI needed to act like a nervous system regulator. If the app
              feels like a spreadsheet, the user will not be vulnerable.
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-cream)]/78 sm:text-base">
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  The "Paper" Philosophy:
                </span>{' '}
                I chose a warm cream background instead of pure white to mimic
                physical stationery, reduce eye strain, and signal a private
                headspace.
              </p>
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  Editorial Elegance:
                </span>{' '}
                High-contrast serif headers give the app a literary feel,
                signaling that the user's words have weight and value.
              </p>
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  Intentional Friction:
                </span>{' '}
                I used Framer Motion to create slightly weighted transitions,
                giving the user a moment to breathe between screens.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7 lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              05. The Technical Logic
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              Being a designer who codes allowed me to solve a complex IA
              problem: how does an entry exist in three places at once without
              confusing the user?
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              Using Supabase, I structured many-to-many relationships between
              Entries, Tags, and Drawers. This allows a user to filter their
              life by &quot;Burnout&quot; within the &quot;Career&quot; drawer
              during their &quot;Junior Year&quot; life phase.
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              I also focused on optimistic UI updates so when a user hits Save,
              the entry appears to save instantly on the frontend while the
              backend syncs in the background. In a journaling app, a loading
              spinner during a vulnerable moment kills the flow.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7 lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              06. Reflections: The MVP Mindset
            </p>
            <div className="mt-4 grid gap-5 md:grid-cols-3">
              <p className="text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                This project taught me that constraints are a gift. As a solo
                creator, I had to decide which features were essential for
                sanctuary and which were distractions.
              </p>
              <p className="text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                <span className="font-medium text-[var(--color-cream)]">
                  Key Learning:
                </span>{' '}
                Calm design is actually harder to build than busy design. It
                requires more precision in spacing, more intentionality in
                transitions, and a ruthless commitment to removing clutter.
              </p>
              <p className="text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                <span className="font-medium text-[var(--color-cream)]">
                  Current State:
                </span>{' '}
                Standing as a robust minimum viable product, Life Drawer is a
                proof of concept for human-centered engineering.
              </p>
            </div>
            <p className="mt-5 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              <span className="font-medium text-[var(--color-cream)]">
                Future Vision:
              </span>{' '}
              I am looking forward to expanding the feature set, including
              deeper insights and more personal customization, while
              continuously refining the UI to better serve the needs of
              reflective users.
            </p>
          </section>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex rounded-full bg-[var(--color-sage)] px-5 py-3 text-sm tracking-[0.12em] text-[var(--color-cream)] transition duration-300 hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

function CuraCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] px-5 py-16 text-[var(--color-text)] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]/55">
          Case Study
        </p>
        <h1
          className="max-w-3xl text-4xl sm:text-5xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Cura
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-cream)]/82 sm:text-xl">
          Simplifying healthcare through accessible, elderly-friendly design.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-[var(--color-cream)]/65">
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            Role: UX/UI Lead, Assistant Front-end Developer, & Project Manager
          </span>
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            Tools: Figma
          </span>
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            Next.js
          </span>
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            GitHub
          </span>
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            Notion
          </span>
          <span className="rounded-full border border-[var(--color-cream)]/12 bg-[var(--color-cream)]/5 px-4 py-2">
            Timeline: 12 Weeks
          </span>
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4">
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(238,232,213,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(183,143,104,0.2),transparent_36%),linear-gradient(135deg,rgba(76,57,39,0.96),rgba(191,158,123,0.88))]" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0,transparent_92%,rgba(255,248,236,0.12)_92%,rgba(255,248,236,0.12)_100%)] bg-[length:100%_28px] opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,244,226,0.18),transparent_38%)]" />
            <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6 sm:min-h-[360px] sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,245,230,0.8)]">
                Healthcare UI concept
              </p>
              <p className="mt-3 max-w-xl text-2xl leading-tight text-[rgba(255,249,240,0.96)] sm:text-4xl">
                A trusted interface designed to feel like a guided conversation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              01. The Challenge: The Digital Healthcare Barrier
            </p>
            <div className="mt-4 overflow-hidden rounded-[22px] border border-[var(--color-cream)]/10">
              <img
                src={curaHero}
                alt="Cura healthcare interface preview"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              Healthcare apps are notoriously overwhelming. For elderly users
              or those with low digital literacy, complex navigation and
              medical-speak create a barrier to care. When a user is sick or
              stressed, they do not have the cognitive bandwidth to hunt for a
              book appointment button.
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              The goal was to strip away the technical noise and create a health
              app that feels like a guided conversation rather than a complex
              database.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              02. The Discovery: Designing for Accessibility
            </p>
            <div className="mt-4 overflow-hidden rounded-[22px] border border-[var(--color-cream)]/10">
              <img
                src={cura2}
                alt="Cura accessibility research preview"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              My research focused on the specific pain points of elderly users
              interacting with medical platforms. I identified three critical
              friction points:
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              <li>
                <span className="font-medium text-[var(--color-cream)]">
                  Cognitive Overload:
                </span>{' '}
                Too many competing calls to action lead to choice paralysis.
              </li>
              <li>
                <span className="font-medium text-[var(--color-cream)]">
                  Visual Accessibility:
                </span>{' '}
                Small touch targets and low-contrast text make navigation
                physically difficult for older users.
              </li>
              <li>
                <span className="font-medium text-[var(--color-cream)]">
                  Lack of Feedback:
                </span>{' '}
                Users often feel lost if the app does not clearly confirm that
                an action was successful.
              </li>
            </ul>
          </section>

          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              03. The Solution: Radical Simplification
            </p>
            <div className="mt-4 overflow-hidden rounded-[22px] border border-[var(--color-cream)]/10">
              <img
                src={cura3}
                alt="Cura simplified user flow preview"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              I led the UX planning with a less is more philosophy. We
              restructured the information architecture to prioritize the three
              most frequent user tasks: Scheduling, Records, and Support.
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-cream)]/78 sm:text-base">
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  Linear Flows:
                </span>{' '}
                Instead of a dashboard with 20 icons, I designed a step-by-step
                wizard for complex tasks like insurance verification.
              </p>
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  High-Visibility UI:
                </span>{' '}
                I implemented oversized touch targets and a high-contrast color
                system to ensure readability.
              </p>
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  Guided Navigation:
                </span>{' '}
                I reduced the primary navigation to its most essential elements,
                using clear icons paired with descriptive text labels.
              </p>
            </div>
            <p className="mt-5 rounded-[20px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/5 p-4 text-sm leading-7 text-[var(--color-cream)]/76 sm:text-base">
              <span className="font-medium text-[var(--color-cream)]">
                Design Decision:
              </span>{' '}
              The Grandmother Test. Every screen was evaluated by asking,
              could my grandmother complete this task without asking for help.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              04. Visual & Interaction Design
            </p>
            <div className="mt-4 overflow-hidden rounded-[22px] border border-[var(--color-cream)]/10">
              <img
                src={cura4}
                alt="Cura interface design preview"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              Healthcare design needs to balance professionalism with
              approachability.
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-cream)]/78 sm:text-base">
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  The Palette:
                </span>{' '}
                I moved away from sterile hospital blues in favor of a softer,
                more calming teal and slate palette that feels modern yet
                trustworthy.
              </p>
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  Typography for All:
                </span>{' '}
                I used a clean, highly legible sans-serif font with increased
                base sizing and generous leading.
              </p>
              <p>
                <span className="font-medium text-[var(--color-cream)]">
                  Consistency in Code:
                </span>{' '}
                I ensured the component library was mirrored in code, maintaining
                design fidelity.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7 lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              05. Leadership & Technical Execution
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              Because I wore multiple hats, designer, developer, and PM, I was
              able to bridge the gap between the dream and the deadline.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <p className="text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                <span className="font-medium text-[var(--color-cream)]">
                  Project Management:
                </span>{' '}
                I managed the team&apos;s workflow and communication, ensuring
                that design handoffs were smooth and that technical constraints
                were identified early in the wireframing stage.
              </p>
              <p className="text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                <span className="font-medium text-[var(--color-cream)]">
                  Front-end Support:
                </span>{' '}
                Contributing to the Next.js build allowed me to advocate for
                accessibility in the code itself, such as proper ARIA labels and
                semantic HTML.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/4 p-6 sm:p-7 lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]/50">
              06. Reflections: Empathy as a Design Tool
            </p>
            <div className="mt-4 grid gap-5 md:grid-cols-3">
              <p className="text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                Cura taught me that accessibility is not a feature. It is a
                requirement.
              </p>
              <p className="text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                <span className="font-medium text-[var(--color-cream)]">
                  Key Learning:
                </span>{' '}
                Designing for elderly users actually makes the product better
                for everyone.
              </p>
              <p className="text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
                <span className="font-medium text-[var(--color-cream)]">
                  Current State:
                </span>{' '}
                The project stands as a fully realized MVP concept, proving that
                healthcare can be made accessible through intentional UX and
                disciplined project management.
              </p>
            </div>
            <p className="mt-5 text-sm leading-8 text-[var(--color-cream)]/78 sm:text-base">
              <span className="font-medium text-[var(--color-cream)]">
                Future Vision:
              </span>{' '}
              My next steps would involve remote usability testing with users
              aged 65 plus to further refine the guided navigation and optimize
              the appointment-tracking flow.
            </p>
          </section>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex rounded-full bg-[var(--color-sage)] px-5 py-3 text-sm tracking-[0.12em] text-[var(--color-cream)] transition duration-300 hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/life-drawer" element={<LifeDrawerCaseStudy />} />
        <Route path="/work/cura" element={<CuraCaseStudy />} />
      </Routes>
    </div>
  )
}
