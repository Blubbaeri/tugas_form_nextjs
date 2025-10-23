//form-tsx/page.tsx

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
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        const newErrors: any = {};
        const { nama, email, password } = formData;

        if (!nama) newErrors.nama = "Nama wajib diisi!";
        else if (/\d/.test(nama))
            newErrors.nama = "Nama tidak boleh mengandung angka!";

        if (!email) newErrors.email = "Email wajib diisi!";
        else if (!email.includes("@"))
            newErrors.email = "Alamat email harus mengandung '@'!";

        if (!password) newErrors.password = "Password wajib diisi!";
        else {
            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
            if (!passwordRegex.test(password))
                newErrors.password =
                    "Password harus kombinasi huruf besar, kecil, angka, dan simbol!";
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        router.push(
            `/form-tsx/result?${new URLSearchParams(formData).toString()}`
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-purple-600 transition mb-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 mr-1"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    Kembali
                </Link>
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
                    Form Registrasi (TSX)
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Input Nama */}
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
                            className={`w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none ${errors.nama ? "border-red-400" : "border-gray-300 text-gray-900 placeholder-gray-400"
                                }`}
                        />
                        {errors.nama && (
                            <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
                        )}
                    </div>

                    {/* Input Email */}
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
                            className={`w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none ${errors.email ? "border-red-400" : "border-gray-300 text-gray-900 placeholder-gray-400"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Input Password */}
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Masukkan password"
                                className={`w-full p-2 pr-10 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none ${errors.password ? "border-red-400" : "border-gray-300 text-gray-900 placeholder-gray-400"
                                    }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-purple-600"
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
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
