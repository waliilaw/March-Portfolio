import Link from "next/link"
import { Terminal } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-green-900 p-4 md:p-8 font-mono flex justify-center items-center ">
      <div className="max-w-2xl w-full">
        <nav className="flex items-center gap-6 text-sm mb-8 pt-0">
          <Terminal className="w-5 h-5" />
          <Link href="/" className="text-white bg-green-400 p-1 transition-colors">
            ~/home
          </Link>
          <Link href="/stacks" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ./stacks
          </Link>
          <Link href="/projects" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ./projects
          </Link>
          {/* <Link href="/wallet" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ./wallet
          </Link> */}
        </nav>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1">~ info</h2>
            <div className="grid grid-cols-1 md:grid-cols-[120px,1fr] gap-6 items-start">
              <img src="/wali.png" className="w-full h-auto max-w-[120px] bg-green-900/20 rounded-lg" />
              <div className="space-y-4">
                <p>
                  Hi, I am <Link href="https://x.com/Waliilaww" className="text-green-400 hover:text-white hover:bg-green-400 p-1">Wali</Link>
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    Full Stack Developer{" "}
                    <Link href="https://nextjs.org" className="text-green-400 hover:text-white hover:bg-green-400 p-1">
                      ${"{"}NextJs{"}"}
                    </Link>
                  </p>
                  <p>
                    Web3 Dev{" "}
                    <Link href="https://solana.com" className="text-green-400 hover:text-white hover:bg-green-400 p-1">
                      ${"{"}Solana{"}"}
                    </Link>
                  </p>
                  <p>
                    DSA && leetcode{" "}
                    <Link href="https://leetcode.com" className="text-green-400 hover:text-white hover:bg-green-400 p-1">
                      ${"{"}lt{"}"}
                    </Link>
                  </p>
                  <p>
                    Mobile Developer{" "}
                    <Link href="https://reactnative.dev" className="text-green-400 hover:text-white hover:bg-green-400 p-1">
                      ${"{"}Native{"}"}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1">~ about</h2>
            <div className="space-y-4 text-sm">
              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-14">2024</h3>
                <p>joined college</p>
                <p>started web development with daily logs on twitter</p>
                <p>dsa and 100+ leetcode ques</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-14">2025</h3>
                <p>started learning about web3</p>
                <p>learning mobile dev {"{ react-native }"}</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1">~ social_links</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="https://github.com/waliilaw" className="text-green-400 hover:text-white hover:bg-green-400 p-1">
                Github
              </Link>
              <Link href="https://x.com/Waliilaww" className="text-green-400 hover:text-white hover:bg-green-400 p-1">
                Twitter
              </Link>
              <Link href="https://www.linkedin.com/in/humaidwali20" className="text-green-400 hover:text-white hover:bg-green-400 p-1">
                LinkedIn
              </Link>
              <Link href="https://www.instagram.com/waliilaww" className="text-green-400 hover:text-white hover:bg-green-400 p-1">
                Instagram
              </Link>
            </div>
            <div className="relative bottom-0 pt-2 text-center text-green-900/70">
        @terminal by <span className="text-green-400/70 hover:bg-green-400 hover:text-white p-1">wali</span>
      </div>
          </section>
          <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1">~ social_links</h2>
            <div className="flex flex-wrap gap-4 text-sm">
             
             </div>
             </section>
             
          
        </div>
      </div>
     
    </main>
  )
}

