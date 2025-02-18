social-media-app/
├── client/                     # Frontend (React + Tailwind CSS + TypeScript + Vite)
│   ├── public/                 # Public assets
│   │   ├── index.html          # Main HTML file
│   │   ├── favicon.ico         # Favicon
│   │   └── images/             # Static images
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── auth/           # Authentication-related components
│   │   │   ├── feed/           # Feed-related components
│   │   │   ├── profile/        # Profile-related components
│   │   │   ├── navbar/         # Navbar component
│   │   │   ├── sidebar/        # Sidebar component
│   │   │   ├── modal/          # Modal components
│   │   │   ├── chat/           # Chat-related components
│   │   │   │   ├── ChatBox.tsx # Chat interface
│   │   │   │   ├── Message.tsx # Individual message component
│   │   │   │   └── ChatList.tsx # List of chat conversations
│   │   │   ├── call/           # Call-related components
│   │   │   │   ├── VideoCall.tsx # Video call interface
│   │   │   │   ├── AudioCall.tsx # Audio call interface
│   │   │   │   └── CallControls.tsx # Controls for calls (mute, end, etc.)
│   │   │   └── common/         # Common components
│   │   ├── pages/              # Page-level components
│   │   │   ├── Home.tsx        # Home page (Feed)
│   │   │   ├── Login.tsx       # Login page
│   │   │   ├── Signup.tsx      # Signup page
│   │   │   ├── Profile.tsx     # User profile page
│   │   │   ├── Explore.tsx     # Explore page
│   │   │   ├── Notifications.tsx # Notifications page
│   │   │   ├── ChatPage.tsx    # Chat page
│   │   │   ├── CallPage.tsx    # Call page
│   │   │   └── NotFound.tsx    # 404 page
│   │   ├── redux/              # Redux state management
│   │   │   ├── store.ts        # Redux store configuration
│   │   │   ├── slices/         # Redux slices for different features
│   │   │   │   ├── authSlice.ts
│   │   │   │   ├── postSlice.ts
│   │   │   │   ├── userSlice.ts
│   │   │   │   ├── notificationSlice.ts
│   │   │   │   └── chatSlice.ts # Chat-specific state management
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── useAuth.ts      # Authentication-related hooks
│   │   │   ├── useApi.ts       # API-related hooks
│   │   │   └── useSocket.ts    # Socket.IO hook for real-time communication
│   │   ├── api/                # API calls using React Query
│   │   │   ├── authApi.ts      # Auth-related API calls
│   │   │   ├── postApi.ts      # Post-related API calls
│   │   │   ├── userApi.ts      # User-related API calls
│   │   │   ├── notificationApi.ts # Notification-related API calls
│   │   │   └── chatApi.ts      # Chat-related API calls
│   │   ├── utils/              # Utility functions
│   │   │   ├── constants.ts    # Constants (API endpoints, etc.)
│   │   │   ├── helpers.ts      # Helper functions
│   │   │   ├── validators.ts   # Validation logic
│   │   │   └── webrtcUtils.ts  # WebRTC utility functions
│   │   ├── types/              # TypeScript type definitions
│   │   │   ├── authTypes.ts    # Types for authentication
│   │   │   ├── postTypes.ts    # Types for posts
│   │   │   ├── userTypes.ts    # Types for users
│   │   │   ├── chatTypes.ts    # Types for chat
│   │   │   └── callTypes.ts    # Types for calls
│   │   ├── context/            # Context providers
│   │   │   └── AuthContext.ts  # Authentication context
│   │   ├── assets/             # Assets like images, icons, etc.
│   │   ├── styles/             # Global styles
│   │   │   ├── tailwind.css    # Tailwind CSS entry point
│   │   │   └── globals.css     # Global CSS overrides
│   │   ├── App.tsx             # Main application component
│   │   ├── main.tsx            # Entry point of the app
│   │   └── routes.ts           # Route definitions
│   ├── vite.config.ts          # Vite configuration
│   ├── package.json            # Client-side dependencies
│   ├── tsconfig.json           # TypeScript configuration
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   └── postcss.config.js       # PostCSS configuration
│
├── server/                     # Backend (Node.js + Express + MongoDB + TypeScript)
│   ├── config/                 # Configuration files
│   │   ├── db.ts               # Database connection setup
│   │   └── env.ts              # Environment variables
│   ├── controllers/            # Controllers for handling requests
│   │   ├── authController.ts   # Authentication-related logic
│   │   ├── postController.ts   # Post-related logic
│   │   ├── userController.ts   # User-related logic
│   │   ├── notificationController.ts # Notification-related logic
│   │   └── chatController.ts   # Chat-related logic
│   ├── models/                 # Mongoose models
│   │   ├── User.ts             # User schema
│   │   ├── Post.ts             # Post schema
│   │   ├── Comment.ts          # Comment schema
│   │   ├── Notification.ts     # Notification schema
│   │   └── Chat.ts             # Chat schema
│   ├── routes/                 # API routes
│   │   ├── authRoutes.ts       # Authentication routes
│   │   ├── postRoutes.ts       # Post routes
│   │   ├── userRoutes.ts       # User routes
│   │   ├── notificationRoutes.ts # Notification routes
│   │   └── chatRoutes.ts       # Chat routes
│   ├── middlewares/            # Middleware functions
│   │   ├── authMiddleware.ts   # Authentication middleware
│   │   └── errorHandler.ts     # Error handling middleware
│   ├── sockets/                # Socket.IO setup
│   │   ├── chatSocket.ts       # Real-time chat socket logic
│   │   └── callSocket.ts       # Real-time call socket logic
│   ├── utils/                  # Utility functions
│   │   ├── jwtUtils.ts         # JWT-related utilities
│   │   ├── cloudinary.ts       # Cloudinary integration for image uploads
│   │   └── webrtcUtils.ts      # WebRTC utility functions
│   ├── types/                  # TypeScript type definitions
│   │   ├── authTypes.ts        # Types for authentication
│   │   ├── postTypes.ts        # Types for posts
│   │   ├── userTypes.ts        # Types for users
│   │   ├── chatTypes.ts        # Types for chat
│   │   └── callTypes.ts        # Types for calls
│   ├── .env                    # Environment variables
│   ├── app.ts                  # Express app setup
│   ├── server.ts               # Server entry point
│   ├── tsconfig.json           # TypeScript configuration
│   └── package.json            # Server-side dependencies
│
├── README.md                   # Project documentation
├── .gitignore                  # Git ignore rules
└── package.json                # Root-level dependencies (if any)