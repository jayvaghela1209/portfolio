export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <p className="font-mono tag-pill text-coral mb-3">01 · about</p>
          <h2 className="font-display font-semibold text-3xl text-paper">
            Cloud-native by habit, full-stack by necessity.
          </h2>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface2">
              <span className="w-2.5 h-2.5 rounded-full bg-coral" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber" />
              <span className="w-2.5 h-2.5 rounded-full bg-teal" />
              <span className="ml-3 font-mono tag-pill text-mist">about.sh</span>
            </div>
            <div className="p-6 font-mono text-sm leading-7 text-mist">
              <p><span className="text-teal">$</span> cat profile.md</p>
              <p className="mt-3 text-paper font-body text-base leading-relaxed">
                I'm an MCA student in Ahmedabad, and a DevOps &amp; Cloud Engineering
                enthusiast with hands-on experience automating deployments and managing
                infrastructure on AWS, using Terraform, Docker, Kubernetes, and GitHub
                Actions. I'm equally comfortable in Python and Flask on the backend as
                I am debugging a broken CI/CD pipeline at midnight.
              </p>
              <p className="mt-4 text-paper font-body text-base leading-relaxed">
                Most of what I know, I learned by building — standing up an EKS cluster,
                wiring S3 and CloudFront into a monitored, alerting pipeline, and shipping
                full-stack apps with a small team, end to end.
              </p>
              <p className="mt-4"><span className="text-teal">$</span> <span className="animate-pulseNode">_</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
