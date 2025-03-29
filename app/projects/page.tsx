'use client'
import Link from "next/link"

import { Terminal, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-green-900 p-4 pb-36 md:p-8 font-mono flex justify-center items-center">
      <div className="max-w-2xl w-full">
        <nav className="flex items-center gap-6 text-sm mb-8 ">
          <Terminal className="w-5 h-5" />
          <Link href="/" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ~/home
          </Link>
          <Link href="/stacks" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ./stacks
          </Link>
          <Link href="/projects" className="text-white bg-green-400 p-1 transition-colors">
            ./projects
          </Link>
          <Link href="/wallet" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
            ./..
          </Link>
        </nav>


        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1 ">projects</h2>
            <div className="grid gap-6">

            <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/waliilaw/miku-san-PRIVATE"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Miku-san</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">create your digital portfolio using miku-san , the authentication is done by clerk  user can choose theme upload pics  choose skills & projects</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">NextJs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Cloudinary</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Clerk</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/waliilaw/Mines"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Mines</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">A minesweeper type game which when linked with web wallet , you wager some eth for a chance for win folds of money or lose all of it (stake mines but linked with blockchain)</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">ShadCn</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Nextjs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Typescript</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/waliilaw/Imagine"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Imagine</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">An AI image generator that provides custom prompts or even take prompts from the user (intended to be the clone of PhotoAI)</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">TailwindCSS</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Nextjs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Typescript</span>
                  </div>
                </div>
              </div>


              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/waliilaw/Chaser-final"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Chaser</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">An AI based finanace management app that manages your finances by providing expenses based on categories and time</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">Nextjs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Postgres</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Django</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/waliilaw/Sneak"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Sneak</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">A chat application where users can join public chat or create/join private rooms send & receive messages in real-time {"(scalable chatting app)"}</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">Nextjs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Websockets</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Typescript</span>
                  </div>
                </div>
              </div>


              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/waliilaw/Valentino"} >
            
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Valentino</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">You enter your username and the Twitter API fetch your profile and pass it on to Gemini API which has prompt to comment on the user's Posts, PFP, username</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">Nextjs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Twitter API</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">TypeScript</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/waliilaw/Power-Rangers-FRONTEND--PUBLIC"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Red Ranger</h3>
                    <Link href="https://github.com/waliilaw/Power-Rangers-FRONTEND--PUBLIC" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">Use Twitter's API to allow users to fetch their profile details (e.g., username, profile picture) by entering their X username. This information can be used to assign a Ranger to the user</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">React</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">TypeScript</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Kinde</span>
                  </div>
                </div>
              </div>
      
          </div>
          </section>
        </div>
        
      </div>
      
    </main>
  )
}

