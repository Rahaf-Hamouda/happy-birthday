import { useState, useRef, useEffect } from "react"

const TOTAL_HEARTS = 6
const TARGET_DIGITS = "512026"

const CalendarPage = ({ onValidDate }) => {
  const [digits, setDigits] = useState([])
  const [error, setError] = useState("")
  const inputRef = useRef(null)

  const checkDate = () => {
    if (digits.join("") === TARGET_DIGITS) {
      setError("")
      onValidDate()
    } else {
      setError("💔 This date is not special... Try again")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating hearts - always animating */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl sm:text-2xl animate-float"
            style={{
              left: `${5 + (i * 7) % 90}%`,
              top: `${10 + (i * 13) % 80}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3.5 + (i % 3) * 1.5}s`,
            }}
          >
            {["❤️", "💕", "💗", "💖", "🩷", "🌸", "💝", "💓", "🌹", "✨"][i % 10]}
          </div>
        ))}
      </div>

      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 max-w-md w-full text-center relative z-10 border border-white/50">
        <div className="mb-6">
          <div className="inline-block p-4 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full mb-4 shadow-lg">
            <span className="text-5xl">💘</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Enter a Special Date
          </h1>
        </div>

        {/* Mini calendar */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-3 sm:p-6 mb-6 border border-pink-200/50 shadow-inner">
          <div className="grid grid-cols-7 gap-1 mb-4">
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <div key={day} className="text-xs font-semibold text-pink-400 py-1">
                {day}
              </div>
            ))}
            {[
              { d: 27, m: 4 },
              { d: 28, m: 4 },
              { d: 29, m: 4 },
              { d: 30, m: 4 },
              { d: 1, m: 5 },
              { d: 2, m: 5 },
              { d: 3, m: 5 },
              { d: 4, m: 5 },
              { d: 5, m: 5, highlight: true },
              { d: 6, m: 5 },
              { d: 7, m: 5 },
              { d: 8, m: 5 },
              { d: 9, m: 5 },
              { d: 10, m: 5 },
            ].map((day, i) => (
              <div
                key={i}
                className={`text-sm py-2 rounded-xl transition-all ${
                  day.highlight
                    ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold shadow-lg scale-110 animate-pulse-soft"
                    : day.m === 5
                      ? "text-gray-700 hover:bg-pink-100"
                      : "text-gray-400"
                }`}
              >
                {day.d}
              </div>
            ))}
          </div>

          <div className="text-center mb-4">
            <span className="inline-block bg-white/70 px-4 py-1 rounded-full text-rose-500 font-semibold text-sm shadow-sm border border-pink-200/50">
              May 2026
            </span>
          </div>
        </div>

        {/* Heart slots */}
        <div className="mb-6">
          <div className="text-sm text-gray-400 mb-3 font-medium">

          </div>
          <div className="flex items-center justify-center gap-2 flex-row" dir="ltr">
            {[...Array(TOTAL_HEARTS)].map((_, i) => {
              const isFilled = i < digits.length
              return (
                <div
                  key={i}
                  className={`
                    w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center
                    text-base sm:text-lg md:text-xl font-bold transition-all duration-300
                    ${
                      isFilled
                        ? "bg-gradient-to-br from-pink-400 to-rose-400 text-white scale-110 shadow-lg animate-bounce-in"
                        : "bg-pink-100/70 text-pink-300 border-2 border-pink-200/50"
                    }
                  `}
                >
                  {isFilled ? "❤️" : "🤍"}
                </div>
              )
            })}
          </div>
          {/* Mobile-friendly input */}
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={digits.join("")}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "")
              setDigits(val.split("").slice(0, TOTAL_HEARTS))
              setError("")
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                setDigits((prev) => prev.slice(0, -1))
                setError("")
              }
              if (e.key === "Enter") checkDate()
            }}
            placeholder="Type the date..."
            className="mt-4 w-full px-5 py-4 bg-pink-50 border-2 border-pink-200 rounded-2xl text-center text-lg font-medium text-gray-700 placeholder-gray-400 focus:border-rose-400 focus:outline-none focus:ring-4 focus:ring-pink-200/50 transition-all duration-300"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="text-rose-500 text-sm animate-bounce-in bg-rose-50 py-2 px-4 rounded-xl border border-rose-200 mb-4">
            {error}
          </div>
        )}

        {/* Confirm button */}
        <button
          onClick={checkDate}
          disabled={digits.length < TOTAL_HEARTS}
          className={`w-full py-4 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 active:scale-95 ${
            digits.length === TOTAL_HEARTS
              ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:shadow-xl hover:from-pink-500 hover:to-rose-500 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          ✨ Confirm Date ✨
        </button>

        <div className="mt-6 text-gray-400 text-sm">
          <span>💝 Enter the correct date and see the surprise</span>
        </div>
      </div>
    </div>
  )
}

export default CalendarPage
