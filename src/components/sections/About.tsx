import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="À propos"
          title="Créer des interfaces propres, modernes et marquantes."
          subtitle="Je conçois des expériences web fluides avec une attention particulière au design, aux animations et à la structure du code."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold">Frontend</h3>
            <p className="mt-3 text-white/70">
              JavaScript, React, TypeScript, Tailwind CSS, interfaces réactives
              et propres.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold">Backend</h3>
            <p className="mt-3 text-white/70">
              PHP, Node.js, bases de données, API REST, gestion de projets.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold">
              Machine Learning, Intelligence Artificielle
            </h3>
            <p className="mt-3 text-white/70">
              Python, modèles de langage, vision par ordinateur, applications
              d'IA dans le développement web.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
