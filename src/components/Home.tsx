import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  }

  return (
    <main 
      className="min-h-screen relative overflow-hidden flex items-center justify-center py-8 px-4"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-6 py-8 relative z-10 max-w-7xl">
        <div className="flex justify-center space-x-2 z-20 mb-6 md:mb-0 md:absolute md:right-4 md:top-4">
          <div className="w-8 h-8 md:w-13 md:h-12 rounded-sm">
            <img 
              src="/logo1.png" 
              alt="Logo 1" 
              className="object-contain w-full h-full p-1"
            />
          </div>
          <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full">
            <img 
              src="/logo2.png" 
              alt="Logo 2" 
              className="object-contain w-full h-full p-1" 
            />
          </div>
        </div>

        <div className="text-center">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center md:text-left"
          >
            <img 
              src="/shabach-program.png" 
              alt="Shabach! 23 Program" 
              className="mx-auto md:mx-0 max-w-md w-full h-auto"
            />
          </motion.div>

          {/* Main Image */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={slideUp}
              className="text-center mb-12"
            >
              <img 
                src="/main.png" 
                alt="Main Program Image" 
                className="mx-auto w-full h-auto"
              />
            </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={slideUp}
            className="text-white space-y-16"
          >
            {/* PART 1. EVANGELISM */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-[0.15em] uppercase">
                PART 1. EVANGELISM
              </h2>
              <div className="space-y-4">
                <ProgramItem time="5:00 - 5:05 P.M." activity="OPENING & WELCOME" />
                <ProgramItem time="5:05 - 5:10" activity="SHABACH HISTORY" />
                <ProgramItem time="5:10 - 5:15" activity="AC SONG" />
                <ProgramItem time="5:15 - 5:18" activity="OPENING PRAYER - PSTRA. MAVIC" />
                <ProgramItem time="5:18 - 5:50" activity="SET 1: EVANGELICAL SONGS" />
                <ProgramItem time="5:50 - 6:10" activity="EVANGELISTIC MESSAGE" />
                <ProgramItem time="6:10 - 6:20" activity="RESPONSORIAL & MINISTERIAL TIME" />
                <ProgramItem time="6:20 - 6:25" activity="BAG DMT PRESENTATION" />
                <ProgramItem time="6:25 - 6:35" activity="TESTIMONY" />
              </div>
            </div>

            {/* PART 2. EDIFICATION */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-[0.15em] uppercase">
                PART 2. EDIFICATION
              </h2>
              <div className="space-y-4">
                <ProgramItem time="6:35 - 7:10" activity="SET 2: EDIFICATION SONGS" />
                <ProgramItem time="7:10 - 7:15" activity="YMD PRESENTATION" />
              </div>
            </div>

            {/* PART 3. EXALTATION */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-[0.15em] uppercase">
                PART 3. EXALTATION
              </h2>
              <div className="space-y-4">
                <ProgramItem time="7:15 - 7:35" activity="SET 3: EXALTATION SONGS PT. 1" />
                <ProgramItem time="7:35 - 7:45" activity="RAFFLE" />
                <ProgramItem time="7:45 - 7:50" activity="CLOSING REMARKS - MS. MISTY GLORIA" />
                <ProgramItem time="7:50 - 8:10" activity="SET 4: EXALTATION SONGS PT. 2" />
                <ProgramItem time="8:10 - 8:15" activity="CLOSING PRAYER - MR. MALVIN DATAN" />
                <ProgramItem time="8:15 -----" activity="PHOTO OP" />
              </div>
            </div>

            {/* Master of Ceremony */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-xl md:text-2xl font-bold tracking-[0.1em] mb-2 uppercase">
                GANESSA ROSE G. CUEVAS
              </h3>
              <p className="text-base tracking-[0.05em] font-light uppercase">
                MASTER OF THE CEREMONY
              </p>
            </div>

            {/* Bible Verse */}
            <div className="text-center text-sm md:text-base mx-auto leading-relaxed mt-12">
              <p className="tracking-wide leading-relaxed uppercase mb-4">
                FOR IT IS BY GRACE YOU HAVE BEEN SAVED, THROUGH FAITH—AND THIS 
                IS NOT FROM YOURSELVES, IT IS THE GIFT OF GOD— NOT BY WORKS, SO 
                THAT NO ONE CAN BOAST.
              </p>
              <p className="mt-4 font-semibold tracking-[0.05em] uppercase">
                EPHESIANS 2:8-9
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

interface ProgramItemProps {
  time: string
  activity: string
}

function ProgramItem({ time, activity }: ProgramItemProps) {
  return (
    <div className="flex items-start py-2">
      <div className="w-1/2 flex-shrink-0 text-base md:text-lg font-medium tracking-wide text-center pr-2">
        {time}
      </div>
      <div className="w-1/2 text-base md:text-lg tracking-wide font-light uppercase text-left pl-2">
        {activity}
      </div>
    </div>
  )
}