# 🚀 React TextFormField Component

## 📝 Descripción

Este es un componente de entrada de texto inspirado en el **TextFormField de Flutter**, diseñado para ser reutilizable en proyectos de **React con Tailwind CSS**.

Incluye compatibilidad con iconos a la izquierda y derecha, cambios de color en `focus`, soporte para deshabilitar el campo y personalización de estilos con `clsx` y `tailwind-merge`.

## 🚀 Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

- **Node.js** (versión recomendada: 18 o superior) 👉 [Descargar Node.js](https://nodejs.org/)
- **pnpm** (si no lo tienes, instálalo con el siguiente comando)

  ```sh
  npm install -g pnpm
  ```

## 📦 Instalación

Clona el repositorio y luego instala las dependencias:

```sh
git clone https://github.com/JorgeAntonio/component-js.git
cd component-js
pnpm install
```

## 🎨 Configuración de Tailwind CSS

Si Tailwind no está configurado, instálalo con:

```sh
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Asegúrate de que el archivo `tailwind.config.js` contenga:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Y en `index.css`, importa Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🔌 Instalación de dependencias adicionales

Este proyecto usa `clsx` y `tailwind-merge` para gestionar clases dinámicamente y `lucide-react` para iconos:

```sh
pnpm install clsx tailwind-merge lucide-react
```

## 🚀 Levantar el proyecto

Para iniciar el servidor de desarrollo, usa:

```sh
pnpm dev
```

El proyecto se ejecutará en [`http://localhost:5173`](http://localhost:5173) por defecto.

## ⚡ Construcción para producción

Si deseas generar los archivos optimizados para producción:

```sh
pnpm build
```

Los archivos generados se almacenarán en la carpeta `dist/`.

## 🧪 Ejecutar el servidor de producción

Después de construir el proyecto, puedes previsualizarlo con:

```sh
pnpm preview
```

Esto simula cómo se serviría en un entorno real.

## 🛠️ Linting y formateo

Para verificar el código con ESLint:

```sh
pnpm lint
```

Para formatearlo con Prettier (si está configurado):

```sh
pnpm format
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este componente o agregar nuevas funcionalidades:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama con tu mejora:
   ```sh
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y confirma los commits:
   ```sh
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube los cambios a tu repositorio:
   ```sh
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **Pull Request** en este repositorio.

---

🚀 **¡Gracias por usar este componente!** Si tienes alguna sugerencia, no dudes en abrir un **issue**.
