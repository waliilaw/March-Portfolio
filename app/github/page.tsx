'use client'
import Link from "next/link"
import { Terminal } from "lucide-react"

export default function Github() {
  return (
    <main className="min-h-screen bg-white text-green-900 p-4 md:p-8 font-mono flex justify-center items-center">
      <div className="max-w-4xl w-full">
        <nav className="flex items-center gap-6 text-sm mb-8">
          <Terminal className="w-5 h-5" />
          <Link href="/" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ~/home
          </Link>
          <Link href="/stacks" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ./stacks
          </Link>
          <Link href="/projects" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ./projects
          </Link>
          <Link href="/github" className="text-white bg-green-400 p-1 transition-colors">
            ./github
          </Link>
        </nav>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1">
              github_contributions
            </h2>
            <div className="bg-green-900/10 p-4 rounded-lg">
              <img 
                src={`https://ghchart.rshah.org/4ade80/waliilaw`}
                alt="GitHub Contributions Graph"
                className="w-full h-auto"
              />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1">
              github_stats
            </h2>
            <div className="flex justify-center">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=waliilaw&show_icons=true&theme=dark&hide_border=true&bg_color=transparent&text_color=4ade80&icon_color=4ade80&title_color=4ade80`}
                alt="GitHub Stats"
                className="max-w-full"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}