import Link from 'next/link';

export const metadata = {
  title: "Política de Privacidad | N.O.R.T.E. Transporte Express",
  description: "Política de privacidad, tratamiento de datos personales y condiciones de responsabilidad de N.O.R.T.E. Transporte Express.",
};

export default function Privacidad() {
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
                    POLÍTICA DE PRIVACIDAD, TRATAMIENTO DE DATOS PERSONALES Y CONDICIONES DE RESPONSABILIDAD
                </h1>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl space-y-8 text-white/80 leading-relaxed">
                    <div className="border-b border-white/10 pb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">N.O.R.T.E. TRANSPORTE EXPRESS</h2>
                        <p><strong>Fecha de entrada en vigencia:</strong> 18 de Mayo de 2026</p>
                        <p><strong>Versión del documento:</strong> 1.0 (Aplicable al paquete de software com.norte.cliente)</p>
                    </div>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">1. MARCO LEGAL Y DECLARACIÓN DE CUMPLIMIENTO</h3>
                        <p>
                            La presente Política rige el tratamiento de los datos personales recopilados a través de la aplicación móvil N.O.R.T.E. Transporte Express (en adelante, "la Plataforma" o "la Aplicación"). Este documento ha sido redactado en estricto cumplimiento con la Ley N° 25.326 de Protección de Datos Personales de la República Argentina, su Decreto Reglamentario N° 1558/2001, y las disposiciones emanadas de la Agencia de Acceso a la Información Pública (AAIP), órgano de control de la citada ley. Al acceder, registrarse o utilizar nuestros servicios de logística, cadetería y auxilio S.O.S., el Usuario (en adelante, "el Titular de los Datos") otorga su consentimiento expreso, libre, previo e informado para el tratamiento de su información conforme a las cláusulas aquí estipuladas.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">2. TIPOLOGÍA DE DATOS RECOPILADOS</h3>
                        <p className="mb-4">Para la correcta ejecución de los servicios contratados, la Plataforma recopila información bajo las siguientes clasificaciones:</p>
                        <ul className="space-y-4 list-none">
                            <li><strong>2.1. Datos de Identificación y Contacto:</strong> Nombre completo, dirección de correo electrónico, número de teléfono móvil y credenciales de acceso encriptadas. Estos datos son proporcionados directamente por el Usuario al momento de registrarse en la Plataforma.</li>
                            <li><strong>2.2. Datos de Geolocalización y Telemetría (Recopilación Automatizada):</strong> Para viabilizar los servicios de logística on-demand y respuesta rápida S.O.S., la Aplicación requiere acceso a los datos de ubicación exacta (GPS, Wi-Fi, triangulación de antenas) del dispositivo móvil. Esta recopilación se efectúa exclusivamente cuando la Aplicación se encuentra en uso o en primer plano.</li>
                            <li><strong>2.3. Datos Transaccionales y Operativos:</strong> Historial de envíos, direcciones de origen y destino frecuentes, registros de solicitudes de auxilio (suministro de combustible o asistencia de neumáticos), y metadatos de comunicación interna entre el Usuario y el personal logístico (cadetes/conductores).</li>
                            <li><strong>2.4. Datos Técnicos y de Diagnóstico:</strong> De manera automatizada y con fines estrictamente orientados a la seguridad y optimización del software, los servidores de nuestra infraestructura (ej. Supabase, Expo) pueden registrar información técnica estándar como la dirección IP de conexión, el modelo de hardware del dispositivo móvil y la versión del sistema operativo. Estos datos no se utilizan para rastreo publicitario, sino para garantizar la estabilidad de la Aplicación y prevenir accesos fraudulentos.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">3. FINALIDAD DEL TRATAMIENTO DE DATOS</h3>
                        <p className="mb-4">Los datos personales del Titular serán tratados bajo los principios de calidad, lealtad y proporcionalidad, persiguiendo las siguientes finalidades legítimas y contractuales:</p>
                        <ul className="space-y-2 list-[upper-alpha] list-inside pl-2">
                            <li>Ejecutar y gestionar los servicios de intermediación logística, paquetería y asistencia en ruta solicitados por el Usuario.</li>
                            <li>Facilitar el enlace en tiempo real entre el Titular de los Datos y el conductor/cadete asignado a la ruta.</li>
                            <li>Procesar la trazabilidad operativa y mantener un registro histórico para soporte técnico y resolución de controversias.</li>
                            <li>Cumplir con requerimientos legales, fiscales o auditorías requeridas por las autoridades competentes.</li>
                            <li>Implementar algoritmos de prevención de fraudes y validación de identidad para proteger el ecosistema de la Plataforma.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">4. POLÍTICA DE CESIÓN Y TRANSFERENCIA INTERNACIONAL DE DATOS</h3>
                        <p className="mb-4">N.O.R.T.E. Transporte Express declara enfáticamente que NO comercializa, vende ni alquila los datos personales de sus Usuarios a terceros con fines publicitarios. La compartición de datos se limita estrictamente a "Encargados de Tratamiento" esenciales para la operación:</p>
                        <ul className="space-y-4 list-none">
                            <li><strong>4.1. Personal Logístico:</strong> Los conductores o cadetes solo recibirán la información mínima indispensable (nombre de pila, ubicación y detalles del paquete/auxilio) durante el tiempo que dure la prestación del servicio.</li>
                            <li><strong>4.2. Proveedores de Infraestructura (Cloud Computing):</strong> Los datos son almacenados y procesados en servidores de bases de datos de alta seguridad (ej. Supabase, servicios de Google). En caso de que estos servidores se encuentren en jurisdicciones extranjeras, la transferencia internacional se realiza bajo el amparo de cláusulas contractuales tipo y estándares de seguridad equiparables a los exigidos por la legislación argentina (Art. 12 Ley 25.326).</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">5. ESTÁNDARES DE SEGURIDAD Y CRIPTOGRAFÍA</h3>
                        <p>
                            La Plataforma ha adoptado medidas técnicas, administrativas y organizativas de grado corporativo para salvaguardar la confidencialidad e integridad de la información. Esto incluye protocolos de encriptación de transmisión (TLS/SSL), hashing de contraseñas, firewalls de aplicación perimetral y controles de acceso basados en el principio de menor privilegio (Zero Trust Architecture).
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">6. DERECHOS ARCO (ACCESO, RECTIFICACIÓN, ACTUALIZACIÓN Y SUPRESIÓN)</h3>
                        <p className="mb-3">
                            El Titular de los Datos posee la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto (Art. 14, inc. 3 de la Ley 25.326). Asimismo, cuenta con el derecho a solicitar la rectificación, actualización o supresión total de sus datos personales de nuestras bases de datos.
                        </p>
                        <p>
                            Para ejercer dichos derechos, el Titular debe canalizar su requerimiento formal a través del Departamento de Legales y Soporte Técnico al correo electrónico: <a href="mailto:soporte.norte.express@gmail.com" className="text-[#f39200] hover:underline">soporte.norte.express@gmail.com</a>. Las solicitudes de supresión serán procesadas en un plazo máximo de cinco (5) días hábiles, sin perjuicio del deber de retención de ciertos datos exigido por las leyes fiscales y de comercio vigentes.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">7. AVISO LEGAL DE RETENCIÓN DE DATOS</h3>
                        <p>
                            Los datos personales serán conservados únicamente por el período necesario para cumplir con las finalidades expuestas en la presente política. Una vez extinguida la relación contractual, los datos serán bloqueados o anonimizados irreversiblemente, manteniéndose únicamente aquellos registros requeridos por plazos de prescripción legal frente a eventuales responsabilidades derivadas del servicio.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">8. EXCLUSIÓN DE GARANTÍAS Y LIMITACIÓN OPERATIVA DE RESPONSABILIDAD</h3>
                        <p>
                            La Aplicación se proporciona al Usuario bajo la modalidad técnica "as is" ("tal cual es") y "as available" ("según disponibilidad"), sin garantías de ningún tipo, ya sean expresas o implícitas. N.O.R.T.E. Transporte Express no garantiza que las funciones contenidas en la Plataforma sean ininterrumpidas, libres de errores algorítmicos, demoras de sincronización, inexactitudes vectoriales de geolocalización o fallos generales de conectividad derivados de proveedores externos. El Usuario expresamente reconoce y acepta que el uso de la aplicación móvil se realiza bajo su propio riesgo técnico y operativo. En consecuencia, la firma desarrolladora no asumirá responsabilidad alguna por daños directos, indirectos, incidentales, mediatos, inmediatos, daño emergente o lucro cesante que pudiesen originarse por la falta de disponibilidad de la plataforma, fallos en el despacho logístico, demoras en las asistencias en ruta S.O.S. derivadas de factores climáticos, mecánicos, de tráfico vehicular, o situaciones tipificadas jurídicamente como caso fortuito o fuerza mayor (Art. 1730 del Código Civil y Comercial de la Nación).
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">9. CLÁUSULA DE INDEMNIDAD Y ASUNCIÓN DE RIESGO</h3>
                        <p>
                            El Usuario se compromete de manera irrevocable a defender, indemnizar y mantener indemne a N.O.R.T.E. Transporte Express, sus directores, programadores, empleados y personal logístico, respecto de cualquier acción legal, reclamo administrativo, demanda civil, comercial o penal, penalidades fiscales, costos y gastos (incluyendo, sin limitación, honorarios razonables de abogados y peritos) que surjan o se deriven directamente de: 
                        </p>
                        <ul className="space-y-2 list-[upper-alpha] list-inside mt-3 pl-2">
                            <li>El uso indebido, fraudulento, negligente o malintencionado de la Aplicación por parte del Usuario;</li>
                            <li>Reclamaciones fundamentadas en falsas expectativas de rendimiento del software, demandas de carácter temerario o ficticio, o intentos de manipulación de los sistemas de auxilio y cadetería;</li>
                            <li>Cualquier violación por parte del Usuario a los términos legales del presente documento o normativas locales vigentes.</li>
                        </ul>
                        <p className="mt-3">
                            La aceptación tácita de esta cláusula constituye un requisito <em>sine qua non</em> y un blindaje de exoneración absoluta frente a litigios infundados o de mala fe orientados a la obtención de resarcimientos económicos abusivos.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">10. JURISDICCIÓN Y LEY APLICABLE</h3>
                        <p>
                            Para cualquier controversia que pudiera derivarse de la interpretación, validez o ejecución de la presente Política y sus condiciones asociadas, las partes se someten voluntariamente a la jurisdicción exclusiva de los Tribunales Ordinarios de la Ciudad de Salta, Provincia de Salta, República Argentina, renunciando de forma expresa a cualquier otro fuero o jurisdicción que pudiera corresponderles por su domicilio presente o futuro (incluyendo el Fuero Federal).
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#f39200] mb-3">11. DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES</h3>
                        <p>
                            Se hace saber que la AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por el incumplimiento de las normas vigentes en materia de protección de datos personales.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}