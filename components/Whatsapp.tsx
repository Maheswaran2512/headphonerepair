export default function Whatsapp(){
    return(
        <a href="https://wa.me/917395995717" target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50">
            <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h1l1 2h1l1-2h1l1 2h1l1-2h1l1 2h1l1-2h1l1 2h1l1-2h1l1 2h1v4H3v-4z" />
                </svg>
            </div>
        </a>
    )
}