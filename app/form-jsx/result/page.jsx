

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ResultJSX() {
    const params = useSearchParams();
    const router = useRouter();

    const nama = params.get("nama") || "";
    const email = params.get("email") || "";
    const password = params.get("password") || "";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
                <h1 className="text-2xl font-bold text-purple-700 mb-6">
                    Hasil Registrasi
                </h1>

                {/* Data hasil */}
                <div className="space-y-5 text-left">
                    <div>
                        <p className="text-sm font-semibold text-gray-700">Nama Lengkap</p>
                        <p className="text-base font-medium text-gray-900 mt-1">{nama}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-700">Email</p>
                        <p className="text-base font-medium text-gray-900 mt-1">{email}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-700">Password</p>
                        <p className="text-base font-medium text-gray-900 mt-1">{password}</p>
                    </div>
                </div>

                {/* Tombol aksi */}
                <div className="mt-8 space-y-3">
                    <button
                        onClick={() => router.back()}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
                    >
                        Edit Data
                    </button>

                    <Link
                        href="/"
                        className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg shadow-sm transition"
                    >
                        Kembali ke Form Awal
                    </Link>
                </div>
            </div>
        </div>
    );
}
