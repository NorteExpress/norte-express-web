# PROTOCOLO MAESTRO DE SKILLS Y DIRECTIVAS DE AGENTE
**Proyecto:** N.O.R.T.E. Transporte Express (Super-App Regional Salta)
**Stack Técnico:** Next.js (App Router), Tailwind CSS, TypeScript/JavaScript.

---

## SKILL 1: Next.js App Router Expert
* **Estructura:** Utiliza siempre la arquitectura moderna de Next.js (`app/`).
* **Navegación:** Emplea de forma estricta el componente nativo `<Link href="...">` de `next/link` para enlaces internos.
* **Descargas Estáticas:** Para forzar la descarga de archivos locales (como `.apk`), utiliza etiquetas `<a>` nativas con los atributos `download`, `target="_blank"` y `rel="noopener noreferrer"`.
* **Imágenes:** Si utilizas assets gráficos, asegúrate de que existan físicamente en la carpeta `public/images/` y evita nombres con espacios (usa siempre minúsculas y guiones).

---

## SKILL 2: Tailwind CSS & Estética Premium
* **Paleta Corporativa Obligatoria:**
  * Fondo Principal: Azul N.O.R.T.E. (`#1c355c` o clases personalizadas equivalentes).
  * Acentos y Llamados a la Acción (CTAs): Naranja N.O.R.T.E. (`#f39200`).
* **Efecto Glassmorphism (Tarjetas y Contenedores):** Utiliza fondos semitransparentes (`bg-white/5` o `bg-[#1c355c]/50`), desenfoque trasero (`backdrop-blur-xl` o `backdrop-blur-md`) y bordes tenues (`border border-white/10`).
* **Micro-interacciones:** Diseña estados de hover limpios y fluidos (`hover:-translate-y-2`, `transition-all duration-300`, e iluminación de sombras sutiles en color naranja).

---

## SKILL 3: Directiva Estricta de Entrega (Zero-Snippets)
* **Perfil del Usuario:** El usuario principal es el Estratega y Fundador del proyecto, NO un programador de sintaxis.
* **Archivos Completos:** Queda **TERMINANTEMENTE PROHIBIDO** entregar fragmentos de código (snippets), instrucciones ambiguas como "inserta esto en la función" o dejar bloques incompletos con comentarios tipo `// el resto del código va aquí`.
* **Mandato de Sobreescritura:** Cada vez que se requiera modificar un archivo, el agente **DEBE** entregar el código fuente completo desde la línea 1 hasta la final. La única instrucción válida que acompañe al código será: *"Borra todo el contenido de [nombre_archivo] y pega este código nuevo"*.
* **Verificación Interna:** Antes de emitir la respuesta, verifica rigurosamente en tu árbol lógico que todas las etiquetas JSX, paréntesis y llaves `{}` estén cerradas de manera impecable.