# EXPRESSGO - Sistema de Gestión Logística

EXPRESSGO es una solución integral para la gestión de envíos, repartidores y rutas de entrega.

## Características
- **Dashboard:** Visualización de estadísticas en tiempo real.
- **Hoja de Ruta:** Mapa con trazado de rutas (Polylines).
- **Gestión CRUD:** Administración completa de Paquetes y Repartidores.
- **Buscador Dinámico:** Filtrado instantáneo en las secciones.
- **Diseño Responsivo:** Adaptado para dispositivos móviles y escritorio.

## Tecnologías Utilizadas
- **Frontend:** React, Material UI (MUI), React-Leaflet (Mapas), Axios.
- **Backend:** NestJS, Prisma ORM.
- **Base de Datos:** MongoDB Atlas.

## Instalación y Configuración

### Requisitos Previos:
    Node.js (v18 o superior)
    npm o yarn
    Una instancia de MongoDB (Local o MongoDB Atlas)

### 1. Clonar el repositorio
    ```bash
    git clone https://github.com/00nic/ExpressGo.git
    cd expressgo
    
### 2. Backend
#### Entrar a la carpeta del servidor
    cd backend

#### Instalar dependencias
    npm install

#### Configurar variables de entorno
    Crea un archivo .env y agrega tu cadena de conexión
    DATABASE_URL="mongodb+srv://USUARIO:PASSWORD@cluster.mongodb.net/expressgo?retryWrites=true&w=majority"

#### Generar el cliente de Prisma
    npx prisma generate

#### Iniciar el servidor en modo desarrollo
    npm run start:dev

### 3. Frontend

#### Desde la raíz del proyecto, entrar a la carpeta del cliente
    cd frontend

#### Instalar dependencias
    npm install

#### Iniciar la aplicación
    npm run dev