import { useNavigate } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(-1)}
            className="mb-12 border-2 px-8 py-2 bg-white shadow-md rounded flex items-center gap-2 hover:shadow-lg transition-shadow"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
            Back
        </button>);
}