import { BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Story } from '../types'

interface StoryCardProps {
    story: Story
    onClick: () => void
}

// Map difficulty levels to Tailwind color classes
const difficultyColors = {
    Beginner: 'bg-emerald-100 text-emerald-700',
    Intermediate: 'bg-amber-100 text-amber-700',
    Advanced: 'bg-rose-100 text-rose-700'
}

export const StoryCard = ({ story, onClick }: StoryCardProps) => {
    return (
        <motion.button
            onClick={onClick}
            whileTap={{ scale: 0.98 }} // Press down effect
            className="group w-full flex flex-col bg-white border border-gray-100 hover:border-transparent rounded-2xl shadow-sm hover:shadow-xl text-left relative transition-all duration-300 overflow-hidden cursor-pointer"
        >
            {/* Card Cover: Solid background with emoji and badges */}
            <div className={`w-full h-44 ${story.color || 'bg-indigo-400'} flex items-center justify-center relative overflow-hidden`}>
                <div className="bg-linear-to-br from-black/10 to-transparent absolute inset-0" />

                {/* Story Emoji Icon */}
                <span className="drop-shadow-lg text-6xl select-none transition-transform duration-500 group-hover:scale-110">
                    {story.emoji || '📖'}
                </span>

                {/* Difficulty Badge */}
                <div className="absolute top-3 right-3">
                    <span className={`py-1 px-3 ${difficultyColors[story.difficulty]} rounded-full backdrop-blur-sm text-xs font-bold tracking-wider`}>
                        {story.difficulty}
                    </span>
                </div>

                {/* Genre Tag */}
                {(story.genre) && (
                    <div className="absolute bottom-3 left-3">
                        <span className="py-1 px-2.5 bg-white/20 rounded-full backdrop-blur-sm text-xs font-medium text-white">
                            {story.genre}
                        </span>
                    </div>
                )}
            </div>

            {/* Card Content: Title, description, and stats */}
            <div className="p-5 flex-1 flex flex-col">
                {/* Spanish Title */}
                <h3 className="mb-0.5 text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {story.titleEs}
                </h3>

                {/* English Title */}
                <h4 className="mb-3 text-sm font-medium italic text-gray-400">
                    {story.titleEn}
                </h4>

                {/* Description Text */}
                {(story.description) && (
                    <div className="mb-4 text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {story.description}
                    </div>
                )}

                {/* Line count indicator */}
                <div className="mt-auto text-sm font-medium text-gray-400 flex items-center gap-1">
                    <BookOpen size={15} />
                    <span>{story.lines.length} lines</span>
                </div>
            </div>
        </motion.button>
    )
}