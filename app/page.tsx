"use client"

import {Tldraw} from "tldraw"
import 'tldraw/tldraw.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
     
      <h1 className="text-xl md:text-4xl font-bold">Alexander and Daniels <br/> Drawing Board</h1>

      <div className="absolute inset-0 mb-0 mt-40">
          <Tldraw />
      </div>

    </main>
  );
}
