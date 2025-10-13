# CivicConnect

A React Native mobile application built with Expo Router for civic engagement and issue tracking. CivicConnect allows citizens to report and track civic issues across different departments like Road Maintenance, Waste Management, Public Safety, Water Supply, and Parks & Recreation.

## 🚀 Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (File-based routing)
- **Styling**: NativeWind (TailwindCSS for React Native)
- **UI Components**: Gluestack UI, React Native Element Dropdown
- **Icons**: MaterialIcons from @expo/vector-icons
- **Language**: TypeScript
- **Animation**: React Native Reanimated, @legendapp/motion

## 📁 Project Structure

```
CivicConnect/
├── app/                          # Application screens and routing
│   ├── _layout.tsx              # Root layout wrapper
│   ├── index.tsx                # Splash screen with logo animation
│   ├── (auth)/                  # Authentication routes (grouped)
│   │   ├── _layout.tsx         # Auth layout wrapper
│   │   ├── signin.tsx          # Sign in screen
│   │   └── signup.tsx          # Sign up screen
│   ├── (tabs)/                  # Main tab navigation (grouped)
│   │   ├── _layout.tsx         # Tab layout with bottom navigation
│   │   ├── dashboard.tsx       # Dashboard screen
│   │   ├── newpost.tsx         # Create new issue post screen
│   │   ├── boards.tsx          # Community boards screen
│   │   └── profile.tsx         # User profile & issue tracking
│   └── issue/                   # Dynamic issue detail routes
│       ├── _layout.tsx         # Issue layout wrapper
│       └── [id].tsx            # Individual issue detail screen
│
├── components/                   # Reusable UI components
│   ├── Header.tsx              # App header component
│   ├── IssueCard.tsx           # Individual issue card display
│   ├── IssueStats.tsx          # Horizontal scrolling stats cards
│   ├── Select.tsx              # Department dropdown selector
│   └── TabBarIcon.tsx          # Custom tab bar icons
│
├── constants/                    # App constants and configurations
│   ├── colorCode.ts            # Status color mappings for UI
│   └── icons.ts                # Icon asset exports
│
├── services/                     # Data services and API utilities
│   └── data.ts                  # Mock data for issues, departments, and stats
│
├── assets/                       # Static assets (images, fonts, etc.)
│
├── Configuration Files
├── app.json                     # Expo app configuration
├── babel.config.js              # Babel transpiler config
├── cesconfig.jsonc              # CES configuration
├── eslint.config.js             # ESLint linting rules
├── expo-env.d.ts               # Expo TypeScript definitions
├── global.css                   # Global TailwindCSS styles
├── metro.config.js              # Metro bundler configuration
├── nativewind-env.d.ts         # NativeWind type definitions
├── package.json                 # Project dependencies
├── prettier.config.js           # Code formatting rules
├── tailwind.config.js           # TailwindCSS configuration
└── tsconfig.json                # TypeScript compiler options
```

## 📱 Application Structure

### App Directory (`app/`)

The `app/` directory uses **Expo Router's file-based routing** system. Files and folders in this directory automatically become routes.

#### Root Files

- **`_layout.tsx`**: Root layout component that wraps the entire application. Sets up the navigation stack with `headerShown: false` to use custom headers.

- **`index.tsx`**: Landing/splash screen that displays the CivicConnect logo with a fade-in/fade-out animation. After 1.8 seconds, it automatically navigates to the dashboard.

#### Authentication Routes (`(auth)/`)

Grouped route for authentication-related screens (parentheses make the folder a route group that doesn't affect the URL).

- **`_layout.tsx`**: Layout wrapper for authentication screens
- **`signin.tsx`**: User sign-in screen (placeholder)
- **`signup.tsx`**: User registration screen (placeholder)

#### Tab Navigation (`(tabs)/`)

Main application screens accessible via bottom tab navigation.

- **`_layout.tsx`**: Configures the tab navigator with:
  - Custom tab bar styling (rounded, centered)
  - Four tabs: Dashboard, Post, Boards, Profile
  - Custom header component for each screen
  - Custom tab icons using `TabBarIcon` component

- **`dashboard.tsx`**: Main dashboard screen (currently placeholder)

- **`newpost.tsx`**: Screen for creating new civic issue reports (currently placeholder)

- **`boards.tsx`**: Community boards for viewing public discussions (currently placeholder)

- **`profile.tsx`**: User profile and issue management screen featuring:
  - Statistics cards showing issue counts (Pending, In Progress, Resolved)
  - Department filter dropdown
  - List of all user-reported issues
  - Color-coded status badges
  - Department icons for visual identification

#### Issue Detail Routes (`issue/`)

Dynamic routes for viewing individual issue details.

- **`_layout.tsx`**: Layout wrapper for issue detail screens
- **`[id].tsx`**: Dynamic route that displays detailed information for a specific issue by ID, including:
  - Issue title, description, and status
  - Department and progress updates
  - Associated images and comments

## 🧩 Components

### `Header.tsx`

Custom header component displayed at the top of each screen.

**Props:**
- `title` (string): The title text to display in the header

**Features:**
- Fixed height of 10vh
- Centered title text
- White background

### `IssueCard.tsx`

Individual issue card component for displaying civic issues.

**Props:**
- `issue` (object): Contains `title`, `department`, and `status`

**Features:**
- Department icon with color-coded background
- Issue title and department name
- Status badge with dynamic colors:
  - Yellow: Pending
  - Blue: In Progress
  - Green: Resolved
- Icon mapping for departments (car, delete, security, water, park icons)

### `IssueStats.tsx`

Horizontal scrolling statistics cards component.

**Props:**
- `data` (array): Array of objects with `title` and `value` properties

**Features:**
- Horizontal FlatList for scrolling
- Blue-themed cards with large numeric values
- Displays statistics like issue counts

### `Select.tsx`

Department selection dropdown component.

**Props:**
- `value` (string): Currently selected value
- `setValue` (function): Callback to update selected value
- `data` (array): Array of options with `label` and `value`

**Features:**
- Custom styled dropdown with blue background
- Used for filtering issues by department
- Integration with react-native-element-dropdown

### `TabBarIcon.tsx`

Custom tab bar icon component with icon and label.

**Props:**
- `focused` (boolean): Whether the tab is currently active
- `title` (string): Tab name (Dashboard, Post, Boards, or Profile)

**Features:**
- Material Icons integration
- Color changes based on focus state (blue when active, gray when inactive)
- Icon and text label combination
- Mapped icons for each tab

## 📊 Services

### `services/data.ts`

Contains mock data and constants used throughout the application:

- **`issueStatsData`**: Default statistics for issue counts (Pending, In Progress, Resolved)
- **`deptData`**: Department options for filtering issues
- **`statusData`**: Status options for filtering issues
- **`issueData`**: Mock issue data with detailed information including:
  - Issue ID, title, department, and status
  - Image URLs (placeholder images)
  - Descriptions and progress comments
  - Department categorization and status tracking

This file serves as a data layer for the application, providing sample data for development and testing.

## 🎨 Styling

The project uses **NativeWind**, which brings TailwindCSS utility classes to React Native:

- `className` prop for applying Tailwind styles
- Configured via `tailwind.config.js`
- Global styles in `global.css`
- Responsive design with utility classes
- Custom color schemes (blue primary, stone gray text)

## 🔧 Configuration Files

- **`package.json`**: Dependencies including Expo, React Navigation, NativeWind, and UI libraries
- **`tsconfig.json`**: TypeScript configuration with path aliases (@/ for root imports)
- **`babel.config.js`**: Babel configuration for Expo and NativeWind
- **`metro.config.js`**: Metro bundler configuration
- **`tailwind.config.js`**: TailwindCSS configuration with content paths
- **`eslint.config.js`**: Linting rules for code quality
- **`prettier.config.js`**: Code formatting standards

## 📊 Constants

- **`constants/colorCode.ts`**: Color mappings for issue status badges (yellow for pending, blue for in progress, green for resolved)
- **`constants/icons.ts`**: Icon asset exports and configurations

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lakshaykun/CivicConnect.git
cd CivicConnect
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your platform:
```bash
npm run ios       # iOS
npm run android   # Android
npm run web       # Web
```

## 📜 Available Scripts

- `npm start`: Start Expo development server
- `npm run android`: Run on Android device/emulator
- `npm run ios`: Run on iOS device/simulator
- `npm run web`: Run in web browser
- `npm run lint`: Check code for linting errors
- `npm run format`: Auto-format code with ESLint and Prettier
- `npm run prebuild`: Generate native code for builds

## 🎯 Features

- **Issue Tracking**: Report and monitor civic issues with detailed descriptions
- **Department Categorization**: Organize issues by department (Road Maintenance, Waste Management, etc.)
- **Status Management**: Track issue status (Pending, In Progress, Resolved)
- **Visual Statistics**: Quick overview of issue counts with horizontal scrolling cards
- **Filtering**: Filter issues by department and status
- **Mock Data**: Comprehensive sample data for development and testing
- **Responsive Design**: Mobile-optimized UI with TailwindCSS
- **Smooth Animations**: Fade transitions and animated interactions
- **Progress Tracking**: Issue progress comments and updates

## 📝 Future Enhancements

- Implement authentication (signin/signup)
- Add dashboard with charts and analytics
- Create issue posting functionality with photo upload
- Implement community boards feature
- Add real-time notifications for issue updates
- Backend integration with API
- User roles (citizen, admin, department staff)
- Geolocation for issue reporting
- Map view for issue locations
- Push notifications
- Issue voting and prioritization
- Department response system
- Issue history and timeline
- Offline functionality
- Multi-language support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**lakshaykun**
- GitHub: [@lakshaykun](https://github.com/lakshaykun)

---

Built with ❤️ using React Native and Expo
