/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.sql(`INSERT INTO videos (title, category_id, url, thumbnail_url, source) VALUES 
  ('Nominado 1', 1, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 1, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 1, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 1, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 2, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 2, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 2, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 2, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 3, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 3, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 3, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 3, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 4, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 4, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 4, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 4, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 5, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 5, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 5, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 5, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 6, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 6, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 6, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 6, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 7, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 7, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 7, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 7, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 8, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 8, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 8, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 8, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 9, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png','youtube'),
  ('Nominado 2', 9, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png','youtube'),
  ('Nominado 3', 9, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png','youtube'),
  ('Nominado 4', 9, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png','youtube'),

  ('Nominado 1', 10, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 10, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 10, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 10, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 11, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 11, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 11, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 11, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 12, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 12, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 12, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 12, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  
  ('Nominado 1', 13, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 13, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 13, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 13, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 14, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 14, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 14, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 14, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 15, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 15, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 15, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 15, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 16, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 16, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 16, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 16, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 17, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 17, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 17, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 17, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),

  ('Nominado 1', 18, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 2', 18, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 3', 18, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube'),
  ('Nominado 4', 18, 'https://www.youtube.com/watch?v=xvFZjo5PgG0', 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/03/la-streamer-zeling-en-directo.png', 'youtube');
  `)
}

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.sql(`DELETE FROM videos;`)
}
