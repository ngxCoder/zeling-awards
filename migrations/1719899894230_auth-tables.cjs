/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export function up(pgm) {
  pgm.createTable('auth_user', {
    id: {
      type: 'TEXT',
      primaryKey: true
    },
    twitch_id: {
      type: 'TEXT',
      unique: true
    },
    login: {
      type: 'TEXT',
      notNull: true
    },
    display_name: {
      type: 'TEXT',
      notNull: true
    },
    email: {
      type: 'TEXT',
      notNull: true
    },
    profile_image_url: {
      type: 'TEXT'
    }
  })

  pgm.createTable('user_session', {
    id: {
      type: 'TEXT',
      primaryKey: true
    },
    expires_at: {
      type: 'TIMESTAMPTZ',
      notNull: true
    },
    user_id: {
      type: 'TEXT',
      notNull: true,
      references: 'auth_user(id)'
    }
  })
}
