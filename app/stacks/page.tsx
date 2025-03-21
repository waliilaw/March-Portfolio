import Link from "next/link"
import { Terminal } from "lucide-react"

export default function Stacks() {
  return (
    <main className="max-h-screen bg-white pb-24 text-green-900 p-4 md:p-8 font-mono flex justify-center items-center pt-4 ">
      <div className="max-w-2xl w-full">
        <nav className="flex items-center gap-6 text-sm mb-8">
          <Terminal className="w-5 h-5" />
          <Link href="/" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ~/home
          </Link>
          <Link href="/stacks" className="text-white bg-green-400 p-1 transition-colors">
            ./stacks
          </Link>
          <Link href="/projects" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ./projects
          </Link>
          <Link href="/wallet" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ./..
          </Link>
        </nav>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1  ">tech_stack</h2>
            <div className="grid gap-6">
              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-32">~ Languages</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <span className="bg-green-900/20 px-3 py-1 rounded">JavaScript</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">TypeScript</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">Solidity</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">SQL</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-28">~ Frontend</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <span className="bg-green-900/20 px-3 py-1 rounded">React</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">Next.js</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">TailwindCSS</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">Native</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-28">~ Backend</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <span className="bg-green-900/20 px-3 py-1 rounded">Node.js</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">Express</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">PostgreSQL</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">MongoDB</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">Prisma</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-20">~ Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <span className="bg-green-900/20 px-3 py-1 rounded">Git</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">Docker</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">AWS</span>
                  <span className="bg-green-900/20 px-3 py-1 rounded">Vercel</span>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

