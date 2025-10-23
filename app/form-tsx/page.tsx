"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface FormData {
    nama: string;
    email: string;
    password: string;
}

export default function FormRegistrasiTSX() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        nama: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // reset error saat user ngetik lagi
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const { nama, email, password } = formData;

        // Validasi kosong
        if (!nama || !email || !password) {
            setError("Semua kolom wajib diisi!");
            return;
        }

        // Validasi nama tidak boleh mengandung angka
        if (/\d/.test(nama)) {
            setError("Nama tidak boleh mengandung angka!");
            return;
        }

        // Validasi email harus mengandung '@'
        if (!email.includes("@")) {
            setError("Alamat email harus mengandung '@'!");
            return;
        }

        // Validasi password kombinasi huruf besar, kecil, angka, dan simbol
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError(
                "Password harus mengandung huruf besar, huruf kecil, angka, dan simbol!"
            );
            return;
        }

        // Jika semua valid → lanjut ke halaman result
        router.push(
            `/form-tsx/result?${new URLSearchParams(formData as Record<string, string>).toString()}`
        );


    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
                    Form Registrasi (TSX)
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                            className="w-full p-2 border border-gray-300 text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Masukkan email aktif"
                            className="w-full p-2 border border-gray-300 text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                        />
                    </div>

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
                            className="w-full p-2 border border-gray-300 text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

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
