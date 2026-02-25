import { useSearchParams, useNavigate } from 'react-router-dom'
import { stories } from '../data/stories'
import { StoryContainer } from '../components/StoryContainer'

export const StoryView = () => {
    const [searchParams] = useSearchParams()
    const storyId = searchParams.get('id')

    const navigate = useNavigate()

    // Find the story
    const story = (storyId) ? stories[storyId] : null

    if (!story) {
        return (
            <div className="w-full flex-1 flex flex-col items-center justify-center">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">Story not found</h2>
                <button
                    onClick={() => navigate('/')}
                    className="py-2 px-6 bg-indigo-500 rounded-full font-bold text-white transform hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                    Back to Home
                </button>
            </div>
        )
    }

    return (
        <div className="w-full flex-1 flex flex-col">
            <StoryContainer
                story={story}
                onComplete={() => navigate('/')}
                onExit={() => navigate('/')}
            />
        </div>
    )
}