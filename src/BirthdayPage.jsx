import { useState, useEffect } from "react"

const BirthdayPage = () => {
  const [showContent, setShowContent] = useState(false)
  const [showEnvelope, setShowEnvelope] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500)
  }, [])

  const openEnvelope = () => {
    setShowEnvelope(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
            }}
          >
            {["❤️", "🎉", "🎂", "✨", "💖", "🌸", "🥳", "💕", "🌟", "🩷", "🎈", "💗", "🎊", "⭐", "💝", "🌹", "🎁", "💓", "🪄", "✨"][i]}
          </div>
        ))}
      </div>

      {/* Sparkle trails */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full animate-sparkle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Main card */}
      {showEnvelope ? (
        <div className="relative z-10 animate-fade-in">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 max-w-lg w-full text-center border border-white/60">
            <div className="text-7xl mb-6 animate-float">💌</div>
            <h2 className="text-2xl font-bold text-rose-600 mb-4">
              A Special Message For You 💝
            </h2>
            <p className="text-gray-500 mb-8">
              You have a love message waiting for your birthday...
            </p>
            <button
              onClick={openEnvelope}
              className="px-10 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-pink-500 hover:to-rose-500 transition-all duration-300 active:scale-95 animate-pulse-soft"
            >
              📩 Open the Message
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`relative z-10 transition-all duration-1000 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Birthday greeting card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 max-w-2xl w-full text-center border border-white/60">
            {/* Decorative top */}
            <div className="flex justify-center gap-3 mb-6">
              {["🎉", "🎂", "🥳"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-4xl md:text-5xl animate-bounce-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            {/* Main title */}
            <h1
              className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 animate-glow"
              style={{
                background: "linear-gradient(135deg, #f43f5e, #e11d48, #be123c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Happy Birthday My Love ❤️
            </h1>

            <div
              className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-500 mb-6 animate-float"
              style={{ animationDuration: "3s" }}
            >
              My Love ❤️ My Life 🥰
            </div>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300" />
              <span className="text-rose-400 text-2xl">💖</span>
              <div className="h-px w-16 bg-gradient-to-r from-rose-300 to-transparent" />
            </div>

            {/* Message */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 sm:p-6 mb-8 border border-pink-200/50 shadow-inner text-left">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Happy birthday to my love, who fills my heart with love and joy.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                I am grateful for every moment we spend together, and I pray to
                God that our happiness and love last forever.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                You are the one who gives my life meaning.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                You are the reason for my happiness.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                You are the love of my heart and soul.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                I am the happiest person on earth because I have the kindest and
                most wonderful man in the world.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Happy birthday, my prince.
              </p>
              <p className="text-rose-500 font-bold text-xl">
                Love you ❤️
              </p>
            </div>

            {/* Cute counters */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { emoji: "🎂", label: "Sweet Years", value: "Forever" },
                { emoji: "💕", label: "Heart Beats", value: "For You" },
                { emoji: "🌟", label: "My Star", value: "You Are" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-b from-pink-50 to-rose-50 rounded-xl p-3 border border-pink-200/50 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.3 + 0.5}s` }}
                >
                  <div className="text-3xl mb-1">{item.emoji}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                  <div className="text-sm font-bold text-rose-500">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="text-gray-400 text-sm">
              <p>I love you today, tomorrow, and forever 💖</p>
              
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BirthdayPage
