"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormData {
    nama: string;
    email: string;
    password: string;
}

interface FormErrors {
    nama?: string;
    email?: string;
    password?: string;
}

export default function FormRegistrasiTSX() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        nama: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Reset error per field
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newErrors: FormErrors = {};

        // ✅ VALIDASI NAMA
        if (!formData.nama.trim()) {
            newErrors.nama = "Nama wajib diisi";
        } else if (/\d/.test(formData.nama)) {
            newErrors.nama = "Nama tidak boleh mengandung angka";
        }

        // ✅ VALIDASI EMAIL
        if (!formData.email.trim()) {
            newErrors.email = "Email wajib diisi";
        } else if (!formData.email.includes("@")) {
            newErrors.email = "Alamat email harus mengandung '@'";
        }

        // ✅ VALIDASI PASSWORD
        if (!formData.password.trim()) {
            newErrors.password = "Password wajib diisi";
        } else {
            const strongPasswordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (!strongPasswordRegex.test(formData.password)) {
                newErrors.password =
                    "Password harus kombinasi huruf besar, kecil, angka, dan simbol";
            }
        }

        setErrors(newErrors);

        // Kalau tidak ada error, lanjut ke halaman result
        if (Object.keys(newErrors).length === 0) {
            router.push(`/form-tsx/result?${new URLSearchParams(formData).toString()}`)

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-purple-600 transition mb-4"
                >
                    ←
                </Link>
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
                    Form Registrasi (TSX)
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* NAMA */}
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-700">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            placeholder="Masukkan nama lengkap"
                            className={`w-full p-2 border rounded-lg focus:ring-2 outline-none ${errors.nama
                                    ? "border-red-500 focus:ring-red-300"
                                    : "border-gray-300 focus:ring-purple-400"
                                } text-gray-900 placeholder-gray-400`}
                        />
                        {errors.nama && (
                            <p className="text-red-500 text-xs mt-1">{errors.nama}</p>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Masukkan email aktif"
                            className={`w-full p-2 border rounded-lg focus:ring-2 outline-none ${errors.email
                                    ? "border-red-500 focus:ring-red-300"
                                    : "border-gray-300 focus:ring-purple-400"
                                } text-gray-900 placeholder-gray-400`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Masukkan password"
                            className={`w-full p-2 border rounded-lg focus:ring-2 outline-none ${errors.password
                                    ? "border-red-500 focus:ring-red-300"
                                    : "border-gray-300 focus:ring-purple-400"
                                } text-gray-900 placeholder-gray-400`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90"
                    >
                        Daftar Sekarang
                    </button>
                </form>
            </div>
        </div>
    );
}
