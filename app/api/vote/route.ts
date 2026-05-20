import { NextResponse } from "next/server"

let votes = [0,0,0]
const usedTokens = new Set<string>()

export async function POST(req:Request){
  const body = await req.json()

  if(!body.token){
    return NextResponse.json({
      success:false,
      message:"Token wajib diisi"
    })
  }

  if(usedTokens.has(body.token)){
    return NextResponse.json({
      success:false,
      message:"Token sudah digunakan"
    })
  }

  votes[body.paslon - 1] += 1
  usedTokens.add(body.token)

  return NextResponse.json({
    success:true
  })
}

export { votes }