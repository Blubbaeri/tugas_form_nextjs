"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface FormData {
    nama: string;
    email: string;
    password: string;
}

export default function ResultPage() {
    const searchParams = useSearchParams();

    const [data, setData] = useState<FormData>({
        nama: "",
        email: "",
        password: "",
    });

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    useEffect(() => {
        setData({
            nama: searchParams.get("nama") || "",
            email: searchParams.get("email") || "",
            password: searchParams.get("password") || "",
        });
    }, [searchParams]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSave = (e: FormEvent) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
                    Hasil Registrasi
                </h1>

                {isEditing ? (
                    // === FORM EDIT ===
                    <form onSubmit={handleSave} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                name="nama"
                                value={data.nama}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-400 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-400 outline-none"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-semibold mb-1 text-gray-700">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-400 outline-none pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-purple-600"
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90"
                        >
                            Simpan Perubahan
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-100 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-200"
                        >
                            Batal
                        </button>
                    </form>
                ) : (
                    // === HASIL REGISTRASI (VERTIKAL) ===
                    <div className="flex flex-col gap-5 text-gray-800 mb-6">
                        <div>
                            <p className="font-semibold text-gray-700">Nama Lengkap</p>
                            <p className="text-gray-900">{data.nama}</p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-700">Email</p>
                            <p className="text-gray-900">{data.email}</p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-700">Password</p>
                            <p className="text-gray-900">{data.password}</p>
                        </div>

                        <button
                            onClick={() => setIsEditing(true)}
                            className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90"
                        >
                            Edit Data
                        </button>

                        <Link
                            href="/form-tsx"
                            className="text-center bg-gray-100 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-200"
                        >
                            Kembali ke Form Awal
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
