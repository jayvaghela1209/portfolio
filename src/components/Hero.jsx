import { ArrowDown, Download } from 'lucide-react'

const stages = [
  { label: 'code', color: 'bg-violet' },
  { label: 'build', color: 'bg-coral' },
  { label: 'test', color: 'bg-amber' },
  { label: 'deploy', color: 'bg-teal' },
  { label: 'monitor', color: 'bg-violet' },
]

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono tag-pill text-teal mb-5">$ whoami</p>

        <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-paper max-w-3xl">
          Jay Vaghela — I build cloud infrastructure that ships itself,
          <span className="text-mist"> and stays up after it does.</span>
        </h1>

        <p className="mt-6 text-mist max-w-xl text-lg">
          DevOps &amp; Cloud Engineer from Ahmedabad, working across AWS, Kubernetes,
          Terraform and CI/CD pipelines — with full-stack apps built to sit on top of them.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-violet text-ink font-semibold px-5 py-3 rounded-lg hover:bg-paper transition-colors"
          >
            <Download size={18} /> Download resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-border text-paper px-5 py-3 rounded-lg hover:border-teal hover:text-teal transition-colors font-mono tag-pill"
          >
            see the pipeline <ArrowDown size={16} />
          </a>
        </div>

        {/* Signature element: a live CI/CD pipeline strip */}
        <div className="mt-20 relative">
          <div className="relative h-1 rounded-full bg-surface2 overflow-hidden">
            <div className="pipeline-signal" />
          </div>

          <div className="mt-5 grid grid-cols-5 gap-2 sm:gap-4">
            {stages.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${s.color} animate-pulseNode`}
                  style={{ animationDelay: `${i * 0.45}s` }}
                />
                <span className="font-mono tag-pill text-mist">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
