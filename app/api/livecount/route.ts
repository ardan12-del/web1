import { NextResponse } from "next/server"
import { votes } from "../vote/route"

export async function GET(){
  return NextResponse.json(votes)
}