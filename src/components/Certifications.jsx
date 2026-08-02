import { BadgeCheck, Loader2 } from 'lucide-react'
import { certifications } from '../data/projects.js'

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono tag-pill text-violet mb-3">04 · certifications</p>
        <h2 className="font-display font-semibold text-3xl text-paper mb-10">
          Credentials on the shelf
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((c) => {
            const done = c.status === 'completed'
            return (
              <div
                key={c.name}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
              >
                {done ? (
                  <BadgeCheck className="text-teal shrink-0 mt-0.5" size={20} />
                ) : (
                  <Loader2 className="text-amber shrink-0 mt-0.5 animate-spin" size={20} />
                )}
                <div>
                  <p className="text-paper font-medium leading-snug">{c.name}</p>
                  <p className="font-mono tag-pill text-mist mt-1">
                    {c.issuer} · {done ? 'completed' : 'in progress'}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
