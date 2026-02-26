import { useNavigate } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'

interface ErrorProps {
    title?: string
    message?: string
}

export const Error = ({
    title = "Oops! Something went wrong",
    message = "We couldn't find the page you were looking for. It might have been moved, deleted, or doesn't exist"
}: ErrorProps) => {
    const navigate = useNavigate()

    return (
        <main className="w-full px-4 flex-1 flex flex-col items-center justify-center">
            <div className="mb-6 drop-shadow-sm text-red-400">
                <AlertCircle size={80} />
            </div>

            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
                {title}
            </h2>

            <div className="max-w-md mb-8 text-xl text-gray-500">
                {message}
            </div>

            <button
                onClick={() => navigate('/')}
                className="py-3 px-8 bg-green-500 hover:bg-green-600 rounded-xl shadow-md shadow-green-200 text-lg font-bold text-white transform transition-all hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
            >
                Return Home
            </button>
        </main>
    )
}