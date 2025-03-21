# 🚀 Component-js

````md
# React + Vite + Tailwind + pnpm

Este proyecto utiliza **React con Vite** para un desarrollo rápido y eficiente, junto con **Tailwind CSS** para los estilos y **pnpm** como gestor de paquetes.

## 🚀 Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

- **Node.js** (versión recomendada: 18 o superior) 👉 [Descargar Node.js](https://nodejs.org/)
- **pnpm** (si no lo tienes, instálalo con el siguiente comando)

  ```sh
  npm install -g pnpm
  ```
````

## 📦 Instalación

Clona el repositorio y luego instala las dependencias:

```sh
git clone https://github.com/JorgeAntonio/component-js.git
cd component-js
pnpm install
```

## 🎨 Configuración de Tailwind CSS

El proyecto usa **Tailwind CSS**. Si aún no está configurado, instálalo con:

```sh
pnpm install tailwindcss @tailwindcss/vite
```

Y en `index.css`, importa Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🔌 Instalación de dependencias adicionales

Este proyecto usa `clsx` y `tailwind-merge` para mejorar la gestión de clases en Tailwind, además de `lucide-react` para iconos:

```sh
pnpm install tailwind-merge
pnpm install clsx
pnpm add lucide-react
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

---
