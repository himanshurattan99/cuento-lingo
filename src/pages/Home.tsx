import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { stories } from '../data/stories'
import { StoryCard } from '../components/StoryCard'

export const Home = () => {
    // Convert stories object map to an array for rendering
    const allStories = Object.values(stories)

    const navigate = useNavigate()

    // Track the currently selected difficulty filter
    const [filterDifficulty, setFilterDifficulty] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All')

    // Filter stories based on selection, or show all if 'All' is selected
    const filteredStories = allStories.filter((story) =>
        (filterDifficulty === 'All') ? true : story.difficulty === filterDifficulty
    )

    return (
        <main className="w-full max-w-6xl mx-auto py-12 px-4 flex-1 flex flex-col">
            {/* Page Header */}
            <div className="mb-12 text-center">
                <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900">
                    Learn Spanish with <span className="text-green-500">Stories</span>
                </h2>
                <div className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
                    Immerse yourself in short, interactive stories.
                </div>
            </div>

            {/* Difficulty Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
                {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
                    <button
                        key={level}
                        onClick={() => setFilterDifficulty(level)}
                        className={`py-2 px-6 rounded-full font-bold transition-all transform hover:-translate-y-0.5 cursor-pointer
                            ${(filterDifficulty === level) ?
                                'bg-gray-900 shadow-lg shadow-gray-200 text-white'
                                : 'bg-white border border-gray-200 hover:border-gray-400 text-gray-500'
                            }`}
                    >
                        {level}
                    </button>
                ))}
            </div>

            {/* Story Grid: Render filtered story cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStories.map((story) => (
                    <StoryCard
                        key={story.id}
                        story={story}
                        onClick={() => navigate(`/story?id=${story.id}`)}
                    />
                ))}
            </div>

            {(filteredStories.length === 0) && (
                <div className="py-20 text-xl text-center text-gray-400">
                    No stories found for this difficulty level yet.
                </div>
            )}
        </main>
    )
}