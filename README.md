# Advanced React User Management Dashboard

A modern, responsive user management application built with React, TypeScript, and Ant Design. This application demonstrates advanced React concepts including custom hooks, state management, form handling, and component composition.

## 🚀 Live Demo

[View Live Demo](https://react-advanced-assignment.psamd.now.sh/)

## ✨ Features

### Core Functionality
- **User Profile Management**: View detailed user profiles with comprehensive information
- **Like System**: Interactive like/unlike functionality with real-time counters
- **Edit Users**: Complete user profile editing with form validation
- **Delete Users**: Safe user deletion with confirmation dialogs
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices

### Technical Features
- **React 18** with TypeScript for type safety
- **Ant Design** UI library for professional components
- **Custom Hooks** for data management and API calls
- **State Lifting** for proper component communication
- **Form Validation** with comprehensive error handling
- **Responsive Grid System** that adapts to screen sizes
- **Modern CSS** with Tailwind integration
- **API Integration** with JSONPlaceholder service

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Library**: Ant Design 5.x
- **Styling**: Tailwind CSS + Custom CSS
- **Build Tool**: Vite
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Client**: Fetch API
- **Icons**: Ant Design Icons
- **Development**: ESLint, TypeScript ESLint

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd user-management-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── UserCard.tsx     # Individual user card component
│   ├── UserList.tsx     # Main user list container
│   └── EditUserModal.tsx # User editing modal
├── hooks/               # Custom React hooks
│   └── useUsers.ts      # User data management hook
├── types/               # TypeScript type definitions
│   └── User.ts          # User interface definitions
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and animations
```

## 🎨 Design System

### Color Palette
- **Primary**: #1890ff (Ant Design Blue)
- **Success**: #52c41a (Green)
- **Warning**: #fa8c16 (Orange)
- **Error**: #ff4d4f (Red)
- **Text Primary**: #262626
- **Text Secondary**: #8c8c8c
- **Background**: #f5f5f5

### Typography
- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI'
- **Headings**: 600 weight, proper hierarchy
- **Body Text**: 400 weight, 150% line height
- **Code**: Monospace font family

### Spacing System
- **Base Unit**: 8px
- **Component Padding**: 16px, 20px, 24px
- **Grid Gaps**: 16px, 24px
- **Border Radius**: 8px, 12px

## 📱 Responsive Breakpoints

- **Mobile**: < 576px (1 column)
- **Tablet**: 576px - 768px (2 columns)
- **Desktop**: 768px - 1200px (3 columns)
- **Large Desktop**: > 1200px (4 columns)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

The application fetches user data from JSONPlaceholder API:

**Endpoint**: `https://jsonplaceholder.typicode.com/users`
**Method**: GET
**Response**: Array of 10 user objects

### User Data Schema
```typescript
interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
  liked?: boolean;
  likeCount?: number;
}
```

## 🎯 Key Components

### UserCard Component
- Displays individual user information in a card format
- Includes avatar with user initials
- Shows contact information with appropriate icons
- Provides action buttons for like, edit, and delete
- Responsive design with hover effects

### EditUserModal Component
- Modal form for editing user information
- Form validation with error messages
- Organized sections for personal and address information
- Responsive form layout with proper field grouping

### UserList Component
- Main container component managing user state
- Implements grid layout with responsive columns
- Handles user interactions (edit, delete, like)
- Loading and error state management

### useUsers Hook
- Custom hook for user data management
- API integration with error handling
- State management for CRUD operations
- Like functionality implementation

## 🚀 Performance Optimizations

- **Component Memoization**: Efficient re-rendering
- **Lazy Loading**: Code splitting for better performance
- **Optimized Images**: Proper image handling and sizing
- **CSS Animations**: Hardware-accelerated transitions
- **Bundle Optimization**: Tree shaking and minification

## 🧪 Testing Considerations

The application is designed to be testable with:
- Component isolation for unit testing
- Custom hooks that can be tested independently
- Clear separation of concerns
- Predictable state management

## 🔒 Security Features

- **Input Validation**: Form validation prevents invalid data
- **XSS Protection**: Proper data sanitization
- **Type Safety**: TypeScript prevents runtime errors
- **Error Boundaries**: Graceful error handling

## 🌟 Future Enhancements

- **Search and Filter**: User search functionality
- **Sorting Options**: Sort users by different criteria
- **Pagination**: Handle large user datasets
- **User Creation**: Add new user functionality
- **Data Persistence**: Local storage or database integration
- **Unit Tests**: Comprehensive test coverage
- **Accessibility**: WCAG compliance improvements

## 📄 License

This project is created for educational purposes as part of a React assignment.

## 🤝 Contributing

This is an assignment project, but suggestions and improvements are welcome!

## 📞 Support

For any questions or issues, please refer to the assignment guidelines or contact the instructor.

---

**Built with ❤️ using React, TypeScript, and Ant Design**