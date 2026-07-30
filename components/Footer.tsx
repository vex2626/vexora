import { services, products, projects, courses } from "../lib/data";

function shortLabel(title: string) {
  // remove common suffixes and long words to create a shorter label
  return title
    .replace(/\b(Development|System|Management|Application|Platform|Solutions|Solution|Service|Services)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export default function Footer() {
  return (
    <footer className="bg-[#030307] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="border-t border-white/6 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-start">
          <div className="md:col-span-2 flex items-start">
            <a href="/" className="inline-flex items-center">
              <p className="text-2xl font-bold tracking-[0.18em] text-white">Vexora</p>
            </a>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="/services" className="hover:text-fuchsia-100 transition">{shortLabel(s.title)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {products.slice(0,5).map((p, i) => (
                p.title ? (
                  <li key={p.title}>
                    <a href="/products" className="hover:text-fuchsia-100 transition">{shortLabel(p.title)}</a>
                  </li>
                ) : (
                  <li key={"product-" + i} />
                )
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-4">Projects</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {projects.slice(0,4).map((p, i) => (
                p.title ? (
                  <li key={p.title}>
                    <a href="/projects" className="hover:text-fuchsia-100 transition">{shortLabel(p.title)}</a>
                  </li>
                ) : (
                  <li key={"project-" + i} />
                )
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-4">Courses</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {courses.slice(0,4).map((c, i) => (
                c.title ? (
                  <li key={c.title}>
                    <a href="/courses" className="hover:text-fuchsia-100 transition">{shortLabel(c.title)}</a>
                  </li>
                ) : (
                  <li key={"course-" + i} />
                )
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/6 mt-10 pt-6 flex items-center justify-between">
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} Vexora. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-fuchsia-100 transition">Business Registration</a>
              <a href="#" className="text-slate-400 hover:text-fuchsia-100 transition">Terms & Conditions</a>
              <a href="#" className="text-slate-400 hover:text-fuchsia-100 transition">Privacy Policy</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-fuchsia-100 transition"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.07C22 6.55 17.52 2 12 2S2 6.55 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H8.06v-2.9h2.38V9.41c0-2.35 1.4-3.64 3.55-3.64 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.73-1.53 1.48v1.78h2.6l-.42 2.9h-2.18v7.03C18.34 21.19 22 17.06 22 12.07z"/></svg></a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-fuchsia-100 transition"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M16 11.37a4 4 0 1 1-7.999.63A4 4 0 0 1 16 11.37z"/></svg></a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-fuchsia-100 transition"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0H12v2.1h.1c.6-1.1 2-2.1 4.1-2.1C21.7 8 24 10.6 24 14.8V22h-5v-6.1c0-1.5-.1-3.4-2.1-3.4-2.1 0-2.5 1.7-2.5 3.3V22H7.5V8z"/></svg></a>
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-fuchsia-100 transition"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 0 0 1.85-2.33 8.35 8.35 0 0 1-2.65 1.02A4.16 4.16 0 0 0 12 8.1c0 .33.04.66.1.97A11.8 11.8 0 0 1 3.1 5.15a4.16 4.16 0 0 0 1.29 5.56c-.66 0-1.29-.2-1.84-.5v.05c0 2.25 1.6 4.13 3.7 4.56-.35.1-.72.15-1.08.15-.27 0-.53-.02-.78-.07.53 1.64 2.05 2.84 3.86 2.87A8.35 8.35 0 0 1 2 19.54a11.77 11.77 0 0 0 6.29 1.84c7.55 0 11.68-6.36 11.68-11.87 0-.18 0-.36-.02-.53A8.45 8.45 0 0 0 22.46 6z"/></svg></a>
              <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-fuchsia-100 transition"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.04 1.77 2.73 1.26 3.4.96.11-.75.41-1.26.75-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.67.42.36.8 1.08.8 2.18 0 1.58-.02 2.85-.02 3.24 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
