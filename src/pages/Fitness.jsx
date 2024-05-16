import { useEffect, useState } from "react";
import Linea from "../components/fitness/Linea";

export default function Fitness() {
  const [exerciseType, setExerciseType] = useState("Funcional");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const exerciseTypes = ["Funcional", "Maquinaria", "Peso Libre"];
  const [showGenRoutine, setShowGenRoutine] = useState(false);
  const [numDays, setNumDays] = useState(3);
  const [misRutinas, setMisRutinas] = useState(JSON.parse(localStorage.getItem("user")).data.fitness);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const rutinasPechoFuncionales = [
    {
      name: "Pectoral 1",
      status: false,
      ejercicios: [
        {
          nombre: "Flexiones de brazos (push-ups)",
          sets: 3,
          reps: 15,
          video: "/src/assets/videos/funcionales/pectoral1/flexiones.mp4",
        },
        {
          nombre: "Flexiones diamante",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/funcionales/pectoral1/flexionesDiamante.mp4",
        },
        {
          nombre: "Flexiones con manos elevadas",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/funcionales/pectoral1/flexionesInclinadas.mp4",
        },
        {
          nombre: "Fondos de tríceps en silla",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/funcionales/pectoral1/fondosTriceps.mp4",
        },
        {
          nombre: "Flexiones con agarre cerrado",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/funcionales/pectoral1/flexionesCerrado.mp4",
        },
        {
          nombre: "Plancha con extensiones de brazos",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/funcionales/pectoral1/planchaExtBrazo.mp4",
        },
      ],
    },
    {
      name: "Pectoral 2",
      status: false,
      ejercicios: [
        {
          nombre: "Flexiones de brazos con apoyo en una sola mano",
          sets: "3",
          reps: "10 (alternando las manos)",
          video: "/src/assets/videos/funcionales/pectoral2/flexionesApoyoMano.mp4",
        },
        {
          nombre: "Flexiones con toque de hombro",
          sets: "3",
          reps: "12 (alternando los toques de hombro)",
          video: "/src/assets/videos/funcionales/pectoral2/flexionesApoyoMano.mp4",
        },
        {
          nombre: "Flexiones declinadas",
          sets: "3",
          reps: "10",
          video: "/src/assets/videos/funcionales/pectoral2/flexionesDeclinadas.mp4",
        },
        {
          nombre: "Fondos de tríceps en banco o silla",
          sets: "3",
          reps: "12",
          video: "/src/assets/videos/funcionales/pectoral2/fondosBanco.mp4",
        },
        {
          nombre: "Flexiones con apoyo en sillas",
          sets: "3",
          reps: "12 (con los codos cerca del cuerpo)",
          video: "/src/assets/videos/funcionales/pectoral1/flexionesInclinadas.mp4",
        },
        {
          nombre: "Flexiones diamante con apoyo en silla",
          sets: "3",
          reps: "10",
          video:
            "/src/assets/videos/funcionales/pectoral2/flexionesInclinadasCerradas.mp4",
        },
      ],
    },
  ];

  const rutinasEspaldaFuncionales = [
    {
      name: "Espalda 1",
      status: false,
      ejercicios: [
        {
          nombre: "Dominadas",
          sets: "3",
          reps: "8-10",
          video: "/src/assets/videos/funcionales/espalda1/dominadas.mp4",
        },
        {
          nombre: "Remo invertido en barra baja",
          sets: "3",
          reps: "12",
          video: "/src/assets/videos/funcionales/espalda1/remoInvertido.mp4",
        },
        {
          nombre: "Superman",
          sets: "3",
          reps: "10",
          video: "/src/assets/videos/funcionales/espalda1/superman.mp4",
        },
        {
          nombre: "Dominadas con agarre neutro",
          sets: "3",
          reps: "10",
          video: "/src/assets/videos/funcionales/espalda1/dominadaAgarreNeutro.mp4",
        },
        {
          nombre: "Curl de bíceps con flexión de codo (peso = silla)",
          sets: "3",
          reps: "12",
          video: "/src/assets/videos/funcionales/espalda1/curlBiceps.mp4",
        },
        {
          nombre:
            "Curl de bíceps isométrico (contracción estática)(peso = silla)",
          sets: "3",
          reps: "15 segundos",
          video: "/src/assets/videos/funcionales/espalda1/curlBiceps.mp4",
        },
      ],
    },
    {
      name: "Espalda 2",
      status: false,
      ejercicios: [
        {
          nombre: "Superman con Brazos y Piernas Extendidos",
          sets: "3",
          reps: "12-15",
          video: "/src/assets/videos/funcionales/espalda1/superman.mp4",
        },
        {
          nombre:
            "Remo Invertido en Barra Horizontal (usando una mesa resistente o barra baja)",
          sets: "3",
          reps: "12",
          video: "/src/assets/videos/funcionales/espalda1/remoInvertido.mp4",
        },
        {
          nombre: "Dominada (con agarre supino)",
          sets: "3",
          reps: "10-12",
          video: "/src/assets/videos/funcionales/espalda2/dominadaSupino.mp4",
        },
        {
          nombre: "Puente de Glúteos con una Pierna Elevada",
          sets: "3",
          reps: "15 segundos",
          video: "/src/assets/videos/funcionales/espalda2/puenteGluteo.mp4",
        },
        {
          nombre: "Curl de bíceps (con objeto pesado)",
          sets: "3",
          reps: "10 (alternando biceps)",
          video: "/src/assets/videos/funcionales/espalda1/curlBiceps.mp4",
        },
        {
          nombre: "Curl de bíceps con agarre martillo (con objeto pesado)",
          sets: "3",
          reps: "12",
          video: "/src/assets/videos/funcionales/espalda2/curlBicepsMartillo.mp4",
        },
      ],
    },
  ];

  const rutinasPiernaFuncionales = [
    {
      name: "Pierna 1",
      status: false,
      ejercicios: [
        {
          nombre: "Sentadillas",
          sets: "3",
          reps: "12",
          video: "/src/assets/videos/funcionales/pierna1/sentadilla.mp4",
        },
        {
          nombre: "Zancadas",
          sets: "3",
          reps: "10 (cada pierna)",
          video: "/src/assets/videos/funcionales/pierna1/zancada.jpg",
        },
        {
          nombre: "Puente de glúteos",
          sets: "3",
          reps: "15",
          video: "/src/assets/videos/funcionales/espalda2/puenteGluteo.mp4",
        },
        {
          nombre: "Flexiones pike",
          sets: "3",
          reps: "10",
          video: "/src/assets/videos/funcionales/pierna2/flexionesPike.mp4",
        },
        {
          nombre: "Elevaciones de hombros con botellas de agua",
          sets: "3",
          reps: "12",
          video: "/src/assets/videos/funcionales/pierna2/elevacionesLaterales.mp4",
        },
        {
          nombre: "Pájaros con botellas de agua",
          sets: "3",
          reps: "12",
          video: "/src/assets/videos/funcionales/pierna1/pajaros.mp4",
        },
      ],
    },
    {
      name: "Pierna 2",
      status: false,
      ejercicios: [
        {
          nombre: "Elevaciones de talones (calf raises)",
          sets: "3",
          reps: "15",
          video: "/src/assets/videos/funcionales/pierna2/elevacionTalones.mp4",
        },
        {
          nombre: "Sentadillas sumo con peso (mochila)",
          sets: "3",
          reps: "12",
          video: "/src/assets/videos/funcionales/pierna2/sentadillaSumo.mp4",
        },
        {
          nombre: "Elevación de talones con una pierna",
          sets: "3",
          reps: "12 (cada pierna)",
          video: "/src/assets/videos/funcionales/pierna2/elevacionTalones.mp4",
        },
        {
          nombre: "Sentadillas bulgara",
          sets: "3",
          reps: "10",
          video: "/src/assets/videos/funcionales/pierna2/bulgara.mp4",
        },
        {
          nombre: "Flexiones pike",
          sets: "3",
          reps: "10",
          video: "/src/assets/videos/funcionales/pierna2/flexionesPike.mp4",
        },
        {
          nombre: "Elevaciones laterales con botellas de agua",
          sets: "3",
          reps: "12",
          video: "/src/assets/videos/funcionales/pierna2/elevacionesLaterales.mp4",
        },
      ],
    },
  ];

  // Rutina de Full Body
  const rutinaFullBodyFuncional = {
    name: "Fullbody",
    status: false,
    ejercicios: [
      {
        nombre: "Sentadillas",
        sets: "3",
        reps: "12",
        video: "/src/assets/videos/funcionales/pierna1/sentadilla.mp4",
      },
      {
        nombre: "Flexiones de brazos",
        sets: "3",
        reps: "12",
        video: "/src/assets/videos/funcionales/pectoral1/flexiones.mp4",
      },
      {
        nombre: "Dominadas",
        sets: "3",
        reps: "8-10",
        video: "/src/assets/videos/funcionales/espalda1/dominadas.mp4",
      },
      {
        nombre: "Elevaciones laterales con botellas de agua",
        sets: "3",
        reps: "12",
        video: "/src/assets/videos/funcionales/pierna2/elevacionesLaterales.mp4",
      },
      {
        nombre: "Plancha",
        sets: "3",
        reps: "30 segundos",
        video: "/src/assets/videos/funcionales/plancha.mp4",
      },
      {
        nombre: "Curl de bíceps (objeto pesado)",
        sets: "3",
        reps: "12",
        video: "/src/assets/videos/funcionales/espalda1/curlBiceps.mp4",
      },
      {
        nombre: "Fondos de tríceps en silla",
        sets: "3",
        reps: "12",
        video: "/src/assets/videos/funcionales/pectoral1/fondosTriceps.mp4",
      },
      {
        nombre: "Zancadas",
        sets: "3",
        reps: "10 (cada pierna)",
        video: "/src/assets/videos/funcionales/pierna1/zancada.jpg",
      },
      {
        nombre: "Elevaciones de talones (calf raises)",
        sets: "3",
        reps: "15",
        video: "/src/assets/videos/funcionales/pierna2/elevacionTalones.mp4",
      },
    ],
  };
  /* Rutinas Funcionales */
  const rutinasFuncionales = [
    ...rutinasPechoFuncionales,
    ...rutinasEspaldaFuncionales,
    ...rutinasPiernaFuncionales,
    rutinaFullBodyFuncional,
  ];

  const rutinasPechoMaquinaria = [
    {
      name: "Pecho Maquina 1",
      status: false,
      ejercicios: [
        {
          nombre: "Press de Pecho en Máquina",
          sets: 3,
          reps: 15,
          video: "/src/assets/videos/maquinaria/pectoral1/benchPressMachine.mp4",
        },
        {
          nombre: "Aperturas Pectoral",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/pectoral1/aperturas.mp4",
        },
        {
          nombre: "Press de Inclinado en Máquina",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/maquinaria/pectoral1/pressInclinado.mp4",
        },
        {
          nombre: "Extensiones de Tríceps en Polea Alta",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/pectoral1/tricepsPoleaAlta.mp4",
        },
        {
          nombre: "Tríceps con barra en Polea",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/pectoral1/tricepsBarraPolea.mp4",
        },
        {
          nombre: "Press Francés en polea",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/maquinaria/pectoral1/pressFrances.mp4",
        },
      ],
    },
    {
      name: "Pecho Maquina 2",
      status: false,
      ejercicios: [
        {
          nombre: "Press de Pecho Declinado en Máquina",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/maquinaria/pectoral2/pechoDeclinado.mp4",
        },
        {
          nombre: "Press de Pecho en Máquina",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/pectoral1/benchPressMachine.mp4",
        },
        {
          nombre: "Press de Pecho con Poleas",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/pectoral2/pressDeclinadoPolea.mp4",
        },
        {
          nombre: "Extensiones de Tríceps en Polea",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/pectoral1/tricepsPoleaAlta.mp4",
        },
        {
          nombre: "Fondos de Tríceps en Máquina",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/pectoral2/fondosMaquina.mp4",
        },
        {
          nombre: "Press de Pecho con Agarre Cerrado",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/maquinaria/pectoral2/pressCerrado.mp4",
        },
      ],
    },
  ];

  const rutinasEspaldaMaquinaria = [
    {
      name: "Espalda Maquina 1",
      status: false,
      ejercicios: [
        {
          nombre: "Polea al Pecho",
          sets: 3,
          reps: "8 - 10",
          video: "/src/assets/videos/maquinaria/espalda1/pullDown.mp4",
        },
        {
          nombre: "Remo en Máquina",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/espalda1/remoSentado.webp",
        },
        {
          nombre: "Pull Down en Máquina",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/maquinaria/espalda1/pullDownMachine.mp4",
        },
        {
          nombre: "Curl Martillo Mancuerna",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/espalda1/curlBicepsPolea.mp4",
        },
        {
          nombre: "Curl Spider",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/maquinaria/espalda1/curlSpider.mp4",
        },
      ],
    },
    {
      name: "Espalda Maquina 2",
      status: false,
      ejercicios: [
        {
          nombre: "Pull Up en Máquina de Asistencia",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/maquinaria/espalda2/pullUpAsistance.mp4",
        },
        {
          nombre: "Remo Neutro en Máquina",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/espalda2/rowNeutro.mp4",
        },
        {
          nombre: "Pull Over en Polea",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/espalda2/pullOver.mp4",
        },
        {
          nombre: "Curl de Bíceps Martillo",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/espalda2/curlMartillo.webp",
        },
        {
          nombre: "Curl Spider",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/espalda1/curlSpider.mp4",
        },
      ],
    },
  ];

  const rutinasPiernaMaquinaria = [
    {
      name: "Pierna Maquina 1",
      status: false,
      ejercicios: [
        {
          nombre: "Prensa Inclinada",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/pierna1/pressInclinado.mp4",
        },
        {
          nombre: "Prensa Horizontal",
          sets: 3,
          reps: "10 (cada pierna)",
          video: "/src/assets/videos/maquinaria/pierna1/pressHorizontal.mp4",
        },
        {
          nombre: "Extensión de cuadriceps",
          sets: 3,
          reps: 15,
          video: "/src/assets/videos/maquinaria/pierna1/extensionCuadriceps.mp4",
        },
        {
          nombre: "Prenss Militar",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/maquinaria/pierna1/pressMilitar.mp4",
        },
        {
          nombre: "Elevación Lateral",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/pierna1/elevacionLateral.mp4",
        },
        {
          nombre: "Pájaros en Máquina",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/funcionales/pierna1/pajaros.mp4",
        },
      ],
    },
    {
      name: "Pierna Maquina 2",
      status: false,
      ejercicios: [
        {
          nombre: "Curl de Piernas en Máquina",
          sets: 3,
          reps: 12,
          video: "/src/assets/videos/maquinaria/pierna2/curlFemoral.mp4",
        },
        {
          nombre: "Extensión de Cuádriceps en Máquina",
          sets: 3,
          reps: "10 (cada pierna)",
          video: "/src/assets/videos/maquinaria/pierna1/extensionCuadriceps.mp4",
        },
        {
          nombre: "Abductores",
          sets: 3,
          reps: 15,
          video: "/src/assets/videos/maquinaria/pierna2/abduccion.mp4",
        },
        {
          nombre: "Adductores",
          sets: 3,
          reps: 10,
          video: "/src/assets/videos/maquinaria/pierna2/adduction.mp4",
        },
        {
          nombre: "Elevaciones laterales",
          sets: 3,
          reps: 8,
          video: "/src/assets/videos/maquinaria/pierna1/elevacionLateral.mp4",
        },
        {
          nombre: "Press Militar en Máquina de Smith",
          sets: 3,
          reps: "8-10",
          video: "/src/assets/videos/maquinaria/pierna1/pressMilitar.mp4",
        },
      ],
    },
  ];

  const rutinaFullBodyMaquinaria = {
    name: "Fullbody Maquina",
    status: false,
    ejercicios: [
      {
        nombre: "Press de Pecho en Máquina",
        sets: 3,
        reps: 12,
        video: "/src/assets/videos/maquinaria/pectoral1/benchPressMachine.mp4",
      },
      {
        nombre: "Remo en Máquina",
        sets: 3,
        reps: 12,
        video: "/src/assets/videos/maquinaria/espalda1/remoSentado.webp",
      },
      {
        nombre: "Prensa de Piernas en Máquina",
        sets: 3,
        reps: 12,
        video: "/src/assets/videos/maquinaria/pierna1/pressInclinado.mp4",
      },
      {
        nombre: "Prensa Militar",
        sets: 3,
        reps: 10,
        video: "/src/assets/videos/maquinaria/pierna1/pressMilitar.mp4",
      },
      {
        nombre: "Flexiones con Agarre Neutro",
        sets: 3,
        reps: 10,
        video: "/src/assets/videos/maquinaria/fullbody/flexionesCerrado.mp4",
      },
      {
        nombre: "Curl de Bíceps",
        sets: 3,
        reps: 12,
        video: "/src/assets/videos/maquinaria/espalda1/curlBicepsPolea.mp4",
      },
      {
        nombre: "Extensiones de Tríceps",
        sets: 3,
        reps: 12,
        video: "/src/assets/videos/maquinaria/pectoral1/tricepsPoleaAlta.mp4",
      },
      {
        nombre: "Extensión de cuadriceps",
        sets: 3,
        reps: 15,
        video: "/src/assets/videos/maquinaria/pierna1/extensionCuadriceps.mp4",
      },
      {
        nombre: "Abducción",
        sets: 3,
        reps: 12,
        video: "/src/assets/videos/maquinaria/pierna2/abduccion.mp4",
      },
    ],
  };

  const rutinasMaquinaria = [
    ...rutinasPechoMaquinaria,
    ...rutinasEspaldaMaquinaria,
    ...rutinasPiernaMaquinaria,
    rutinaFullBodyMaquinaria,
  ];

  const rutinasPechoPesoLibre = [
    {
      name: "Pecho Peso Libre 1",
      status: false,
      ejercicios: [
        { nombre: "Press de Banca", sets: 3, reps: 8, video: "/src/assets/videos/pesoLibre/pectoral1/benchPress.mp4", },
        { nombre: "Flexiones en el Suelo", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/pectoral1/flexiones.mp4", },
        { nombre: "Press de Banca Inclinado", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/pectoral1/pressInclinado.mp4", },
        { nombre: "Fondos en Paralelas", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/pectoral1/fondos.mp4", },
        { nombre: "Press de Banca Declinado", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/pectoral1/pressDeclinado.mp4", },
        { nombre: "Press Francés", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/pectoral1/pressFrances.mp4", },
      ],
    },
    {
      name: "Pecho Peso Libre 2",
      status: false,
      ejercicios: [
        { nombre: "Aperturas con Mancuernas", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/pectoral2/aperturas.mp4"},
        { nombre: "Flexiones con Salto", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/pectoral2/burpees.mp4" },
        { nombre: "Press Inclinado en MPW", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/pectoral1/pressInclinado.mp4" },
        { nombre: "Press Banca con agarre cerrado", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/pectoral2/pressCerrado.mp4" },
        { nombre: "Fondos agarre cerrado", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/pectoral2/fondosCerrado.mp4" },
        { nombre: "Patada de triceps con mancuerna (unilateral)", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/pectoral2/patadaTriceps.mp4" },
      ],
    },
  ];

  const rutinasEspaldaPesoLibre = [
    {
      name: "Espalda Peso Libre 1",
      status: false,
      ejercicios: [
        { nombre: "Peso Muerto", sets: 3, reps: 8, video: "/src/assets/videos/pesoLibre/espalda1/pesoMuerto.mp4"  },
        { nombre: "Dominadas", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/espalda1/dominadas.mp4" },
        { nombre: "Remo con Barra", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/espalda1/remoBarra.mp4" },
        { nombre: "Remo con Mancuerna", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/espalda1/remoMancuerna.mp4" },
        { nombre: "Curl Biceps en banco a 60º", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/espalda1/curlBicep60.mp4" },
        { nombre: "Curl Biceps Martillo", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/espalda1/hummerCurl.mp4" },
      ],
    },
    {
      name: "Espalda Peso Libre 2",
      status: false,
      ejercicios: [
        { nombre: "Dominadas con Agarre Neutro", sets: 3, reps: 8, video: "/src/assets/videos/pesoLibre/espalda2/dominadasNeutro.mp4" },
        { nombre: "Pulldowns", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/espalda2/pullDown.mp4" },
        { nombre: "Remo Agarre Neutro", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/espalda2/remoNeutro.mp4" },
        { nombre: "Pull-Overs en Banco", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/espalda2/pullOver.mp4" },
        { nombre: "Encogimientos de Hombros", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/espalda2/encogimientoHombros.mp4" },
        { nombre: "Flexiones con Agarre Inverso", sets: 3, reps: 10, video: "/src/assets/videos/maquinaria/espalda1/curlSpider.mp4" },
      ],
    },
  ];

  const rutinasPiernaPesoLibre = [
    {
      name: "Pierna Peso Libre 1",
      status: false,
      ejercicios: [
        { nombre: "Sentadillas", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/pierna1/sentadilla.mp4" },
        { nombre: "Peso Muerto Rumano", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/pierna1/pesoMuertoRumano.mp4"  },
        { nombre: "Prensa de Piernas", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/pierna1/prensa.mp4" },
        { nombre: "Sentadillas Bulgaras", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/pierna1/bulgaras.mp4" },
        { nombre: "Elevaciones de Gemelos", sets: 3, reps: 15, video: "/src/assets/videos/pesoLibre/pierna1/elevacionGemelos.mp4" },
        { nombre: "Press Militar con Mancuernas", sets: 3, reps: 12, video: "/src/assets/videos/maquinaria/pierna1/pressMilitar.mp4" },
      ],
    },
    {
      name: "Pierna Peso Libre 2",
      status: false,
      ejercicios: [
        { nombre: "Prensa Hack", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/pierna2/hacka.mp4"  },
        { nombre: "Sentadillas Sumo", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/pierna2/sentadillaSumo.mp4" },
        { nombre: "Extension de cuadriceps", sets: 3, reps: 12, video: "/src/assets/videos/maquinaria/pierna1/extensionCuadriceps.mp4" },
        { nombre: "Curl de Femoral en Máquina", sets: 3, reps: 12, video: "/src/assets/videos/pesoLibre/pierna2/femoral.mp4" },
        { nombre: "Abducciones", sets: 3, reps: 12, video: "/src/assets/videos/maquinaria/pierna2/abduccion.mp4" },
        { nombre: "Elevaciones Laterales", sets: 3, reps: 15, video: "/src/assets/videos/maquinaria/pierna1/elevacionLateral.mp4" }
      ],
    },
  ];

  const rutinaFullBodyPesoLibre = {  
    name: "Fullbody Peso Libre",
    status: false,
    ejercicios: [
      { nombre: "Sentadillas", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/pierna1/sentadilla.mp4" },
      { nombre: "Press de Banca", sets: 3, reps: 8, video: "/src/assets/videos/pesoLibre/pectoral1/benchPress.mp4" },
      { nombre: "Dominadas", sets: 3, reps: 10, video: "/src/assets/videos/pesoLibre/espalda1/dominadas.mp4" },
      { nombre: "Press de Militar con Mancuernas", sets: 3, reps: 10, video: "/src/assets/videos/maquinaria/pierna1/pressMilitar.mp4" },
      { nombre: "Peso Muerto", sets: 3, reps: 8, video: "/src/assets/videos/pesoLibre/espalda1/pesoMuerto.mp4" },
      { nombre: "Curl de Bíceps", sets: 3, reps: 12, video: "/src/assets/videos/maquinaria/espalda1/curlBicepsPolea.mp4" },
      { nombre: "Extensiones de Tríceps", sets: 3, reps: 12, video: "/src/assets/videos/maquinaria/pectoral1/tricepsPoleaAlta.mp4" },
      { nombre: "Elevaciones de Gemelos", sets: 3, reps: 15, video: "/src/assets/videos/pesoLibre/pierna1/elevacionGemelos.mp4" },
    ],
  };

  const rutinasPesoLibre = [
    ...rutinasPechoPesoLibre,
    ...rutinasEspaldaPesoLibre,
    ...rutinasPiernaPesoLibre,
    rutinaFullBodyPesoLibre,
  ];

  useEffect(() => {
    localStorage.setItem("rutinas", JSON.stringify(misRutinas));
     const user = JSON.parse(localStorage.getItem("user"))
     user.data.fitness = misRutinas;
    localStorage.setItem("user", JSON.stringify(user));
  }, [misRutinas]);


  const handleExerciseTypeChange = (type) => {
    setExerciseType(type);
  };

  // Función para añadir rutina
  const addRutina = (rutina, rutinaIndex) => {
    const updatedMisRutinas = [...misRutinas];
    const index = updatedMisRutinas.findIndex((r) => r.tipo === exerciseType);

    if (index >= 0 && updatedMisRutinas[index].rutinas.length === 7) {
      updatedMisRutinas[index].rutinas[rutinaIndex] = rutina;

      setMisRutinas(updatedMisRutinas);
    }
  };

  // Función para eliminar rutina
  const removeRutina = (rutinaIndex) => {
    const updatedMisRutinas = [...misRutinas];
    const index = updatedMisRutinas.findIndex((r) => r.tipo === exerciseType);

    updatedMisRutinas[index].rutinas[rutinaIndex] = {};
    setMisRutinas(updatedMisRutinas);
  };

  // Obtener rutinas disponibles
  const rutinasDisponibles = [];
  const tipoIndex = misRutinas.findIndex((r) => r.tipo === exerciseType);

  if (tipoIndex !== -1) {
    const misRutinasTipo = misRutinas[tipoIndex];

    let rutinasTipoDisponibles = [];

    switch (misRutinasTipo.tipo) {
      case "Funcional":
        rutinasTipoDisponibles = rutinasFuncionales;
        break;

      case "Maquinaria":
        rutinasTipoDisponibles = rutinasMaquinaria;
        break;

      case "Peso Libre":
        rutinasTipoDisponibles = rutinasPesoLibre;
        break;

      default:
        console.log("Error");
        break;
    }

    // eslint-disable-next-line array-callback-return
    rutinasTipoDisponibles.map((rutina) => {
      const found = misRutinasTipo.rutinas.some((r) => r.name === rutina.name);
      if (!found) {
        rutinasDisponibles.push(rutina);
      }
    });
  }

  const generarRutinaAleatoria = (numDias) => {
    let rutinasDisponiblesGen = [...rutinasDisponibles]; // Clonar el array para evitar modificar el original

    const diasRutina = {
      3: [0, 2, 4],
      4: [0, 1, 3, 4],
      5: [0, 1, 3, 4, 5],
      6: [0, 1, 2, 4, 5, 6],
      7: [0, 1, 2, 3, 4, 5, 6],
    }[numDias];

    if (diasRutina) {
      for (let i = 0; i < numDias; i++) {
        const rutinaAleatoria =
          rutinasDisponiblesGen[
            Math.floor(Math.random() * rutinasDisponiblesGen.length)
          ];

        rutinasDisponiblesGen = rutinasDisponiblesGen.filter(
          (rutina) => rutina.name !== rutinaAleatoria.name
        );
        
        addRutina(rutinaAleatoria, diasRutina[i]);
      }
    } else {
      alert(numDias);
    }

    setShowGenRoutine(false);
  };

  const misRutinasIsEmpty = () => {
    const rutinasAll = misRutinas[misRutinas.findIndex((r) => r.tipo === exerciseType)].rutinas
    const rutinasFiltered = rutinasAll.filter((rutina)=>rutina.name === undefined);
    return rutinasFiltered.length === 7
  }

  const restartRutinas = () => {
    const updatedMisRutinas = [...misRutinas];
    const index = updatedMisRutinas.findIndex((r) => r.tipo === exerciseType);
    for(let i = 0; i < 7; i++) {
      updatedMisRutinas[index].rutinas[i] = {};
    }
    setMisRutinas(updatedMisRutinas);
      localStorage.setItem("rutinas", JSON.stringify(updatedMisRutinas));
  }

  const handleNumDaysChange = (event) => {
    setNumDays(event.target.value);
  };

  const semana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  if(JSON.parse(localStorage.getItem('user')) === null || JSON.parse(localStorage.getItem('isUserLoged')) == false){
    window.location = '/login';
  }

  return (
    <div>
      <div
        className={`flex flex-wrap items-center justify-center bg-blue-700 `}
      >
        {exerciseTypes.map((exercise) => (
          <button
            key={exercise}
            className={`p-5 ${
              exercise === exerciseType &&
              "bg-blue-800 rounded-t-lg transition-all duration-1000"
            } text-white text-lg mt-2`}
            onClick={() => handleExerciseTypeChange(exercise)}
          >
            {exercise}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center p-5 min-h-[51.9vh]">
        <article className="flex flex-col items-center bg-white shadow-inner shadow-gray-500 w-[80%] md:w-[700px] rounded-2xl transition-all duration-700">
          <div className="flex items-center justify-center bg-blue-600 w-full text-center rounded-t-2xl ">
            <p className="flex-grow text-white text-xl font-bold pl-20">
              {exerciseType}
            </p>
            {misRutinasIsEmpty() ? <button
              onClick={() => setShowGenRoutine(true)}
              className="p-2 m-2 bg-blue-200 hover:shadow-inner hover:shadow-black transition-all duration-500 rounded-xl"
            >
              Crear rutina
            </button>:<button
              onClick={() => restartRutinas()}
              className="p-2 m-2 bg-red-400 hover:shadow-inner hover:shadow-black transition-all duration-500 rounded-2xl"
            >
              <img
                src="/src/assets/papelera.png"
                alt="Eliminar Rutina"
                title="Eliminar Rutina"
                className="w-[35px]"
              />
            </button>
            }
          </div>

          <div className="grid grid-rows-1 grid-cols-2 md:grid-cols-1 md:grid-rows-2 m-5 mt-0 bg-blue-200 rounded-lg w-[80%] text-center justify-center">
            <div className="grid grid-rows-7 grid-cols-1 md:grid-cols-7 md:grid-rows-1 justify-center items-center font-bold uppercase">
              {semana.map((dia) => {
                return (
                  <div
                    className={`p-3 flex border-r-2 border-b-2 h-full items-center justify-center bg-blue-400`}
                    key={dia}
                  >
                    {dia}
                  </div>
                );
              })}
              <div className="p-3 flex rounded-bl-lg md:rounded-none border-b-0 border-r-2 md:border-r-0 md:border-b-2 h-full items-center justify-center bg-blue-400">
                Domingo
              </div>
            </div>
            <div className="grid grid-rows-7 grid-cols-1 md:grid-cols-7 md:grid-rows-1 justify-center items-center">
              {misRutinas
                .find((tipoRutina) => tipoRutina.tipo === exerciseType)
                .rutinas.map((rutina, index) => {
                  return (
                    <Linea
                      key={index}
                      index={index}
                      setted={Object.keys(rutina).length > 0}
                      rutina={rutina}
                      addRutina={(selectedRutinaIndex) => {
                        console.log(selectedRutinaIndex);
                        addRutina(
                          rutinasDisponibles[selectedRutinaIndex],
                          index
                        );
                      }}
                      removeRutina={() => removeRutina(index)}
                      rutinasDisponibles={rutinasDisponibles}
                    />
                  );
                })}
            </div>
          </div>
        </article>
      </div>
      {showGenRoutine && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-md z-40 flex items-center justify-center">
          <div className="flex flex-col w-[80%] md:w-[60%] bg-white rounded-2xl">
            <h1 className="bg-blue-300 w-full text-center rounded-t-2xl p-5 text-xl font-bold">
              Generador de ruinas
            </h1>
            <div className="flex flex-col justify-center items-center p-10">
              <h2 className="text-lg">Días de entrenamiento:</h2>
              <div className="flex justify-center items-center gap-5">
                <input
                  type="range"
                  min="3"
                  max="7"
                  value={numDays}
                  onChange={handleNumDaysChange}
                  id="rangeInput"
                />
                <p className="text-[18px] font-bold">{numDays}</p>
              </div>
            </div>
            <button
              className="text-white p-3 mb-5 bg-blue-500 w-fit m-auto rounded-md hover:rounded-xl hover:bg-opacity-70 transition-all duration-500"
              onClick={() => generarRutinaAleatoria(numDays)}
            >
              Hecho
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
