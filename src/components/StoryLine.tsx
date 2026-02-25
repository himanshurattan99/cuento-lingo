import type { StoryLine as StoryLineType } from '../types'

interface StoryLineProps {
    line: StoryLineType
    isRevealed: boolean
    onReveal: () => void
}

export const StoryLine = ({ line, isRevealed, onReveal }: StoryLineProps) => {
    return (
        <button
            onClick={onReveal}
            className={`w-full p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer
                ${(isRevealed) ?
                    'bg-white border border-gray-100 shadow-sm'
                    : 'bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 active:scale-[0.99]'
                }`}
        >
            <div className="flex flex-col gap-1">
                {(line.speaker) && (
                    <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                        {line.speaker}
                    </span>
                )}

                <div className={`text-lg font-medium ${(isRevealed) ? 'text-gray-900' : 'text-indigo-900'} transition-colors duration-300`}>
                    {line.es}
                </div>

                {/* Translation Area */}
                <div className={`${(isRevealed) ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'} text-sm text-gray-500 transition-all duration-500 ease-in-out overflow-hidden`}>
                    {line.en}
                </div>
            </div>
        </button>
    )
}