import { useState } from "react";
import FilosofoCard from "../components/filosofoCard/FilosofoCard";

export default function Filosofy() {
  const [citasVistas, setCitasVistas] = useState([]);
  const [filosofiaFilter, setFilosofiaFilter] = useState("all");
  const [lugarOrigenFilter, setLugarOrigenFilter] = useState("all");
  const [filosofoSearched, setFilosofoSearched] = useState("all");

  const filosofos = [
    {
      name: "Tales de Mileto (624-548 a.C.)",
      filosofy: "Filosofía presocrática",
      lugarOrigen: "Turquía",
      urlImg: "/src/assets/imgs/filosofos/tales.jpg",
      citas: [
        {
          cita: "El placer supremo es obtener lo que se anhela.",
          how_to_apply:
            "Lograr nuestros objetivos nos hace sentirnos realizados.",
          visto: false,
        },
        {
          cita: "La cosa más difícil es conocernos a nosotros mismos; la más fácil es hablar mal de los demás.",
          how_to_apply:
            "La crítica siempre es facilona y simple. La introspección es un asunto complicado.",
          visto: false,
        },
        {
          cita: "La felicidad del cuerpo se funda en la salud; la del entendimiento, en el saber.",
          how_to_apply:
            "Mente y cuerpo tienen distintas formas de estar en plena forma.",
          visto: false,
        },
        {
          cita: "Todo es animado y todo está lleno de dioses.",
          how_to_apply:
            "Una frase de Tales de Mileto en que nos muestra su animismo filosófico.",
          visto: false,
        },
        {
          cita: "La belleza no dimana de un cuerpo hermoso, sino de las bellas acciones.",
          how_to_apply: "La ética y la estética se funden en un mismo ente.",
          visto: false,
        },
        {
          cita: "Toma para ti los consejos que das a otro.",
          how_to_apply:
            "Es fácil repartir consejos por doquier; lo complicado es aplicarlos a nuestra propia vida.",
          visto: false,
        },
        {
          cita: "Muchas palabras nunca indican sabiduría.",
          how_to_apply: "Los verdaderos sabios raramente hablan demasiado.",
          visto: false,
        },
        {
          cita: "La esperanza es el único bien común a todos los hombres. Los que todo lo han perdido la poseen aún.",
          how_to_apply:
            "Lo último que se pierde es la esperanza en una vida mejor. Gran reflexión de Tales de Mileto.",
          visto: false,
        },
        {
          cita: "Si buscas una buena solución y no la encuentras, consulta al tiempo, puesto que el tiempo es la máxima sabiduría.",
          how_to_apply:
            "Tal como señalan muchos pensadores, el tiempo es el mejor antídoto para cualquier veneno.",
          visto: false,
        },
        {
          cita: "De todas las cosas la más antigua es Dios, porque no fue creado.",
          how_to_apply: "Una particular visión sobre el ente divino.",
          visto: false,
        },
        {
          cita: "Elige una sola cosa buena.",
          how_to_apply: "Un resumen sobre su ética monista.",
          visto: false,
        },
        {
          cita: "Estoy agradecido a mi destino por tres cosas; por haber nacido humano, por haber nacido hombre no mujer, por haber nacido heleno no bárbaro.",
          how_to_apply:
            "Algunas características de las que Tales de Mileto estaba especialmente orgulloso.",
          visto: false,
        },
        {
          cita: "El trabajo aumenta la virtud. El que no sabe cultivar las artes, trabaje con la azada.",
          how_to_apply: "Oda al esfuerzo mental y manual.",
          visto: false,
        },
        {
          cita: "El agua es el elemento y principio de las cosas.",
          how_to_apply: "El arkhé; el principio de la vida.",
          visto: false,
        },
        {
          cita: "Quebrantará así la lengua de los charlatanes.",
          how_to_apply: "La mentira tiene los días contados.",
          visto: false,
        },
        {
          cita: "¡Ay Tales! No eres capaz de ver lo que pasa a tus pies y percibir el cielo al mismo tiempo.",
          how_to_apply:
            "Frase que pronunció tras caerse en un pozo después de tener la vista puesta en el cielo.",
          visto: false,
        },
        {
          cita: "Sea tu oráculo la mesura.",
          how_to_apply: "El equilibrio siempre es el mejor guía.",
          visto: false,
        },
        {
          cita: "Lo más grande es el espacio, porque lo encierra todo.",
          how_to_apply:
            "Tal vez no sea infinito, pero sí contiene todo lo contenible, según Tales.",
          visto: false,
        },
        {
          cita: "Lo más hermoso es el mundo, porque es obra de Dios.",
          how_to_apply:
            "Sobre la creación divina, perfecta y en todo su esplendor.",
          visto: false,
        },
        {
          cita: "Busca siempre un quehacer; cuando lo tengas no pienses en otra cosa que en hacerlo bien.",
          how_to_apply:
            "La profesionalidad nace de la obsesión y el esfuerzo diarios.",
          visto: false,
        },
        {
          cita: "Cuida tus palabras; que ellas no levanten un muro entre ti y los que contigo viven.",
          how_to_apply:
            "Ser comedido en las palabras nos asegura un entorno favorable y amistoso.",
          visto: false,
        },
        {
          cita: "Lo más fuerte es la necesidad, porque domina todo.",
          how_to_apply: "Impera en la vida de los hombres y los hace sumisos.",
          visto: false,
        },
        {
          cita: "Lo más veloz es el entendimiento, porque corre por todo.",
          how_to_apply:
            "Una de esas frases de Tales de Mileto que nos recuerdan su capacidad para describir cualquier concepto.",
          visto: false,
        },
        {
          cita: "El pasado es cierto, el futuro oscuro.",
          how_to_apply: "Una visión razonable sobre la temporalidad.",
          visto: false,
        },
        {
          cita: "No llegué a ser un padre porque soy amigo de los niños.",
          how_to_apply:
            "Irónica frase de Tales en que nos muestra su amor por la infancia.",
          visto: false,
        },
        {
          cita: "Si hay un cambio, tiene que haber algo que cambia, sin embargo, no cambia.",
          how_to_apply:
            "Lo aparentemente mutable, en realidad, no lo es. Según Tales de Mileto.",
          visto: false,
        },
        {
          cita: "¿Quién es feliz? Una persona que tiene un cuerpo sano, que se cubre con la paz de la mente y que cultiva su talento.",
          how_to_apply:
            "La receta para la felicidad: mens sana in corpore sano.",
          visto: false,
        },
        {
          cita: "Evita hacer lo que se puede culpar a otros por hacer.",
          how_to_apply:
            "No creas que tu inocencia tiene más fundamentos que la de cualquier otro.",
          visto: false,
        },
        {
          cita: "No vivimos, en realidad, en la cima de una tierra sólida, sino en el fondo de un océano de aire.",
          how_to_apply:
            "Curiosa e interesante reflexión acerca de nuestro entorno natural.",
          visto: false,
        },
        {
          cita: "Todas las cosas son de agua y todas las cosas se disuelven en agua.",
          how_to_apply: "Un principio químico no del todo errado.",
          visto: false,
        },
      ],
    },
    {
      name: "Heráclito de Éfeso (563-470 a.C.)",
      filosofy: "Filosofía presocrática",
      lugarOrigen: "Turquía",
      urlImg: "/src/assets/imgs/filosofos/Heraclito.webp",
      citas: [
        {
          cita: "Nadie se baña en el río dos veces porque todo cambia en el río y en el que se baña.",
          how_to_apply:
            "Todo es efímero, por lo que no podemos afirmar con rotundidad que un ente sigue siendo el mismo en dos instantes distintos.",
          visto: false,
        },
        {
          cita: "Los médicos cortan, queman, torturan. Y haciendo a los enfermos un bien, que más parece mal, exigen una recompensa que casi no merecen.",
          how_to_apply:
            "Sobre la temible ignorancia presuntuosa de los médicos.",
          visto: false,
        },
        {
          cita: "Para Dios todo es hermoso, bueno y justo. Los hombres han concebido lo justo y lo injusto.",
          how_to_apply:
            "Es la humanidad la que concibe los principios éticos de bien y mal.",
          visto: false,
        },
        {
          cita: "Son distintas la aguas que cubren a los que entran al mismo río.",
          how_to_apply:
            "Otra cita célebre de Heráclito en relación a la mutabilidad de la materia.",
          visto: false,
        },
        {
          cita: "Con tanto ardor deben los ciudadanos pelear por la defensa de las leyes, como por la de sus murallas, no siendo menos necesarias aquéllas que éstas para la conservación de una ciudad.",
          how_to_apply:
            "Defensa y orden, dos principios básicos para la subsistencia de una civilización.",
          visto: false,
        },
        {
          cita: "Los buscadores de oro cavan mucho y hallan poco.",
          how_to_apply:
            "Grandes empresas conllevan a menudo grandes decepciones.",
          visto: false,
        },
        {
          cita: "La enfermedad hace agradable la salud; el hambre la saciedad; la fatiga el reposo.",
          how_to_apply:
            "Sin la cara menos amable de la existencia no seríamos capaces de valorar la dicha de vivir.",
          visto: false,
        },
        {
          cita: "En el círculo se confunden el principio y el fin.",
          how_to_apply:
            "Metáfora plástica de gran valor estético y filosófico.",
          visto: false,
        },
        {
          cita: "A todo hombre le es concedido conocerse a sí mismo y meditar sabiamente.",
          how_to_apply:
            "El don de la autorreflexión. Solo es preciso sentarse a meditar sobre la vida.",
          visto: false,
        },
        {
          cita: "Si no esperas lo inesperado no lo reconocerás cuando llegue.",
          how_to_apply:
            "Lo inesperado, tarde o temprano, puede llegar. Así que estate alerta.",
          visto: false,
        },
        {
          cita: "Los asnos prefieren la paja al oro.",
          how_to_apply:
            "La percepción de lo valioso no está en manos de cualquiera.",
          visto: false,
        },
        {
          cita: "Dios es día y noche, invierno y verano, guerra y paz, abundancia y hambre.",
          how_to_apply:
            "Omnipotente y omnipresente. Una de las frases de Heráclito en que expresa su visión sobre el ente divino.",
          visto: false,
        },
        {
          cita: "Todas las leyes humanas se alimentan de la ley divina.",
          how_to_apply:
            "La moralidad humana no es sino una constatación de las leyes celestiales.",
          visto: false,
        },
        {
          cita: "Todo cambia; nada es.",
          how_to_apply:
            "Otra cita célebre, muy concisa, sobre la mutabilidad de la materia.",
          visto: false,
        },
        {
          cita: "Muerte es todo lo que vemos despiertos; sueño lo que vemos dormidos.",
          how_to_apply: "Preciosa frase onírica con la que reflexionar.",
          visto: false,
        },
        {
          cita: "Los perros sólo ladran a quienes no conocen.",
          how_to_apply:
            "Con esta cita célebre, Heráclito nos exhorta a reflexionar.",
          visto: false,
        },
        {
          cita: "El sol es nuevo cada día.",
          how_to_apply:
            "Se puede interpretar de distintas maneras, pero es probable que Heráclito pronunciara esta frase pensando de nuevo en el cambio permanente de la realidad.",
          visto: false,
        },
        {
          cita: "El alma seca es la más sabia y la mejor.",
          how_to_apply: "Sin artificios, sin maquillajes.",
          visto: false,
        },
        {
          cita: "Es de sabios prestar oídos no a mí, sino ('al logos') a la palabra, y reconocer que todas las cosas son una.",
          how_to_apply:
            "Una muestra de su monismo filosófico, doctrina también respaldada por Parménides, Spinoza o Hegel.",
          visto: false,
        },
        {
          cita: "Este mundo siempre fue, es y será fuego eternamente vivo.",
          how_to_apply: "La llama de la existencia raramente se apaga.",
          visto: false,
        },
        {
          cita: "La guerra es el origen de todo.",
          how_to_apply: "Interesante reflexión sobre la violencia.",
          visto: false,
        },
        {
          cita: "Los cuerpos muertos han de desecharse con mayor motivo que el estiércol.",
          how_to_apply:
            "Tal vez para prevenir la propagación de enfermedades infecciosas.",
          visto: false,
        },
        {
          cita: "Nada es permanente a excepción del cambio.",
          how_to_apply:
            "El cambio es lo único que podemos dar por certero y fiable.",
          visto: false,
        },
        {
          cita: "No hagas reír hasta el punto de dar motivo a la risa.",
          how_to_apply:
            "El autorrespeto y la compostura, muy presentes en la obra de Heráclito.",
          visto: false,
        },
        {
          cita: "Porque sin fuerzas de colisión no hay movimientos y no hay realidad.",
          how_to_apply:
            "En el conflicto se encuentra la esencia y la síntesis.",
          visto: false,
        },
        {
          cita: "Si todas las cosas se convirtieran en humo, las narices discernerían.",
          how_to_apply:
            "Metáfora para aplicar a distintos contextos de la vida.",
          visto: false,
        },
        {
          cita: "Una vez nacidos, quieren vivir y alcanzar su destino, pero más bien descansar, así que dejan tras de sí para que alcancen su destino.",
          how_to_apply: "Sobre la existencia humana.",
          visto: false,
        },
        {
          cita: "Erudición no enseña sensatez, pues se la habría enseñado a Hesíodo y a Pitágoras y aún a Jenófanes y a Hecateo.",
          how_to_apply:
            "Tener conocimientos amplios no implica haber alcanzado la madurez y la sabiduría.",
          visto: false,
        },
        {
          cita: "El parecer de uno, enfermedad sagrada.",
          how_to_apply:
            "Sobre la banalidad de las opiniones mal fundamentadas.",
          visto: false,
        },
        {
          cita: "No vayamos conjeturando azarosamente sobre los temas más importantes.",
          how_to_apply: "Muy en la línea de la anterior frase de Heráclito.",
          visto: false,
        },
      ],
    },
    {
      name: "Pitágoras (569-475 a.C.)",
      filosofy: "Filosofía presocrática",
      lugarOrigen: "Grecia",
      urlImg: "/src/assets/imgs/filosofos/pitagoras.webp",
      citas: [
        {
          cita: "No seas ambicioso y tacaño; la justa medida es excelente en tales casos.",
          how_to_apply:
            "En el equilibrio está la salud espiritual, según Pitágoras.",
          visto: false,
        },
        {
          cita: "Economizad las lágrimas de vuestros hijos, para que puedan regar con ellas vuestra tumba.",
          how_to_apply:
            "Una triste alegoría que nos exhorta a tratar con amor a los hijos.",
          visto: false,
        },
        {
          cita: "Los hombres que siempre hablan verdad son los que más se aproximan a Dios.",
          how_to_apply: "Una afirmación que encumbra a las personas honestas.",
          visto: false,
        },
        {
          cita: "No tengas más que una mujer y un amigo. Las fuerzas del cuerpo y del alma no toleran más.",
          how_to_apply: "Una visión limitante sobre el afecto a compartir.",
          visto: false,
        },
        {
          cita: "Escucha, serás sabio. El comienzo de la sabiduría es el silencio.",
          how_to_apply:
            "Una frase célebre de Pitágoras en que nos invita a observar y escuchar con atención.",
          visto: false,
        },
        {
          cita: "Prefiero el bastón de la experiencia que el carro rápido de la fortuna. El filósofo viaja a pie.",
          how_to_apply:
            "La vanidad del hombre lo convierte en esclavo de su dinero.",
          visto: false,
        },
        {
          cita: "No sabe hablar quien no sabe callar.",
          how_to_apply:
            "Si no eres capaz de escuchar, no eres capaz de comprender.",
          visto: false,
        },
        {
          cita: "No hagas de tu cuerpo la tumba de tu alma.",
          how_to_apply:
            "Una de esas frases de Pitágoras que nos motiva a salir adelante.",
          visto: false,
        },
        {
          cita: "Ante todo, respetaos a vosotros mismos.",
          how_to_apply:
            "Una máxima fundamental para una vida mentalmente sana.",
          visto: false,
        },
        {
          cita: "La felicidad consiste en poder unir el principio con el fin.",
          how_to_apply:
            "Dar sentido a lo que hacemos, ahí reside la clave del misterio.",
          visto: false,
        },
        {
          cita: "Educar a los niños y no será necesario castigar a los hombres.",
          how_to_apply:
            "Una muestra de la vital importancia que confería Pitágoras a la crianza de los niños.",
          visto: false,
        },
        {
          cita: "Educar no es dar carrera para vivir, sino templar el alma para las dificultades de la vida.",
          how_to_apply: "En la línea de la anterior.",
          visto: false,
        },
        {
          cita: "Preciso es encontrar lo infinitamente grande en lo infinitamente pequeño, para sentir la presencia de Dios.",
          how_to_apply:
            "Los pequeños detalles del día a día encierran su esencia divina, según Pitágoras.",
          visto: false,
        },
        {
          cita: "Si quieres vivir mucho guarda un poco de vino rancio y un amigo viejo.",
          how_to_apply: "Un consejo para la longevidad.",
          visto: false,
        },
        {
          cita: "Escribe en la arena las faltas de tu amigo.",
          how_to_apply:
            "Con esta reflexión, Pitágoras nos explica que no debemos guardar en la memoria los errores de nuestros allegados.",
          visto: false,
        },
        {
          cita: "El silencio es la primera piedra del templo de la sabiduría.",
          how_to_apply:
            "Otra frase en que el filósofo griego nos anima a desarrollar este sentido.",
          visto: false,
        },
        {
          cita: "La amistad es una igualdad armoniosa.",
          how_to_apply:
            "La reciprocidad es una cualidad inherente a una amistad verdadera.",
          visto: false,
        },
        {
          cita: "Ayuda a tus semejantes a levantar su carga, pero no te consideres obligado a llevársela.",
          how_to_apply: "Solidaridad y obligación son términos antagónicos.",
          visto: false,
        },
        {
          cita: "Cállate o di algo mejor que el silencio.",
          how_to_apply: "Muy en la línea de otras citas célebres de Pitágoras.",
          visto: false,
        },
        {
          cita: "El alma es un acorde; la disonancia, su enfermedad.",
          how_to_apply:
            "La armonía en el espíritu garantiza una vida memorable.",
          visto: false,
        },
        {
          cita: "El hombre es mortal por sus temores e inmortal por sus deseos.",
          how_to_apply:
            "Los anhelos nos hacen trascender los límites temporales.",
          visto: false,
        },
        {
          cita: "Escoge la mejor manera de vivir; la costumbre te la hará agradable.",
          how_to_apply: "Sobre la buena vida.",
          visto: false,
        },
        {
          cita: "Hay un principio bueno, que ha creado el orden, la luz y el hombre, y un principio malo, que ha creado el caos, las tinieblas y la mujer.",
          how_to_apply:
            "Frase especialmente machista leída desde la óptica del siglo XXI.",
          visto: false,
        },
        {
          cita: "La tierra regala riqueza profusamente y alimento pacífico. Y os brinda alimentos que están libres de muerte y de sangre.",
          how_to_apply: "Sobre la bondad de la madre naturaleza y sus frutos.",
          visto: false,
        },
        {
          cita: "Mide tus deseos, pesa tus opiniones, cuenta tus palabras.",
          how_to_apply: "Una frase de Pitágoras vinculada al autocontrol.",
          visto: false,
        },
        {
          cita: "Una bella ancianidad es, ordinariamente, la recompensa de una bella vida.",
          how_to_apply: "Sobre la vejez positiva.",
          visto: false,
        },
        {
          cita: "El principio es la mitad del todo.",
          how_to_apply:
            "Metáfora matemática que puede tener distintas interpretaciones.",
          visto: false,
        },
        {
          cita: "Si sufres injusticias consuélate, porque la verdadera desgracia es cometerlas.",
          how_to_apply: "Frase filosófica que todos deberíamos recordar.",
          visto: false,
        },
        {
          cita: "Más le vale a un hombre tener la boca cerrada, y que los demás le crean tonto, que abrirla y que los demás se convenzan de que lo es.",
          how_to_apply: "Tal vez su cita célebre más recordada.",
          visto: false,
        },
        {
          cita: "¡Oh legislador! No me des leyes para los pueblos, sino pueblos para las leyes.",
          how_to_apply: "Un ruego metafórico hacia el poder legislativo.",
          visto: false,
        },
      ],
    },
    {
      name: "Demócrito (460-370 a.C.)",
      filosofy: "Filosofía presocrática",
      lugarOrigen: "Grecia",
      urlImg: "/src/assets/imgs/filosofos/democrito.webp",
      citas: [
        {
          cita: "Todo está perdido cuando los malos sirven de ejemplo y los buenos de mofa.",
          how_to_apply: "Cuando la ética se pierde ocurren estas cosas.",
          visto: false,
        },
        {
          cita: "El que todo lo aplaza no dejará nada concluido ni perfecto.",
          how_to_apply:
            "Sobre la procrastinación, un vicio que no nos permite avanzar.",
          visto: false,
        },
        {
          cita: "¿Puede ser por ventura amado el que a nadie ama?",
          how_to_apply:
            "En otras palabras: ¿puede amar quien no ama a nadie? Probablemente, no.",
          visto: false,
        },
        {
          cita: "Toda la tierra está al alcance del sabio, ya que la patria de un alma elevada es el universo.",
          how_to_apply:
            "El pensamiento global nos permite estar por encima de lo material.",
          visto: false,
        },
        {
          cita: "Vida sin fiestas es como largo camino sin posadas.",
          how_to_apply:
            "Siempre hay que contar con un poco de diversión para hacer que el camino se torne más amable.",
          visto: false,
        },
        {
          cita: "La vida es un tránsito; el mundo es una sala de espectáculos; el hombre entra en ella, mira y sale.",
          how_to_apply:
            "Gran metáfora que nos muestra lo efímero de la existencia humana.",
          visto: false,
        },
        {
          cita: "La naturaleza se basta así misma; por esto vence con lo menos y con lo seguro, las demasías de la esperanza.",
          how_to_apply:
            "Breve reflexión medioambiental acerca de la fortaleza de la madre naturaleza.",
          visto: false,
        },
        {
          cita: "No te avergüences de someterte a las leyes y al que sabe más que tú.",
          how_to_apply:
            "El conocimiento y la democracia deben prevalecer por encima de cualquier otra consideración.",
          visto: false,
        },
        {
          cita: "Aunque estés solo, no debes decir ni hacer nada malo. Aprende a avergonzarte más ante ti que ante los demás.",
          how_to_apply: "El público merece nuestra faceta fuerte y confiada.",
          visto: false,
        },
        {
          cita: "Hay hombres que trabajan como si fueran a vivir eternamente.",
          how_to_apply:
            "Recuerda que tu labor no te hará eterno; disfrutar del día a día sí.",
          visto: false,
        },
        {
          cita: "El hombre no es infeliz mientras no es injusto.",
          how_to_apply:
            "La honradez garantiza un buen estado psicológico, según esta frase de Demócrito.",
          visto: false,
        },
        {
          cita: "La verdadera hermosura y la gala más preciosa de la mujer es el hablar escaso.",
          how_to_apply:
            "La belleza femenina, congraciada con la discreción, según el filósofo griego.",
          visto: false,
        },
        {
          cita: "Los jóvenes son como las plantas: por los primeros frutos se ve lo que podemos esperar para el porvenir.",
          how_to_apply:
            "Una metáfora de gran belleza sobre el potencial de cada adolescente.",
          visto: false,
        },
        {
          cita: "Quien procede injustamente es más desgraciado que la víctima de su injusticia.",
          how_to_apply: "Muy en la línea de la frase número once.",
          visto: false,
        },
        {
          cita: "Las riquezas no consisten tanto en la posesión de los bienes como en el uso que de ellos se hace.",
          how_to_apply:
            "Saber darle un sentido a las posesiones, he ahí la verdadera riqueza.",
          visto: false,
        },
        {
          cita: "Luchar contra el deseo es duro, pero vencerlo es propio de un hombre sensato.",
          how_to_apply:
            "La sensatez es la cúspide del desarrollo moral de un individuo.",
          visto: false,
        },
        {
          cita: "La medicina sana las enfermedades del cuerpo, más la sabiduría libera al alma de padecimientos.",
          how_to_apply:
            "Sobre la salud física y mental, en una de las frases de Demócrito más memorables.",
          visto: false,
        },
        {
          cita: "Es arrogancia hablar de todo y no querer oír nada.",
          how_to_apply:
            "Saber escuchar es el primer precepto del hombre sabio.",
          visto: false,
        },
        {
          cita: "Salud piden los hombres a los dioses en sus oraciones, pero no se percatan de que tienen en sí mismos control sobre ella y en que, como hacen por su desenfreno lo contrario de lo debido, se convierten en traidores de su salud por sus propios apetitos.",
          how_to_apply:
            "De nada sirve delegar nuestra salud a ningún ente supremo.",
          visto: false,
        },
        {
          cita: "Nada existe excepto átomos y espacio vacío; todo lo demás son opiniones.",
          how_to_apply:
            "Lo único innegable son las partículas que forman la materia.",
          visto: false,
        },
        {
          cita: "La crianza de los hijos es asunto resbaladizo; se consigue un éxito plagado de disputas y desvelos o un fracaso que no es superable por ningún otro dolor.",
          how_to_apply:
            "Sobre la responsabilidad de los progenitores en la ingrata tarea de la crianza.",
          visto: false,
        },
        {
          cita: "Discreto es quien no se aflige por lo que no tiene, sino que se alegra por lo que tiene.",
          how_to_apply: "Su definición sobre la discreción.",
          visto: false,
        },
        {
          cita: "La amistad de un hombre sabio es mejor que la de todos los tontos.",
          how_to_apply:
            "Un gran amigo inteligente vale más que todos los mezquinos.",
          visto: false,
        },
        {
          cita: "Quien se halla enteramente dominado por la riqueza nunca podría ser justo.",
          how_to_apply:
            "La austeridad es un valor para el hombre sensato y justo.",
          visto: false,
        },
      ],
    },
    {
      name: "Sócrates (469-399 a.C.)",
      filosofy: "Filosofía clásica griega",
      lugarOrigen: "Grecia",
      urlImg: "/src/assets/imgs/filosofos/socrates.webp",
      citas: [
        {
          cita: "Un hombre honesto es siempre un niño",
          how_to_apply:
            "Para Sócrates la honestidad estaba muy relacionada con el modo en el que los niños siempre se hacen preguntas sobre lo que saben y están abiertos constantemente a la posibilidad de admitir que lo que creían cierto no lo es.",
          visto: false,
        },
        {
          cita: "El conocimiento empieza en el asombro",
          how_to_apply:
            "La punzada de sentir que hay una parte de la realidad que no entendemos era, para Sócrates, aquello que nos impulsa a adquirir conocimiento.",
          visto: false,
        },
        {
          cita: "Una vida que no ha sido examinada no merece ser vivida",
          how_to_apply:
            "La filosofía era para Sócrates uno de los pilares de la experiencia vital, tal y como se expresa en esta frase.",
          visto: false,
        },
        {
          cita: "Habla para que yo pueda conocerte",
          how_to_apply:
            "El modo de ser de cada persona, y el modo con el que ve el mundo, puede conocerse mediante el diálogo, un contexto en el que dos personas se relacionan y pueden formularse preguntas.",
          visto: false,
        },
        {
          cita: "El amigo debe ser como el dinero; antes de necesitarlo, es necesario saber su valor",
          how_to_apply:
            "Una de las frases de Sócrates acerca de la amistad con un sentido más pragmático.",
          visto: false,
        },
        {
          cita: "El único conocimiento verdadero es saber que no sabes nada",
          how_to_apply:
            "Una de las frases de Sócrates más conocidas, expresa la humildad con la que el filósofo se enfrentaba a su tarea y la radicalidad con la que entendía que todos los aspectos de la realidad deben ser cuestionados.",
          visto: false,
        },
        {
          cita: "No la vida, sino la buena vida, es lo que debe ser más valorado",
          how_to_apply:
            "La vida debe ser valorada cualitativamente para poder apreciarla bien, según este filósofo griego.",
          visto: false,
        },
        {
          cita: "Las almas ruines solo se dejan conquistar mediante regalos",
          how_to_apply:
            "Sócrates habla aquí acerca de los ánimos interesados y oportunistas que guían ciertas relaciones.",
          visto: false,
        },
        {
          cita: "Solo existe un bien: el conocimiento. Solo hay un mal: la ignorancia",
          how_to_apply:
            "Sócrates relacionaba la obtención de conocimiento con la moral, algo que también hizo su pupilo Platón.",
          visto: false,
        },
        {
          cita: "Teme el amor de una mujer más que el odio del hombre",
          how_to_apply:
            "La misoginia de los primeros filósofos griegos fue prácticamente una constante, aunque en su contexto histórico era algo muy extendido.",
          visto: false,
        },
        {
          cita: "El grado sumo del saber es examinar el por qué",
          how_to_apply:
            "Este tipo de pregunta era el motor que permitía que Sócrates indagase en los grandes temas que se proponía estudiar.",
          visto: false,
        },
        {
          cita: "La belleza es una efímera tiranía",
          how_to_apply:
            "Lo bello ocasiona expectativas y pasiones que generan opresión y violencia.",
          visto: false,
        },
        {
          cita: "El mayor de todos los misterios es el hombre",
          how_to_apply:
            "La propia existencia del hombre era tan enigmática que filósofos como Sócrates se veían impulsados a hacerse preguntas ambiciosas.",
          visto: false,
        },
        {
          cita: "Es peor llevar a cabo una injusticia que cometerla, ya que quien la comete se transforma en injusto pero el otro no",
          how_to_apply:
            "Para Sócrates, la naturaleza de cada persona está constituida por sus actos, no por lo que dice. Por eso, nuestras acciones sirven para transformarnos.",
          visto: false,
        },
        {
          cita: "La muerte podría ser la más grande de las bendiciones",
          how_to_apply:
            "Incluso la concepción habitual de la muerte puede ser revisada filosóficamente, algo que queda plasmado en esta frase de Sócrates.",
          visto: false,
        },
        {
          cita: "Ni los reyes ni los gobernantes llevan el cetro, sino los que saben mandar",
          how_to_apply:
            "Un título formal no es garantía de poder, según Sócrates.",
          visto: false,
        },
        {
          cita: "Un hombre desinhibido no puede generar afecto, porque resulta difícil de tratar y le cierra la puerta a la amistad",
          how_to_apply:
            "Para este filósofo, perseguir los placeres inmediatos y apreciar las grandes pasiones nos vuelve individualistas y distantes.",
          visto: false,
        },
        {
          cita: "No hay que dejar que crezca la hierba en el camino de la amistad",
          how_to_apply:
            "Cultivar las amistades era algo que, para Sócrates, debía ser abordado de forma activa, sin dejar que pase el tiempo y la relación se deteriore.",
          visto: false,
        },
        {
          cita: "Dejad que quien vaya a mover el mundo primero se mueva él mismo",
          how_to_apply:
            "Una llamada a no prestar oídos a personas que clamen que van a promover grandes cambios animando a que sean otros quienes inicien esta tarea.",
          visto: false,
        },
        {
          cita: "Una moral que se basa en valores emocionales relativos es una mera ilusión",
          how_to_apply:
            "Sócrates estaba muy enfrentado al relativismo de los sofistas, y creía que la moral debía estar fundamentada en principios bien asentados racionalmente.",
          visto: false,
        },
        {
          cita: "Deseo que la gente ordinaria tuviese el poder ilimitado de hacer el mal y, después, el poder ilimitado de hacer el bien",
          how_to_apply:
            "Como la moral se entrena mediante los actos, verse envuelto en situaciones con un marcado valor positivo o negativo ayudaría a asentar principios éticos sólidos.",
          visto: false,
        },
        {
          cita: "Solo Dios es el sabio definitivo",
          how_to_apply:
            "Una de las frases de Aristóteles sobre la obtención de conocimiento. Como los seres humanos están siempre sometidos a la cantidad limitada de tiempo y espacio de la que disponen, solo alguien perteneciente al mundo de lo divino puede saberlo todo.",
          visto: false,
        },
        {
          cita: "Soy ciudadano no de Atenas o de Grecia, sino del mundo",
          how_to_apply:
            "El ánimo de establecer una moral universal y un método de obtención de conocimiento siempre válido, así como su rechazo del relativismo, hacían de Aristóteles una persona cuyo espacio vital era todo el mundo, y no solo una región.",
          visto: false,
        },
        {
          cita: "El pasado tiene sus códigos y costumbres",
          how_to_apply:
            "Todo aquello que vemos en retrospectiva está ligado a convenciones y protocolos que lo fijan al contexto histórico al que perteneció.",
          visto: false,
        },
        {
          cita: "Cualquiera que sostenga una opinión verdadera sobre un tema que no entiende es como un hombre ciego en el camino correcto",
          how_to_apply:
            "Haber llegado a una conclusión acertada no es garantía de que el proceso de razonamiento haya sido acertado.",
          visto: false,
        },
        {
          cita: "Los poetas no crean poesía a través de la sabiduría, sino a través de una especie de inspiración que puede ser encontrada en profetas o videntes, ya que pueden decir muchas cosas bellas sin saber lo que significan",
          how_to_apply:
            "Sócrates enfatiza la necesidad de crear conocimiento a través de la razón, son obedecer a criterios estéticos.",
          visto: false,
        },
        {
          cita: "Para encontrarte a ti mismo, piensa por ti mismo",
          how_to_apply:
            "Una frase de Sócrates a favor de la creación de un criterio propio mediante la reflexión.",
          visto: false,
        },
        {
          cita: "Cuando el debate se ha perdido, la calumnia es la herramienta del perdedor",
          how_to_apply:
            "Calumniar al contrario solo sirve para expresar frustración, no para debilitar al contrario.",
          visto: false,
        },
        {
          cita: "El lujo es pobreza artificial",
          how_to_apply:
            "Para esta filósofo la ostentación revela una necesidad banal por aparentar, lo cual revela un vacío.",
          visto: false,
        },
        {
          cita: "Desearía que el conocimiento fuese de ese tipo de cosas que fluyen desde el recipiente que está lleno hasta los que permanecen vacíos",
          how_to_apply:
            "Sócrates reflexiona sobre las implicaciones sociales de la escasez de conocimiento.",
          visto: false,
        },
      ],
    },
    {
      name: "Platón (427-348 a.C.)",
      filosofy: "Estoicismo",
      lugarOrigen: "Roma",
      urlImg: "/src/assets/imgs/filosofos/platon.webp",
      citas: [
        {
          cita: "Donde reina el amor sobran las leyes.",
          how_to_apply:
            "Una reflexión acerca del amor como cohesionador social.",
          visto: false,
        },
        {
          cita: "De noche, especialmente, es hermoso creer en la luz.",
          how_to_apply:
            "Una de las frases de Platón acerca de la fe durante tiempos difíciles.",
          visto: false,
        },
        {
          cita: "La mejor riqueza es contentarse viviendo con poco.",
          how_to_apply: "Platón hacía una apología constante de la humildad.",
          visto: false,
        },
        {
          cita: "Pensar es el diálogo del alma consigo misma.",
          how_to_apply:
            "Desde su perspectiva dualista, la vida mental pertenece a un plano de la realidad distinto al de la materia.",
          visto: false,
        },
        {
          cita: "La música es para el alma lo que la gimnasia para el cuerpo.",
          how_to_apply:
            "Una de las consideraciones más poéticas sobre la música.",
          visto: false,
        },
        {
          cita: "El conocimiento es la opinión cierta.",
          how_to_apply:
            "Platón aclara aquí cuál es la relación entre el conocimiento, ligado a la verdad, y las opiniones vulgares.",
          visto: false,
        },
        {
          cita: "El sabio querrá estar siempre con quien sea mejor que él.",
          how_to_apply:
            "Una de las características de las personas sabias es que se rodean de personas de las que pueden aprender, según este filósofo.",
          visto: false,
        },
        {
          cita: "No es en los hombres sino en las cosas donde hay que buscar la verdad.",
          how_to_apply:
            "Según el pensamiento de Platón, la verdad es algo independiente de las opiniones, existe más allá de lo que las personas crean.",
          visto: false,
        },
        {
          cita: "Mejor un poco que esté bien hecho, que una gran cantidad imperfecta.",
          how_to_apply:
            "Una de las propuestas de “mejor calidad que cantidad”.",
          visto: false,
        },
        {
          cita: "El objetivo de la educación es la virtud y la meta de convertirse en un buen ciudadano.",
          how_to_apply:
            "En las teorías de Platón, la educación tiene una función social clara.",
          visto: false,
        },
        {
          cita: "La civilización es el triunfo de la persuasión sobre la fuerza.",
          how_to_apply:
            "Una manera de entender el origen de la organización de vida propia de las civilizaciones.",
          visto: false,
        },
        {
          cita: "Estamos doblemente armados si luchamos con fe.",
          how_to_apply: "La fe entendida como un elemento empoderador.",
          visto: false,
        },
        {
          cita: "La valentía es saber qué es lo que no debemos temer.",
          how_to_apply:
            "Una definición de valentía centrada en el conocimiento.",
          visto: false,
        },
        {
          cita: "Las almas vulgares carecen de destino.",
          how_to_apply:
            "El destino puede ser visto como un camino que lleva hacia una meta.",
          visto: false,
        },
        {
          cita: "Existen tres clases de hombres: amantes de la sabiduría, amantes del honor, y amantes de la ganancia.",
          how_to_apply: "Una original clasificación de tipos de personas.",
          visto: false,
        },
        {
          cita: "El amor es sentir que el ser sagrado late dentro del ser querido.",
          how_to_apply:
            "Esta frase de Platón sobre el amor refleja su teoría de las ideas, relacionada con el concepto de amor platónico.",
          visto: false,
        },
        {
          cita: "La filosofía es la forma más alta que puede cobrar la de música.",
          how_to_apply:
            "Otra de las frases de Platón basadas en una definición poética.",
          visto: false,
        },
        {
          cita: "Una buena decisión se basa en conocimiento, no en números.",
          how_to_apply: "El conocimiento va más allá de las matemáticas.",
          visto: false,
        },
        {
          cita: "La ignorancia es la semilla de todo mal.",
          how_to_apply:
            "Para platón, el bien y el mal estaban equiparados a la sabiduría y la ignorancia, precisamente.",
          visto: false,
        },
        {
          cita: "Quien no es un buen sirviente no será un buen maestro.",
          how_to_apply:
            "Una reflexión sobre la necesidad de acumular experiencias.",
          visto: false,
        },
        {
          cita: "Los estados son como los hombres, nacen de sus mismos rasgos.",
          how_to_apply:
            "Antropomorfizar los Estados es una de las tendencias que Platón refleja en sus ideas.",
          visto: false,
        },
        {
          cita: "El hombre no puede practicar varias artes de forma exitosa.",
          how_to_apply:
            "Una reflexión sobre las capacidades limitadas y los recursos escasos con los que cuentan las personas.",
          visto: false,
        },
        {
          cita: "La valentía es una clase de salvación.",
          how_to_apply:
            "La existencia del coraje puede servir en sí misma para evitar situaciones no deseadas.",
          visto: false,
        },
        {
          cita: "Si buscamos el bien de nuestros semejantes encontraremos el nuestro.",
          how_to_apply: "Una sencilla pauta moral para hacer el bien.",
          visto: false,
        },
        {
          cita: "La sabiduría se convierte en mal si no apunta hacia la virtud.",
          how_to_apply:
            "El para qué se utiliza la sabiduría también cuenta desde una perspectiva ética.",
          visto: false,
        },
        {
          cita: "Las piedras más grandes no pueden quedar bien asentadas sin contar con las más pequeñas.",
          how_to_apply: "Una metáfora sobre las jerarquías.",
          visto: false,
        },
        {
          cita: "Cuando es la multitud la que ejerce su autoridad, es más cruel que los tiranos.",
          how_to_apply:
            "Una de las frases de Platón sobre el comportamiento social en multitudes.",
          visto: false,
        },
        {
          cita: "El comienzo es la parte más importante del recorrido.",
          how_to_apply:
            "Empezar es en sí uno de los grandes hitos del camino a recorrer.",
          visto: false,
        },
        {
          cita: "Cada lágrima derramada revela a los mortales una verdad.",
          how_to_apply:
            "La tristeza y los sentimientos negativos suelen estar provocados por hechos que nos chocan y nos ayudan a estructurar mejor las ideas.",
          visto: false,
        },
      ],
    },
    {
      name: "Aristóteles (384-322 a.C.)",
      filosofy: "Estoicismo",
      lugarOrigen: "Grecia",
      urlImg: "/src/assets/imgs/filosofos/aristoteles.webp",
      citas: [
        {
          cita: "La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica",
          how_to_apply:
            "El conocimiento es importante, pero si no lo ponemos en práctica no conseguiremos dominarlo.",
          visto: false,
        },
        {
          cita: "Considero más valiente al que conquista sus deseos que al que conquista a sus enemigos, ya que la victoria más dura es la victoria sobre uno mismo",
          how_to_apply:
            "Lograr lo que uno desea no siempre es fácil, hay que luchar contra el mundo y contra uno mismo.",
          visto: false,
        },
        {
          cita: "Ellos se desean mutuamente el bien en el mismo sentido",
          how_to_apply: "Una frase que invita al lector a la libre reflexión.",
          visto: false,
        },
        {
          cita: "Sólo hay felicidad donde hay virtud y esfuerzo serio, pues la vida no es un juego",
          how_to_apply:
            "Si nos esforzamos y logramos algo que deseamos, entonces encontraremos la felicidad.",
          visto: false,
        },
        {
          cita: "Un amigo fiel es un alma en dos cuerpos",
          how_to_apply: "La amistad auténtica es un regalo divino.",
          visto: false,
        },
        {
          cita: "Uno no sabe lo que sabe hasta que puede enseñar a otro",
          how_to_apply:
            "Si no dominamos algo, es imposible que lo enseñemos a otra persona.",
          visto: false,
        },
        {
          cita: "No basta decir solamente la verdad, más conviene mostrar la causa de la falsedad",
          how_to_apply:
            "Demostrar la mentira puede ser necesaria para que nos crean.",
          visto: false,
        },
        {
          cita: "La esperanza es el sueño del hombre despierto",
          how_to_apply:
            "La esperanza nos motiva a seguir adelante. A estar en movimiento a pesar de las dificultades.",
          visto: false,
        },
        {
          cita: "La verdadera felicidad consiste en hacer el bien",
          how_to_apply:
            "Si no somos honestos y honrados, difícilmente seremos felices.",
          visto: false,
        },
        {
          cita: "La amistad es un alma que habita en dos cuerpos; un corazón que habita en dos almas.",
          how_to_apply:
            "Un bonito juego de palabras sobre la amistad y el amor entre amigos.",
          visto: false,
        },
        {
          cita: "El amigo es otro yo. Sin amistad el hombre no puede ser feliz",
          how_to_apply:
            "La amistad es una de las fuentes de felicidad. Un amigo auténtico es una extensión de nosotros mismos.",
          visto: false,
        },
        {
          cita: "Lo que con mucho trabajo se adquiere, más se ama",
          how_to_apply:
            "El esfuerzo hace que valoremos las cosas cuando las tengamos.",
          visto: false,
        },
        {
          cita: "Es de importancia para quien desee alcanzar una certeza en su investigación, el saber dudar a tiempo",
          how_to_apply: "La duda puede hacernos reflexionar y crecer.",
          visto: false,
        },
        {
          cita: "El castigo del embustero es no ser creído, aun cuando diga la verdad",
          how_to_apply:
            "Una frase irónica sobre los mentirosos y sobre su castigo.",
          visto: false,
        },
        {
          cita: "La amistad perfecta es la de los buenos y de aquellos que se asemejan por la virtud",
          how_to_apply:
            "Otra cita de Aristóteles sobre la amistad y como la perfección en la relación se basa en la honradez.",
          visto: false,
        },
        {
          cita: "Se piensa que lo justo es lo igual, y así es; pero no para todos, sino para los iguales. Se piensa por el contrario que lo justo es lo desigual, y así es, pero no para todos, sino para los desiguales.",
          how_to_apply:
            "Decidimos lo que es bueno o malo por consenso, pero también por interés.",
          visto: false,
        },
        {
          cita: "Algunos creen que para ser amigos basta con querer, como si para estar sano bastara con desear la salud",
          how_to_apply:
            "La amistad hay que trabajarla, no solamente hay que sentir cariño.",
          visto: false,
        },
        {
          cita: "El ignorante afirma, el sabio duda y reflexiona",
          how_to_apply:
            "La sabiduría se encuentra en la reflexión y en cuestionarse las cosas.",
          visto: false,
        },
        {
          cita: "El hombre solitario es una bestia o un dios",
          how_to_apply:
            "Una cita de Aristóteles que hace referencia a la soledad.",
          visto: false,
        },
        {
          cita: "Nunca se alcanza la verdad total, ni nunca se está totalmente alejado de ella",
          how_to_apply: "Las verdades son relativas, como dice Aristóteles.",
          visto: false,
        },
        {
          cita: "Cualquiera puede enfadarse, eso es algo muy sencillo. Pero enfadarse con la persona adecuada, en el grado exacto, en el momento oportuno, con el propósito justo y del modo correcto, eso, ciertamente, no resulta tan sencillo",
          how_to_apply:
            "Todos nos enfadamos, y expresarlo incorrectamente puede traernos problemas.",
          visto: false,
        },
        {
          cita: "El amigo de todo el mundo no es un amigo",
          how_to_apply:
            "No es lo mismo un amigo que una persona que es simpática con todo el mundo.",
          visto: false,
        },
        {
          cita: "Es ignorancia no saber distinguir entre lo que necesita demostración y lo que no la necesita",
          how_to_apply:
            "Hay cosas que no necesitan ser explicadas. Un acto vale más que mil palabras.",
          visto: false,
        },
        {
          cita: "La finalidad del arte es dar cuerpo a la esencia secreta de las cosas, no el copiar su apariencia",
          how_to_apply: "El arte es creatividad, no un plagio.",
          visto: false,
        },
        {
          cita: "Es un principio indiscutible que para saber mandar bien, es preciso saber obedecer",
          how_to_apply:
            "Cuando uno lo ha vivido en sus propias carnes, entonces puede hacer algo con conocimiento.",
          visto: false,
        },
        {
          cita: "La sabiduría es un adorno en la prosperidad y un refugio en la adversidad",
          how_to_apply:
            "La sabiduría nos ayuda a actuar en los momentos difíciles.",
          visto: false,
        },
        {
          cita: "El alma es aquello por lo que vivimos, sentimos y pensamos",
          how_to_apply:
            "Lo que llevamos en el alma es nuestra motivación, nuestro motor para movernos.",
          visto: false,
        },
        {
          cita: "No se puede ser y no ser algo al mismo tiempo y bajo el mismo aspecto",
          how_to_apply: "Una frase que habla sobre la hipocresía.",
          visto: false,
        },
        {
          cita: "Tiempo es la medida del movimiento entre dos instantes",
          how_to_apply: "Aristóteles, reflexionando sobre lo qué es el tiempo.",
          visto: false,
        },
        {
          cita: "En realidad vivir como hombre significa elegir un blanco -honor, gloria, riqueza, cultura- y apuntar hacia él con toda la conducta, pues no ordenar la vida a un fin es señal de gran necedad",
          how_to_apply:
            "Las personas nos movemos por objetivos y por eso luchamos por ellos.",
          visto: false,
        },
      ],
    },
    {
      name: "Epicuro (341-270 a.C.)",
      filosofy: "Estoicismo",
      lugarOrigen: "Grecia",
      urlImg: "/src/assets/imgs/filosofos/epicuro.jpg",
      citas: [
        {
          cita: "Los bienes son para aquellos que saben disfrutarlos.",
          how_to_apply:
            "De nada sirve poseer riquezas si no se es capaz de ser más feliz.",
          visto: false,
        },
        {
          cita: "El más grande fruto de la autosuficiencia es la libertad.",
          how_to_apply:
            "No depender de nada ni de nadie nos garantiza poder ser dueños de nuestra propia existencia.",
          visto: false,
        },
        {
          cita: "Toda amistad es deseable por sí misma.",
          how_to_apply:
            "Gran amante de las relaciones interpersonales, Epicuro describía así la dicha de tener un buen amigo.",
          visto: false,
        },
        {
          cita: "¿Quieres ser rico? Pues no te afanes en aumentar tus bienes, sino en disminuir tu codicia.",
          how_to_apply: "Una oda a la austeridad y a la discreción.",
          visto: false,
        },
        {
          cita: "¿Dios está dispuesto a prevenir la maldad pero no puede? Entonces no es omnipotente. ¿No está dispuesto a prevenir la maldad, aunque podría hacerlo? Entonces es perverso. ¿Está dispuesto a prevenirla y además puede hacerlo? Si es así, ¿por qué hay maldad en el mundo? ¿No será que no está dispuesto a prevenirla ni tampoco puede hacerlo?",
          how_to_apply:
            "Una reflexión que pone en jaque la idea de un ser divino.",
          visto: false,
        },
        {
          cita: "Vive oculto.",
          how_to_apply: "Elogio a la discreción, llevada al extremo.",
          visto: false,
        },
        {
          cita: "La filosofía es una actividad que con discursos y razonamientos procura la vida feliz.",
          how_to_apply:
            "Su humilde definición sobre la filosofía, alejada de cualquier pretensión trascendental.",
          visto: false,
        },
        {
          cita: "Nada es suficiente para quien poco es lo suficiente.",
          how_to_apply:
            "Una de esas frases de Epicuro que nos invita a reflexionar.",
          visto: false,
        },
        {
          cita: "El placer es el bien primero. Es el comienzo de toda preferencia y de toda aversión. Es la ausencia del dolor en el cuerpo y la inquietud en el alma.",
          how_to_apply: "Su definición sobre el placer: la ausencia de dolor.",
          visto: false,
        },
        {
          cita: "El que se olvida de los bienes gozados en el pasado es ya viejo hoy.",
          how_to_apply: "La memoria es inherente a la felicidad.",
          visto: false,
        },
        {
          cita: "Debemos buscar a alguien con quien comer y beber antes de buscar algo que comer y beber, pues comer solo es llevar la vida de un león o un lobo.",
          how_to_apply:
            "La compañía de personas buenas y afables es la razón de vivir.",
          visto: false,
        },
        {
          cita: "A quien no contenta lo pequeño, nada le contentará.",
          how_to_apply: "Sobre la austeridad.",
          visto: false,
        },
        {
          cita: "Es impío no el que suprime a los Dioses, sino el que los conforma a las opiniones de los mortales.",
          how_to_apply:
            "La noción humana de Dios siempre será pobre e incompleta.",
          visto: false,
        },
        {
          cita: "¿Dioses? Tal vez los haya. Ni lo afirmo ni lo niego, porque no lo sé ni tengo medios para saberlo. Pero sé, porque esto me lo enseña diariamente la vida, que si existen ni se ocupan ni se preocupan de nosotros.",
          how_to_apply:
            "Una visión escéptica acerca de la existencia de entes divinos.",
          visto: false,
        },
        {
          cita: "No tenemos tanta necesidad de ayuda de parte de los amigos, cuanto de la certeza de la ayuda.",
          how_to_apply:
            "Saber que alguien está ahí para ayudarnos es ciertamente reconfortante.",
          visto: false,
        },
        {
          cita: "El que dice que todo acontece por necesidad nada puede objetar al que niega que todo acontece por necesidad, pues esto mismo afirma que acontece por necesidad.",
          how_to_apply: "Enrevesada explicación del gran Epicuro.",
          visto: false,
        },
        {
          cita: "Así como el sabio no escoge los alimentos más abundantes, sino los más sabrosos, tampoco ambiciona la vida más prolongada, sino la más intensa.",
          how_to_apply:
            "Una gran reflexión sobre cómo vivir intensamente la vida.",
          visto: false,
        },
        {
          cita: "Juzgamos mejores que los placeres muchos dolores porque se consigue para nosotros un placer mayor.",
          how_to_apply: "Sobre el placer y cómo sacarle partido.",
          visto: false,
        },
        {
          cita: "Es absurdo pedir a los dioses lo que cada uno es capaz de procurarse por sí mismo.",
          how_to_apply:
            "Otra muestra de su escepticismo por los milagros divinos.",
          visto: false,
        },
        {
          cita: "La filosofía es una actividad que con discursos y razonamientos procura la vida feliz.",
          how_to_apply:
            "Sobre el objetivo último de esta disciplina esencial del conocimiento.",
          visto: false,
        },
        {
          cita: "El necio, entre otros males, posee éste: siempre trata de comenzar su vida.",
          how_to_apply: "En otras palabras, no aprende de la experiencia.",
          visto: false,
        },
        {
          cita: "El que no considera lo que tiene como la riqueza más grande, es desdichado, aunque sea dueño del mundo.",
          how_to_apply: "Las personas agradecidas son las más felices.",
          visto: false,
        },
        {
          cita: "La muerte es una quimera: porque mientras yo existo, no existe la muerte; y cuando existe la muerte, ya no existo yo.",
          how_to_apply:
            "Una de las frases de Epicuro más célebres y recordadas.",
          visto: false,
        },
        {
          cita: "Acostúmbrate a pensar que la muerte para nosotros no es nada, porque todo el bien y todo el mal residen en las sensaciones, y precisamente la muerte consiste en estar privado de sensación. Por tanto, la recta convicción de que la muerte no es nada para nosotros nos hace agradable la mortalidad de la vida; no porque le añada un tiempo indefinido, sino porque nos priva de un afán desmesurado de inmortalidad.",
          how_to_apply:
            "Excepcional aforismo de Epicuro acerca de la no existencia.",
          visto: false,
        },
        {
          cita: "El sabio no se esforzará en dominar el arte de la retórica y no intervendrá en política ni querrá ser rey.",
          how_to_apply:
            "Todo artificio y reconocimiento social están de más, según el filósofo griego.",
          visto: false,
        },
        {
          cita: "Lo insaciable no es la panza, como el vulgo afirma, sino la falsa creencia de que la panza necesita hartura infinita.",
          how_to_apply:
            "Nuestra percepción sobre las necesidades es la que crea la necesidad.",
          visto: false,
        },
        {
          cita: "Nadie, al ver el mal, lo elige, sino que se deja engañar por él, como si fuera un bien respecto a un mal peor.",
          how_to_apply: "Sobre la seducción imperceptible del mal.",
          visto: false,
        },
        {
          cita: "Quien un día se olvida de lo bien que lo ha pasado se ha hecho viejo ese mismo día.",
          how_to_apply: "Una muestra de su hedonismo vitalista.",
          visto: false,
        },
        {
          cita: "Retírate dentro de ti mismo, sobre todo cuando necesites compañía.",
          how_to_apply:
            "La necesidad de compartir el tiempo con otras personas es síntoma de debilidad.",
          visto: false,
        },
        {
          cita: "Todo el mundo se va de la vida como si acabara de nacer.",
          how_to_apply:
            "Desvalidos, desprotegidos y desnudos. Así finaliza nuestra existencia.",
          visto: false,
        },
      ],
    },
    {
      name: "Tomás de Aquino (1225-1274)",
      filosofy: "Filosofía escolástica",
      lugarOrigen: "Italia",
      urlImg: "/src/assets/imgs/filosofos/tomasaquino.webp",
      citas: [
        {
          cita: "El bien puede existir sin el mal, mientras que el mal no puede existir sin el bien.",
          how_to_apply:
            "De alguna u otra forma cada polo necesita de la sombra del otro.",
          visto: false,
        },
        {
          cita: "Teme al hombre de un solo libro.",
          how_to_apply:
            "Se refiere a las personas que tienen un ideal fijo y lo muestran con franqueza.",
          visto: false,
        },
        {
          cita: "Los seres dotados de inteligencia desean existir siempre y un deseo natural no puede existir en vano.",
          how_to_apply: "Es por eso que trascienden a través de sus obras.",
          visto: false,
        },
        {
          cita: "El estudioso es el que lleva a los demás a lo que él ha comprendido: la verdad.",
          how_to_apply:
            "Valora el poder de las personas que dedican su vida al estudio ya que resuenan en los demás.",
          visto: false,
        },
        {
          cita: "Existen bienes particulares que no poseen relación necesaria con la felicidad, ya que sin ellos uno puede ser feliz. A tales bienes no se adhiere la voluntad necesariamente.",
          how_to_apply: "Y ese tipo de cosas no aparecen sin forzarlas.",
          visto: false,
        },
        {
          cita: "Para ser voluntario un acto, ha de proceder de un principio intrínseco con algún conocimiento del fin.",
          how_to_apply:
            "Si vamos a ofrecer nuestra ayuda debe ser de libre y espontánea.",
          visto: false,
        },
        {
          cita: "Si el objetivo más alto de un capitán fuera preservar su barco, lo mantendría en el puerto por siempre.",
          how_to_apply:
            "Si no arriesgamos no veremos los resultados de lo que nos propongamos.",
          visto: false,
        },
        {
          cita: "Creer es un acto del entendimiento que asiente a la verdad divina por imperio de la voluntad movida por Dios mediante la gracia.",
          how_to_apply: "Reafirmación de su fe.",
          visto: false,
        },
        {
          cita: "La fe se refiere a las cosas que no se ven, y la esperanza a las cosas que no están al alcance de la mano.",
          how_to_apply:
            "Una forma sencilla de conceptualizar estos dos elementos.",
          visto: false,
        },
        {
          cita: "El derecho es lo justo o ajustado a otro conforme cierta clase de igualdad.",
          how_to_apply:
            "No todos tenemos la misma perspectiva de lo que es justo.",
          visto: false,
        },
        {
          cita: "La ley es la prescripción de la razón, ordenada al bien común, dada por aquel que tiene a su cargo el cuidado de la comunidad.",
          how_to_apply: "Situaciones de convivencia civil.",
          visto: false,
        },
        {
          cita: "Dios ama todo lo existente.",
          how_to_apply: "Centra la razón de su fe.",
          visto: false,
        },
        {
          cita: "Ya que las ciencias particulares dejan sin tratar algunas cosas que necesitan investigación, se hace necesaria la existencia de una ciencia universal y primera que estudie esas cuestiones de las que no se ocupan las ciencias particulares.",
          how_to_apply:
            "Acerca del estudio de diferentes tipos de temas que en su época eran poco tomados en cuenta.",
          visto: false,
        },
        {
          cita: "El amor divino, sin comparación, es fuerza de fusión, pues quiere el bien para los demás.",
          how_to_apply: "Habla sobre el amor incondicional.",
          visto: false,
        },
        {
          cita: "En esto consiste propiamente amar a alguien: querer para él el bien. Por eso, en aquello que alguien ama, quiere un bien para sí mismo.",
          how_to_apply: "Acerca de ese amor que alimenta a ambas personas.",
          visto: false,
        },
        {
          cita: "La esencia del amor es hacerse amigo de Dios, en tanto que Él es feliz y la fuente de la felicidad.",
          how_to_apply: "Centra en el amor a Dios, como expresión de su fe.",
          visto: false,
        },
        {
          cita: "Es preciso admitir algo que sea absolutamente necesario, cuya causa de su necesidad no esté en otro, sino que él sea causa de la necesidad de los demás. Todos le dicen Dios.",
          how_to_apply: "Hace apología del cristianismo.",
          visto: false,
        },
        {
          cita: "La existencia de Dios es evidente en sí misma, pero no para nosotros, por tanto, debe demostrarse.",
          how_to_apply:
            "Lucha e importancia de abrir un camino hacia la religión.",
          visto: false,
        },
        {
          cita: "Jesucristo es la imagen de Dios en lo humano.",
          how_to_apply:
            "Reafirma la idea de que Jesús emana directamente de Dios, algo que caracteriza al cristianismo y su concepción de lo divino.",
          visto: false,
        },
        {
          cita: "La espiritualidad cristiana no tiene más norma que la de seguir a Cristo maestro.",
          how_to_apply: "Otra frase dedicada a la fe religiosa.",
          visto: false,
        },
        {
          cita: "Contemplar y dar a los demás lo contemplado.",
          how_to_apply: "Enfatiza la importancia de la solidaridad.",
          visto: false,
        },
        {
          cita: "En sí misma la misericordia es la más grande de las virtudes, ya que a ella pertenece volcarse en otros y, más aún, socorrer sus carencias.",
          how_to_apply: "Sobre dogmas basados en la misericordia.",
          visto: false,
        },
        {
          cita: "Esto es peculiar del superior, y por eso se tiene como propio de Dios tener misericordia, en la cual resplandece su omnipotencia de modo máximo.",
          how_to_apply:
            "Humaniza a Dios, y ese peso lo traslada al deber de cada persona.",
          visto: false,
        },
        {
          cita: "Si alguien no ama la verdad no es hombre.",
          how_to_apply:
            "La verdad como rasgo inherente y puro de la humanidad.",
          visto: false,
        },
        {
          cita: "La raíz de la libertad se encuentra en la razón. No hay libertad sino en la verdad.",
          how_to_apply: "La mentira siempre nos esclaviza.",
          visto: false,
        },
        {
          cita: "Educar es promover a la prole el estado perfecto del hombre en cuanto hombre, esto es, al estado de virtud.",
          how_to_apply:
            "Para Santo Tomás de Aquino, la dedicación al estudio era lo más importante después de la fe.",
          visto: false,
        },
        {
          cita: "El obrar sigue al ser.",
          how_to_apply: "Se refiere a la búsqueda de.",
          visto: false,
        },
        {
          cita: "La ley es la prescripción de la razón, ordenada al bien común, dada por aquel que tiene a su cargo el cuidado de la comunidad.",
          how_to_apply: "Invita a la reflexión profunda.",
          visto: false,
        },
        {
          cita: "El ser de las cosas, no su verdad, es la causa de la verdad en el entendimiento.",
          how_to_apply:
            "Alude a la esencia de todo lo que existe como lo que importa.",
          visto: false,
        },
        {
          cita: "Es evidente que existe la verdad. Porque el que niega que existe la verdad, conoce que la verdad existe. Si, pues, no existe la verdad, es verdad que la verdad no existe.",
          how_to_apply:
            "Lo que se niega es porque de alguna forma se está tomando como algo que existe.",
          visto: false,
        },
      ],
    },
    {
      name: "René Descartes (1596-1650)",
      filosofy: "Racionalismo",
      lugarOrigen: "Francia",
      urlImg: "/src/assets/imgs/filosofos/descartes.jpg",
      citas: [
        {
          cita: "Cogito, ergo sum",
          how_to_apply:
            "Pienso, luego existo. Existimos ya que somos capaces de pensar, siendo el conocimiento de nuestra propia existencia demostrada por esta misma capacidad.",
          visto: false,
        },
        {
          cita: "Todo lo complejo puede dividirse en partes simples",
          how_to_apply:
            "Descartes propone en su método reducir cada problema a sus elementos más básicos y comprobables a la luz de la razón, las ideas simples.",
          visto: false,
        },
        {
          cita: "Para investigar la verdad es preciso dudar, en cuanto sea posible, de todas las cosas",
          how_to_apply:
            "La duda es el principal método para alcanzar la verdad, en la medida en que somos capaces de conseguirla.",
          visto: false,
        },
        {
          cita: "Sería absurdo que nosotros, cosas finitas, tratáramos de determinar las cosas infinitas",
          how_to_apply:
            "El ser humano es limitado y no puede comprender aspectos infinitos o divinos.",
          visto: false,
        },
        {
          cita: "Daría todo lo que sé por la mitad de lo que ignoro",
          how_to_apply:
            "Reconoce la limitación de nuestro conocimiento y la necesidad de seguir aprendiendo.",
          visto: false,
        },
        {
          cita: "Apenas hay algo dicho por uno cuyo opuesto no sea afirmado",
          how_to_apply:
            "Refleja la diversidad de perspectivas y opiniones en el mundo.",
          visto: false,
        },
        {
          cita: "La razón y el juicio es la única cosa que nos hace hombres y nos distingue de los animales",
          how_to_apply:
            "Descartes consideraba que el raciocinio diferenciaba al ser humano de los animales.",
          visto: false,
        },
        {
          cita: "Es prudente no fiarse por entero de quienes nos han engañado una vez",
          how_to_apply: "Invita a dudar de lo percibido para evitar engaños.",
          visto: false,
        },
        {
          cita: "La matemática es la ciencia del orden y la medida, de bellas cadenas de razonamientos, todos sencillos y fáciles",
          how_to_apply:
            "Descartes consideraba las matemáticas como la principal ciencia en la cual poder basar todo el conocimiento.",
          visto: false,
        },
        {
          cita: "La filosofía es la que nos distingue de los salvajes y bárbaros; las naciones son tanto más civilizadas y cultas cuanto mejor filosofan sus hombres",
          how_to_apply:
            "El papel de la filosofía en el avance de la civilización y la cultura.",
          visto: false,
        },
        {
          cita: "Despréndete de todas las impresiones de los sentidos y de la imaginación y no te fíes sino de la razón",
          how_to_apply: "La razón es fundamental para discernir la verdad.",
          visto: false,
        },
        {
          cita: "Duerma yo o esté despierto, dos más tres serán siempre cinco, y el cuadrado no tendrá más que cuatro lados",
          how_to_apply: "Las verdades matemáticas son absolutas e inmutables.",
          visto: false,
        },
        {
          cita: "Vivir sin filosofar es, propiamente, tener los ojos cerrados sin tratar de abrirlos jamás",
          how_to_apply:
            "La importancia de la filosofía como herramienta para comprender el mundo.",
          visto: false,
        },
        {
          cita: "Mejor que buscar la verdad sin método es no pensar nunca en ella, porque los estudios desordenados y las meditaciones oscuras turban las luces naturales de la razón y ciegan la inteligencia",
          how_to_apply:
            "La necesidad de un método claro y ordenado para buscar la verdad.",
          visto: false,
        },
        {
          cita: "Muchas veces sucede que no hay tanta perfección en las obras compuestas de varios trozos y hechas por las manos de muchos maestros como en aquellas en que uno solo ha trabajado",
          how_to_apply:
            "La unicidad de visión y esfuerzo puede llevar a una mayor perfección en una obra.",
          visto: false,
        },
        {
          cita: "Por método entiendo aquellas reglas ciertas y fáciles cuya rigurosa observación impide que se suponga verdadero lo falso, y hace que sin consumirse en esfuerzos inútiles y aumentando gradualmente su ciencia el espíritu llegue al verdadero conocimiento de todas las cosas accesibles a la inteligencia humana",
          how_to_apply:
            "Una definición del método como reglas claras que conducen al conocimiento verdadero.",
          visto: false,
        },
        {
          cita: "No admitas jamás cosa alguna como verdad sin haberla conocido con evidencia que así era; es decir, evitar con sumo cuidado la precipitación y la prevención, y no admitir en mis juicios nada más que lo se presente tan clara y distintivamente a mi espíritu, que no tuviese motivo alguno para ponerlo en duda",
          how_to_apply:
            "La importancia de la evidencia y la claridad en la búsqueda de la verdad.",
          visto: false,
        },
        {
          cita: "Un estado es mejor gobernado si tiene pocas leyes y esas leyes son minuciosamente observadas",
          how_to_apply:
            "La necesidad de leyes claras y pocas para un buen gobierno.",
          visto: false,
        },
        {
          cita: "La multitud de leyes frecuentemente presta excusas a los vicios",
          how_to_apply:
            "El exceso de leyes puede generar confusión y facilitar la transgresión de las normas.",
          visto: false,
        },
        {
          cita: "La primera máxima fue nunca aceptar algo real hasta haberla conocido de tal forma que no dudara de ella",
          how_to_apply: "La importancia de la certeza en el conocimiento.",
          visto: false,
        },
        {
          cita: "En mi humilde opinión, todas las cosas de este mundo ocurren matemáticamente",
          how_to_apply:
            "La visión de Descartes sobre el orden y la regularidad del universo.",
          visto: false,
        },
        {
          cita: "No hay alma, por poco noble que sea, que permanezca tan aferrada a los objetos de los sentidos que, a veces, no se aparte de ellos para desear un bien mayor",
          how_to_apply:
            "La capacidad del ser humano de elevarse por encima de los placeres sensuales en busca de un bien superior.",
          visto: false,
        },
        {
          cita: "No hay espíritu por necio y grosero que sea incapaz de adquirir las más altas virtudes si se le conduce como es menester",
          how_to_apply:
            "Todos pueden alcanzar la virtud si se les guía adecuadamente.",
          visto: false,
        },
        {
          cita: "No basta con tener buen ingenio, lo principal es aplicarlo bien",
          how_to_apply: "La importancia de la acción sobre el mero talento.",
          visto: false,
        },
        {
          cita: "Leer un libro enseña más que hablar con su autor, porque el autor, en el libro, solo ha puesto sus mejores pensamientos",
          how_to_apply:
            "La reflexión y la selección de ideas en la escritura frente a la comunicación oral.",
          visto: false,
        },
        {
          cita: "Las mentes más grandes son capaces de los mayores vicios, así como de las mayores virtudes",
          how_to_apply:
            "La capacidad de la mente humana para el bien y el mal.",
          visto: false,
        },
        {
          cita: "A excepción de nuestros propios pensamientos, no hay nada absolutamente en nuestro poder",
          how_to_apply:
            "La autonomía del pensamiento frente a otras influencias externas.",
          visto: false,
        },
        {
          cita: "Para saber lo que la gente realmente piensa presta atención a lo que hacen en lugar de a lo que dicen",
          how_to_apply:
            "La importancia de los actos sobre las palabras para conocer a las personas.",
          visto: false,
        },
        {
          cita: "No ser útil a nadie equivale a no valer nada",
          how_to_apply:
            "La necesidad de contribuir al bien común para encontrar sentido a la propia existencia.",
          visto: false,
        },
        {
          cita: "Cada vez que me han ofendido, trato de elevar mi alma tan alto que el delito no pueda alcanzarme",
          how_to_apply:
            "La capacidad de superar las ofensas y elevarse por encima de ellas.",
          visto: false,
        },
      ],
    },
    {
      name: "John Locke (1632-1704)",
      filosofy: "Racionalismo",
      lugarOrigen: "Inglaterra",
      urlImg: "/src/assets/imgs/filosofos/JohnLocke.png",
      citas: [
        {
          cita: "La fortaleza es la protección de las demás virtudes",
          how_to_apply:
            "Uno tiene que ser fuerte para conseguir sus objetivos.",
          visto: false,
        },
        {
          cita: "Las leyes se hicieron para los hombres y no los hombres para las leyes",
          how_to_apply:
            "Las leyes deben proteger al ciudadano y preservar su integridad.",
          visto: false,
        },
        {
          cita: "Donde no hay propiedad no hay justicia",
          how_to_apply:
            "Férreo defensor de la propiedad, tanto privada como pública.",
          visto: false,
        },
        {
          cita: "Las acciones humanas son las intérpretes de nuestros pensamientos",
          how_to_apply: "Somos lo que hacemos y no cómo o lo que pensamos.",
          visto: false,
        },
        {
          cita: "Todo aquello que nos preocupe nos tendrá controlados",
          how_to_apply: "Hay que desprenderse de aquello que nos limita.",
          visto: false,
        },
        {
          cita: "El hombre nace libre pero en todos lados está encadenado",
          how_to_apply:
            "En su época, pocos derechos tenían los ciudadanos en sus países.",
          visto: false,
        },
        {
          cita: "La felicidad humana es una disposición de la mente, no una condición de las circunstancias",
          how_to_apply:
            "Ser feliz depende de la psicología individual, no de lo que nos rodea.",
          visto: false,
        },
        {
          cita: "Una cosa es demostrar a un hombre que está equivocado, otra es situarlo en posesión de la verdad",
          how_to_apply:
            "Es muy difícil hacer cambiar de opinión a los demás, convencerles de otras ideas.",
          visto: false,
        },
        {
          cita: "Las personas somos camaleones, nuestro tono y el color de nuestro carácter se amolda a aquellos que están a nuestro alrededor",
          how_to_apply:
            "A menudo nos adecuamos según el escenario donde nos encontremos.",
          visto: false,
        },
        {
          cita: "Pensar amuebla la mente solo con materiales de conocimiento; es pensando que hacemos lo que leemos nuestro",
          how_to_apply:
            "Interesante reflexión de John Locke que nos instiga a pensar profundamente.",
          visto: false,
        },
        {
          cita: "Nadie tiene derecho sobre la propiedad de una persona excepto ella misma",
          how_to_apply:
            "Los hombres son libres y nadie puede privarlos de ello.",
          visto: false,
        },
        {
          cita: "Hay que perder la mitad del tiempo para poder emplear la otra mitad",
          how_to_apply:
            "Nunca se pierde el tiempo. Se harán las cosas de una manera u otra, pero siempre es una experiencia útil.",
          visto: false,
        },
        {
          cita: "El conocimiento es la única defensa ante el peligroso mundo",
          how_to_apply: "John Locke le daba esta importancia al intelecto.",
          visto: false,
        },
        {
          cita: "Los padres se preguntan por qué los arroyos son amargos, cuando ellos mismos envenenan la fuente",
          how_to_apply: "¿Crítica a la figura parental?",
          visto: false,
        },
        {
          cita: "El conocimiento de ningún hombre de aquí puede ir más allá de su experiencia",
          how_to_apply:
            "La experiencia no sólo es un grado, sino es el todo que conforma a las personas.",
          visto: false,
        },
        {
          cita: "Una mente sana en un cuerpo sano, es lo que completa de un estado feliz en este mundo",
          how_to_apply:
            "La suma de ambos elementos nos hará felices. Son variables dependientes.",
          visto: false,
        },
        {
          cita: "El gobierno no tiene otro fin que la preservación de la propiedad",
          how_to_apply:
            "Parece que Locke tiene muy claro el concepto de propiedad como modelo de identidad.",
          visto: false,
        },
        {
          cita: "El que quiera seriamente disponerse a la búsqueda de la verdad, deberá preparar su mente para amarla",
          how_to_apply:
            "No es fácil querer saber la verdad. A veces, preferimos estar en la ignorancia.",
          visto: false,
        },
        {
          cita: "La educación comienza al caballero, pero leer, la buena compañía y la reflexión lo deben finalizar",
          how_to_apply:
            "No todo es educación. Los elementos sociales también influyen en la personalidad.",
          visto: false,
        },
        {
          cita: "Es más fácil mandar que enseñar",
          how_to_apply: "Interesante aportación.",
          visto: false,
        },
        {
          cita: "No hay doctrina ajena que en esto pueda superar a la propia experiencia",
          how_to_apply:
            "La experiencia es el último de los estados del conocimiento.",
          visto: false,
        },
        {
          cita: "No puede haber mayor rudeza que interrumpir otro en la corriente de su discurso",
          how_to_apply: "Hay que saber escuchar, tolerar y saber callar.",
          visto: false,
        },
        {
          cita: "Frecuentemente hay más que aprender de las preguntas inesperadas de los niños que de los discursos de los hombres",
          how_to_apply:
            "Los adultos también puede aprender mucho de los niños.",
          visto: false,
        },
        {
          cita: "La ocupación última del hombre es ser feliz",
          how_to_apply: "La felicidad es la meta de toda persona.",
          visto: false,
        },
        {
          cita: "Las nuevas opiniones siempre son sospechosas, y normalmente se rechazan",
          how_to_apply: "Lo novedoso, lo rompedor siempre causa malestar.",
          visto: false,
        },
        {
          cita: "La protesta es el derecho de la gente",
          how_to_apply:
            "John Locke tenía muy claros los derechos individuales para mejora de la sociedad.",
          visto: false,
        },
        {
          cita: "Los antiguos dejaron mucho a la industria y sagacidad del tiempo venidero",
          how_to_apply: "El pasado forma parte del presente y futuro.",
          visto: false,
        },
        {
          cita: "La razón por la que los hombres entran en la sociedad es para preservar su propiedad",
          how_to_apply:
            "La propiedad es un elemento esencial para la existencia y metas de las personas, según John Locke.",
          visto: false,
        },
        {
          cita: "Nacemos libres y ningún poder de la tierra puede sujetarnos, como no sea nuestro propio consentimiento",
          how_to_apply:
            "La libertad tiene que ser entendida en todos sus sentidos, físicos o psicológicos.",
          visto: false,
        },
        {
          cita: "Toda riqueza es el producto del trabajo",
          how_to_apply:
            "El trabajo es la herramienta para llegar a la riqueza.",
          visto: false,
        },
      ],
    },
    {
      name: "Friedrich Hegel (1770-1831)",
      filosofy: "Idialismo alemán",
      lugarOrigen: "Alemania",
      urlImg: "/src/assets/imgs/filosofos/hegel.jpg",
      citas: [
        {
          cita: "Si afirmamos que Dios es desconocido, no somos ya cristianos.",
          how_to_apply:
            "Sobre su concepción de la religión predominante en Alemania.",
          visto: false,
        },
        {
          cita: "Un edificio es ante todo un fin y propósito interno.",
          how_to_apply: "Sobre la arquitectura y sus objetivos.",
          visto: false,
        },
        {
          cita: "Ten el valor de equivocarte.",
          how_to_apply: "Solo los valientes son capaces de cometer errores.",
          visto: false,
        },
        {
          cita: "Quien mira racionalmente el mundo, lo ve racional.",
          how_to_apply:
            "Nuestra óptica personal nos incita a ver las cosas tal cual queremos.",
          visto: false,
        },
        {
          cita: "La historia es el progreso de la conciencia de la libertad.",
          how_to_apply:
            "Una definición memorable sobre el desarrollo de nuestra civilización.",
          visto: false,
        },
        {
          cita: "La fe no es apta para desarrollar el contenido.",
          how_to_apply: "Una muestra de su escepticismo ante lo divino.",
          visto: false,
        },
        {
          cita: "En cada caso particular, los hombres persiguen sus fines particulares contra el derecho universal; obran libremente.",
          how_to_apply:
            "La libertad de acción y de empresa, según una brillante frase de Hegel.",
          visto: false,
        },
        {
          cita: "He visto al Espíritu del Mundo, sentado en un caballo.",
          how_to_apply: "En esta cita célebre habla sobre Napoleón Bonaparte.",
          visto: false,
        },
        {
          cita: "Cien años de injusticia no hacen derecho.",
          how_to_apply:
            "La tradición no legitima ningún tipo de jurisprudencia ni práctica abusiva.",
          visto: false,
        },
        {
          cita: "Con la existencia surge la particularidad.",
          how_to_apply: "Interesante frase de Hegel.",
          visto: false,
        },
        {
          cita: "Dios es Dios, tan sólo en tanto y en cuanto se conoce a sí mismo.",
          how_to_apply:
            "Su autoconciencia le convierte en un ser omnipotente, según el filósofo alemán.",
          visto: false,
        },
        {
          cita: "El filósofo, debe hacer filosofía cuando ya la vida ha pasado.",
          how_to_apply: "Primero vivir, luego pensar.",
          visto: false,
        },
        {
          cita: "El que vence al furor vence a los enemigos.",
          how_to_apply: "La calma siempre es una buena consejera.",
          visto: false,
        },
        {
          cita: "La belleza se define como manifestación sensible de la idea.",
          how_to_apply: "Sobre su concepción de lo bello.",
          visto: false,
        },
        {
          cita: "La historia debe comenzar con el imperio chino, el más antiguo de que da noticia.",
          how_to_apply: "El kilómetro cero de la historia, según Georg Hegel.",
          visto: false,
        },
        {
          cita: "La independencia del hombre consiste en esto: en que sabe lo que lo determina.",
          how_to_apply:
            "Genial paradoja: en tanto conocemos nuestras limitaciones, somos más libres.",
          visto: false,
        },
        {
          cita: "La pertenencia al Estado es uno de los mayores deberes posibles que cabe asumir al individuo.",
          how_to_apply:
            "Una posición estatalista que chocó con otros filósofos de su época.",
          visto: false,
        },
        {
          cita: "Las verdaderas tragedias no resultan del enfrentamiento entre un derecho y una injusticia. Surgen del choque entre dos derechos.",
          how_to_apply: "Gran reflexión de corte legalista.",
          visto: false,
        },
        {
          cita: "Nada grande se ha hecho en el mundo sin una gran pasión.",
          how_to_apply:
            "El entusiasmo es inherente a cualquier gran empresa del ser humano.",
          visto: false,
        },
        {
          cita: "Pensar y amar son cosas distintas. El pensamiento en sí mismo es inaccesible al amor.",
          how_to_apply:
            "El pensamiento y los sentimientos, desconectados en cierto modo, según Hegel.",
          visto: false,
        },
        {
          cita: "Por cuanto Dios es omnipotente, está en todos los hombres y aparece en la conciencia de cada uno; y éste es el espíritu universal.",
          how_to_apply:
            "Sobre la constante presencia de Dios en todos nosotros.",
          visto: false,
        },
        {
          cita: "Todo individuo es hijo de su pueblo, en un estadio determinado del desarrollo de este pueblo.",
          how_to_apply:
            "La identidad, sujeta a la procedencia de cada persona.",
          visto: false,
        },
        {
          cita: "Y cuando una cosa desaparece, viene otra al momento a ocupar su puesto.",
          how_to_apply: "Frase que podría firmar el mismísimo Arquímedes.",
          visto: false,
        },
        {
          cita: "Lo que el hombre es realmente, tiene que serlo idealmente.",
          how_to_apply: "Una muestra de su idealismo filosófico.",
          visto: false,
        },
        {
          cita: "La religión era, según las descripciones de los profetas, una idolatría grosera y sensual.",
          how_to_apply: "Sobre lo irracional de ciertos dogmas religiosos.",
          visto: false,
        },
        {
          cita: "La lectura del periódico es la oración matinal del hombre moderno.",
          how_to_apply: "Un rito adaptado a los tiempos modernos.",
          visto: false,
        },
        {
          cita: "La limitación de la libertad es inaceptable en el orden moral.",
          how_to_apply:
            "Una de esas frases de Hegel en que nos enseña su noción de libertad, asociada a la ética.",
          visto: false,
        },
        {
          cita: "Los mismos afanes y esfuerzos se producen en una pequeña ciudad que en el gran teatro del mundo.",
          how_to_apply: "De lo local a lo global.",
          visto: false,
        },
        {
          cita: "Al castigar al delincuente se le honra como ser racional.",
          how_to_apply: "Paradoja del mundo moderno.",
          visto: false,
        },
        {
          cita: "Aquel para quien el pensamiento no sea lo único verdadero, lo supremo, no puede juzgar en absoluto el modo filosófico.",
          how_to_apply: "Sobre el pensamiento filosófico.",
          visto: false,
        },
      ],
    },
    {
      name: "Friedrich Nietzsche (1844-1900)",
      filosofy: "Nihilista",
      lugarOrigen: "Francia",
      urlImg: "/src/assets/imgs/filosofos/nietzche.webp",
      citas: [
        {
          cita: "No que me hayas mentido, que ya no pueda creerte, eso me aterra",
          how_to_apply:
            "Así describía el autor su desconfianza hacia las personas que no eran sinceras.",
          visto: false,
        },
        {
          cita: "El individuo ha luchado siempre para no ser absorbido por la tribu. Pero ningún precio es demasiado alto por el privilegio de ser uno mismo",
          how_to_apply:
            "Nunca hay que dejarse llevar por las tendencias o las presiones sociales. Si no hacer lo que uno cree conveniente.",
          visto: false,
        },
        {
          cita: "Los monos son demasiado buenos para que el hombre pueda descender de ellos",
          how_to_apply:
            "Nietzsche era muy crítico con el comportamiento del ser humano y su condición bélica.",
          visto: false,
        },
        {
          cita: "Si lo intentas, a menudo estarás solo, y a veces asustado",
          how_to_apply:
            "Siempre se lucha contra todos y contra prejuicios a la hora de pensar diferente a los demás.",
          visto: false,
        },
        {
          cita: "La esperanza es el peor de los males, pues prolonga el tormento del hombre",
          how_to_apply:
            "Friedrich era muy poco dado a la palabrería pseudocompasiva. Más bien era realista.",
          visto: false,
        },
        {
          cita: "Aquel que tiene un porqué para vivir se puede enfrentar a todos los 'cómos'",
          how_to_apply:
            "A menudo el autor escirbía sobre cómo llevar una vida con sentido y plenamente feliz.",
          visto: false,
        },
        {
          cita: "Sin música, la vida sería un error",
          how_to_apply:
            "Su pasión era la música y Wagner su influencia más directa en sus primeros años teóricos.",
          visto: false,
        },
        {
          cita: "El destino de los hombres está hecho de momentos felices, toda la vida los tiene, pero no de épocas felices",
          how_to_apply:
            "Como hemos mencionado anteriormente, Nietzsche tenía muy presente el tema de la felicidad en sus obras y pensamientos.",
          visto: false,
        },
        {
          cita: "Todo lo que se hace por amor, se hace más allá del bien y del mal",
          how_to_apply:
            "El ser humano está dispuesto a cualquier cosa a la hora de conquistar el amor.",
          visto: false,
        },
        {
          cita: "La palabra más soez y la carta más grosera son mejores, son más educadas que el silencio",
          how_to_apply:
            "Era un personaje directo, conciso y que huía de lo políticamente correcto. Hay que hablar alto y claro.",
          visto: false,
        },
        {
          cita: "Los que más han amado al hombre le han hecho siempre el máximo daño",
          how_to_apply: "Una interpretación un tanto pesimista sobre el amor.",
          visto: false,
        },
        {
          cita: "La independencia no es un derecho, es un privilegio que corresponde a una minoría",
          how_to_apply:
            "Siempre nos encontramos subyugados a los valores y tendencias de la sociedad en la que vivimos.",
          visto: false,
        },
        {
          cita: "Cuando llegue el sufrimiento, míralo a la cara y enfréntate a él",
          how_to_apply:
            "Tenemos que ser capaces de enfrentarnos a las adversidades.",
          visto: false,
        },
        {
          cita: "Buscar la felicidad en la fe es no querer buscar la verdad",
          how_to_apply:
            "La fe no es algo que se pueda medir ni responde a la verdad de las cosas.",
          visto: false,
        },
        {
          cita: "En el amor siempre hay algo de locura, y en la locura siempre hay algo de razón",
          how_to_apply: "El amor no es algo irracional, como suele decirse.",
          visto: false,
        },
        {
          cita: "Sólo cuando construimos el futuro tenemos derecho a juzgar el pasado",
          how_to_apply:
            "Tenemos que ser capaces de mirar hacia delante, siempre.",
          visto: false,
        },
        {
          cita: "La mentira más común es aquella con la que las personas se engañan a sí mismas",
          how_to_apply:
            "Así de crítico se muestra Nietzsche con las personas que mienten.",
          visto: false,
        },
        {
          cita: "¿Es el hombre un fallo de Dios, o Dios un fallo del hombre?",
          how_to_apply:
            "Se niega la existencia de Dios por parte del autor con esta reflexión.",
          visto: false,
        },
        {
          cita: "El amor no es ciego, sólo está cegado por la pasión que lleva dentro",
          how_to_apply:
            "El fuego y la emoción es lo que nos empuja a estar enamorados",
          visto: false,
        },
        {
          cita: "El hombre fue quién creó a Dios a su imagen y semejanza",
          how_to_apply:
            "NIetzsche creía que Dios no es más que el reflejo del hombre, por querer dominar a las masas.",
          visto: false,
        },
        {
          cita: "La intelectualidad se mide no por la inteligencia, sino por las dosis de humor que es capaz de utilizar",
          how_to_apply:
            "Aunque sufrió mucho en su vida, le daba mucha importancia al sentido humorístico.",
          visto: false,
        },
        {
          cita: "Para llegar a ser sabio es preciso experimentar ciertas vivencias, a menudo peligrosas",
          how_to_apply:
            "Hay que enfrentarse a las situaciones que nos sean incómodas y salir de la zona del confort.",
          visto: false,
        },
        {
          cita: "Lo que no me mata, me hará más fuerte",
          how_to_apply:
            "Ante cualquier adversidad superada, hay que seguir luchando.",
          visto: false,
        },
        {
          cita: "Yo necesito compañeros vivos, no cadáveres con los que tenga que cargar",
          how_to_apply:
            "La importancia que tiene el estar rodeado de gente positiva e inquieta.",
          visto: false,
        },
        {
          cita: "La mujer perfecta es un ser humano superior al mejor de los hombres",
          how_to_apply:
            "Friedrich describió así a la mujer ideal. Veneraba con asiduidad al figura femenina.",
          visto: false,
        },
        {
          cita: "La vida es demasiado breve como para aburrirnos",
          how_to_apply: "Ante todo, positivismo y disfrute de la vida.",
          visto: false,
        },
        {
          cita: "Estamos acostumbrados a la vida porque nos gusta el amor",
          how_to_apply:
            "Nietzsche justificaba así la existencia del ser humano.",
          visto: false,
        },
        {
          cita: "La esperanza es un estimulante mucho más potente que la suerte",
          how_to_apply:
            "La fe mueve montañas, se suele decir. Y la esperanza forma parte de ello.",
          visto: false,
        },
        {
          cita: "El hombre tiene más carácter cuando persigue su temperamento, su instinto",
          how_to_apply:
            "La sociedad nos educa y adoctrina para ser puramente racionales, dejando de lado nuestra pasiones humanas.",
          visto: false,
        },
        {
          cita: "El sexo no es más que una trampa de la naturaleza para no extinguirnos",
          how_to_apply:
            "Quizás por el poco éxito entre las mujeres, Nietzsche formuló esta reflexión.",
          visto: false,
        },
      ],
    },
    {
      name: "Jean-Paul Sartre (1905-1980)",
      filosofy: "Existencialista",
      lugarOrigen: "Francia",
      urlImg: "/src/assets/imgs/filosofos/sartre.jpg",
      citas: [
        {
          cita: "Si te sientes solo cuando estás solo, estás mal acompañado.",
          how_to_apply:
            "Cómo nos relacionamos con nosotros mismos es algo muy importante en la vida.",
          visto: false,
        },
        {
          cita: "Hoy en día sabemos cómo se hace todo, excepto vivir.",
          how_to_apply:
            "Descubrir cuál es la vida que queremos llevar y cómo conseguirla es algo que todos perseguimos en la vida.",
          visto: false,
        },
        {
          cita: "Depende exclusivamente de ti darle sentido a tu vida.",
          how_to_apply:
            "Encontrar un propósito para vivir es algo que solo nos incumbe a nosotros mismos.",
          visto: false,
        },
        {
          cita: "Para saber lo que vale nuestra vida, no está de más arriesgarla de vez en cuando.",
          how_to_apply:
            "Cuando somos conscientes de lo fácil que es perder la vida le damos mucho más valor.",
          visto: false,
        },
        {
          cita: "No somos más que nuestras propias decisiones.",
          how_to_apply:
            "Las decisiones que tomamos son aquello que nos hace avanzar o retroceder en el camino de la vida.",
          visto: false,
        },
        {
          cita: "La vida comienza al otro lado de la desesperación.",
          how_to_apply:
            "En las situaciones más difíciles es donde nos encontramos a nosotros mismos.",
          visto: false,
        },
        {
          cita: "No existe realidad alguna excepto en la acción.",
          how_to_apply:
            "Las acciones son aquello que es totalmente real en la vida, las palabras pueden ser ciertas o no.",
          visto: false,
        },
        {
          cita: "El hombre está condenado a ser libre, ya que una vez en el mundo, es responsable de todos sus actos.",
          how_to_apply:
            "Qué hacemos cada uno con nuestra propia vida depende solo de nosotros, la libertad nos la dan nuestros actos y pensamientos.",
          visto: false,
        },
        {
          cita: "La vida no es más que una pasión inútil.",
          how_to_apply:
            "Saber enfocar la vida de forma positiva depende solo de nosotros mismos, ¿Deseamos ser felices realmente?",
          visto: false,
        },
        {
          cita: "Las palabras son pistolas cargadas.",
          how_to_apply:
            "Con nuestras palabras podemos realizar mucho daño a las personas con las que convivimos, podemos demoler su moral o realzarla con ellas.",
          visto: false,
        },
        {
          cita: "En el amor, uno y uno es igual a uno.",
          how_to_apply:
            "Cuando formamos una pareja pasamos a ser un solo individuo dentro de la sociedad, actuamos y vivimos en una especie de simbiosis buscando realizar un mismo propósito común.",
          visto: false,
        },
        {
          cita: "Parece ser, que todo lo que sé sobre mi vida lo he aprendido de los libros.",
          how_to_apply:
            "Los libros son una fuente de conocimiento muy poderosa que todos debemos y podemos aprovechar.",
          visto: false,
        },
        {
          cita: "Amor mío, tú no eres “una cosa en mi vida”, ni siquiera lo más importante, porque mi vida ya no me pertenece, porque mi vida eres tú.",
          how_to_apply:
            "Una frase muy romántica para poder transmitirle a nuestro ser querido la importancia que él tiene para nosotros.",
          visto: false,
        },
        {
          cita: "Es más peligroso ser buen periodista que mal asesino.",
          how_to_apply:
            "Algunas profesiones ponen su vida mucho más en riego que otras, Sartre tenía esta peculiar forma de ver el periodismo.",
          visto: false,
        },
        {
          cita: "El compromiso es un acto, no una palabra.",
          how_to_apply:
            "Para demostrar el compromiso que tenemos hacia alguien lo debemos realizar con nuestros actos no con nuestras palabras.",
          visto: false,
        },
        {
          cita: "Puede que sea inevitable. Puede que en realidad tengamos que elegir entre no ser nada o fingir lo que somos.",
          how_to_apply:
            "Debemos conocernos a nosotros mismos y saber qué buscamos en la vida, de esa forma, podremos comenzar el camino hacia nuestras metas personales.",
          visto: false,
        },
        {
          cita: "¿Cree usted que yo cuento los días? Únicamente queda un día, uno que siempre se repite. Se nos da al amanecer y se nos quita al atardecer.",
          how_to_apply:
            "Nunca sabremos qué sucederá el día de mañana, no debemos adelantar acontecimientos todo puede pasar.",
          visto: false,
        },
        {
          cita: "Una vez que la libertad ha iluminado el corazón del hombre, los dioses no tienen poder sobre él.",
          how_to_apply:
            "Para Jean-Paul Sartre, la religión era algo con lo que discrepaba activamente.",
          visto: false,
        },
        {
          cita: "Es el deber de todo individuo, hacer lo que quiera hacer, pensar lo que quiera pensar, no responder a nadie excepto a sí mismo, y cuestionar toda idea y a todo individuo.",
          how_to_apply:
            "Debemos poseer nuestras propias ideas y ser libres de pensar lo que decidamos pensar por nosotros mismos.",
          visto: false,
        },
        {
          cita: "La existencia es anterior a la esencia, y gobierna sobre ella.",
          how_to_apply:
            "Una cita que nos lleva a pensar sobre nuestra propia existencia y en nuestra propia esencia personal, primero pienso, luego existo.",
          visto: false,
        },
        {
          cita: "Cuando comprendes los detalles de la victoria, es difícil distinguirla de la derrota.",
          how_to_apply:
            "En muchas ocasiones para alcanzar la ansiada victoria sufriremos pérdidas de las que jamás nos recuperaremos.",
          visto: false,
        },
        {
          cita: "Tu juicio, te juzga y te define.",
          how_to_apply:
            "Nuestro juicio personal comunica a los demás cuáles son nuestros principios y lealtades.",
          visto: false,
        },
        {
          cita: "La libertad es lo que haces con lo que se te ha hecho a ti.",
          how_to_apply:
            "El tiempo libre lo solemos usar para disfrutar de aquello que nos es más familiar.",
          visto: false,
        },
        {
          cita: "Como todo soñador, confundí la decepción con la verdad.",
          how_to_apply:
            "Aunque nos decepcionen, eso no significa que sea la única verdad, la verdad puede ser vista de muchas formas diferentes, incluso de forma que esta no sea cierta.",
          visto: false,
        },
        {
          cita: "Voy a sonreír, y mi sonrisa, penetrará en tus pupilas. Y sabe Dios en lo que se convertirá.",
          how_to_apply:
            "Debemos buscar nuestra felicidad personal en todo aquello que realizamos en la vida.",
          visto: false,
        },
        {
          cita: "Cuando los ricos se embarcan en una guerra, son los pobres los que mueren.",
          how_to_apply:
            "Las clases sociales realizan una diferencia crucial en cómo las personas viven su propia vida, en un mundo equitativo, esto no debería suceder.",
          visto: false,
        },
        {
          cita: "¿Por qué es tan importante que todos estemos de acuerdo?",
          how_to_apply:
            "Todos podemos pensar de forma totalmente diferente y no por ello debemos entrar en ningún tipo de conflicto, debemos respetarnos los unos a los otros.",
          visto: false,
        },
        {
          cita: "Las tres en punto es siempre demasiado tarde o demasiado temprano para lo que quieres hacer.",
          how_to_apply:
            "Debemos aprovechar cada minuto de nuestra vida, siempre es un buen momento para hacer aquello que realmente deseamos hacer.",
          visto: false,
        },
        {
          cita: "La vida no tiene significado a priori. El significado de tu vida depende de ti, y el valor de tu vida, no es nada sino el significado que elijas.",
          how_to_apply:
            "Depende de cada uno de nosotros dotar nuestra vida del significado que nosotros elijamos para ella.",
          visto: false,
        },
        {
          cita: "Caras suaves y sonrientes en todas partes, pero perdición en sus miradas.",
          how_to_apply:
            "Las personas no muestran normalmente en público sus verdaderas intenciones.",
          visto: false,
        },
      ],
    },
    {
      name: "Simone de Beauvoir (1908-1986)",
      filosofy: "Existencialista",
      lugarOrigen: "Francia",
      urlImg: "/src/assets/imgs/filosofos/simone.webp",
      citas: [
        {
          cita: "Me gustaría que cada vida humana fuese libertad pura y transparente.",
          how_to_apply:
            "En esta frase la autora refleja su esperanza de cara a que el ser humano pueda ser libre.",
          visto: false,
        },
        {
          cita: "Conocerse a sí mismo no es garantía de felicidad, pero está del lado de la felicidad y puede darnos el coraje para luchar por ella.",
          how_to_apply:
            "Conocernos a nosotros mismos nos hace saber quienes somos y qué queremos, dándonos un objetivo por el que luchar e intentar ser felices.",
          visto: false,
        },
        {
          cita: "El secreto de la felicidad en el amor consiste menos en ser ciego que en cerrar los ojos cuando hace falta.",
          how_to_apply:
            "Para la autora el amor no es idolatrar a la otra persona y no verle ningún fallo u error, sino ser capaz de querer a la otra persona teniendo en cuenta que los fallos están ahí.",
          visto: false,
        },
        {
          cita: "Entre dos individuos la armonía nunca viene dada, sino que debe conquistarse indefinidamente.",
          how_to_apply:
            "Mantener una relación, sea cual sea el tipo de vínculo del que hablemos, supone un esfuerzo constante para que esta perviva.",
          visto: false,
        },
        {
          cita: "Que nada nos defina. Que nada nos sujete. Que sea la libertad nuestra propia sustancia.",
          how_to_apply:
            "Podemos amar a o identificarnos con algo o alguien, pero nosotros debemos seguir siendo nosotros mismos. La libertad es un aspecto fundamental para esta autora.",
          visto: false,
        },
        {
          cita: "El problema de la mujer siempre ha sido un problema de hombres.",
          how_to_apply:
            "Se trata de una de las frases más famosas de la escritora, en la que refleja la dificultad de la mujer en una sociedad patriarcal centrada en la figura y punto de vista del varón.",
          visto: false,
        },
        {
          cita: "Una mujer libre es justo lo contrario a una mujer fácil.",
          how_to_apply:
            "La autora considera que el hecho de que la mujer se acomode e intente ajustarse a los roles de género es lo que no la deja ser libre.",
          visto: false,
        },
        {
          cita: "La verdad es una y el error, múltiple.",
          how_to_apply:
            "Esta frase nos muestra la creencia de que perseguir la verdad es una proeza compleja en la que podemos fallar en gran cantidad de ocasiones y de muchas maneras.",
          visto: false,
        },
        {
          cita: "La belleza es aún más difícil de explicar que la felicidad.",
          how_to_apply:
            "El concepto de belleza es abstracto y subjetivo, además de cambiar con el paso del tiempo incluso en una misma persona.",
          visto: false,
        },
        {
          cita: "Hay un secreto para vivir feliz con la persona amada: no pretender modificarla.",
          how_to_apply:
            "Un error común que cometen muchas personas es intentar cambiar a su pareja: hacerla una persona que no es. Eso puede generar profundas frustraciones y sufrimiento para ambas partes. Es necesario amar a alguien por cómo es y no por como nos gustaría que fuera.",
          visto: false,
        },
        {
          cita: "No se nace mujer: se llega a serlo.",
          how_to_apply:
            "Probablemente la frase más recordada de Simone de Beauvoir, hace referencia a que para ella la mujer debe configurar su propio concepto e identidad del término “mujer”, dejando atrás la visión de ésta como identificada por su relación con otros.",
          visto: false,
        },
        {
          cita: "En sí, la homosexualidad está tan limitada como la heterosexualidad: lo ideal sería ser capaz de amar a una mujer o a un hombre, a cualquier ser humano, sin sentir miedo, inhibición u obligación.",
          how_to_apply:
            "La autora defiende la necesidad de que toda persona pueda amar a quien quiera amar sea del sexo contrario o del mismo, sin necesidad de encorsetarse en una categoría específica.",
          visto: false,
        },
        {
          cita: "El cuerpo no es una cosa, es una situación: es nuestra comprensión del mundo y el boceto de nuestro proyecto.",
          how_to_apply:
            "Nuestro cuerpo es visto como un elemento más en el proceso de comprender nuestra realidad y de acercarnos a lo que queremos ser o hacer.",
          visto: false,
        },
        {
          cita: "Mediante el trabajo ha sido como la mujer ha podido franquear la distancia que la separa del hombre. El trabajo es lo único que puede garantizarle una libertad completa.",
          how_to_apply:
            "En esta frase se establece la necesidad de acceso al mercado laboral por parte de la mujer, de manera que tenga las mismas oportunidades que el hombre y pueda ser independiente.",
          visto: false,
        },
        {
          cita: "Solo después de que las mujeres empiezan a sentirse en esta tierra como en su casa, se ve aparecer una Rosa Luxemburgo, una Madame Curie. Ellas demuestran deslumbrantemente que no es la inferioridad de las mujeres lo que ha determinado su insignificancia.",
          how_to_apply:
            "Los referentes son algo esencial de cara a verse reflejado en alguien y verse capaz de luchar por algo. El hecho de que la mujer haya sido poco valorada no es debido a que sean inferiores sino a otras circunstancias.",
          visto: false,
        },
        {
          cita: "La familia es un nido de perversiones.",
          how_to_apply:
            "El concepto tradicional de familia incluye diferentes aspectos y roles de sexo y género, presentando al hombre como el fuerte, resistente, duro, agresivo y trabajador y a la mujer como sumisa, obediente, cariñosa, débil y dedicada al cuidado del hogar.",
          visto: false,
        },
        {
          cita: "La naturaleza del hombre es malvada. Su bondad es cultura adquirida.",
          how_to_apply:
            "El papel de la cultura y la educación fue siempre importante para de Beauvoir, considerando la autora que permite el crecimiento y la virtud.",
          visto: false,
        },
        {
          cita: "El hecho de que exista una minoría privilegiada no compensa ni excusa la situación de discriminación en la que vive el resto de sus compañeros.",
          how_to_apply:
            "Simone de Beauvoir consideraba que era necesario disponer de una igualdad total entre todos y que no debería permitirse que unos exploten a otros.",
          visto: false,
        },
        {
          cita: "Es lícito violar una cultura, pero a condición de hacerle un hijo.",
          how_to_apply:
            "La autora considera que la cultura puede cambiarse siempre y cuando sea para mejorarla e impulsar su desarrollo.",
          visto: false,
        },
        {
          cita: "Encanto es lo que tienen algunos hasta que empiezan a creérselo.",
          how_to_apply:
            "Esta frase es una crítica al narcisismo de muchas personas.",
          visto: false,
        },
        {
          cita: "¿Qué es un adulto? Un niño inflado por la edad.",
          how_to_apply:
            "Esta frase nos habla de lo que supone ser adulto, la adquisición de conocimientos y vivencias que han cambiado la forma de ser y ver el mundo.",
          visto: false,
        },
        {
          cita: "Lejos de que la ausencia de Dios autorice toda licencia, al contrario, el que el hombre esté abandonado sobre la tierra es la razón de que sus actos sean compromisos.",
          how_to_apply:
            "La autora considera que el ser humano debe comprometerse con sus actos y con el mundo, siendo especialmente responsable de sus propios actos.",
          visto: false,
        },
        {
          cita: "El hombre no es ni una piedra ni una planta, y no puede justificarse a sí mismo por su mera presencia en el mundo. El hombre es hombre sólo por su negación a permanecer pasivo, por el impulso que lo proyecta desde el presente hacia el futuro y lo dirige hacia cosas con el propósito de dominarlas y darles forma. Para el hombre, existir significa remodelar la existencia. Vivir es la voluntad de vivir.",
          how_to_apply:
            "Esta frase pretende hacer ver la necesidad humana de cambiar el mundo y la importancia de la voluntad en el proceso de vivir.",
          visto: false,
        },
        {
          cita: "No nos engañemos, el poder no tolera más que las informaciones que le son útiles. Niega el derecho de información a los periódicos que revelan las miserias y rebeliones.",
          how_to_apply:
            "La autora reflexiona sobre la manipulación de la información que realiza el poder.",
          visto: false,
        },
        {
          cita: "El feminismo es una forma de vivir individualmente y de luchar colectivamente.",
          how_to_apply:
            "Otra frase realmente conocida de Simone de Beauvoir, propone el feminismo como manera de defender los derechos de los colectivos a la vez que supone una manera en que cada uno puede ver y actuar en la vida.",
          visto: false,
        },
        {
          cita: "Escribir es un oficio que se aprende escribiendo.",
          how_to_apply:
            "Nada se consigue sin esfuerzo, y todo necesita de sacrificio y tiempo para llegar al objetivo marcado.",
          visto: false,
        },
        {
          cita: "Soy incapaz de creer en la infinidad, pero tampoco acepto lo finito.",
          how_to_apply:
            "Una frase que nos impulsa hacia el inconformismo, a no quedarnos solo en las opciones prefijadas sino que podamos crear nuevas opciones.",
          visto: false,
        },
        {
          cita: "Nadie es más arrogante hacia las mujeres, más agresivo o desdeñoso, que el hombre que se siente ansioso respecto a su virilidad.",
          how_to_apply:
            "Se trata de una reflexión respecto a la necesidad de algunas personas de hacer notar sus supuestas virtudes mediante el ataque a los demás.",
          visto: false,
        },
        {
          cita: "Vive de tal modo que nada de lo que hagas deba merecer el reproche o la condena de quienes te rodean.",
          how_to_apply:
            "Es importante vivir según lo que creemos y ser libres, independientemente del que dirán.",
          visto: false,
        },
        {
          cita: "El esclavo que obedece escoge obedecer.",
          how_to_apply:
            "La autora indica que quien obedece lo que se le ordena lo hace porque quiere, puesto que puede revelarse.",
          visto: false,
        },
      ],
    },
    {
      name: "Marco Aurelio (121-180)",
      filosofy: "Estoicismo",
      lugarOrigen: "Roma",
      urlImg: "/src/assets/imgs/filosofos/marcoaurelio.jpg",
      citas: [
        {
          cita: "La mejor venganza es ser diferente a quien causó el daño.",
          how_to_apply:
            "Siempre debemos ser fieles a nuestra forma de ser, con ella podemos lograr todo lo que nos propongamos.",
          visto: false,
        },
        {
          cita: "Haz cada cosa en la vida como si fuera lo último que hagas.",
          how_to_apply:
            "Debemos vivir nuestra vida al máximo y poniendo todo nuestro empeño en aquello que realicemos.",
          visto: false,
        },
        {
          cita: "Cuando te levantes por la mañana, piensa en el privilegio de vivir: respirar, pensar, disfrutar, amar.",
          how_to_apply:
            "Somos muy afortunados por disfrutar la vida que tenemos, debemos saber dar gracias por ella.",
          visto: false,
        },
        {
          cita: "Hace falta muy poco para tener una vida feliz; está todo dentro de ti, en tu forma de pensar.",
          how_to_apply:
            "Podemos ser felices o infelices, eso depende solo de nosotros mismos y de nuestra propia actitud.",
          visto: false,
        },
        {
          cita: "Todo lo que escuchamos es una opinión, no un hecho. Todo lo que vemos es una perspectiva, no la verdad.",
          how_to_apply:
            "La verdad absoluta es muy difícil de encontrar, siempre pueden existir matices de los que no sabemos nada.",
          visto: false,
        },
        {
          cita: "Tranquilo a la vez que resuelto, alegre a la par que consistente, es el hombre que en todo sigue la razón.",
          how_to_apply:
            "Nuestra mente puede ser nuestra gran aliada o nuestra gran detractora, debemos saber cómo usarla correctamente.",
          visto: false,
        },
        {
          cita: "Aquello que no es bueno para la colmena, no puede ser bueno para las abejas.",
          how_to_apply:
            "Si algo no es bueno para la sociedad, para nosotros tampoco lo será.",
          visto: false,
        },
        {
          cita: "No gastes más tiempo argumentando acerca de lo que debe ser un buen hombre. Sé uno.",
          how_to_apply:
            "Con nuestras propias acciones podemos empezar a cambiar la sociedad en la que nos encontramos.",
          visto: false,
        },
        {
          cita: "La pérdida no es otra cosa que un cambio, y el cambio es el deleite de la naturaleza.",
          how_to_apply:
            "La naturaleza siempre cambia y evoluciona, esta no se detiene por nada ni nadie.",
          visto: false,
        },
        {
          cita: "Cuánto tiempo ahorra el que no se da la vuelta para ver lo que su vecino dice, hace o piensa.",
          how_to_apply:
            "Efectivamente no nos deben importar los pensamientos de nuestros vecinos, deben importarnos y preocuparnos únicamente los nuestros.",
          visto: false,
        },
        {
          cita: "En ningún lugar puede un hombre encontrar un retiro más tranquilo e imperturbable que en su propia alma.",
          how_to_apply:
            "Para poder entender el mundo que nos rodea, debemos conocernos a nosotros mismos. La meditación puede ayudarnos a conectar con nuestros pensamientos.",
          visto: false,
        },
        {
          cita: "El orden universal y el orden personal no son otra cosa que diferentes expresiones y manifestaciones de un principio común fundamental.",
          how_to_apply:
            "Todos vivimos nuestras vidas bajo las mismas normas universales, estas son comunes a todos los seres vivos.",
          visto: false,
        },
        {
          cita: "Un hombre noble se compara y estima a sí mismo por una idea que es superior a él; un hombre mezquino, por una inferior a sí mismo. El primero produce aspiración; el otro ambición, que es a lo que un hombre vulgar aspira.",
          how_to_apply:
            "Nuestras ideas dictaminan en gran medida la persona en la que nos convertiremos, somos súbditos de nuestras propias ideas.",
          visto: false,
        },
        {
          cita: "Observa constantemente todas aquellas cosas que toman lugar por el cambio, y acostúmbrate a pensar que nada ama tanto la naturaleza del universo como cambiar las cosas existentes y crear nuevas cosas semejantes.",
          how_to_apply:
            "Con el pasar del tiempo todo a nuestro alrededor cambia y nosotros debemos cambiar también, sabernos adaptar al momento.",
          visto: false,
        },
        {
          cita: "Comenzar es la mitad del trabajo, comienza nuevamente con la mitad restante, y habrás terminado.",
          how_to_apply:
            "Esta cita nos recuerda mucho al famoso refrán: el caminar todo es empezar.",
          visto: false,
        },
        {
          cita: "El que vive en armonía consigo mismo vive en armonía con el Universo.",
          how_to_apply:
            "Cuando estamos en paz con nosotros mismos, irremediablemente también lo estaremos con lo que nos rodea.",
          visto: false,
        },
        {
          cita: "Deberás de convertirte en un anciano con la suficiente antelación si deseas ser un viejo mucho tiempo.",
          how_to_apply:
            "Como bien nos dice Marco Aurelio en esta cita, cuanto antes maduremos antes tomaremos mejores decisiones en nuestra vida.",
          visto: false,
        },
        {
          cita: "Muchas veces me he preguntado cómo es que cada hombre se ama más a sí mismo que al resto de los hombres, pero a pesar de todo le da menos valor a sus propias opiniones de sí mismo que a las opiniones de otros.",
          how_to_apply:
            "Debemos defender nuestras propias ideas y no infravalorarlas, somos tan inteligentes como cualquier otro.",
          visto: false,
        },
        {
          cita: "No permitas que tu mente se enajene de las cosas que tienes, sino de las que careces.",
          how_to_apply:
            "Para poder avanzar en la vida debemos tener objetivos claros, estos deben guiar nuestras acciones.",
          visto: false,
        },
        {
          cita: "El valor de un hombre no es más grande que sus ambiciones.",
          how_to_apply:
            "La ambición puede llevarnos muy lejos en la vida, con ella podemos tener la motivación necesaria para alcanzar grandes logros. Por lo contrario, la ambición desmesurada puede traernos también graves consecuencias.",
          visto: false,
        },
        {
          cita: "Si estás molesto por una causa externa, el dolor no se debe a la causa en sí misma, sino al valor que tú le das. Y tienes el poder de revocar ese valor.",
          how_to_apply:
            "No debemos dar demasiada importancia a situaciones externas que poco o nada tienen que ver con nosotros.",
          visto: false,
        },
        {
          cita: "Si alguien es capaz de mostrarme que lo que pienso o hago no es correcto, cambiaré con gusto, puesto que busco la verdad y nunca nadie ha sido herido por la verdad. La persona que se estanca en la ignorancia es la que sale herida.",
          how_to_apply:
            "Valorar las opiniones de los demás puede ayudarnos mucho en nuestra vida.",
          visto: false,
        },
        {
          cita: "Si no es correcto, no lo hagas. Si no es verdad, no lo digas.",
          how_to_apply:
            "Un gran consejo que el emperador Marco Aurelio nos deja para la posteridad.",
          visto: false,
        },
        {
          cita: "Cada vez que estés a punto de señalar un defecto en otra persona, hazte la siguiente pregunta: ¿Qué defecto en mí se parece al que estoy a punto de criticar?",
          how_to_apply:
            "El que esté libre de pecado que arroje la primera piedra, todos tenemos algún defectos.",
          visto: false,
        },
        {
          cita: "La primera regla es mantener el espíritu en calma. La segunda es ver las cosas frente a frente y saber qué son.",
          how_to_apply:
            "Cuando afrontamos cualquier situación con calma, podremos valorar mucho mejor nuestra acción de respuesta.",
          visto: false,
        },
        {
          cita: "Empieza cada día diciéndote: Hoy me encontraré con interferencias, ingratitud, insolencia, deslealtad, mala voluntad y egoísmo, todo ello debido a la ignorancia de los ofendedores, que no distinguen el bien del mal. Pero yo he visto la belleza del bien y la fealdad del mal, y reconozco que el malhechor tiene una naturaleza semejante a la mía, no la misma sangre pero sí la misma mente. Por eso, no puede herirme.",
          how_to_apply:
            "Lidiar con nuestra vida diaria puede resultar en ocasiones complicado, pero siguiendo las instrucciones de esta cita podremos hacerlo mucho mejor.",
          visto: false,
        },
        {
          cita: "Mira hacia el pasado, con sus imperios cambiantes que se alzaron y cayeron, y serás capaz de prever el futuro.",
          how_to_apply:
            "La historia nos enseña qué errores no debemos cometer, de ella podemos aprender grandes lecciones.",
          visto: false,
        },
        {
          cita: "No sueñes con las cosas que no tienes, más bien reconoce las bendiciones de las cosas que sí posees. Luego, recuerda agradecido cómo estarías de ansioso si tus posesiones no fueran tuyas.",
          how_to_apply:
            "Saber valorar todo aquello que tenemos puede ayudarnos a ser mucho más felices.",
          visto: false,
        },
        {
          cita: "La perfección del carácter es esto: vivir cada día como si fuese el último, sin apresurarse, sin apatía, sin pretensiones.",
          how_to_apply:
            "Una gran lección del emperador Marco Aurelio, que nos anima a vivir nuestra vida con la máxima plenitud.",
          visto: false,
        },
        {
          cita: "Las personas estamos capacitadas naturalmente para soportar todo lo que nos sucede.",
          how_to_apply:
            "Somos capaces de afrontar todo aquello con lo que la vida nos golpea, somos fuertes y podemos llevar a cabo todo lo que nos propongamos.",
          visto: false,
        },
      ],
    },
  ];

  const handleCitaVista = (filosofoName, citaIndex) => {
    const nuevasCitasVistas = { ...citasVistas };
    if (!nuevasCitasVistas[filosofoName]) {
      nuevasCitasVistas[filosofoName] = [];
    }
    nuevasCitasVistas[filosofoName].push(citaIndex);
    setCitasVistas(nuevasCitasVistas);
  };

  const citaYaVista = (filosofoName, citaIndex) => {
    return citasVistas[filosofoName]?.includes(citaIndex);
  };

  const handleFilosofiaFilterChange = (event) => {
    setFilosofiaFilter(event.target.value);
  };

  const handleLugarOrigenFilterChange = (event) => {
    setLugarOrigenFilter(event.target.value);
  };

  const handleFilosofoSearched = (event) => {
    if (event.target.value === "") {
      setFilosofoSearched("all");
    } else {
      setFilosofoSearched(event.target.value);
    }
  };

  const filteredFilosofos = filosofos.filter((filosofo) => {
    if (filosofiaFilter !== "all" && filosofo.filosofy !== filosofiaFilter) {
      return false;
    }
    if (
      lugarOrigenFilter !== "all" &&
      filosofo.lugarOrigen !== lugarOrigenFilter
    ) {
      return false;
    }

    if (
      filosofoSearched !== "all" &&
      !filosofo.name.toLowerCase().includes(filosofoSearched.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  if(JSON.parse(localStorage.getItem('user')) === null || JSON.parse(localStorage.getItem('isUserLoged')) == false){
    window.location = '/login';
  }
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 w-full p-5 bg-blue-700">
        <select
          value={filosofiaFilter}
          onChange={handleFilosofiaFilterChange}
          className="focus:bg-gray-200 p-2 rounded-md cursor-pointer  focus:rounded-xl transition-all"
        >
          <option value="all">Filosofía</option>
          {Array.from(
            new Set(filosofos.map((filosofo) => filosofo.filosofy))
          ).map((filosofia) => (
            <option key={filosofia} value={filosofia}>
              {filosofia}
            </option>
          ))}
        </select>

        <select
          value={lugarOrigenFilter}
          onChange={handleLugarOrigenFilterChange}
          className="focus:bg-gray-200 p-2 rounded-md cursor-pointer  focus:rounded-xl transition-all"
        >
          <option value="all">Lugar Origen</option>
          {Array.from(
            new Set(filosofos.map((filosofo) => filosofo.lugarOrigen))
          ).map((lugarOrigen) => (
            <option key={lugarOrigen} value={lugarOrigen}>
              {lugarOrigen}
            </option>
          ))}
        </select>
        <input
          className="focus:bg-gray-200 p-2 rounded-md focus:rounded-xl transition-all"
          type="search"
          list="filosofoList"
          placeholder="Filósofo"
          onChange={handleFilosofoSearched}
        />
        <datalist id="filosofoList">
          {filteredFilosofos.map((filosofo) => {
            return (
              <option key={filosofo.name} value={filosofo.name}>
                {filosofo.name}
              </option>
            );
          })}
        </datalist>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 min-h-[51.9vh]">
        {filteredFilosofos.length > 0 ? (
          filteredFilosofos.map((filosofo, index) => (
            <FilosofoCard
              key={index}
              urlImg={filosofo.urlImg}
              name={filosofo.name}
              filosofy={filosofo.filosofy}
              citas={filosofo.citas}
              filosofoName={filosofo.name}
              handleCitaVista={handleCitaVista}
              citaYaVista={citaYaVista}
            />
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 w-[80%] text-center font-bold text-white m-auto p-10 text-xl bg-red-500 rounded-md">
            No hay filosofos
          </div>
        )}
      </div>
    </>
  );
}
