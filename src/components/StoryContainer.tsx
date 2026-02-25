import { useState } from 'react'
import type { Story } from '../types'
import { X } from 'lucide-react'
import { ProgressBar } from './ProgressBar'
import { StoryLine } from './StoryLine'

interface StoryContainerProps {
    story: Story
    onComplete: () => void
    onExit: () => void
}

export const StoryContainer = ({ story, onComplete, onExit }: StoryContainerProps) => {
    const [currentLineIndex, setCurrentLineIndex] = useState(0)
    const [revealedLines, setRevealedLines] = useState<Set<number>>(new Set())

    // Calculate progress (how many lines have been revealed compared to total lines)
    const progress = (revealedLines.size / story.lines.length) * 100

    // Toggle the revealed state of a specific story line (translating it)
    const handleReveal = (index: number) => {
        setRevealedLines(prev => {
            const next = new Set(prev)
            if (next.has(index)) {
                next.delete(index)
            } else {
                next.add(index)
            }
            return next
        })
    }

    // Advance to the next line in the story, or finish if at the end
    const handleContinue = () => {
        if (currentLineIndex < story.lines.length - 1) {
            setCurrentLineIndex((prev) => prev + 1)
        } else {
            onComplete()
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-gray-50 flex flex-col flex-1">
            {/* Exit Button and Progress */}
            <div className="p-4 bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onExit}
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors"
                        aria-label="Exit story"
                    >
                        <X size={20} />
                    </button>
                    <div className="flex-1">
                        <ProgressBar progress={progress} />
                    </div>
                </div>
            </div>

            {/* Scrollable Story Content Area */}
            <div className="p-4 flex-1 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    {/* Render Story Emoji, Spanish Title, and English Translation */}
                    <div className="mb-6 text-center">
                        <span className="drop-shadow-lg text-6xl select-none">
                            {story.emoji || '📖'}
                        </span>
                        <h2 className="mt-4 text-2xl font-bold text-gray-800">
                            {story.titleEs}
                        </h2>
                        <h3 className="text-sm font-medium italic text-gray-400">
                            {story.titleEn}
                        </h3>
                    </div>

                    {/* Render story lines up to the current progress index */}
                    {story.lines.slice(0, currentLineIndex + 1).map((line, index) => (
                        <StoryLine
                            key={index}
                            line={line}
                            isRevealed={revealedLines.has(index)}
                            onReveal={() => handleReveal(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Continue Button */}
            <div className="p-4 bg-white border-t border-gray-200 flex justify-center sticky bottom-0 z-10">
                <button
                    onClick={handleContinue}
                    className="w-full max-w-sm py-2.5 bg-green-500 hover:bg-green-600 rounded-xl shadow-md shadow-green-200 text-base font-bold text-white transition-all duration-300 active:scale-[0.98] cursor-pointer"
                >
                    Continue
                </button>
            </div>
        </div>
    )
}