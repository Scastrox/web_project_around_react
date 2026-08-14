# Web Project Around React

Reescritura del proyecto `Around` con **React**. La aplicación muestra el perfil de un usuario y una galería de tarjetas con lugares, con ventanas emergentes para editar el perfil, cambiar el avatar, agregar tarjetas y ver una imagen ampliada.

Esta versión parte del proyecto en JavaScript vanilla del Sprint 12 y traslada la misma interfaz y los mismos estilos BEM a una arquitectura de componentes. La lógica de servidor se incorporará en el siguiente sprint; por ahora la galería se alimenta de **datos ficticios** definidos en `Main.jsx`.

## Estado actual

Implementado:

- Interfaz dividida en componentes: `Header`, `Main`, `Footer` y sus componentes hijos.
- Ventana emergente genérica (`Popup`) reutilizable mediante `children`: un mismo marco sirve para los tres formularios y para la vista de imagen.
- Apertura de popups desde los botones de editar perfil, cambiar avatar y agregar tarjeta, controlada con el estado `popup` en `Main`.
- Vista ampliada de imagen al hacer clic en una tarjeta, con título de la foto.
- Cierre de popups con el botón, con clic en el fondo y con la tecla `Escape`.
- Renderizado de la galería a partir de un array, con `key` por `_id`.
- Estado visual del like según la propiedad `isLiked` de cada tarjeta.
- Diseño responsivo heredado del proyecto anterior.

Pendiente para el siguiente sprint:

- Conexión con la API REST (perfil, tarjetas, likes, avatar).
- Envío de los formularios y validación con mensajes de error.
- Funcionalidad de los botones de like y de eliminar tarjeta.
- Popup de confirmación al eliminar.
- Imagen del avatar, que hoy se carga desde el servidor y aún no tiene origen.

## Tecnologías

- React 19 (componentes funcionales, `useState`, `useEffect`)
- Vite como herramienta de desarrollo y empaquetado
- CSS3 con metodología BEM, reutilizado del proyecto anterior
- ESLint con configuración plana (`eslint.config.js`)

## Estructura

```
src/
├── main.jsx                  punto de entrada: monta App y carga los estilos
├── index.css                 importa vendor/ y blocks/
├── components/
│   ├── App.jsx               estructura de la página
│   ├── Header/
│   ├── Footer/
│   └── Main/
│       ├── Main.jsx          estado de los popups y datos ficticios
│       └── components/
│           ├── Card/         tarjeta de la galería
│           └── Popup/
│               ├── Popup.jsx marco genérico de la ventana emergente
│               ├── ImagePopup/
│               └── form/     NewCard, EditProfile, EditAvatar
├── blocks/                   estilos BEM por bloque
├── images/                   iconos y logo
└── vendor/                   normalize.css y fuentes Inter
```

El componente `Popup` decide qué renderizar según reciba o no la prop `title`: con título muestra el contenedor de formulario y el encabezado; sin título usa el contenedor de imagen. Los componentes que van dentro se pasan como `children`.

## Instalación y uso

```bash
npm install
npm run dev
```

El servidor de desarrollo se abre en `http://localhost:3000`.

Otros comandos:

```bash
npm run build     # genera la versión de producción en dist/
npm run preview   # sirve la versión de producción
npm run lint      # revisa el código con ESLint
```

## Proyecto anterior

Versión en JavaScript vanilla, con la API ya integrada:

[https://scastrox.github.io/web_project_around/src/](https://scastrox.github.io/web_project_around/src/)
