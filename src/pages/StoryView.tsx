import { useSearchParams, useNavigate } from 'react-router-dom'
import { stories } from '../data/stories'
import { StoryContainer } from '../components/StoryContainer'
import { Error } from './Error'

export const StoryView = () => {
    const [searchParams] = useSearchParams()
    const storyId = searchParams.get('id')

    const navigate = useNavigate()

    // Find the story
    const story = (storyId) ? stories[storyId] : null

    if (!story) {
        return <Error title="Story Not Found" message="We couldn't find the story you were looking for. It may have been removed or the link is incorrect" />
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