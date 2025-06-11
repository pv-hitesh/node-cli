# Boilerplate CLI Monorepo

A powerful CLI tool to generate backend API boilerplates with customizable architecture and tech stack, built with TypeScript and Turborepo.

## 📦 Packages

- **`packages/cli`** - The main CLI tool for generating backend boilerplates
- **`apps/website`** - Next.js website for documentation and marketing

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Development

```bash
# Start all packages in development mode
npm run dev

# Build all packages
npm run build

# Run linting
npm run lint
```

### CLI Development

```bash
# Navigate to CLI package
cd packages/cli

# Build the CLI
npm run build

# Test the CLI locally
npm run start create
```

### Website Development

```bash
# Navigate to website
cd apps/website

# Start development server
npm run dev
```

## 🛠️ CLI Usage

### Installation

```bash
npm install -g boilerplate-cli
```

### Create a new project

```bash
boilerplate-cli create
```

This will start an interactive prompt to configure your project:
- Project name
- Framework (Express, Fastify, etc.)
- Architecture (MVC, MVC+Service+Repo)
- ORM/ODM (None, Mongoose, Prisma)
- Features (Auth, Logger, CORS, etc.)

### Add features to existing project

```bash
boilerplate-cli add auth
boilerplate-cli add logger
```

### View project information

```bash
boilerplate-cli info
```

## 🏗️ Architecture

### TypeScript Structure

The project is fully typed with TypeScript, providing:
- Type safety across all packages
- Better IDE support and autocomplete
- Compile-time error checking
- Improved refactoring capabilities

### Turborepo Benefits

- **Fast builds**: Intelligent caching and parallelization
- **Monorepo management**: Easy dependency management across packages
- **Shared configuration**: Consistent tooling across all packages
- **Incremental builds**: Only rebuild what changed

## 📁 Project Structure

```
boilerplate-cli-monorepo/
├── apps/
│   └── website/              # Next.js marketing website
│       ├── src/
│       ├── package.json
│       └── ...
├── packages/
│   └── cli/                  # Main CLI package
│       ├── src/
│       │   ├── bin/          # CLI entry point
│       │   ├── utils/        # Core utilities
│       │   ├── types/        # TypeScript definitions
│       │   └── ...
│       ├── templates/        # Project templates
│       ├── schemas/          # JSON schemas
│       └── package.json
├── turbo.json               # Turborepo configuration
├── package.json             # Root package.json
└── README.md
```

## 🔧 Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all packages in development mode |
| `npm run build` | Build all packages |
| `npm run lint` | Run ESLint across all packages |
| `npm run clean` | Clean all build artifacts |
| `npm run format` | Format code with Prettier |

## 📝 Supported Templates

### Express + MVC
- Clean MVC architecture
- Route organization
- Middleware setup
- Error handling

### Features
- 🔐 **Authentication**: JWT-based auth with bcrypt
- 📝 **Logger**: Winston logging system
- 🌐 **CORS**: Cross-origin resource sharing
- 🛡️ **Rate Limiting**: Request rate limiting
- ✅ **Validation**: Input validation with express-validator

### ORM Support
- **Mongoose**: MongoDB object modeling
- **Prisma**: Next-generation ORM
- **None**: Plain database queries

## 🚀 Publishing

### CLI Package

```bash
cd packages/cli
npm run build
npm publish
```

### Website Deployment

The website can be deployed to Vercel, Netlify, or any other static hosting provider.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.