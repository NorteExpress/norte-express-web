# 🚀 PLAN DE DESARROLLO: Landing Page N.O.R.T.E. Transporte Express
**Objetivo:** Crear un escaparate web de impacto mundial ("Efecto WoooW") para la plataforma logística líder de Salta, Argentina. Diseño premium, modo oscuro elegante y alta conversión.

---

## 🤖 INSTRUCCIONES ESTRICTAS PARA EL AGENTE DE IA (ANTIGRAVITY)
Lee esto antes de proponer o modificar cualquier código:
1. **PERFIL DEL USUARIO:** El usuario NO ES PROGRAMADOR. Es el estratega y dueño del proyecto. 
2. **POLÍTICA DE CÓDIGO COMPLETO:** ESTÁ TERMINANTEMENTE PROHIBIDO ENTREGAR SNIPPETS O FRAGMENTOS DE CÓDIGO. Cada vez que modifiques un archivo, debes entregar el **ARCHIVO COMPLETO** desde la primera hasta la última línea.
3. **INSTRUCCIÓN ÚNICA:** Al entregar código, tu única frase de instrucción debe ser exactamente: *"Borra todo el contenido de [nombre_archivo] y pega este código nuevo"*.
4. **MODELOS PERMITIDOS:** Si debes sugerir conexiones de API de IA, limítate a la lista blanca: Gemini 3 Pro, Gemini 3 Flash, Gemini 2.5 Flash/Pro/Lite.
5. **BITÁCORA OBLIGATORIA:** Al finalizar cada paso de este plan, DEBES abrir y actualizar obligatoriamente el archivo `historial_de_desarrollo.md` registrando lo que se hizo y el estado actual antes de pedirle al usuario que revise.

---

## 🎨 PALETA DE COLORES OFICIAL (Tailwind v4)
* **Azul N.O.R.T.E. (Fondo/Principal):** `#1c355c`
* **Naranja N.O.R.T.E. (Acento/Acción):** `#f39200`
* **Texto Principal:** Blanco (`#ffffff`) y Tonos Gris Claro.

---

## 🗺️ PASOS DE EJECUCIÓN SECUENCIAL

### PASO 1: Configuración de Estilos Globales e Identidad (Tailwind v4)
* **Archivo a modificar:** `app/globals.css`
* **Tarea:** Inyectar las variables de color oficiales de N.O.R.T.E. utilizando la sintaxis de Tailwind v4 (`@theme`). Limpiar estilos nativos innecesarios para asegurar un fondo azul marino impecable.

### PASO 2: Layout Principal y Metadatos
* **Archivo a modificar:** `app/layout.tsx`
* **Tarea:** Configurar fuentes (Inter), color de fondo base (`bg-[#1c355c]`), y establecer los metadatos SEO de alto impacto ("Logística de Salta para el Mundo").

### PASO 3: Preparación de Assets y Navbar Premium
* **Tarea:** Verificar que el usuario haya cargado los logos en `public/images/`.
* **Archivo a crear:** `app/components/Navbar.tsx` (y conectarlo en el layout o página principal). Navegación superior vidriada (efecto glassmorphism) ultra moderna.

### PASO 4: Hero Section ("Efecto WoooW")
* **Archivo a modificar:** `app/page.tsx`
* **Tarea:** Crear la sección de impacto inicial. Gran titular, subtítulo enfocado en el apoyo al comercio local y diseño imponente que denote una fuerte inversión tecnológica.

### PASO 5: Sección de Triple Entrada (Conversión)
* **Archivo a modificar:** `app/page.tsx` (o componente dedicado).
* **Tarea:** Diseñar tres tarjetas/botones gigantes con micro-animaciones al pasar el mouse:
    1. *"Quiero Pedir"* (Curiosos/Clientes)
    2. *"Soy Comercio"* (Afiliación de locales)
    3. *"Quiero ser Rider"* (Suma de cadetes)

### PASO 6: Social Proof y Orgullo Salteño
* **Tarea:** Sección que destaque la propuesta de valor local. Uso estético de la silueta de las montañas del logo principal, combinando la fuerza logística con la identidad de la provincia.

### PASO 7: Footer Corporativo y Formulario de Contacto Temprano
* **Tarea:** Cierre de la página con enlaces de interés, un diseño limpio y un llamado a la acción para descargar las apps (actualmente al 99% de desarrollo).