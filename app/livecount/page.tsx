"use client"

import { useEffect, useState } from "react"

export default function LiveCount(){
  const [votes,setVotes] = useState([0,0,0])

  async function load(){
    const res = await fetch("/api/livecount")
    const data = await res.json()
    setVotes(data)
  }

  useEffect(()=>{
    load()
    const interval = setInterval(load,2000)
    return ()=>clearInterval(interval)
  },[])

  const total = votes.reduce((a,b)=>a+b,0)

  return(
    <main className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Live Count
        </h1>

        {votes.map((v,i)=>(
          <div key={i} className="glass p-6 rounded-3xl mb-4">
            <div className="flex justify-between mb-2">
              <span>Paslon {i+1}</span>
              <span>{v} suara</span>
            </div>

            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600"
                style={{
                  width:`${total ? (v/total)*100 : 0}%`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}