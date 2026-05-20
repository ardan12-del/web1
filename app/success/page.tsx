"use client"

import Confetti from "react-confetti"

export default function Success(){
  return(
    <main className="min-h-screen flex items-center justify-center">
      <Confetti />

      <div className="glass p-10 rounded-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          Terima Kasih
        </h1>

        <p>
          Suara berhasil dikirim
        </p>
      </div>
    </main>
  )
}