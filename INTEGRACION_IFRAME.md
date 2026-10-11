# Integración del chatbot personalizado en el panel

El panel debe mostrar esta aplicación, no el widget estándar de Dify:

`https://chatbot.seminarioantioquia.com/`

En la vista del panel donde irá el chat, eliminar el bloque que carga
`https://dify.mefiboset.ar/embed.min.js` y su contenedor de burbuja. Reemplazarlo
por este iframe:

```html
<section class="antqa-chatbot" aria-label="Asistente de Secretaría Académica">
  <iframe
    src="https://chatbot.seminarioantioquia.com/"
    title="Secretaría Académica ANTQA"
    loading="lazy"
    allow="clipboard-write"
  ></iframe>
</section>
```

```css
.antqa-chatbot {
  min-height: 760px;
}

.antqa-chatbot iframe {
  display: block;
  width: 100%;
  min-height: 760px;
  border: 0;
  border-radius: 12px;
  background: #fff;
}
```

La app personalizada configura su cookie con `SameSite=None; Secure` en
`config/index.ts`, requisito para que la sesión funcione desde el origen
`https://admin.antqa.test`.
