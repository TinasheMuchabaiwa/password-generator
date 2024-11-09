# Password Generator App

This is a user-friendly password generator built with React. It allows users to generate strong passwords based on their specified criteria, with a visual strength indicator and copy-to-clipboard functionality.

## Features

- Custom password generation with options for:
  - Length (10-20 characters)
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Real-time password strength calculation
- Copy to clipboard functionality
- Responsive design for all devices

## Technology Stack

- React
- Tailwind CSS
- Jest & React Testing Library
- GitHub Actions for CI/CD
- AWS EC2 for deployment

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/TinasheMuchabaiwa/password-generator.git
cd password-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Run tests:
```bash
npm test
```

## Project Structure

```
src/
├── components/     # React components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
└── tests/         # Test files
```

## Testing Strategy

- Unit tests for utility functions
- Component tests for UI behavior
- Integration tests for main features
- Accessibility tests

## Deployment

The application is automatically deployed to AWS EC2 through GitHub Actions when changes are pushed to the main branch.

## License

MIT © [Tinashe Muchabaiwa]