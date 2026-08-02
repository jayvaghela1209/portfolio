export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono tag-pill text-mist">
          © {new Date().getFullYear()} Jay Vaghela — built with React &amp; Tailwind
        </p>
        <p className="font-mono tag-pill text-mist">status: <span className="text-teal">online</span></p>
      </div>
    </footer>
  )
}
