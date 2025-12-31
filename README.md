# README – Pruebas Automatizadas E2E Demoblaze

**Autor:** Pablo Suntaxi
**Fecha:** 13/12/2025

---

## 1. Descripción

Este proyecto contiene la implementación de pruebas automatizadas sobre la aplicación web
[https://www.demoblaze.com](https://www.demoblaze.com), desarrolladas utilizando **Cypress.io**.

El proyecto incluye la resolución de **dos ejercicios**:

* **Ejercicio 1:** Prueba funcional automatizada End-to-End (E2E) del flujo de compra web.

Para esta implementación se utilizó Cypress.io, por lo que los criterios asociados a otros
frameworks como **Serenity BDD** o **Cucumber** (features, scenario outline, reportes Serenity)
no aplican para esta solución.

---

## 2. Ejercicio 1 – Pruebas E2E (Web)

La prueba E2E automatiza el flujo completo de compra en la aplicación Demoblaze, incluyendo:

* Agregar dos productos al carrito
* Visualizar el carrito de compras
* Completar el formulario de compra
* Finalizar la compra y validar el mensaje de confirmación

El archivo de prueba correspondiente es:

```
cypress/e2e/compra.cy.js
```

---

## 3. Requisitos previos

* Node.js (versión LTS recomendada)
* npm
* Navegador Google Chrome (opcional, para ejecución interactiva)

---

## 4. Instalación

1. Descomprimir el archivo `.zip` del proyecto.
2. Abrir una terminal en la raíz del proyecto.
3. Instalar las dependencias ejecutando:

```bash
npm install
```

---

## 5. Ejecución de las pruebas

### Ejecutar todas las pruebas en modo headless:

```bash
npx cypress run
```

### Ejecutar en modo interactivo:

```bash
npx cypress open
```

Luego seleccionar el archivo de prueba deseado.

---

## 6. Framework utilizado

* Cypress.io versión **15.7.1**

---

## 7. Evidencias

Las evidencias de ejecución (screenshots) se generan automáticamente en caso de fallos y se
almacenan en la ruta:

```
cypress/screenshots
```

---

## 8. Documentación adicional

Las conclusiones y hallazgos de cada ejercicio se encuentran documentados en los siguientes
archivos:

* `Conclusiones Ejercicio de Automatización E2E.txt`
