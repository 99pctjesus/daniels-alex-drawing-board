"use client"

import { useState } from "react";
import {Tldraw} from "tldraw"
import 'tldraw/tldraw.css'

export default function Home() {

  const [counter, setCounter] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
     
      <h1 className="text-xl md:text-4xl font-bold">Alexander and Daniels <br/> Drawing Board</h1>

      <div className="absolute inset-0 mb-0 mt-40 p-10">
          <Tldraw />
      </div>

      {/* <div className="size-96 bg-blue-100 m-5">

        <button className="bg-green-400 w-40 h-20 m-4" 
              onClick={() => setCounter(counter + 1)}
              >
            Counter {counter}
        </button>
        <button className="bg-red-400 w-40 h-20 m-4" 
              onClick={() => setCounter(counter - 1)}
              >
            REMOVE {counter}
        </button>

      </div> */}

    </main>
  );
}
