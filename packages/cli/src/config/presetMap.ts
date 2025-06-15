import path from 'path';

export const presetMap = {
  language: {
    javascript: {
      src: 'languages/js/src/index.js.ejs',
    },
    typescript: {
      src: 'languages/ts/src/index.ts.ejs',
    },
  },
  framework: {
    express: {
      packageJson: 'frameworks/express/package.json.ejs',
      app: 'frameworks/express/src/app.js.ejs',
    },
    fastify: {
      // TODO: Add Fastify specific paths
    },
  },
  architecture: {
    mvc: {
      routes: 'architectures/mvc/src/routes/index.js.ejs',
      // TODO: Add other MVC specific paths
    },
    layered: {
      // TODO: Add Layered specific paths
    },
  },
  orm: {
    mongoose: {
      db: 'orms/mongoose/db.js.ejs',
    },
    prisma: {
      // TODO: Add Prisma specific paths
    },
  },
  database: {
    mongodb: {
      db: 'databases/mongodb/db.js.ejs',
    },
    postgresql: {
      // TODO: Add PostgreSQL specific paths
    },
  },
  base: {
    env: 'base/.env.example',
    gitignore: 'base/.gitignore',
    readme: 'base/README.md.ejs',
  },
};

export type PresetMap = typeof presetMap;