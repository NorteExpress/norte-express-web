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

---

## Fase 2: Refinamiento
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
 - [x] **Ecosistema Premium:** Se rediseñó por completo la sección de servicios (Triple Entrada), escalándola a un grid de 5 tarjetas interactivas con nuevo copywriting premium y botones de WhatsApp dedicados para cada unidad de negocio.
- [x] **Estadísticas en Tiempo Real (Realismo):** Se ajustó la lógica del SocialProof: Envíos y Comercios suben hacia el infinito a distinta velocidad, y Riders fluctúa realistamente entre 80 y 120 (conexiones/desconexiones).
- [x] **Fondo Dinámico Inmersivo:** Se implementó un carrusel de transición suave (`fade`) en el fondo del Hero mezclando dos videos (`istockphoto...mp4`, `Salta1.webm`) y tres imágenes de Salta (`salta1.jpg`, `Salta2.jpg`, `Salta3.jpg`) para resaltar la identidad local de forma cinematográfica.
- [x] **Refinamiento de Copywriting:** Se actualizó el texto del Hero para eliminar terminología interna y mantener un tono 100% profesional y corporativo.
- [x] **Sección de Descargas:** Se creó e integró el nuevo componente `Descargas.tsx` al Ecosistema Premium, con tarjetas dedicadas para descargar las apps de Comercio y Cadete, añadiendo además su acceso directo en el Navbar.
- [x] **Identidad Visual de Apps:** Se actualizaron las tarjetas de la sección "Descargas", reemplazando los íconos genéricos por los logotipos oficiales en alta calidad flotantes (`norte comercio.png` y `Norte Cadete.png`).
- [x] **Consolidación de Logotipos:** Se actualizaron todas las rutas para usar los nombres de archivo finales (`Logo Norte.png` y `Norte Delivery.png`). Se restauró el logotipo de la App en el Hero Section con un diseño asimétrico de gran tamaño y efectos de iluminación pulsante para destacar la aplicación principal.
- [x] **Limpieza de Código:** Se eliminaron los archivos obsoletos de la carpeta raíz (`TripleEntrada.tsx`, `Hero.tsx`, `Navbar.tsx`, `Footer.tsx` y `SocialProof.tsx`) para mantener el espacio de trabajo limpio y evitar confusiones.
- [x] **Corrección de Renderizado Next.js Image:** Se aplicaron clases `min-h-*` y ajustes a posicionamiento absoluto en los contenedores de imágenes en `Hero`, `Descargas`, `Navbar` y `Footer` para prevenir que Next.js lance advertencias de `height value of 0` provocadas por colapsos momentáneos en layouts Flexbox.
- [x] **Destacar App de Delivery en Descargas:** Se integró el logotipo oficial de `Norte Delivery.png` como la tarjeta principal y más grande de la sección Descargas. Se reemplazaron los botones de tiendas (Play/App Store) por botones de "Descarga Directa (APK)" unificados.
- [x] **Transición a Modelo 100% App:** Se eliminaron todos los enlaces a la API de WhatsApp y referencias a números telefónicos en Navbar, Hero, Triple Entrada y Footer. Ahora todos los llamados a la acción (Call to Action) redirigen de forma fluida a la sección de Descargas (`#descargas`).
- [x] **Teaser Bolsa de Trabajo:** Se agregó una leyenda sutil en el pie de página ("Próximamente: Oportunidades Laborales") para anticipar el futuro servicio de contrataciones para comercios afiliados.
- [x] **Interactividad del Logo Hero:** Se transformó el logotipo flotante de "Norte Delivery" del Hero en un enlace interactivo para redirigir directamente a la sección de descargas.
- [x] **Visibilidad de Guarda Salteña:** Se aumentó significativamente la opacidad del patrón regional en `SocialProof.tsx` y se utilizaron fondos cristalinos en las tarjetas para que la identidad de Salta destaque correctamente de fondo.
- [x] **Optimización de Renderizado (Scroll Fix):** Se cambió la posición del contenedor de fondos dinámicos en `page.tsx` de `absolute` a `fixed h-screen`. Esto evita que el navegador intente estirar los videos al alto total de la página, resolviendo el colapso de la memoria GPU que dejaba la pantalla en blanco, generaba espacios muertos y bloqueaba el scroll.
- [x] **Preparación de Assets y Dominio:** Se limpiaron assets innecesarios (videos borrados) y se inició la planificación para la vinculación del dominio `.com.ar` y correos corporativos.
- [x] **Hub de Descarga Directa:** Se implementó exitosamente la ruta `/descargar` con tarjetas premium para la distribución de los instaladores (`norte-cliente.apk` y `norte-rider.apk`), incluyendo una guía de instalación segura paso a paso para Android.
- [x] **Rediseño Premium del Hub de Descargas:** Se reescribió `app/descargar/page.tsx` con un diseño en grid (3 tarjetas Glassmorphism) que incluye *N.O.R.T.E. Delivery*, *N.O.R.T.E. Cadete* y *N.O.R.T.E. Comercio*, y se reestructuró la Guía de Instalación Segura con la paleta de colores oficial.
- [x] **Tutorial de Confianza Visual:** Se integraron las imágenes `tuto-web.png` y `Tuto-celular.png` antes de los enlaces de descarga en `/descargar` de forma responsive para aumentar la confianza y seguridad del usuario.
- [x] **Unificación de Enlaces de Descarga al Hub:** Se modificaron todos los componentes (Navbar, Hero, TripleEntrada, Descargas) para que los botones y enlaces de descarga apunten directamente a la ruta `/descargar` (Hub de Descargas) en lugar de realizar descargas directas (`.apk`) o navegar a la sección anclada (`#descargas`). Se usó estrictamente el componente `<Link>` de Next.js.
- [x] **Persistencia de Audio Global:** Se extrajo toda la lógica de audio y el reproductor flotante del archivo `app/page.tsx` y se creó un nuevo componente `AudioPlayer.tsx`. Este fue integrado en `app/layout.tsx` para garantizar que la música no se corte al navegar entre la landing page y el Hub de Descargas.
- [x] **Integración de Imágenes de Marketing:** Se añadieron las 5 imágenes ilustrativas de los servicios en `app/TripleEntrada.tsx` integrándolas como banners dentro de cada tarjeta con diseño premium. Se incorporó la imagen `Tecnologia Global2.jpg` en la sección `app/QuienesSomos.tsx` como un bloque visual destacado que acompaña el manifiesto.
- [x] **Migración de APK Comercio a Google Drive:** Se actualizó el enlace de descarga de *N.O.R.T.E. Comercio* en el Hub de Descargas (`app/descargar/page.tsx`) hacia un servidor externo, agregando atributos de seguridad (`target="_blank"`, `rel="noopener noreferrer"`) y actualizando sutilmente el texto descriptivo con el tamaño estimado (~109 MB).
- [x] **Optimización de Rendimiento de Imágenes:** Se resolvió la advertencia de Next.js en `app/QuienesSomos.tsx` añadiendo la propiedad `sizes` a la imagen `Tecnologia Global2.jpg`, mejorando la carga y rendimiento de la página.
- [x] **Términos y Condiciones:** Se implementó la ruta `/terminos-y-condiciones` con el texto legal correspondiente y se agregaron los accesos en el Navbar (cabecera) y Footer (tanto en el menú de navegación como en el copyright del pie de página).
- [x] **Verificación de Tutorial y Despliegue:** Se confirmó que el paso 1 de la guía visual en la página de descargas muestra correctamente "norte-cadete.apk". Se realizó un build de prueba local exitoso y se verificó que el repositorio local está al día con la rama remota `main` en GitHub, disparando el despliegue automático en la página oficial.
- [x] **Actualización de N.O.R.T.E. Comercio y Logo Oficial de Play Store:**
  - Se descargaron los recursos originales de Google Play Store en español e inglés (`google-play-badge.png` y `google-play-badge-en.png`) para usarlos directamente en el Hub de Descargas.
  - Se reemplazó la caja SVG genérica de Play Store por el badge oficial en escala de grises con transición suave al pasar el mouse.
  - Se actualizó el enlace de descarga para Android de N.O.R.T.E. Comercio con el nuevo ID de Google Drive (`1K0ScR-Gp_Gtg70kPWQoPEoDofYUKT6ba`).
  - Se agregó el botón para descargar la versión de PC de N.O.R.T.E. Comercio apuntando al archivo ejecutable local (`/apks/norte-comercio.exe`).
  - Se modificó la nota de compatibilidad del Comercio para indicar que ya cuenta con soporte oficial para Android y Windows PC.

---
*Nota para el Agente: Al completar un paso, marca la casilla con una 'x', actualiza el 'Paso Activo' y añade una breve nota técnica si es necesario.*