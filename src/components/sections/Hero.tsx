import { motion } from "framer-motion";
import Container from "../layout/Container";
import SceneBackground from "../three/SceneBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <SceneBackground />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,8,22,0.35),rgba(5,8,22,0.85))]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">
              Portfolio 💻 + 📱
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl bg-gradient-to-r from-lime-100 via-green-300 to-emerald-500 bg-clip-text text-6xl font-black leading-none tracking-tight text-transparent drop-shadow-[0_0_22px_rgba(34,197,94,0.55)] md:text-8xl">
              Julien Pasqua
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-xl">
              Développeur d'applications web modernes et performantes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]">
                Voir mes projets
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                Me contacter
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
