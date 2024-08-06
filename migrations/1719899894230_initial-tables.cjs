/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export function up(pgm) {
  pgm.createTable('users', {
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

  pgm.createTable('sessions', {
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
      references: 'users(id)'
    }
  })

  pgm.createTable('categories', {
    id: {
      type: 'SERIAL',
      primaryKey: true
    },
    name: {
      type: 'TEXT',
      notNull: true
    },
    url: {
      type: 'TEXT',
      notNull: true
    },
    order: {
      type: 'INT',
      notNull: true
    }
  })

  pgm.createTable('candidates', {
    id: {
      type: 'SERIAL',
      primaryKey: true
    },
    title: {
      type: 'TEXT',
      notNull: true
    },
    category_id: {
      type: 'INT',
      notNull: true,
      references: 'categories(id)'
    },
    url: {
      type: 'TEXT',
      notNull: true
    },
    thumbnail_url: {
      type: 'TEXT',
      notNull: false
    }
  })

  pgm.createTable('votes', {
    id: {
      type: 'SERIAL',
      primaryKey: true
    },
    user_id: {
      type: 'TEXT',
      notNull: true,
      references: 'users(id)'
    },
    candidate_id: {
      type: 'INT',
      notNull: true,
      references: 'candidates(id)'
    },
    category_id: {
      type: 'INT',
      notNull: true,
      references: 'categories(id)'
    }
  })

  pgm.addConstraint(
    'votes',
    'unique_user_id_category_id',
    'UNIQUE(user_id, category_id)'
  )
}
