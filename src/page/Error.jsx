import { Link } from "react-router-dom"
export default function Error() {
    return (
        <div className="flex flex-col bg-white h-80" >
            <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                alt=""
                className="object-cover w-full h-64"
            />

            <div className="flex items-center justify-center flex-1">
                <div className="max-w-xl px-4 py-8 mx-auto text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We can't find that page.
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Try searching again, or return home to start from the beginning.
                    </p>

                    <Link
                        to="/"
                        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div >
    )
}