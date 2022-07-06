import { Game } from '../interfaces/game'

export const GAMES: Game[] = [
  {
    id: 1,
    name: 'Batalla real',
    description:
      '¡Una épica batalla cuerpo a cuerpo multijugador te espera en el juego batalla real! ¿Quieres sobrevivir a toda costa en el campo de batalla? Entonces es el momento de correr, trepar y tomar cualquier objeto que encuentres a lo largo del escenario para intentar defenderte y matar a los demás antes de que ellos te maten a ti.',
    image: 'assets/images/accion/batallareal.webp',
    category: 'accion',
    premium: true
  },
  {
    id: 2,
    name: 'Bola saltarina',
    description:
      'Los esbirros del mal quieren transformar el planeta en forma de cuadrado. Y la famosa bola saltarina roja está aquí para rescatar al mundo. Rueda y salta derrotando a los enemigos y evitando cientos de obstáculos como los mortales rayos láser.',
    image: 'assets/images/accion/bolasaltarina.webp',
    category: 'accion',
    premium: false
  },
  {
    id: 3,
    name: 'Mini zombies',
    description:
      '¡Tu familia y amigos han sido infectado por ese peligroso virus y ahora te encuentras tu solo ante el peligro! Lucha por sobrevivir a toda costa frente a oleadas de enemigos hambrientos de cerebros humanos, acumula suficiente munición y potentes armas de destrucción como ametralladoras o motosierras para protegerte y demuestra tu valor infinito! No permitas que un mal movimiento te ponga en peligro y pásalo mejor que nunca. Buena suerte...',
    image: 'assets/images/accion/minizombies.jpg',
    category: 'accion',
    premium: true
  },
  {
    id: 4,
    name: 'Piratas de voxel',
    description:
      'Sumérgete entre la profunda y espesa selva, enfréntate contra decenas de animales salvajes y consigue encontrar tesoros ocultos y enterrados en algún rincón de la isla. ¡Si eres un verdadero pirata serás totalmente capaz de encontrarlos!',
    image: 'assets/images/accion/piratasdevoxel.jpg',
    category: 'accion',
    premium: false
  },
  {
    id: 5,
    name: 'Cambio de imagen de princesa Boho',
    description:
      'Audrey y Jessie, nuestras dos hermosas y divertidas jóvenes amantes de la moda, han decidido unir fuerzas en este cambio de imagen y probar un nuevo estilo: ¡boho-chic! Primero se pondrán el pelo con rulos para aplicar mascarillas faciales y limpiar su rostro de cualquier imperfección. A continuación necesitarán tu ayuda para maquillarse, ¡elige colores que les queden bien!. ¡Finalmente, depende de ti decidir cuáles son los mejores atuendos para combinar con este estilo fluido, con volantes y hermoso!',
    image: 'assets/images/belleza/cambiodeimagendeprincesaboho.png',
    category: 'belleza',
    premium: false
  },
  {
    id: 6,
    name: 'Maquillaje halloween',
    description:
      'Se acerca Halloween, esta chica quiere prepararse para ello. Ahora compárela con un estilo diferente y vea qué estilo es el mejor. ¡Diviértete!',
    image: 'assets/images/belleza/maquillajehalloween.png',
    category: 'belleza',
    premium: false
  },
  {
    id: 7,
    name: 'Cambio de imagen de princesa de invierno',
    description:
      'Nuestra princesa se está preparando para un evento especial de invierno y tu trabajo es realizar un cambio de imagen total. ',
    image: 'assets/images/belleza/cambiodeimagendeprincesadeinvierno.png',
    category: 'belleza',
    premium: true
  },
  {
    id: 8,
    name: 'Cambio de imagen de la reina de las nieves',
    description:
      'tendrás la oportunidad de conocer a una hermosa Reina de las Nieves que busca ansiosamente un nuevo look. ¿Quieres aceptar este desafío y ayudar a la princesa a conseguir un cambio de imagen real? Limpia su rostro, aplica todos los tratamientos de belleza posibles y aplica mascarillas en su rostro.',
    image: 'assets/images/belleza/cambiodeimagendelareinadelasnieves.png',
    category: 'belleza',
    premium: false
  },
  {
    id: 9,
    name: 'Gran turismo',
    description:
      'Elige entre el modo arcade y modo simulación para comenzar a ganar carreras y desbloquear autos y pistas adicionales.',
    image: 'assets/images/carreras/granturismo.jpg',
    category: 'carreras',
    premium: false
  },
  {
    id: 10,
    name: 'Super mario kart',
    description:
      '¡Versión del clásico Super Mario Kart de Super Nintendo (SNES)! Ahora podrás disfrutar online con Mario, Luigi y compañia corriendo con sus Karts. Esquiva los obstáculos del circuito y adelanta a tus oponentes en esta divertida carrera llena de emociones.',
    image: 'assets/images/carreras/supermariokart.jpg',
    category: 'carreras',
    premium: true
  },
  {
    id: 11,
    name: 'Coches monstruosos',
    description:
      '¿Quién podría pensar que estos pequeños coches pueden luchar contra los monstruos? Conduce con habilidad, recoge todos los objetos que puedas y compra mejoras para tu vehículo. ',
    image: 'assets/images/carreras/cochesmonstruosos.jpg',
    category: 'carreras',
    premium: false
  },
  {
    id: 12,
    name: 'Batallas pixeladas',
    description:
      'Enfréntate a poderosos tanques, ¡El primero en ganar 3 puntos ganará el juego! ¿Serás capaz de superar con éxito este emocionante desafío lleno de píxeles? ',
    image: 'assets/images/carreras/batallaspixeladas.jpg',
    category: 'carreras',
    premium: false
  },
  {
    id: 13,
    name: 'Mi isla',
    description:
      'Mi isla es un juego extremadamente curioso y original en el que transportarás directamente a una isla muy misteriosa. Has llegado hasta ese lugar con poco dinero en el bolsillo pero con muchas ganas de trabajar.',
    image: 'assets/images/gestion/miisla.webp',
    category: 'gestion',
    premium: true
  },
  {
    id: 14,
    name: 'Hamburgueseria',
    description:
      'Empieza a trabajar en una hamburguesería y atiende los pedidos. Levanta el negocio del restaurante creando las hamburguesas con los ingredientes correctos. ¡Haz felices a los clientes!',
    image: 'assets/images/gestion/hamburgueseria.jpg',
    category: 'gestion',
    premium: false
  },
  {
    id: 15,
    name: 'Panico en el cine',
    description:
      '¡Te han contratado como encargado en el cine de moda de la ciudad! Atiende a los clientes antes de ver una película para que disfruten de las más deliciosas palomitas de maíz, perritos calientes, refrescos, hamburguesas y muchas cosas más. ¡Gana dinero para comprar artículos y conseguir los mejores estrenos de cine! ',
    image: 'assets/images/gestion/panicoenelcine.jpg',
    category: 'gestion',
    premium: false
  },
  {
    id: 16,
    name: 'El restaurante de bob esponja',
    description:
      'Bob Esponja ha abierto un restaurante y necesita toda tu ayuda para preparar montones de deliciosas hamburguesas y entregar todo los pedidos de sus clientes a tiempo. ¡Ayúdalo a administrar todas las tareas y gana mucho dinero! ',
    image: 'assets/images/gestion/elrestaurantedebobesponja.jpg',
    category: 'gestion',
    premium: false
  },
  {
    id: 17,
    name: '3 pandas en japon',
    description:
      '¡Los 3 pandas están de vuelta y esta vez han aterrizado en Japón! Nunca han estado allí, así que todo es nuevo y divertido para ellos. Ayúdales a superar todos los obstáculos que se presenten en su camino y consigue que disfruten de su viaje.',
    image: 'assets/images/infantiles/3pandasenjapon.jpg',
    category: 'infantiles',
    premium: false
  },
  {
    id: 18,
    name: 'El caracol bob en el espacio',
    description:
      'El caracol bob vuelve con nuevos retos y pantallas esta vez en el espacio exterior. Controla la gravedad de cada fase, y utiliza la lógica para poder guiarle hasta la salida. ',
    image: 'assets/images/infantiles/elcaracolbobenelespacio.jpg',
    category: 'infantiles',
    premium: true
  },
  {
    id: 19,
    name: 'Niño fuego y niña agua',
    description:
      'El niño Fuego y la niña Agua quieren explorar las cuevas en busca de gemas. Resuelve todos los puzzles controlando a los personajes por turnos. Consigue la máxima puntuación posible!',
    image: 'assets/images/infantiles/niñofuegoyniñaagua.webp',
    category: 'infantiles',
    premium: false
  },
  {
    id: 20,
    name: 'Bola roja',
    description:
      'En esta nueva aventura de nuestra bola roja favorita, se enfrentará a los malvados cubos negros, que quieren cubizar el mundo entero. ¿Lo vas a permitir?',
    image: 'assets/images/infantiles/bolaroja.webp',
    category: 'infantiles',
    premium: false
  },
  {
    id: 21,
    name: '4 en linea',
    description:
      'Prueba esta versión virtual del clásico juego 4 en linea! Las reglas son simples: pon una ficha por turno e intenta formar filas verticales, horizontales o diagonales de 4 fichas consecutivos de tu color. El primero en hacerlo es el ganador. Mira atentamente la cuadrícula antes de cada jugada y no permitas que tu oponente te engañe.',
    image: 'assets/images/puzzle/connect4.png',
    category: 'puzzle',
    premium: false
  },
  {
    id: 22,
    name: 'Templo del rompecabezas',
    description:
      '¡Con Temple Puzzle, prepárate para entrar en un templo misterioso lleno de rompecabezas! Como puedes entender por el nombre del juego, la única salida es aferrarte a tu sublime paciencia y resolver los rompecabezas de imágenes deslizantes. Si tienes el coraje de entrar en este templo ahora, ¡que comience ya esta aventura!',
    image: 'assets/images/puzzle/templodelrompecabezas.png',
    category: 'puzzle',
    premium: true
  },
  {
    id: 23,
    name: 'Rompecabezas de explosión de juguetes',
    description:
      'Es un juego de rompecabezas de combinación de iconos creado por Avix Games. Con imágenes impresionantes y animaciones satisfactorias ofrece una visión diferente del género de rompecabezas a juego. Desde animales hasta frutas y objetos cotidianos, puede explorar una gran cantidad de elegantes gráficos para admirar. Haga clic en el icono duplicado para deshacerse de él antes de que se acabe el tiempo, ya que se le puntuará en función de su agilidad. ¡Solo vives una vez, pero puedes jugar dos veces! Tanto como quieras.',
    image: 'assets/images/puzzle/rompecabezasdeexplosiondejuguetes.png',
    category: 'puzzle',
    premium: false
  },
  {
    id: 24,
    name: 'Jigsaw 3',
    description:
      'Jigsaw 3 es un juego de rompecabezas creado por Avix Games en el que arrastra las piezas del rompecabezas y las coloca en el lugar correcto para revelar una imagen impresionante. Si tienes todas las piezas en el lugar correcto, ¡completas el nivel! Hay 3 niveles de dificultad para elegir: fácil, normal y difícil, cada uno de los cuales agrega más y más piezas al rompecabezas. ¡El juego tiene un total de 500 niveles! ¿Puedes completarlos todos?',
    image: 'assets/images/puzzle/jigsaw3.png',
    category: 'puzzle',
    premium: false
  },
  {
    id: 25,
    name: 'Acertijos de velas 3',
    description:
      'Este es un juego de plataformas de rompecabezas estilo escape room en el que debes usar el poder del fuego y el agua para ayudar a una vela a llegar al final del nivel y prender fuego a la meta.',
    image: 'assets/images/puzzle/acertijosdevelas3.png',
    category: 'puzzle',
    premium: false
  },
  {
    id: 26,
    name: 'Las gemas de los zombies',
    description:
      'Nuestro protagonista corre a lo largo del bosque en busca de gemas preciosas. Sin embargo, a su paso hay zombies que ponen en riesgo su vida. Recoge todas las gemas que puedas en esta aventura de correr infinita, esquivando los zombies que encuentres en tu camino y resistiendo el mayor tiempo posible!',
    image: 'assets/images/puzzle/acertijosdevelas3.png',
    category: 'puzzle',
    premium: false
  }
]
