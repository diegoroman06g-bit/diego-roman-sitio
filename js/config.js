// Aquí cambias tus datos y todo el sitio se actualiza solo.
window.SITE = {
  nombre: "Diego Román",
  whatsapp: "59164647156",
  redes: {
    instagram: "https://www.instagram.com/diegoroman_ft",
    facebook: "https://www.facebook.com/share/1Ecz28wy9d/",
    tiktok: "https://www.tiktok.com/@diegoroman_ft"
  },
  moneda: "Bs",
  catalogos: [
    {
      id: "deportiva",
      titulo: "Fotografía deportiva",
      detalle: "Partidos, torneos y eventos. Entrega digital en alta resolución.",
      fotos: ["images/deporte1.jpeg", "images/deporte2.jpeg", "images/deporte3.jpeg"],
      paquetes: [
        { nombre: "Cobertura 1 hora", precio: 300, incluye: "30 fotos editadas" },
        { nombre: "Cobertura de partido", precio: 600, incluye: "80 fotos editadas" },
        { nombre: "Torneo / día completo", precio: 1500, incluye: "Galería completa online" }
      ]
    },
    {
      id: "sesiones",
      titulo: "Sesiones fotográficas",
      detalle: "Retratos, familias, parejas, graduaciones y marcas.",
      fotos: ["images/sesion1.jpeg", "images/sesion2.jpeg", "images/sesion3.jpeg"],
      paquetes: [
        { nombre: "Sesión básica", precio: 250, incluye: "1 hora, 15 fotos editadas" },
        { nombre: "Sesión completa", precio: 450, incluye: "2 horas, 30 fotos, 2 locaciones" },
        { nombre: "Sesión premium", precio: 800, incluye: "Media jornada, 60 fotos, video corto" }
      ]
    }
  ],
  portafolio: [
    "images/foto1.jpeg", "images/foto2.jpeg", "images/foto3.jpeg",
    "images/foto4.jpeg", "images/foto5.jpeg"
  ]
};
