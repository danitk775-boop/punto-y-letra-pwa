# Librería y Papelería Punto y Letra S.A.C.
### Prototipo de Transformación Digital - Avance 3 (APF3)

Este repositorio contiene el prototipo funcional de la aplicación web progresiva (PWA) diseñada para optimizar la gestión de inventario y la atención al cliente de la MYPE comercial **Punto y Letra**.

## 👥 Integrantes
* David Daniel Mantari Coa (U23312998)
* Darío Alonso Ramírez Cornelio (U22238551)

**Curso:** Innovación y Transformación Digital  
**Docente:** Enrique Gibson Chilet Nájera  
**Universidad:** Universidad Tecnológica del Perú (Lima, 2026)

## 🚀 Características del Prototipo
La aplicación simula la operación de una tienda de barrio mediante tres módulos principales:
1. **Inventario Inteligente:** Visualización del stock en tiempo real, alertas de reposición y cálculo del valor total del inventario.
2. **Registro de Ventas:** Sistema que descuenta stock automáticamente y bloquea la venta si no hay unidades disponibles (regla de negocio).
3. **Asistente de WhatsApp:** Simulación de IA conversacional que lee el stock real de la base de datos y responde a los clientes sin inventar información.
4. **Pronóstico ML:** Panel de simulación de modelo Holt-Winters para predecir la demanda (ROP).

## 🛠️ Tecnologías Utilizadas
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
* **Arquitectura:** Progressive Web App (PWA) con Service Workers para funcionamiento offline.
* **Nube (Planificado):** Supabase (PostgreSQL) para base de datos y Vercel para hosting.

## ⚙️ Cómo ejecutar el proyecto localmente
1. Clona este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. O si usas un servidor local: `python3 -m http.server 8000`

---
*Proyecto desarrollado para el curso de Innovación y Transformación Digital - UTP 2026.*