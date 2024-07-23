/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.sql(`INSERT INTO categories (name, url, "order") VALUES 
  ('Mejor Clip', 'mejor-clip', 0),
  ('Clip Joya oculta', 'clip-joya-oculta', 1),
  ('Mayor Enfado', 'mayor-enfado', 2),
  ('Mejor Bitero', 'mejor-bitero', 3),
  ('Mejor Domada', 'mejor-domada', 4),
  ('Mejor donación', 'mejor-donacion', 5),
  ('Mejor Pareja', 'mejor-pareja', 6),
  ('Mayor Insulto', 'mayor-insulto', 7),
  ('Mejor copy', 'mejor-copy', 8),
  ('Mejor clip de jugador', 'mejor-clip-de-jugador', 9),
  ('In memoriam a los caídos del año y pomodoro', 'in-memoriam-a-los-caidos-del-ano-y-pomodoro', 10),
  ('Mod más querído', 'mod-mas-querido', 11),
  ('Mejor Edit/meme', 'mejor-edit-meme', 12),
  ('Evento del año', 'evento-del-ano', 13),
  ('Mejor Stream', 'mejor-stream', 14),
  ('Mejor IRL', 'mejor-irl', 15),
  ('Mejor Jugada', 'mejor-jugada', 16),
  ('Mejor Timing', 'mejor-timing', 17),
  ('Mayor fuera de contexto', 'mayor-fuera-de-contexto', 18);`)
}

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.sql(`DELETE FROM categories;`)
}
