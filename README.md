# Breakthrough Manchester

A comprehensive web application for Breakthrough Manchester, an educational program that supports students through their educational journey with resources, progress tracking, and community engagement.

![Breakthrough Manchester](https://via.placeholder.com/800x400?text=Breakthrough+Manchester)

## 📋 Overview

Breakthrough Manchester provides an interactive platform for students, advisors, and program administrators. The application includes features such as:

- 6C Points tracking and leaderboard
- Educational resources for college preparation
- Monthly check-in system
- Support for tutoring services
- Document repository for program materials

## 🚀 Features

### 6C Points System
Track student progress across six core competencies:
- Character
- Citizenship
- Collaboration
- Creativity
- Critical Thinking
- Communication

### Interactive Data Visualization
- Leaderboards with sortable columns
- Visual representation of student progress
- Filtering capabilities for data exploration

### Resource Center
- College preparation resources
- Application guidance
- Financial aid information
- Summer program opportunities

### Student Support
- Monthly check-in system
- Tutoring support request system
- Suggestion box for program improvement

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite
- **Routing**: React Router v7
- **UI Components**: 
  - Material UI
  - Bootstrap 5
- **Data Visualization**:
  - ApexCharts
  - Chart.js
- **Tables**: React Table v7
- **Form Handling**: React Hook Form
- **Code Quality**: ESLint with React plugins

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/breakthrough-manchester.git

# Navigate to the project directory
cd breakthrough-manchester

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🏃‍♂️ Running the Application

After starting the development server with `npm run dev`, the application will be available at http://localhost:5173.

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 📂 Project Structure

```
breakthrough-manchester/
├── src/
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── DynamicTable.jsx
│   │   ├── Carousel.jsx
│   │   ├── Charts.jsx
│   │   ├── ProgressTracker.jsx
│   │   └── ...
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── SixCPoints.jsx
│   │   ├── MonthlyCheckIn.jsx
│   │   ├── PreparingForCollege.jsx
│   │   └── ...
│   ├── assets/
│   │   ├── logo.png
│   │   ├── character.jpg
│   │   ├── citizenship.jpg
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🧩 Key Components

### DynamicTable
An interactive table component with sorting, filtering, and data visualization capabilities.

### Carousel
A rotating display of the 6C core competencies with images and captions.

### Header & Navigation
Responsive navigation system with dropdowns for accessing all application features.

### ProgressTracker
Visual representation of student progress towards goals.

## 📱 Responsive Design

The application is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile phones

## 🔒 Authentication

The application includes user authentication to ensure that:
- Students can access their personal data
- Advisors can view their students' progress
- Administrators have access to program-wide metrics

## 🌐 Deployment

The application can be deployed to various platforms:

### Build for Production
```bash
npm run build
```

This will generate optimized files in the `dist` directory that can be deployed to any static hosting service.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Acknowledgements

- Breakthrough Manchester team for their guidance and requirements
- All contributors who have helped shape this application
