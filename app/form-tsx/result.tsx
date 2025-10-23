"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function ResultTSX() {
    const params = useSearchParams();
    const router = useRouter();

    const nama = params.get("nama");
    const email = params.get("email");
    const password = params.get("password");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
                <h1 className="text-2xl font-bold text-purple-700 mb-6">
                    Hasil Registrasi
                </h1>

                <div className="text-left space-y-3 mb-6">
                    <div>
                        <p className="text-sm font-semibold text-gray-700">
                            Nama Lengkap
                        </p>
                        <p className="text-gray-900">{nama}</p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-700">
                            Email
                        </p>
                        <p className="text-gray-900">{email}</p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-700">
                            Password
                        </p>
                        <p className="text-gray-900">{password}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() =>
                            router.push(
                                `/form-tsx?page=edit&${new URLSearchParams({
                                    nama: nama || "",
                                    email: email || "",
                                    password: password || "",
                                }).toString()}`
                            )
                        }
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
                    >
                        Edit Data
                    </button>

                    <button
                        onClick={() => router.push("/form-tsx")}
                        className="border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-2 rounded-lg shadow-sm transition"
                    >
                        Kembali ke Form Awal
                    </button>
                </div>
            </div>
        </div>
    );
}
