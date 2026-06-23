"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSessionActive, setIsSessionActive] = useState(false);

  // Verificar que el usuario tenga una sesión activa de recuperación (iniciada por el token del email)
  useEffect(() => {
    const checkSession = async () => {
      // Supabase procesa automáticamente el token de la URL (#access_token=...) al inicializarse
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsSessionActive(true);
      } else {
        // Suscribirse a cambios por si Supabase tarda unos milisegundos en procesar el hash de la URL
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
          if (session) {
            setIsSessionActive(true);
          }
        });
        return () => subscription.unsubscribe();
      }
    };
    checkSession();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      setSuccess(true);
      // Cerrar la sesión del navegador para asegurar un estado limpio
      await supabase.auth.signOut();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "No se pudo actualizar la contraseña. El enlace podría haber expirado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1c355c] px-4 relative overflow-hidden font-sans">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#f39200]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#1c355c]/50 blur-[120px] pointer-events-none border border-white/5" />

      <div className="max-w-md w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 relative z-10">
        {/* Cabecera / Identidad */}
        <div className="text-center mb-8">
          <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-4 shadow-inner">
            <svg className="w-10 h-10 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Nueva Contraseña</h1>
          <p className="text-gray-300 text-sm mt-2">
            Restablece el acceso para tu cuenta del panel administrativo de N.O.R.T.E.
          </p>
        </div>

        {/* Estado: Éxito */}
        {success ? (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex p-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">¡Contraseña Cambiada!</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tu contraseña ha sido restablecida con éxito en la base de datos de N.O.R.T.E.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-[#f39200] font-semibold text-sm">
                Puedes regresar a la aplicación (.exe) de tu PC e ingresar con tus nuevas credenciales.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Ya puedes cerrar esta pestaña del navegador.
              </p>
            </div>
          </div>
        ) : (
          /* Estado: Formulario */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mensaje de error */}
            {error && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium flex items-start gap-3">
                <span className="text-lg leading-none">⚠️</span>
                <div>{error}</div>
              </div>
            )}

            {/* Aviso informativo de enlace */}
            {!isSessionActive && !loading && (
              <div className="p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-xs leading-relaxed">
                ℹ️ Procesando enlace de recuperación... Si ingresaste a esta página de forma directa sin el correo, el cambio no podrá ser procesado.
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">Nueva Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f39200] transition-all"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">Confirmar Contraseña</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repite tu contraseña"
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f39200] transition-all"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-2xl text-white font-bold transition-all shadow-lg active:scale-[0.98] ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#f39200] hover:bg-[#d88100] hover:shadow-[#f39200]/25"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Procesando...
                </span>
              ) : (
                "RESTABLECER CONTRASEÑA"
              )}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
