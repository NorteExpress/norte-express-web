# 📖 HISTORIAL DE DESARROLLO Y BITÁCORA DE ESTADO
**Proyecto:** Landing Page N.O.R.T.E. Transporte Express
**Propósito:** Mantener la persistencia del estado del proyecto para evitar repetir tareas si la sesión se cierra o se reinicia el entorno de IA.

---

## Checkpoint Actual
* **Fecha de inicio:** Mayo 2026
* **Estado Global:** Hub de Distribución Operativo (Listo para Producción).
* **Paso Activo según Plan:** Despliegue en Vercel y vinculación del dominio norteexpress.com.ar.
* **REGLA DE DESPLIEGUE (IMPORTANTE):** El flujo de despliegue es exclusivamente automático mediante la subida de cambios a la rama `main` en GitHub. Está prohibido usar comandos de Vercel CLI en la consola local para desplegar de forma directa.

---

## Registro de Actividades

- [x] **Inicialización del Proyecto:** Se ejecutó `create-next-app` con Next.js (App Router), TypeScript y Tailwind CSS.
- [x] **Estructura de Control:** Se crearon los archivos `PLAN_DE_DESARROLLO.md` e `historial_de_desarrollo.md` para guiar a los agentes de Antigravity.
- [x] **Corrección de Entorno:** Se eliminó configuración obsoleta de Tailwind (`tailwind.config.ts`) para operar de forma nativa bajo Tailwind v4.
- [x] **PASO 1:** Configurar colores oficiales en `app/globals.css`. *(Completado: inyección de variables de color con `@theme` y limpieza de estilos)*
- [x] **PASO 2:** Layout y Metadatos. *(Completado: metadatos SEO ampliados, configuración de layout)*
- [x] **PASO 3:** Navbar Premium y Assets. *(Completado: creado componente Navbar vidriado)*
- [x] **PASO 4:** Hero Section. *(Completado: creado componente Hero con Efecto WoooW)*
- [x] **PASO 5:** Triple Entrada. *(Completado: creado componente TripleEntrada)*
- [x] **PASO 6:** Social Proof. *(Completado: creado componente SocialProof destacando el orgullo salteño)*
- [x] **PASO 7:** Footer. *(Completado: creado componente Footer con formulario de contacto)*
- [x] **Integración Final:** Se ensamblaron todos los componentes en `app/page.tsx`.
- [x] Corrección de importaciones en `app/page.tsx`.
- [x] Integración de logos reales (`logo-app.png` y `logo-principal.png`) en Navbar y Footer.
- [x] **REVOLUCIÓN VISUAL (Fase 3):** Se reescribió `app/page.tsx` desde cero como un archivo consolidado para lograr un impacto visual inmersivo ("Efecto WoooW").
  - *Glassmorphism avanzado* en el Navbar con efectos glow.
  - *Hero Section* con degradados de texto dinámicos y sombras profundas flotantes para la app.
  - *Tarjetas de Triple Entrada* reconstruidas con `group-hover` en escala y rotación suave (`duration-700`) simulando profundidad 3D.
- [x] **Integración de Video:** Se añadió el video de paisajes de Salta como fondo dinámico en la Hero Section para maximizar el "Efecto WoooW".
- [x] **Integración de Audio:** Se añadió la pista musical "Norte Va_ Andean Cumbia RKT Fusion de 10.mp3" como fondo.
- [x] **Control de Audio y Solución de Autoplay:** Se convirtió `app/page.tsx` a un Client Component (`"use client"`) y se agregó un botón flotante para reproducir/silenciar la música, respetando las políticas de los navegadores web.
- [x] **Mejora de Autoplay:** Se integró un listener global que activa el audio automáticamente tras el primer scroll o clic del usuario en la pantalla.
- [x] **Restauración de Componentes Perdidos:** Se reincorporaron las secciones de "Social Proof" (Orgullo Salteño) y el "Footer" con diseños premium adaptados a la nueva interfaz unificada.
- [x] **Sección Quiénes Somos:** Se integró el "Manifiesto N.O.R.T.E.", posicionando la marca como un motor tecnológico y económico cien por ciento salteño.
- [x] **Corrección de Advertencias de Next.js:** Se aplicó `style={{ width: 'auto', height: 'auto' }}` en los componentes `<Image>` para resolver los mensajes de advertencia de relación de aspecto en la terminal.
- [x] **Refinamiento Premium del Manifiesto:** Se rediseñó la sección de Quiénes Somos incorporando *glassmorphism* profundo, sombras iluminadas (glow) y tipografías gigantes para un impacto de nivel mundial.
- [x] **Mini Reproductor y Encuadre de Video:** Se mejoró el encuadre del video de fondo usando `object-bottom` y se implementó un mini-reproductor de música (Play/Pausa y Volumen) para sortear los bloqueos de Autoplay de forma profesional.
- [x] **Visor de PDF Integrado:** Se cambió el enlace a una nueva pestaña por un Modal (Lightbox) inmersivo que muestra el Manifiesto como una presentación de diapositivas dentro de la misma página web, mejorando la retención de los usuarios.
- [x] **Modularización del Código:** Se dividió `app/page.tsx` en múltiples componentes dentro de `app/components/` (Navbar, Hero, TripleEntrada, QuienesSomos, SocialProof, Footer) para garantizar escalabilidad, seguridad y mantenimiento simplificado.
- [x] **Ajuste de Logos y Proporciones:** Se corrigió el desbordamiento del logo oficial en el Navbar y Footer mediante contenedores relativos, y se hizo el logo secundario (app) flotante del Hero mucho más pequeño y delicado.
- [x] **Conexión a WhatsApp:** Se conectaron los botones principales (Navbar, Hero, Triple Entrada) a la API de WhatsApp con mensajes predefinidos personalizados según la intención del usuario.
- [x] **Rediseño del Hero:** Se centró todo el contenido principal del Hero Section eliminando el espacio vacío de la derecha, logrando una composición majestuosa y equilibrada.
- [x] **Ecosistema Premium:** Se rediseñaron por completo las tarjetas de servicios (Triple Entrada), escalándolas a un grid de 5 tarjetas interactivas con nuevo copywriting premium y botones de WhatsApp dedicados para cada unidad de negocio.
- [x] **Estadísticas en Tiempo Real (Realismo):** Se ajustó la lógica del SocialProof: Envíos y Comercios suben hacia el infinito a distinta velocidad, y Riders fluctúa realistamente entre 80 y 120 (conexiones/desconexiones).
- [x] **Fondo Dinámico Inmersivo:** Se implementó un carrusel de transición suave (`fade`) en el fondo del Hero mezclando dos videos (`istockphoto...mp4`, `Salta1.webm`) y tres imágenes de Salta (`salta1.jpg`, `Salta2.jpg`, `Salta3.jpg`) para resaltar la identidad local de forma cinematográfica.
- [x] **Refinamiento de Copywriting:** Se actualizó el texto del Hero para eliminar terminología interna y mantener un tono 100% profesional y corporativo.
- [x] **Sección de Descargas:** Se creó e integró el nuevo componente `Descargas.tsx` al Ecosistema Premium, con tarjetas dedicadas para descargar las apps de Comercio y Cadete, añadiendo además su acceso directo en el Navbar.
- [x] **Identidad Visual de Apps:** Se actualizaron las tarjetas de la sección "Descargas", reemplazando los íconos genéricos por los logotipos oficiales en alta calidad flotantes (`norte comercio.png` y `Norte Cadete.png`).
- [x] **Consolidación de Logotipos:** Se actualizaron todas las rutas para usar los nombres de archivo finales (`Logo Norte.png` y `Norte Delivery.png`). Se restauró el logotipo de la App en el Hero Section con un diseño asimétrico de gran tamaño y efectos de iluminación pulsante para destacar la aplicación principal.
- [x] **Limpieza de Código:** Se eliminaron los archivos obsoletos de la carpeta raíz (`TripleEntrada.tsx`, `Hero.tsx`, `Navbar.tsx`, `Footer.tsx` y `SocialProof.tsx`) para mantener el espacio de trabajo limpio y evitar confusiones.
- [x] **Corrección de Renderizado Next.js Image:** Se aplicaron clases `min-h-*` y acoplamientos absolutos en los contenedores de imágenes en `Hero`, `Descargas`, `Navbar` y `Footer` para prevenir advertencias de Next.js.
- [x] **Destacar App de Delivery en Descargas:** Se integró el logotipo oficial de `Norte Delivery.png` como la tarjeta principal de la sección Descargas. Se reemplazaron los botones de tiendas por botones de "Descarga Directa (APK)" unificados.
- [x] **Transición a Modelo 100% App:** Se eliminaron los enlaces a WhatsApp y referencias telefónicas. Todos los llamados a la acción (Call to Action) redirigen fluidamente a la sección de Descargas (`#descargas`).
- [x] **Teaser Bolsa de Trabajo:** Se agregó una leyenda en el pie de página ("Próximamente: Oportunidades Laborales").
- [x] **Interactividad del Logo Hero:** Se transformó el logotipo flotante de "Norte Delivery" del Hero en un enlace interactivo para redirigir a la sección de descargas.
- [x] **Visibilidad de Guarda Salteña:** Se aumentó la opacidad del patrón regional en `SocialProof.tsx`.
- [x] **Optimización de Renderizado (Scroll Fix):** Se cambió la posición del contenedor de fondos dinámicos en `page.tsx` de `absolute` a `fixed h-screen` para corregir bloqueos del scroll en GPUs móviles.
- [x] **Hub de Descarga Directa:** Se implementó la ruta `/descargar` con tarjetas premium para la distribución de los instaladores (`norte-cliente.apk` y `norte-rider.apk`), con guía paso a paso.
- [x] **Rediseño Premium del Hub de Descargas:** Se reescribió `app/descargar/page.tsx` con un diseño en grid de 3 tarjetas.
- [x] **Tutorial de Confianza Visual:** Se integraron las imágenes `tuto-web.png` y `Tuto-celular.png` antes de los enlaces de descarga.
- [x] **Unificación de Enlaces de Descarga al Hub:** Se modificaron todos los componentes para que apunten a `/descargar` con `<Link>`.
- [x] **Persistencia de Audio Global:** Se extrajo el reproductor a `AudioPlayer.tsx` y se integró en `app/layout.tsx`.
- [x] **Integración de Imágenes de Marketing:** Se añadieron las imágenes ilustrativas de servicios y manifiesto.
- [x] **Migración de APK Comercio a Google Drive:** Se actualizó el enlace de descarga de *N.O.R.T.E. Comercio* a un servidor externo.
- [x] **Términos y Condiciones:** Se implementó la ruta `/terminos-y-condiciones` con accesos en Navbar y Footer.
- [x] **Actualización de N.O.R.T.E. Comercio y Logo Oficial de Play Store:**
  - Se incorporó el badge oficial de Google Play Store en el Hub de Descargas con efecto grayscale.
  - Se actualizaron los enlaces de Android e Windows PC de Comercio a Google Drive.
- [x] **Rediseño Premium de Botones y Simetría de Layout (Fase 4):**
  - Se rediseñaron todos los botones de descarga incorporando doble línea de texto (Acción superior + Título destacado) y animación deslizable de brillo de luz ("shine effect") en hover.
  - Se reorganizó la disposición de los botones en Comercio, de pila vertical a grilla responsiva de dos columnas en pantallas de escritorio (`grid-cols-1 sm:grid-cols-2`).
  - Se incorporó una nota de compatibilidad en la tarjeta de Cadete para equiparar la estructura y balancear visualmente la altura de ambas tarjetas.
  - Se añadió el efecto premium de destello de luz y glow dorado al botón de acceso a descargas en la Landing Page (`app/Descargas.tsx`).

---
*Nota para el Agente: Al completar un paso, marca la casilla con una 'x', actualiza el 'Paso Activo' y añade una breve nota técnica si es necesario.*