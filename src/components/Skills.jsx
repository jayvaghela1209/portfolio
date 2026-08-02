import { skillGroups } from '../data/projects.js'

const ringColors = ['border-violet', 'border-coral', 'border-teal', 'border-amber']

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono tag-pill text-teal mb-3">02 · stack</p>
        <h2 className="font-display font-semibold text-3xl text-paper mb-10">
          What's in the manifest
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className={`rounded-xl border-t-2 ${ringColors[i % ringColors.length]} border-x border-b border-border bg-surface p-5`}
            >
              <p className="font-mono tag-pill text-mist mb-4">{group.label}.json</p>
              <h3 className="font-display font-semibold text-paper mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono tag-pill text-mist border border-border rounded-md px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
