import Link from 'next/link';

export const metadata = {
  title: "Términos y Condiciones | N.O.R.T.E. Transporte Express",
  description: "Términos y Condiciones de Servicio de N.O.R.T.E. Transporte Express.",
};

export default function TerminosYCondiciones() {
    return (
        <div className="min-h-screen bg-[#1c355c] text-white font-sans selection:bg-[#f39200] selection:text-white">
            {/* Navbar / Botón Volver */}
            <div className="p-6 max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-[#f39200] transition-colors font-medium backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver al inicio
                </Link>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight drop-shadow-lg text-center">
                    TÉRMINOS Y CONDICIONES DE SERVICIO
                </h1>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl space-y-8 text-white/80 leading-relaxed">
                    <div className="border-b border-white/10 pb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">N.O.R.T.E. TRANSPORTE EXPRESS</h2>
                        <p><strong>Fecha de entrada en vigencia:</strong> 19 de Mayo de 2026</p>
                        <p><strong>Versión del documento:</strong> 1.0 (Aplicable al paquete de software com.norte.cliente)</p>
                    </div>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">1. RELACIÓN CONTRACTUAL Y ACEPTACIÓN DE LOS TÉRMINOS</h3>
                        <p className="mb-4">
                            Los presentes Términos y Condiciones de Servicio (en adelante, los "Términos") regulan el acceso y uso que cualquier persona física o jurídica (en adelante, el "Usuario" o "Cliente") haga de la aplicación móvil N.O.R.T.E. Transporte Express, su software, soporte técnico y servicios logísticos asociados (en adelante, la "Plataforma").
                        </p>
                        <p>
                            Al registrarse, acceder o utilizar las funciones de intermediación logística, paquetería, mensajería on-demand y auxilio S.O.S. provistos por la Plataforma, el Usuario declara bajo juramento ser mayor de edad, poseer capacidad legal para contratar según las leyes de la República Argentina y manifiesta su aceptación expresa, vinculante y sin reservas de la totalidad de las cláusulas aquí estipuladas. La aceptación de estos Términos constituye un requisito obligatorio e indispensable para la generación de cualquier orden o solicitud de servicio dentro de la Plataforma. Si el Usuario no está de acuerdo con estos Términos, deberá abstenerse de utilizar la Aplicación de manera inmediata.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">2. NATURALEZA DE LA PLATAFORMA</h3>
                        <p>
                            El Usuario reconoce y acepta que N.O.R.T.E. Transporte Express opera exclusivamente como una plataforma tecnológica de intermediación que conecta solicitudes de transporte, envíos y asistencia en ruta realizadas por los Clientes con una flota de conductores y cadetes independientes (en adelante, el "Personal Logístico"). Salvo especificación en contrario por acuerdos comerciales específicos, la función de la Plataforma es coordinar, trazar y optimizar el enlace operativo entre ambas partes en tiempo real.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">3. CONDICIONES OPERATIVAS DEL SERVICIO DE PAQUETERÍA Y CADETERÍA</h3>
                        <p className="mb-4">
                            El Usuario se compromete a utilizar el servicio de mensajería y envío de paquetes bajo estrictos parámetros de buena fe y legalidad, sujetándose a las siguientes reglas:
                        </p>
                        <ul className="space-y-4 list-none">
                            <li>
                                <strong>3.1. Declaración Obligatoria de Contenido y Restricciones:</strong> El Usuario garantiza de forma irrevocable que los objetos o mercancías entregados al Personal Logístico para su traslado son de procedencia lícita. Queda terminantemente prohibido el envío de:
                                <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                                    <li>Sustancias estupefacientes, psicotrópicas, materiales inflamables, explosivos, químicos peligrosos o cualquier elemento prohibido por la Ley de Estupefacientes N° 23.737 o normativas vigentes.</li>
                                    <li>Armas de fuego, municiones, armas blancas o elementos de coacción.</li>
                                    <li>Dinero en efectivo en sumas elevadas, divisas extranjeras, títulos de crédito, joyas, metales preciosos o artículos de valor económico extremo e insustituible.</li>
                                    <li>Animales vivos, restos biológicos o elementos que atenten contra la salud pública o la seguridad del Personal Logístico.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>3.2. Deber de Embalaje:</strong> El Cliente es el único responsable de acondicionar, cerrar y sellar adecuadamente el paquete antes de la entrega al cadete, asegurando que el envoltorio sea lo suficientemente resistente para soportar un traslado regular en motocicleta o vehículo de carga. La Plataforma y el Personal Logístico se reservan el derecho de rechazar de forma inmediata cualquier envío cuyo embalaje sea visiblemente deficiente, frágil o represente un riesgo de derrame o daño.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">4. POLÍTICA DE AUSENCIA DEL RECEPTOR Y "FALSO ENVÍO"</h3>
                        <p className="mb-4">
                            Para optimizar los tiempos de la flota y garantizar la sustentabilidad del ecosistema logístico, se establece la siguiente penalidad operativa:
                        </p>
                        <ul className="space-y-4 list-none">
                            <li><strong>4.1. Configuración del Falso Envío:</strong> Si el Personal Logístico arriba a la dirección de destino indicada por el Cliente y el receptor asignado no se encuentra, no responde a los llamados telefónicos a través de la app, o se niega a recibir el paquete tras un período de tolerancia máximo de diez (10) minutos de espera en el lugar, la orden se tipificará automáticamente como "Falso Envío por Ausencia".</li>
                            <li><strong>4.2. Cargos y Retención:</strong> En el supuesto de un Falso Envío, el Cliente solicitante tendrá la obligación ineludible de abonar el cien por ciento (100%) de la tarifa de viaje básico generada. El paquete será devuelto al punto de origen con un recargo equivalente al costo de retorno, o en su defecto, será retenido en la base operativa centralizada. El Cliente deberá coordinar su retiro abonando los costos adicionales administrativos y de depósito que se hubieren devengado.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">5. POLÍTICA DE CANCELACIONES DE ÓRDENES</h3>
                        <p className="mb-4">
                            El Cliente posee la facultad de desistir de una solicitud de servicio bajo las siguientes penalidades económicas basadas en el estado de la asignación:
                        </p>
                        <ul className="space-y-4 list-none">
                            <li><strong>5.1. Cancelación Sin Cargo:</strong> El Cliente podrá cancelar la orden sin penalidad alguna únicamente si la cancelación se efectúa dentro de los dos (2) minutos posteriores a la creación de la solicitud y antes de que un cadete/conductor haya aceptado el viaje.</li>
                            <li><strong>5.2. Cancelación Con Cargo:</strong> Si el Cliente cancela la solicitud una vez que el cadete ya ha aceptado el viaje y se encuentra en trayecto hacia el punto de retiro, o bien cuando ya ha arribado al punto de origen, se aplicará un cargo fijo por cancelación anticipada equivalente al costo base del servicio, destinado a compensar el tiempo y combustible invertido por el Personal Logístico. Dicho monto será debitado de los medios de pago vinculados o se acumulará como saldo deudor obligatorio en la cuenta del Usuario.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">6. CONDICIONES ESPECÍFICAS DEL SERVICIO DE ASISTENCIA S.O.S.</h3>
                        <p className="mb-4">
                            El módulo de asistencia rápida S.O.S. (suministro de emergencia de combustible, auxilio de neumáticos/pinchaduras y asistencia mecánica básica en ruta) se rige bajo las siguientes estipulaciones:
                        </p>
                        <ul className="space-y-4 list-none">
                            <li><strong>6.1. Naturaleza de Emergencia:</strong> El Usuario reconoce que este servicio constituye una asistencia logística paliativa de emergencia y no reemplaza a un servicio de grúa pesada o taller mecánico integral.</li>
                            <li><strong>6.2. Costo de Insumos:</strong> La tarifa reflejada en la Plataforma por el servicio S.O.S. corresponde exclusivamente al traslado técnico y mano de obra del Personal Logístico para la asistencia. El costo material de los insumos provistos (litros de combustible suministrados, parches, cámaras u otros repuestos) es de cargo exclusivo del Usuario y deberá ser abonado de forma complementaria al momento de la prestación, según los valores vigentes de mercado.</li>
                            <li><strong>6.3. Responsabilidad del Vehículo:</strong> El Usuario sigue siendo el único guardián jurídico y material de su vehículo durante la asistencia S.O.S. La Plataforma no asume responsabilidad alguna por fallas mecánicas preexistentes, roturas derivadas del estado de deterioro del rodado del Cliente, ni por la imposibilidad de solucionar la avería si esta requiere herramientas de alta complejidad.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">7. LIMITACIÓN DE RESPONSABILIDAD ECONÓMICA Y TOPES DE INDEMNIZACIÓN</h3>
                        <p className="mb-4">
                            En consonancia con el régimen de eximentes de responsabilidad civil:
                        </p>
                        <ul className="space-y-4 list-none">
                            <li><strong>7.1. Tope Máximo de Responsabilidad por Daño o Pérdida:</strong> En el hipotético caso de comprobarse de forma fehaciente una negligencia directa imputable a la intermediación de la Plataforma o al Personal Logístico que resulte en la pérdida, sustracción o daño material de un paquete —y siempre que el Cliente haya cumplido con el correcto embalaje y las declaraciones del artículo 3—, la responsabilidad económica máxima y total de N.O.R.T.E. Transporte Express estará limitada, bajo cláusula penal limitativa de daños, a un monto máximo equivalente a cinco (5) veces el valor de la tarifa abonada por ese envío específico. La Plataforma no responderá bajo ninguna circunstancia por lucros cesantes, daños morales, pérdidas comerciales indirectas o expectativas de ganancias del Usuario.</li>
                            <li><strong>7.2. Exoneración por Caso Fortuito o Fuerza Mayor:</strong> De conformidad con el artículo 1730 del Código Civil y Comercial de la Nación, la Plataforma y el Personal Logístico quedan completamente eximidos de responsabilidad por demoras, incumplimientos, pérdidas o accidentes originados por factores totalmente ajenos a su control razonable, tales como condiciones climáticas adversas severas, siniestros viales causados por terceros, huelgas, cortes de ruta, protestas sociales, decisiones de autoridades gubernamentales, fallas generales en las redes de telecomunicaciones o hechos calificados jurídicamente como caso fortuito o fuerza mayor.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">8. TARIFAS Y MEDIOS DE PAGO</h3>
                        <p>
                            Las tarifas aplicables a los servicios serán fijadas dinámicamente por la Plataforma considerando la distancia lineal, el horario del servicio, la demanda en tiempo real y el tipo de asistencia requerida. El Usuario se obliga a abonar los importes resultantes a través de los métodos de pago habilitados en la aplicación (efectivo, transferencias, pasarelas de pago integradas). La Plataforma se reserva el derecho de suspender o bloquear de manera definitiva el acceso a la cuenta de cualquier Usuario que registre saldos impagos, transacciones rechazadas o conductas fraudulentas relacionadas con el pago de los servicios.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">9. MODIFICACIONES DE LOS TÉRMINOS</h3>
                        <p>
                            N.O.R.T.E. Transporte Express se reserva la facultad de modificar, actualizar o reformular los presentes Términos en cualquier momento para adaptarlos a mejoras de software, regulaciones legales o variables macroeconómicas. Las modificaciones serán notificadas a través de la Aplicación. El uso continuo de la Plataforma por parte del Usuario con posterioridad a la publicación de dichas modificaciones constituirá una aceptación plena y conforme de los nuevos términos.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">10. JURISDICCIÓN Y LEY APLICABLE</h3>
                        <p>
                            Para toda controversia, reclamo, interpretación o acción legal derivada de la aplicación de estos Términos y de la prestación de los servicios de la Plataforma, las partes se someten voluntaria y exclusivamente a la jurisdicción de los Tribunales Ordinarios de la Ciudad de Salta, Provincia de Salta, República Argentina, renunciando de forma expresa a cualquier otro fuero, código procesal o jurisdicción que pudiera corresponderles por motivos de sus domicilios presentes o futuros (incluyendo el Fuero Federal). Este contrato se rige en su totalidad por las leyes de la República Argentina.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
