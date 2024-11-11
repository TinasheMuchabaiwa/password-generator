# Password Generator App

Password generator app built with React, featuring real-time strength analysis, secure password generation. In this project, I demonstrate modern web development practices, security consciousness, and deployment practices.

## Features

- **Password Generation:**
  - Customizable length (10-20 characters)
  - Character set selection (uppercase, lowercase, numbers, symbols)
  - Real-time entropy-based strength calculation
  - Protection against common password patterns through Pwned Passwords API
  - Timing attack prevention

- **Security Measures:**
  - Entropy-based strength assessment
  - Common password database verification
  - Secure clipboard operations

## Technology Stack

- **Frontend:**
  - JavaScript (ES6+)
  - React 18.3
  - Vite 5.4
  - Tailwind CSS 3.4
  - Crypto-js for secure operations

- **DevOps:**
  - Docker containerization
  - GitHub Actions CI/CD
  - AWS EC2 deployment
  - NGINX with SSL
  - Domain configuration

## Architecture

```
src/
├── components/          # React components
│   ├── password/       # Password-specific components
│   └── common/         # Reusable UI components
├── utils/              # Utility functions
│   ├── security.js     # Security operations
│   └── generator.js    # Password generation logic
```

## Quick Start

1. **Clone & Install:**
```bash
git clone https://github.com/TinasheMuchabaiwa/password-generator.git
cd password-generator
npm install
```

2. **Development:**
```bash
npm run dev
```

3. **Run with Docker:**
```bash
docker-compose up --build
```

## Deployment

The application is deployed on AWS EC2 with:
- Docker containerization
- NGINX reverse proxy
- SSL certification
- Domain configuration at mytempinstance.online

### Deployment Architecture:
```
Client Request → NGINX (SSL) → Docker Container → React App
```

## CI/CD Pipeline

Automated deployment pipeline using GitHub Actions:
1. Code push triggers workflow
2. Runs in Ubuntu latest
3. Builds Docker image
4. Deploys to EC2
5. Updates NGINX configuration

## Future Enhancements

- Comprehensive test implementation
- Password history feature
- Advanced entropy visualization
- Backend integration for enhanced features

## License

MIT © [Tinashe Muchabaiwa]

## 🔗 Links

- Live Demo: [https://mytempinstance.online](https://mytempinstance.online)
- Repository: [GitHub](https://github.com/TinasheMuchabaiwa/password-generator)