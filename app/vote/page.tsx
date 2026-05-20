"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const paslon = [
  { id: 1, nama: "Paslon 1", visi: "OSIS Aktif" },
  { id: 2, nama: "Paslon 2", visi: "OSIS Kreatif" },
  { id: 3, nama: "Paslon 3", visi: "OSIS Berprestasi" },
]

export default function VotePage() {
  const [token, setToken] = useState("")
  const router = useRouter()

  async function pilih(id:number){
    const res = await fetch("/api/vote",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        token,
        paslon:id
      })
    })

    const data = await res.json()

    if(data.success){
      router.push("/success")
    }else{
      alert(data.message)
    }
  }

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Voting Ketua OSIS
        </h1>

        <input
          placeholder="Masukkan Token"
          value={token}
          onChange={(e)=>setToken(e.target.value)}
          className="w-full p-4 rounded-xl bg-white/10 mb-8"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {paslon.map((item)=>(
            <div key={item.id} className="glass p-6 rounded-3xl">
              <div className="h-40 bg-blue-500/20 rounded-2xl mb-4"></div>

              <h2 className="text-2xl font-bold">
                {item.nama}
              </h2>

              <p className="opacity-70 mt-2">
                {item.visi}
              </p>

              <button
                onClick={()=>pilih(item.id)}
                className="mt-6 w-full bg-blue-600 py-3 rounded-xl"
              >
                Pilih
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}