import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-100 to-white text-gray-900 font-sans">
            <main className="flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-lg w-[90%] max-w-lg text-center space-y-8">
                <h1 className="text-3xl font-bold tracking-tight">
                    Pilih Versi Form Registrasi
                </h1>
                <p className="text-gray-600">
                    Silakan pilih apakah ingin membuka form dalam format{" "}
                    <span className="font-semibold">JavaScript (.jsx)</span> atau{" "}
                    <span className="font-semibold">TypeScript (.tsx)</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
                    {/* Tombol ke versi JSX */}
                    <Link
                        href="/form-jsx"
                        className="w-full sm:w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition text-lg font-medium"
                    >
                        Form Versi JSX
                    </Link>

                    {/* Tombol ke versi TSX */}
                    <Link
                        href="/form-tsx"
                        className="w-full sm:w-1/2 bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-xl transition text-lg font-medium"
                    >
                        Form Versi TSX
                    </Link>
                </div>

                <footer className="pt-4 text-sm text-gray-400">
                    Next.js Project by <span className="font-semibold">Blubbaeri</span> 
                </footer>
            </main>
        </div>
    );
}


