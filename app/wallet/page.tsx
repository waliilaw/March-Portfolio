"use client"
import Link from "next/link"
import { Terminal, Copy, Check, ExternalLink } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Wallet() {
  // Add your wallet addresses here
  const wallets = {
    bitcoin: "bc1q8wwd07ay66qu2ewcw8ppj40nd70ykafq752f4y", // Replace with your BTC address
    ethereum: "0x687aB56F7f89a254191Cb6496825c4E3faFB76E5", // Replace with your ETH address
    solana: "DX96jnLxyypdTJUPmmH7J5MN9acLoxuXmAReh9JbBzWd", // Replace with your SOL address
  }

  // State to track which address was just copied
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  const copyToClipboard = async (type: string, address: string) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopiedAddress(type)
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Solana logo parameters
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(canvas.width, canvas.height) * 0.2

    // Particles array
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      decreasing: boolean
    }[] = []

    // Create particles
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const speedX = (Math.random() - 0.5) * 1
      const speedY = (Math.random() - 0.5) * 1
      const alpha = Math.random() * 0.5 + 0.1
      const decreasing = Math.random() > 0.5

      particles.push({
        x,
        y,
        size,
        speedX,
        speedY,
        color: "#4ade80",
        alpha,
        decreasing,
      })
    }

    // Animation variables
    let hue = 0
    let rotation = 0
    let scale = 0
    let fadeIn = 0

    // Animation function
    const animate = () => {
      // Clear canvas with slight transparency for trail effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update position
        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        // Update alpha
        if (p.decreasing) {
          p.alpha -= 0.005
          if (p.alpha <= 0.1) p.decreasing = false
        } else {
          p.alpha += 0.005
          if (p.alpha >= 0.5) p.decreasing = true
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74, 222, 128, ${p.alpha})`
        ctx.fill()
      }

      // Animate Solana logo
      rotation += 0.005
      if (scale < 1) scale += 0.01
      if (fadeIn < 1) fadeIn += 0.01

      // Save context state
      ctx.save()

      // Translate to center, rotate and scale
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)
      ctx.scale(scale, scale)

      // Draw Solana logo (simplified)
      ctx.globalAlpha = fadeIn

      // Main circle
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(74, 222, 128, 0.2)"
      ctx.fill()
      ctx.strokeStyle = "#4ade80"
      ctx.lineWidth = 2
      ctx.stroke()

      // Inner lines (simplified Solana logo)
      const lineLength = radius * 1.5

      // Horizontal line
      ctx.beginPath()
      ctx.moveTo(-lineLength / 2, 0)
      ctx.lineTo(lineLength / 2, 0)
      ctx.strokeStyle = "#4ade80"
      ctx.lineWidth = 3
      ctx.stroke()

      // Diagonal lines
      ctx.beginPath()
      ctx.moveTo(-lineLength / 2, -radius / 2)
      ctx.lineTo(lineLength / 2, -radius / 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(-lineLength / 2, radius / 2)
      ctx.lineTo(lineLength / 2, radius / 2)
      ctx.stroke()

      // Restore context state
      ctx.restore()

      // Pulse effect around the logo
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.5 + Math.sin(hue * 0.05) * 10, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(74, 222, 128, ${0.1 + Math.sin(hue * 0.05) * 0.1})`
      ctx.lineWidth = 2
      ctx.stroke()

      hue += 1

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup function
    return () => {
      // No specific cleanup needed for canvas animation
    }
  }, [windowSize])

  return (
    <main className="min-h-screen bg-white text-green-900 p-4 md:p-8 font-mono flex flex-col justify-start items-center overflow-x-hidden">
      <div className="max-w-2xl w-full">
        <nav className="flex items-center gap-2 sm:gap-6 text-sm mb-8 overflow-x-auto whitespace-nowrap py-2 px-1">
          <Terminal className="w-5 h-5 flex-shrink-0" />
          <Link href="/" className="hover:text-white hover:bg-green-400 p-1 transition-colors flex-shrink-0">
            ~/home
          </Link>
          <Link href="/stacks" className="hover:text-white hover:bg-green-400 p-1 transition-colors flex-shrink-0">
            ./stacks
          </Link>
          <Link href="/projects" className="hover:text-white hover:bg-green-400 p-1 transition-colors flex-shrink-0">
            ./projects
          </Link>
          <Link href="/wallet" className="text-white bg-green-400 p-1 transition-colors flex-shrink-0">
            ./..
          </Link>
        </nav>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1 inline-block">
              wallet_address
            </h2>

            <div className="relative w-full aspect-video mb-8">
              <canvas ref={canvasRef} className="w-full h-full rounded-lg border border-green-200 bg-white" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <h3 className="text-green-500 font-bold text-xl md:text-2xl mb-2">Solana</h3>
                  <p className="text-green-700 text-sm md:text-base">
                    The fast, secure, and censorship resistant blockchain
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Bitcoin Address */}
              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-32 transition-colors">
                  ~ Bitcoin
                </h3>
                <div
                  className="bg-green-900/10 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-green-900/20 transition-colors group"
                  onClick={() => copyToClipboard("bitcoin", wallets.bitcoin)}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-[#f7931a] rounded-full flex items-center justify-center text-white font-bold text-xs">
                      ₿
                    </div>
                    <code className="text-sm break-all">{wallets.bitcoin}</code>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-green-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to copy
                    </span>
                    {copiedAddress === "bitcoin" ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </div>
                </div>
                <div className="text-xs text-green-700 pl-2">
                  <span className="font-bold">Network:</span> Bitcoin Mainnet
                </div>
              </div>

              {/* Ethereum Address */}
              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-32 transition-colors">
                  ~ Ethereum
                </h3>
                <div
                  className="bg-green-900/10 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-green-900/20 transition-colors group"
                  onClick={() => copyToClipboard("ethereum", wallets.ethereum)}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-[#627eea] rounded-full flex items-center justify-center text-white font-bold text-xs">
                      Ξ
                    </div>
                    <code className="text-sm break-all">{wallets.ethereum}</code>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-green-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to copy
                    </span>
                    {copiedAddress === "ethereum" ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </div>
                </div>
                <div className="text-xs text-green-700 pl-2">
                  <span className="font-bold">Network:</span> Ethereum Mainnet
                </div>
              </div>

              {/* Solana Address */}
              <div className="space-y-2">
                <h3 className="text-green-400 hover:text-white hover:bg-green-400 p-1 w-32 transition-colors">
                  ~ Solana
                </h3>
                <div
                  className="bg-green-900/10 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-green-900/20 transition-colors group"
                  onClick={() => copyToClipboard("solana", wallets.solana)}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-[#14f195] rounded-full flex items-center justify-center text-white font-bold text-xs">
                      ◎
                    </div>
                    <code className="text-sm break-all">{wallets.solana}</code>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-green-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to copy
                    </span>
                    {copiedAddress === "solana" ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </div>
                </div>
                <div className="text-xs text-green-700 pl-2">
                  <span className="font-bold">Network:</span> Solana Mainnet
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-900/5 rounded-lg border border-green-200">
              <h3 className="text-green-400 mb-2">~ Donation Info</h3>
              <p className="text-sm text-green-900">
                Your donations help support my work in web development and blockchain projects. All contributions are
                greatly appreciated and will be used to fund new projects and learning resources.
              </p>
              <div className="mt-4 text-xs text-green-700">
                <p className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  <span>Transactions are publicly visible on the blockchain</span>
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-900/5 rounded-lg border border-green-200 hover:bg-green-900/10 transition-colors">
                <h4 className="text-green-400 mb-2 text-sm">Bitcoin Info</h4>
                <p className="text-xs text-green-900">Supports SegWit and Native SegWit (bech32) transactions</p>
              </div>
              <div className="p-4 bg-green-900/5 rounded-lg border border-green-200 hover:bg-green-900/10 transition-colors">
                <h4 className="text-green-400 mb-2 text-sm">Ethereum Info</h4>
                <p className="text-xs text-green-900">Supports ERC-20 tokens and NFTs (ERC-721, ERC-1155)</p>
              </div>
              <div className="p-4 bg-green-900/5 rounded-lg border border-green-200 hover:bg-green-900/10 transition-colors">
                <h4 className="text-green-400 mb-2 text-sm">Solana Info</h4>
                <p className="text-xs text-green-900">Supports SPL tokens and Solana NFTs</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-auto pt-8 pb-4 text-center text-green-900/70 w-full">
        @terminal by{" "}
        <span className="text-green-400/70 hover:bg-green-400 hover:text-white p-1 transition-colors">wali</span>
      </div>
    </main>
  )
}

