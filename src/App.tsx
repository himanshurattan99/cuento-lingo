import { Routes, Route } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { Home } from './pages/Home'
import { StoryView } from './pages/StoryView'
import './App.css'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white/95 border-b border-gray-200 sticky top-0 z-10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-9 bg-green-500 rounded-xl flex items-center justify-center transform rotate-3">
              <BookOpen size={21} className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-green-600">Cuento Lingo</h1>
          </div>
        </div>
      </header>

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<StoryView />} />
      </Routes>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto p-4 text-sm text-gray-400 text-center">
          © 2026 Cuento Lingo. Practice regularly!
        </div>
      </footer>
    </div>
  )
}

export default App