"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormRegistrasi() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { nama, email, password } = formData;

        // Cek kolom wajib
        if (!nama || !email || !password) {
            return "Semua kolom wajib diisi!";
        }

        // Nama tidak boleh mengandung angka
        if (/\d/.test(nama)) {
            return "Nama tidak boleh mengandung angka!";
        }

        // Email harus mengandung '@'
        if (!email.includes("@")) {
            return "Alamat email harus mengandung '@'!";
        }

        // Password kombinasi huruf besar, kecil, angka, dan simbol
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return "Password harus kombinasi huruf besar, kecil, angka, dan simbol!";
        }

        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            return;
        }

        setError("");
        router.push(
            `/form-jsx/result?${new URLSearchParams(formData).toString()}`
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
                    Form Registrasi
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
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
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
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
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
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
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
