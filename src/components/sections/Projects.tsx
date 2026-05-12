import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

const projects = [
  {
    title: "Projet-Cinema-Paradiso",
    desc: "Application web autour de l'univers du cinema avec une interface moderne et une experience fluide.",
    href: "https://github.com/julienPasqua/Projet-Cinema-Paradiso",
    mediaType: "video",
    mediaSrc: "/projects/cinema-paradiso.mp4",
  },
  {
    title: "Rock-My-Class",
    desc: "Plateforme web orientee utilisateur avec une attention particuliere a la lisibilite et a l'experience globale.",
    href: "https://github.com/julienPasqua/Rock-My-Class",
    mediaType: "image",
    mediaSrc: "/projects/rock-my-class.jpg",
    mediaPosition: "center 18%",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Projets"
          title="Une sélection de réalisations"
          subtitle="Quelques projets mis en avant avec une présentation claire et impactante."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <div className="mb-5 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400/20 via-white/5 to-fuchsia-500/20">
                {project.mediaType === "video" ? (
                  <video
                    src={project.mediaSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={project.mediaSrc}
                    alt={project.title}
                    style={{ objectPosition: project.mediaPosition }}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                {project.desc}
              </p>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                Voir le projet →
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
