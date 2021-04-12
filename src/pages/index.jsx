import * as React from "react"
import Terminal from "../components/Terminal"

// markup
const IndexPage = () => {
  return (
    <main className="bg-gray-900">
      <title>imjb</title>
      <div className="container h-screen max-w-screen-lg mx-auto py-28">
        <Terminal />
      </div>
    </main>
  )
}

export default IndexPage
