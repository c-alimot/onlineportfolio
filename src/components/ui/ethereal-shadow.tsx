import { motion } from 'motion/react'

type EtherealShadowProps = {
  className?: string
}

export default function EtherealShadow({ className }: EtherealShadowProps) {
  return (
    <div className={className ?? 'pointer-events-none absolute inset-0 overflow-hidden'}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_34%),radial-gradient(circle_at_center,rgba(73,95,74,0.18),transparent_42%),linear-gradient(180deg,rgba(33,34,23,0.25),rgba(33,34,23,0.72))]" />

      <motion.div
        className="absolute left-1/2 top-[14%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[rgba(238,232,213,0.16)] blur-3xl sm:h-[520px] sm:w-[520px]"
        animate={{
          x: [0, 22, -14, 0],
          y: [0, -18, 10, 0],
          scale: [1, 1.06, 0.98, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-[10%] left-[8%] h-[220px] w-[220px] rounded-full bg-[rgba(73,95,74,0.22)] blur-3xl sm:h-[320px] sm:w-[320px]"
        animate={{
          x: [0, 18, -10, 0],
          y: [0, 14, -16, 0],
          scale: [1, 1.08, 1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
      />

      <motion.div
        className="absolute right-[8%] top-[20%] h-[200px] w-[200px] rounded-full bg-[rgba(238,232,213,0.1)] blur-3xl sm:h-[280px] sm:w-[280px]"
        animate={{
          x: [0, -20, 12, 0],
          y: [0, 16, -12, 0],
          scale: [1, 0.96, 1.04, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 84%)',
        }}
      />
    </div>
  )
}
