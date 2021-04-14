import React, { useEffect } from "react"
import Seo from "../components/Seo"
import Terminal from "../components/Terminal"

const setViewHeight = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// markup
const IndexPage = () => {

  useEffect(() => {
    setViewHeight()
    window.addEventListener('resize', () => {
      setViewHeight()
    })
  }, []);
  
  return (
    <main className="bg-gray-900">
      <Seo title="Homepage" />
      <div className="container h-screen px-6 xl:max-w-screen-lg mx-auto py-6 md:py-28">
        <Terminal />
      </div>
    </main>
  )
}

export default IndexPage
