/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.sql(`INSERT INTO categories (name, description, url, "order") VALUES

  ('La Joya Oculta', 'Se premiarán clips de gran calidad, el objetivo es encontrar esos clips que eran increíbles pero no fueron tan populares', 'la-joya-oculta', 0),

  ('El Mayor Enfado', 'Cuando el sufrimiento, la ira y la venganza se apoderan de Zeling, crean un monstruo; entre peor sea, mejor', 'el-mayor-enfado', 1),

  ('El Mejor Bitero', 'Sin duda, los espectadores son esenciales para un canal, pero hay unos que resaltan más que otros y son los biteros, personas que se esfuerzan día a día creando comentarios graciosos y creativos para que una voz robótica los diga', 'el-mejor-bitero', 2),

  ('La Mayor Domada', 'Si la streamer vive en las nubes, tiene que haber alguien capaz de regresarle los pies a la tierra y recordarle su lugar, esta categoría premia a los más basados', 'la-mayor-domada', 3),

  ('La Mejor Dono', 'Cada cierto tiempo alguna persona hace una donación que resalta más que ninguna otra, ya sea por originalidad, lo bugueada que puede volver la voz, lo graciosa o cualquier otro motivo, escoge tu favorita', 'la-mejor-dono', 4),

  ('La Mejor Pareja', 'En este canal creemos en el amor y encontraremos la media naranja de Zeling', 'la-mejor-pareja', 5),

  ('El Mayor Insulto', 'La ira deja sacar lo peor de nosotros, pero a veces de ahí nace la belleza, ¿cuál es el mejor insulto realizado por Zeling a un inocente?', 'el-mayor-insulto', 6),

  ('El Mejor Copy', 'Un pájaro queriendo entrar, el putísimo Yone o cualquier otra frase que ha sido compartida incontablemente por toda la comunidad, escoge la mejor', 'el-mejor-copy', 7),

  ('La Mejor Colaboración', 'Cuando se hacen colaboraciones, ya sea con amigos o otros streamers, puede dar paso a crear grandes situaciones, esta categoría premiará el mejor de todos', 'la-mejor-colaboracion', 8),

  ('In memoriam a los caídos y pomodoro', 'Esta no es una categoría, es un momento para recordar a los muertos que ha causado Zeling y hablar de la historia que nunca se contó', 'in-memoriam-a-los-caidos-y-pomodoro', 9),

  ('El Mejor Mod', 'Los moderadores son quienes tienen el poder y deben mantener el orden, pero ¿realmente lo hacen? Escoge a tu favorito', 'el-mejor-mod', 10),

  ('El Mejor Edit/Meme', 'Cuando alguien de la comunidad quiere ir un paso más allá, puede hacer un video, meme, cover o cualquier cosa en el que puede tardar horas o incluso días haciendo, escoge el que más te guste', 'el-mejor-edit-meme', 11),

  ('El Mejor Evento', 'A lo largo de su trayectoria ha podido participar en múltiples eventos de streamers donde todos conviven y se crean momentos especiales, ¿Cuál ha sido el mejor en el que Zeling ha estado?', 'el-mejor-evento', 12),

  ('El Mejor Stream', 'Todos los streams tienen algo especial pero a veces aparecen algunos que resaltan mucho más que los demás, ya sea por su elaboración, originalidad, gracia o cualquier motivo, ¿Cuál ha sido tu favorito?', 'el-mejor-stream', 13),

  ('El Mejor IRL', 'Puede que la variedad no sea su estilo, pero a veces decide tomar el móvil y llevarnos de paseo por lugares increíbles, ¿Cuál ha sido el mejor de estos streams?', 'el-mejor-irl', 14),

  ('La Mejor Jugada', 'Hasta los malos jugadores pueden tener grandes momentos donde se deja ver sus grandes habilidades, ¿Cuál ha sido la mejor play de Zeling jugando al LoL?', 'la-mejor-jugada', 15),

  ('El Mejor Timing', 'Cuando se juntan los astros ocurren situaciones que son poco probables pero muy graciosas, ¿Cuál es tu favorita?', 'el-mejor-timing', 16),

  ('El Mejor Fuera de Contexto', '¿Racista? ¿Machista? ¿Devota a un señor con bigote gracioso? ¿Por qué no todas? Esta categoría premia los clips más jocosos', 'el-mejor-fuera-de-contexto', 17),

  ('El Mejor Clip', 'El clip que haya tenido mejor recepción y popularidad por la comunidad', 'el-mejor-clip', 18)`)
}

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.sql(`DELETE FROM categories;`)
}
