import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Seo from "../components/Seo"
import Terminal from "../components/Terminal"

const setViewHeight = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// markup
const IndexPage = () => {

  const [show, setShow] = useState(false);

  const controls = {
    width: '100%',
    height: '100vh',
    transition: {
      width: {
        duration: 0.2
      },
      height: {
        duration: 0.2,
        delay: 0.2
      }
    }
  }

  useEffect(() => {
    setViewHeight()
    window.addEventListener('resize', () => {
      setViewHeight()
    })
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 350)
  }, [show])
  
  return (
    <main className="bg-gray-900 h-screen flex items-center justify-center">
      <Seo title="Homepage" />
      { !show && 
        <motion.div className="bg-white mx-auto" initial={{width: '0px', height: '2px'}} animate={controls}></motion.div>
      }
      { show && 
        <div className="container h-full px-6 xl:max-w-screen-lg mx-auto py-6 md:py-28">
          <Terminal />
        </div>
      }
    </main>
  )
}

export default IndexPage
