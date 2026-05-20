import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="glass p-10 rounded-3xl max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">
          E-Voting OSIS
        </h1>

        <p className="opacity-70 mb-8">
          Pemilihan Ketua & Wakil Ketua OSIS
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/vote"
            className="bg-blue-600 px-6 py-3 rounded-xl"
          >
            Voting
          </Link>

          <Link
            href="/livecount"
            className="bg-white/10 px-6 py-3 rounded-xl"
          >
            Live Count
          </Link>
        </div>
      </div>
    </main>
  )
}