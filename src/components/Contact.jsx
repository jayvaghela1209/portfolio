import { Github, Linkedin, Mail, Download } from 'lucide-react'

const links = [
  {
    label: 'email',
    value: 'jayvaghela0312@gmail.com',
    href: 'mailto:jayvaghela0312@gmail.com',
    icon: Mail,
    accent: 'text-coral',
  },
  {
    label: 'github',
    value: 'jayvaghela1209',
    href: 'https://github.com/jayvaghela1209',
    icon: Github,
    accent: 'text-teal',
  },
  {
    label: 'linkedin',
    value: 'jay-vaghela',
    href: 'https://www.linkedin.com/in/jay-vaghela-19b008264/',
    icon: Linkedin,
    accent: 'text-violet',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet/20 rounded-full blur-3xl animate-floatSlow" />
          <div className="relative">
            <p className="font-mono tag-pill text-coral mb-3">05 · contact</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-paper max-w-xl">
              Open to DevOps Engineer internship roles — let's talk infrastructure.
            </h2>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {links.map(({ label, value, href, icon: Icon, accent }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface2 px-4 py-4 hover:border-teal transition-colors"
                >
                  <Icon className={accent} size={20} />
                  <div>
                    <p className="font-mono tag-pill text-mist">{label}</p>
                    <p className="text-paper text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="/resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 bg-teal text-ink font-semibold px-5 py-3 rounded-lg hover:bg-paper transition-colors"
            >
              <Download size={18} /> Download full resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
