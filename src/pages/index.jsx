import * as React from "react"
import Terminal from "../components/Terminal"

// markup
const IndexPage = () => {
  return (
    <main className="bg-gray-900">
      <title>imjb</title>
      <div className="container h-screen px-6 xl:max-w-screen-lg mx-auto py-6 md:py-28">
        <Terminal />
      </div>
    </main>
  )
}

export default IndexPage
