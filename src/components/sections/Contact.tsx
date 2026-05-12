import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          <SectionTitle
            eyebrow="Contact"
            title={
              <>
                Vous avez un projet, une idée en tête ?
                <br />
                Parlons-en et donnons vie à une expérience web qui marque
                vraiment.
              </>
            }
          />

          <div className="mb-8 rounded-3xl border border-white/10 bg-black/10 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/50">
              CV
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Retrouvez mon CV en PDF pour consulter mon parcours, mes
              competences et mes experiences.
            </p>
            <a
              href="/documents/julien-pasqua-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Ouvrir mon CV
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:julienpasqua2@gmail.com"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black">
              Envoyer un email
            </a>

            <a
              href="https://www.linkedin.com/in/julien-pasqua-3a89b478/"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white">
              LinkedIn
            </a>

            <a
              href="https://github.com/julienPasqua"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white">
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
