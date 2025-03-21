'use client'
import Link from "next/link"
import { Terminal, Copy, Check } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Wallet() {
  // Add your wallet addresses here
  const wallets = {
    bitcoin: "bc1q8wwd07ay66qu2ewcw8ppj40nd70ykafq752f4y",  // Replace with your BTC address
    ethereum: "0x687aB56F7f89a254191Cb6496825c4E3faFB76E5", // Replace with your ETH address
    solana: "DX96jnLxyypdTJUPmmH7J5MN9acLoxuXmAReh9JbBzWd"  // Replace with your SOL address
  }

  // State to track which address was just copied
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const copyToClipboard = async (type: string, address: string) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopiedAddress(type)
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <main className="max-h-screen bg-white text-green-900 p-4 md:p-8 font-mono flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full">
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
          <Link href="/wallet" className="text-white bg-green-400 p-1 transition-colors">
            ./wallet
          </Link>
        </nav>

        <div className="space-y-8">
          <section className="space-y-4">
          <div className="flex flex-row relative ">
      <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1">~ github_contributions</h2>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-sm border border-green-100">
              <img 
                src={`https://github-contributions-api.deno.dev/waliilaw.svg?from=2024-09-2&scheme=green`}
                alt="GitHub Contributions Graph"
                className="w-full h-auto dark:invert-0"
              />
            </div>
          </section>
        {/* <Image src={'arrow.png'} width={50} height={50} className="pt-40 absolute -top-1 left-14 rotate-90" alt="arrow" /> */}
        {/* <Image src={'please.jpg'} width={250} height={10} className="border-2 border-black mt-16 rounded-full" alt="please"/> */}
      
      </div>
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1">
              wallet_address
            </h2>
            <div className="space-y-6">
              {/* Bitcoin Address */}
              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-32">~ Bitcoin</h3>
                <div 
                  className="bg-green-900/10 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-green-900/20 transition-colors"
                  onClick={() => copyToClipboard('bitcoin', wallets.bitcoin)}
                >
                  <code className="text-sm break-all">{wallets.bitcoin}</code>
                  {copiedAddress === 'bitcoin' ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Ethereum Address */}
              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-32">~ Ethereum</h3>
                <div 
                  className="bg-green-900/10 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-green-900/20 transition-colors"
                  onClick={() => copyToClipboard('ethereum', wallets.ethereum)}
                >
                  <code className="text-sm break-all">{wallets.ethereum}</code>
                  {copiedAddress === 'ethereum' ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Solana Address */}
              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-32">~ Solana</h3>
                <div 
                  className="bg-green-900/10 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-green-900/20 transition-colors"
                  onClick={() => copyToClipboard('solana', wallets.solana)}
                >
                  <code className="text-sm break-all">{wallets.solana}</code>
                  {copiedAddress === 'solana' ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    
      {/* <div className="mt-3 text-black hover:bg-green-400 hover:text-white p-1">Be kind</div> */}
    </main>
  )
}