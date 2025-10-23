"use client";
import { useSearchParams } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

interface DataForm {
    nama: string | null;
    email: string | null;
    password: string | null;
}

export default function HasilRegistrasiTSX() {
    const params = useSearchParams();
    const [editMode, setEditMode] = useState<boolean>(false);
    const [data, setData] = useState<DataForm>({
        nama: params.get("nama"),
        email: params.get("email"),
        password: params.get("password"),
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setEditMode(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
                    Hasil Registrasi (TSX)
                </h1>

                {!editMode ? (
                    <div className="text-gray-700 space-y-2">
                        <p><strong>Nama Lengkap:</strong> {data.nama}</p>
                        <p><strong>Email:</strong> {data.email}</p>
                        <p><strong>Password:</strong> {data.password}</p>

                        <button
                            onClick={() => setEditMode(true)}
                            className="mt-4 w-full bg-yellow-400 text-white py-2 rounded-lg font-semibold hover:bg-yellow-500"
                        >
                            Edit Data
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            name="nama"
                            value={data.nama ?? ""}
                            onChange={handleChange}
                            className="p-2 border rounded-lg"
                        />
                        <input
                            name="email"
                            value={data.email ?? ""}
                            onChange={handleChange}
                            className="p-2 border rounded-lg"
                        />
                        <input
                            name="password"
                            value={data.password ?? ""}
                            onChange={handleChange}
                            className="p-2 border rounded-lg"
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600"
                        >
                            Simpan Perubahan
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
