"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FormRegistrasi() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        nama: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // reset error field itu
    };

    const validateForm = () => {
        const newErrors = {};
        const { nama, email, password } = formData;

        // ✅ Nama wajib diisi
        if (!nama.trim()) newErrors.nama = "Nama wajib diisi";
        // ✅ Nama tidak boleh mengandung angka
        else if (/\d/.test(nama))
            newErrors.nama = "Nama tidak boleh mengandung angka";

        // ✅ Email wajib diisi
        if (!email.trim()) newErrors.email = "Email wajib diisi";
        // ✅ Email harus mengandung '@'
        else if (!email.includes("@"))
            newErrors.email = "Alamat email harus mengandung '@'.";

        // ✅ Password wajib diisi
        if (!password.trim()) newErrors.password = "Password wajib diisi";
        // ✅ Password kombinasi huruf besar, kecil, angka, dan simbol
        else {
            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
            if (!passwordRegex.test(password)) {
                newErrors.password =
                    "Password harus kombinasi huruf besar, kecil, angka, dan simbol.";
            }
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        router.push(`/form-jsx/result?${new URLSearchParams(formData).toString()}`)

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
                    Form Registrasi
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
                            className={`w-full p-2 border rounded-lg focus:ring-2 outline-none text-gray-900 placeholder-gray-400 ${errors.nama
                                    ? "border-red-500 focus:ring-red-300"
                                    : "border-gray-300 focus:ring-purple-400"
                                }`}
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
                            className={`w-full p-2 border rounded-lg focus:ring-2 outline-none text-gray-900 placeholder-gray-400 ${errors.email
                                    ? "border-red-500 focus:ring-red-300"
                                    : "border-gray-300 focus:ring-purple-400"
                                }`}
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
                            className={`w-full p-2 border rounded-lg focus:ring-2 outline-none text-gray-900 placeholder-gray-400 ${errors.password
                                    ? "border-red-500 focus:ring-red-300"
                                    : "border-gray-300 focus:ring-purple-400"
                                }`}
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
