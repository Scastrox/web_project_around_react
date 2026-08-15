# Web Project Around React

Reescritura del proyecto `Around` con **React**. La aplicación muestra el perfil de un usuario y una galería de tarjetas con lugares, con ventanas emergentes para editar el perfil, cambiar el avatar, agregar tarjetas y ver una imagen ampliada.

Esta versión parte del proyecto en JavaScript vanilla del Sprint 12 y traslada la misma interfaz y los mismos estilos BEM a una arquitectura de componentes. La lógica de servidor se incorporará en el siguiente sprint; por ahora la galería se alimenta de **datos ficticios** definidos en `Main.jsx`.

## Estado actual

Implementado:

- Interfaz dividida en componentes: `Header`, `Main`, `Footer` y sus componentes hijos.
- Ventana emergente genérica (`Popup`) reutilizable mediante `children`: un mismo marco sirve para los tres formularios, la confirmación de borrado y la vista de imagen.
- Apertura de las cinco ventanas emergentes desde su botón correspondiente, controlada con el estado `popup` en `Main`.
- Vista ampliada de imagen al hacer clic en una tarjeta, con título de la foto.
- Eliminación de tarjetas con confirmación previa: la galería se guarda en el estado `galleryCards` y se filtra por `_id`.
- Cierre de popups con el botón, con clic en el fondo y con la tecla `Escape`.
- Renderizado de la galería a partir de un array, con `key` por `_id`.
- Estado visual del like según la propiedad `isLiked` de cada tarjeta.
- Diseño responsivo heredado del proyecto anterior.

Pendiente para el siguiente sprint:

- Conexión con la API REST (perfil, tarjetas, likes, avatar). El borrado de tarjetas es hoy solo en memoria: al recargar la página vuelven los datos ficticios.
- Envío de los formularios y validación con mensajes de error.
- Funcionalidad del botón de like.
- Imagen del avatar, que en el proyecto anterior venía del servidor y aún no tiene origen.

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
│   ├── Header/               Header.jsx
│   ├── Main/                 Main.jsx: estado de popups y tarjetas
│   ├── Footer/               Footer.jsx
│   ├── Card/                 Card.jsx: tarjeta de la galería
│   ├── Popup/                Popup.jsx: marco genérico de la ventana emergente
│   ├── ImagePopup/           ImagePopup.jsx: vista ampliada de la imagen
│   ├── NewCard/              NewCard.jsx: formulario de nueva tarjeta
│   ├── EditProfile/          EditProfile.jsx: formulario de perfil
│   ├── Avatar/               EditAvatar.jsx: formulario de foto de perfil
│   └── RemoveCard/           RemoveCard.jsx: confirmación de borrado
├── blocks/                   estilos BEM por bloque
├── images/                   iconos y logo
└── vendor/                   normalize.css y fuentes Inter
```

El componente `Popup` decide qué renderizar según reciba o no la prop `title`: con título muestra el contenedor de formulario y el encabezado; sin título usa el contenedor de imagen. Los componentes que van dentro se pasan como `children`.

El estado vive en `Main`: `popup` guarda el objeto `{ title, children }` de la ventana abierta, o `null` si no hay ninguna, y `galleryCards` guarda las tarjetas. Los componentes hijos no modifican esos datos: reciben funciones (`handleOpenPopup`, `handleRemoveCard`) y las llaman.

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
