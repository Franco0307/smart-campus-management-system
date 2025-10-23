# 🏢 Smart Campus Management System

A comprehensive intelligent campus management system built with React, TypeScript, and Ant Design.

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61dafb.svg)](https://reactjs.org/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.x-1890ff.svg)](https://ant.design/)

## 🌐 Live Demo

**Visit:** https://franco0307.github.io/smart-campus-management-system/

## 📖 Introduction

A smart campus leverages modern information technology to manage and optimize campus operations. This platform integrates IoT, big data, and AI technologies to improve management efficiency, save energy, enhance security, and improve environmental quality.

**Key Capabilities:**
- 💡 Intelligent lighting and energy management
- 🔒 Smart security monitoring
- 📱 Mobile-integrated services
- 📊 Real-time data visualization

## ✨ Features

- **Dashboard** - Real-time metrics and analytics
- **Tenant Management** - Complete lifecycle management with CRUD operations
- **Property Management** - Buildings, rooms, and vehicles tracking
- **Repair Management** - Work order tracking and assignment
- **Finance Management** - Contracts and billing management
- **Investment Management** - Lead tracking and follow-up
- **Operation Management** - Content publishing and announcements
- **Equipment Management** - Facility monitoring and maintenance
- **Energy Consumption** - Real-time usage tracking and analytics
- **System Settings** - User and permission management with role-based access control

## 🚀 Technology Stack
```
React 18 + Redux Toolkit + React Router v6.4 + TypeScript + Ant Design + ECharts + Mock.js
```

**Core Technologies:**
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe JavaScript
- **Ant Design 5.x** - Enterprise UI components
- **Redux Toolkit** - State management
- **React Router v6** - Client-side routing
- **ECharts** - Data visualization library
- **SCSS** - CSS preprocessor
- **Mock.js** - Mock data generation
- **Axios** - HTTP client

## 📦 Quick Start

### Prerequisites
- Node.js >= 14.0.0
- npm >= 6.0.0

### Installation
```bash
# Clone repository
git clone https://github.com/Franco0307/smart-campus-management-system.git

# Navigate to project
cd smart-campus-management-system

# Install dependencies
npm install

# Start development server
npm start

# Open browser at http://localhost:3000
```

## 🔑 Demo Accounts

The system provides three user roles with different permission levels:

### 🔴 Administrator Account
```
Username: admin
Password: admin123123
```
**Full System Access:**
- ✅ All tenant and property management features
- ✅ Financial management and reporting
- ✅ System settings and user management
- ✅ Equipment and energy monitoring
- ✅ Complete CRUD operations on all modules
- ✅ Permission configuration

### 🟡 Manager Account
```
Username: manager
Password: manager123123
```
**Management Operations:**
- ✅ Tenant and property management
- ✅ Repair management and work order assignment
- ✅ Investment tracking and lead management
- ✅ Operation and content management
- ✅ Equipment and energy monitoring
- ✅ View financial reports
- ⛔ Limited system settings access

### 🟢 User Account
```
Username: user
Password: user123123
```
**Basic Operations:**
- ✅ View tenant information
- ✅ Access property information
- ✅ Submit repair requests
- ✅ View equipment status
- ✅ Monitor energy consumption
- ✅ Personal center and task management
- ⛔ No access to system settings
- ⛔ No access to financial management

## 📊 Permission Comparison

| Feature | Admin | Manager | User |
|---------|:-----:|:-------:|:----:|
| Dashboard | ✅ | ✅ | ✅ |
| Tenant Management | ✅ | ✅ | 👁️ View Only |
| Property Management | ✅ | ✅ | 👁️ View Only |
| Repair Management | ✅ | ✅ | 📝 Submit Only |
| Finance Management | ✅ | 👁️ View Only | ⛔ |
| Investment Management | ✅ | ✅ | ⛔ |
| Operation Management | ✅ | ✅ | ⛔ |
| Equipment Management | ✅ | ✅ | 👁️ View Only |
| Energy Consumption | ✅ | ✅ | ✅ |
| System Settings | ✅ | ⛔ | ⛔ |
| Personal Center | ✅ | ✅ | ✅ |

## 📁 Project Structure
```
src/
├── api/          # API services and HTTP requests
├── assets/       # Static resources (images, fonts)
├── components/   # Reusable React components
├── hooks/        # Custom React hooks
├── pages/        # Page-level components
│   ├── Login/           # Login page
│   ├── Dashboard/       # Dashboard
│   ├── Users/           # Tenant management
│   ├── Estate/          # Property management
│   ├── Repair/          # Repair management
│   ├── Finance/         # Finance management
│   ├── Merchants/       # Investment management
│   ├── Operation/       # Operation management
│   ├── Equipment/       # Equipment management
│   ├── Energy/          # Energy monitoring
│   ├── Settings/        # System settings
│   └── Personal/        # Personal center
├── router/       # Routing configuration
├── store/        # Redux store and slices
├── utils/        # Utility functions and helpers
├── mock/         # Mock data for development
└── App.tsx       # Root component
```

## 🛠️ Build & Deploy

### Production Build
```bash
# Create optimized production build
npm run build

# Build output will be in 'build' folder
```

### Deploy to GitHub Pages
```bash
# Deploy to GitHub Pages
npm run deploy

# Site will be available at:
# https://franco0307.github.io/smart-campus-management-system/
```

## 🎨 Key Features Explained

### Role-Based Access Control (RBAC)
- Three distinct user roles with customized permissions
- Dynamic menu rendering based on user role
- Protected routes and API endpoints
- Button-level permission control

### Dynamic Routing
- Routes generated dynamically based on user permissions
- Lazy loading for optimal performance
- Nested routing structure

### Data Visualization
- Interactive charts powered by ECharts
- Real-time energy consumption monitoring
- Statistical dashboards with key metrics

### Mock Data System
- Complete mock API for development
- Simulated backend responses
- No backend required for testing

## 🔐 Security Features

- JWT-based authentication (mock implementation)
- Role-based access control
- Protected routes
- Session management
- Form validation
- XSS protection

## 📱 Responsive Design

- Optimized for desktop and tablet devices
- Ant Design responsive grid system
- Mobile-friendly UI components

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 👨‍💻 Author

**Franco0307**

- GitHub: [@Franco0307](https://github.com/Franco0307)
- Email: z.yang110817@gmail.com
- Project: [smart-campus-management-system](https://github.com/Franco0307/smart-campus-management-system)

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Ant Design](https://ant.design/) - UI component library
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [ECharts](https://echarts.apache.org/) - Visualization library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

**[🌐 Live Demo](https://franco0307.github.io/smart-campus-management-system/)** | **[📖 Documentation](https://github.com/Franco0307/smart-campus-management-system)**

Made with ❤️ by Franco0307

</div>