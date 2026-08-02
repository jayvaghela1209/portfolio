import { projects } from '../data/projects.js'
import { accentText, accentBorder, accentBg, accentGlow, statusLabel } from '../utils/accent.js'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono tag-pill text-amber mb-3">03 · projects</p>
        <h2 className="font-display font-semibold text-3xl text-paper mb-10">
          Things I've shipped (and kept running)
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className={`group rounded-xl border border-border bg-surface p-6 transition-shadow ${accentGlow[p.accent]}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-xl text-paper">{p.name}</h3>
                <span className={`font-mono tag-pill ${accentText[p.accent]} border ${accentBorder[p.accent]} rounded-full px-2 py-1`}>
                  {statusLabel[p.status]}
                </span>
              </div>

              <p className="font-mono tag-pill text-mist mb-3">{p.subtitle}</p>
              <p className="text-mist text-sm leading-relaxed mb-4">{p.description}</p>

              <ul className="space-y-2 mb-5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-paper/90">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${accentBg[p.accent]}`} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="font-mono tag-pill text-mist border border-border rounded-md px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
