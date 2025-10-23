"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function HasilRegistrasi() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const nama = searchParams.get("nama");
    const email = searchParams.get("email");
    const password = searchParams.get("password");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
                <h1 className="text-2xl font-bold text-purple-700 mb-6">
                    Hasil Registrasi
                </h1>

                <div className="text-left space-y-2 mb-6">
                    <p>
                        <span className="font-semibold text-gray-700">Nama Lengkap:</span>{" "}
                        <span className="text-gray-800">{nama}</span>
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Email:</span>{" "}
                        <span className="text-gray-800">{email}</span>
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Password:</span>{" "}
                        <span className="text-gray-800">{password}</span>
                    </p>
                </div>

                {/* Tombol Aksi */}
                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => router.back()}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
                    >
                        Edit Data
                    </button>

                    <Link
                        href="/"
                        className="block bg-gray-100 text-gray-700 font-medium py-2 rounded-lg shadow-sm hover:bg-gray-200 transition"
                    >
                        Kembali ke Form Awal
                    </Link>
                </div>
            </div>
        </div>
    );
}
