# PreAssess - AI-Powered Learning Platform

Welcome to PreAssess! This project is built by a passionate team to help students master concepts in the right order and give instructors powerful tools to guide and assess learning. We hope you enjoy exploring it as much as we enjoyed building it!

**Project Documentation** - https://1drv.ms/w/c/5396b16527d0a48b/EQB_mz-iBFVKnaHEN4mo5JoBv2o_uox7Zv6zugtx7A0i1w?e=prwp7J

---

## 👥 Team Members
- **Alakh Mathur** (Team Lead) - Developed the SDLC,project architecture,landing pages,User and Instructor Dashboard,Chatbot System,Query Management and control,Notification and smart prerequistie recommendation on user side
- **Omkar Kumar** - Prerequisite generation,Authorization ,Instructor's student profile page,MongoDB Integration,Full Deployment
- **Anand Jangid** - Quiz system,Learning module generation, Storage and pdf conversion, ThemeToggle, Forgot Password, Google Sign in, Responsiveness in user side and final UI enhancement
- **Pavithra Krishnappa** - Frontend components, user experience
- **Aditya Kumar Das** - Database design, Quiz Modules Design

---

## 🔍 Problem Statement
Create a system that generates formative assessments based on the prerequisite concepts of a target learning objective to ensure readiness before progression.

---

## 🚀 Solution Overview: PreAssess
PreAssess is a modern, full-stack platform for personalized, dependency-aware learning and assessment. It helps students master prerequisite concepts before moving forward, and gives instructors a dashboard to track, manage, and support learners.

---

## ✨ Key Features

### 1. **Dependency-Based Learning System**
- **Smart Prerequisite Engine**: Automatically identifies and enforces learning dependencies
- **Progressive Learning Paths**: Students must master prerequisites before advancing
- **Visual Dependency Mapping**: Interactive visualization of topic relationships

### 2. **AI-Powered Content Generation**
- **Dynamic Quiz Generation**: AI creates contextual quizzes based on prerequisites
- **Personalized Learning Modules**: Tailored content for individual learning styles
- **Groq API Integration**: High-performance AI content generation

### 3. **Comprehensive Assessment System**
- **Anti-Cheating Measures**: Tab switching detection, keyboard shortcuts prevention
- **Real-time Progress Tracking**: Live monitoring of student performance
- **Detailed Analytics**: Comprehensive reporting for instructors

### 4. **Instructor Dashboard**
- **Student Management**: View, track, and manage all student activities
- **Content Management**: Create and organize learning materials
- **Assessment Tracking**: Search and review all student attempts
- **Query System**: Handle student questions with file attachments
- **Audit Logging**: Complete transparency of instructor actions

### 5. **Modern UI/UX**
- **NASA-Inspired Dark Theme**: Professional, space-themed interface
- **Smooth Animations**: Framer Motion-powered interactions
- **Responsive Design**: Works seamlessly across all devices
- **Accessibility Features**: Keyboard navigation, screen reader support

---

## 🛠️ Tech Stack

| Area      | Technology                                    | Purpose                                    |
|-----------|-----------------------------------------------|--------------------------------------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS, Framer Motion | Modern, type-safe UI with smooth animations |
| **Backend** | Node.js, Express, MongoDB (Mongoose), JWT | RESTful API with secure authentication |
| **AI/ML** | Groq API (Llama3/Mistral), OpenAI API | Dynamic content generation and assessment |
| **Database** | MongoDB Atlas | Cloud-hosted, scalable data storage |
| **Deployment** | Vercel (Frontend), Render (Backend) | Production-ready hosting |
| **Security** | JWT tokens, bcrypt, CORS, rate limiting | Enterprise-grade security |

---

## 🏗️ Architecture Overview

### Frontend Architecture
```
client/src/
├── components/          # Reusable UI components
│   ├── AnimatedIntroText.tsx    # Animated text effects
│   ├── Chatbot.tsx             # AI assistant interface
│   ├── GalaxyBackground.tsx    # Space-themed backgrounds
│   ├── ProtectedRoute.tsx      # Route protection logic
│   └── ThemeToggle.tsx         # Dark/light theme switching
├── pages/              # Main application pages
│   ├── Dashboard.tsx           # Student main interface
│   ├── LearnPage.tsx          # Learning module viewer
│   ├── QuizPage.tsx           # Assessment interface
│   └── Instructor*.tsx        # Instructor dashboard pages
├── services/           # API communication layer
│   └── api.ts                 # Centralized API client
└── context/           # React context providers
    └── ThemeContext.tsx       # Global theme management
```

### Backend Architecture
```
Server/src/
├── models/             # MongoDB schemas
│   ├── User.ts                # Student data model
│   ├── Instructor.ts          # Instructor data model
│   ├── LearningModule.ts      # Learning content model
│   ├── QuizSession.ts         # Assessment tracking
│   └── Query.ts              # Student query system
├── routes/             # API endpoint handlers
│   ├── authRoutes.ts          # Authentication endpoints
│   ├── learnRoutes.ts         # Learning content endpoints
│   ├── questionRoutes.ts      # Quiz generation/submission
│   └── queryRoutes.ts         # Query management
└── index.ts           # Main server entry point
```

---

## 🔧 Key Code Components Explained

### 1. **Dependency-Based Learning Engine**

#### Frontend Implementation (`Dashboard.tsx`)
```typescript
// Prerequisite checking logic
const handleTopicSubmit = async (e: React.FormEvent) => {
  const prereqRes = await getPrerequisites(token, topic);
  const prereqs = prereqRes.data.prerequisites || [];
  
  // Check if user has mastered all prerequisites
  const missingPrereqs = prereqs.filter(
    prereq => !passedTopics.includes(prereq)
  );
  
  if (missingPrereqs.length > 0) {
    setMissingPrereqs(missingPrereqs);
    setCanProceed(false);
  } else {
    setCanProceed(true);
  }
};
```

#### Backend Implementation (`prereqRoutes.ts`)
```typescript
// AI-powered prerequisite generation
const generatePrerequisites = async (topic: string) => {
  const prompt = `Generate 5 essential prerequisites for learning "${topic}". 
                 Focus on foundational concepts that must be mastered first.`;
  
  const response = await groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "llama3-70b-8192",
    temperature: 0.7,
  });
  
  return response.choices[0].message.content;
};
```

### 2. **AI-Powered Quiz Generation**

#### Quiz Generation Logic (`questionRoutes.ts`)
```typescript
// Dynamic quiz creation based on prerequisites
const generateQuiz = async (topic: string, prerequisites: string[]) => {
  const prompt = `Create 5 multiple-choice questions for "${topic}" 
                 based on these prerequisites: ${prerequisites.join(', ')}.
                 Each question should test understanding of prerequisite concepts.`;
  
  const response = await groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "llama3-70b-8192",
    temperature: 0.8,
  });
  
  return parseQuizResponse(response.choices[0].message.content);
};
```

#### Anti-Cheating Implementation (`QuizPage.tsx`)
```typescript
// Comprehensive anti-cheating measures
useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.hidden && !showResults) {
      setWarningCount(prev => {
        const newCount = prev + 1;
        if (newCount >= 3) {
          setCheatingDetected(true);
          handleSubmitQuiz([], true);
        }
        return newCount;
      });
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    // Prevent common cheating shortcuts
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
      e.preventDefault();
      setWarningCount(prev => prev + 1);
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  document.addEventListener('keydown', handleKeyDown);
}, []);
```

### 3. **Learning Module System**

#### Content Rendering (`LearnPage.tsx`)
```typescript
// Markdown content rendering with syntax highlighting
const fetchAndDisplayModuleContent = useCallback(async (module: LearningModule) => {
  const response = await api.get(`/api/learn/${topic}/module/${module.id}`);
  
  // Convert Markdown to HTML with syntax highlighting
  const html = await marked.parse(response.data.content);
  setRenderedContent(html);
}, [topic]);

// Progress tracking
const handleModuleComplete = async (moduleId: string) => {
  await api.post('/api/learn/complete-module', { topic, moduleId });
  
  // Update local state and recalculate progress
  setModules(prev => prev.map(m => 
    m.id === moduleId ? { ...m, completed: true } : m
  ));
  
  const completedCount = modules.filter(m => m.completed).length;
  setTotalProgress(Math.round((completedCount / modules.length) * 100));
};
```

### 4. **Instructor Dashboard Analytics**

#### Student Progress Tracking (`InstructorDashboard.tsx`)
```typescript
// Real-time analytics calculation
const calculateAnalytics = (students: Student[]) => {
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.lastActive > Date.now() - 7*24*60*60*1000);
  const averageProgress = students.reduce((acc, s) => acc + s.progress, 0) / totalStudents;
  
  return {
    totalStudents,
    activeStudents: activeStudents.length,
    averageProgress: Math.round(averageProgress),
    topPerformers: students
      .sort((a, b) => b.progress - a.progress)
      .slice(0, 5)
  };
};
```

#### Assessment History Search (`InstructorAssessmentTracking.tsx`)
```typescript
// Advanced search and filtering
const searchAssessments = async (filters: SearchFilters) => {
  const queryParams = new URLSearchParams({
    studentName: filters.studentName || '',
    topic: filters.topic || '',
    dateFrom: filters.dateFrom || '',
    dateTo: filters.dateTo || '',
    status: filters.status || '',
    scoreMin: filters.scoreMin?.toString() || '',
    scoreMax: filters.scoreMax?.toString() || ''
  });
  
  const response = await api.get(`/api/instructor/assessment-histories?${queryParams}`);
  return response.data;
};
```

### 5. **Query System with File Attachments**

#### File Upload Handling (`queryRoutes.ts`)
```typescript
// Multer configuration for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = 'Server/uploads';
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  }),
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'text/plain'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});
```

#### Query Management Interface (`InstructorContent.tsx`)
```typescript
// Query status management
const updateQueryStatus = async (queryId: string, status: QueryStatus) => {
  try {
    await api.patch(`/api/query/${queryId}/status`, { status });
    
    // Log the action for audit purposes
    await api.post('/api/instructor/audit-logs', {
      action: 'UPDATE_QUERY_STATUS',
      details: { queryId, newStatus: status },
      timestamp: new Date()
    });
    
    // Refresh query list
    fetchQueries();
  } catch (error) {
    console.error('Error updating query status:', error);
  }
};
```

### 6. **Modern UI Components**

#### Animated Background System (`GalaxyBackground.tsx`)
```typescript
// Dynamic particle system with mouse interaction
const GalaxyBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };
  
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: particle.x,
            top: particle.y,
          }}
        />
      ))}
    </motion.div>
  );
};
```

#### Theme System (`ThemeContext.tsx`)
```typescript
// Global theme management with persistence
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 7. **Authentication & Security**

#### JWT Token Management (`authRoutes.ts`)
```typescript
// Secure token generation and validation
const generateToken = (user: User) => {
  return jwt.sign(
    { 
      userId: user._id, 
      email: user.email, 
      role: user.role 
    },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );
};

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
```

#### Route Protection (`ProtectedRoute.tsx`)
```typescript
// Role-based route protection
const ProtectedRoute: React.FC<{ 
  children: React.ReactNode; 
  isInstructor?: boolean 
}> = ({ children, isInstructor = false }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    // Verify token and check role
    api.get('/api/user/verify', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
      if (isInstructor && response.data.role !== 'instructor') {
        navigate('/dashboard');
        return;
      }
      setIsAuthenticated(true);
    }).catch(() => {
      localStorage.removeItem('token');
      navigate('/login');
    }).finally(() => {
      setIsLoading(false);
    });
  }, [navigate, isInstructor]);
  
  if (isLoading) return <div>Loading...</div>;
  return isAuthenticated ? <>{children}</> : null;
};
```

---

## 🧩 How It Works

### 1. **Student Learning Flow**
1. **Registration & Onboarding**: Students create accounts and complete initial assessments
2. **Topic Selection**: Students search for topics they want to learn
3. **Prerequisite Check**: System automatically identifies required prerequisites
4. **Learning Path**: Students must master prerequisites before accessing target topics
5. **Content Consumption**: Interactive learning modules with progress tracking
6. **Assessment**: AI-generated quizzes based on prerequisite mastery
7. **Progress Visualization**: Real-time tracking of learning milestones

### 2. **Instructor Management Flow**
1. **Dashboard Access**: Secure instructor login with role-based permissions
2. **Student Monitoring**: Real-time view of all student activities and progress
3. **Content Management**: Create, edit, and organize learning materials
4. **Assessment Review**: Search and analyze all student quiz attempts
5. **Query Handling**: Respond to student questions with file attachments
6. **Audit Logging**: Complete transparency of all instructor actions

### 3. **AI Integration Flow**
1. **Content Generation**: Groq API creates personalized learning materials
2. **Quiz Creation**: Dynamic assessment generation based on prerequisites
3. **Progress Analysis**: AI-powered insights into student performance
4. **Recommendation Engine**: Personalized learning path suggestions

---

## ⚙️ Setup Instructions

### 1. **Prerequisites**
- Node.js 18+ and npm
- MongoDB Atlas account
- Groq API key
- Google OAuth credentials (optional)

### 2. **Environment Configuration**

#### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/preassess
JWT_SECRET=your_super_secure_jwt_secret_key
GROQ_API_KEY=your_groq_api_key
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

### 3. **Installation Steps**

#### Backend Setup
```bash
cd Server
npm install
npm run dev
```

#### Frontend Setup
```bash
cd client
npm install
npm run dev
```

### 4. **Database Setup**
```bash
# MongoDB Atlas connection string format:
mongodb+srv://username:password@cluster.mongodb.net/preassess?retryWrites=true&w=majority
```

---

## 📚 API Documentation

### **Authentication Endpoints**
- `POST /api/auth/register` - Student registration
- `POST /api/auth/login` - Student login
- `POST /api/instructor/register` - Instructor registration
- `POST /api/instructor/login` - Instructor login
- `GET /api/user/verify` - Token verification

### **Learning Endpoints**
- `GET /api/learn/:topic/modules` - Get learning modules
- `GET /api/learn/:topic/module/:id` - Get specific module content
- `POST /api/learn/complete-module` - Mark module as complete
- `GET /api/learn/history/:topic` - Get learning history

### **Assessment Endpoints**
- `GET /api/question/generate/:topic` - Generate quiz
- `POST /api/question/submit/:topic` - Submit quiz answers
- `GET /api/question/evaluation/:topic` - Get detailed evaluation

### **Instructor Endpoints**
- `GET /api/instructor/students` - Get all students
- `GET /api/instructor/assessment-histories` - Search assessments
- `POST /api/instructor/audit-logs` - Log instructor actions
- `GET /api/instructor/analytics` - Get dashboard analytics

### **Query System Endpoints**
- `POST /api/query` - Create new query with attachments
- `GET /api/query` - Get user queries
- `PATCH /api/query/:id/status` - Update query status
- `POST /api/query/:id/response` - Add instructor response

---

## 🚀 Deployment Guide

### **Frontend Deployment (Vercel)**
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### **Backend Deployment (Render)**
1. Create new Web Service on Render
2. Connect GitHub repository
3. Configure environment variables
4. Set build command: `npm install`
5. Set start command: `npm start`

### **Database Setup**
1. Create MongoDB Atlas cluster
2. Configure network access (0.0.0.0/0 for development)
3. Create database user with read/write permissions
4. Update connection string in environment variables

---

## 🔒 Security Features

### **Authentication & Authorization**
- JWT-based token authentication
- Role-based access control (Student/Instructor)
- Secure password hashing with bcrypt
- Token expiration and refresh mechanisms

### **Data Protection**
- Input validation and sanitization
- SQL injection prevention (MongoDB)
- XSS protection with content security policies
- File upload security with type and size validation

### **API Security**
- CORS configuration for cross-origin requests
- Rate limiting to prevent abuse
- Request validation middleware
- Error handling without sensitive data exposure

---

## 🧪 Testing Strategy

### **Frontend Testing**
```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
```

### **Backend Testing**
```bash
# Run API tests
npm test

# Run database tests
npm run test:db

# Run security tests
npm run test:security
```

---

## 📊 Performance Optimization

### **Frontend Optimizations**
- Code splitting with React.lazy()
- Image optimization and lazy loading
- Memoization of expensive components
- Bundle size optimization with tree shaking

### **Backend Optimizations**
- Database indexing for frequent queries
- Caching with Redis (planned)
- Connection pooling for MongoDB
- API response compression

### **AI Integration Optimizations**
- Request batching for multiple AI calls
- Response caching for repeated queries
- Fallback mechanisms for API failures
- Rate limiting to stay within API quotas

---

## 🔮 Future Enhancements

### **Planned Features**
- Real-time collaboration tools
- Advanced analytics dashboard
- Mobile app development
- Integration with LMS platforms
- Multi-language support
- Advanced AI features (personalized tutoring)

### **Technical Improvements**
- GraphQL API implementation
- WebSocket for real-time updates
- Microservices architecture
- Kubernetes deployment
- Advanced caching strategies

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Write comprehensive tests
- Update documentation for new features
- Follow the existing code style
- Ensure all tests pass before submitting

---

## 📞 Support & Contact

- **Team Lead**: Alakh Mathur (mathur.alakh2004@gmail.com)
- **GitHub Issues**: For bug reports and feature requests
- **Documentation**: Comprehensive guides and API docs
- **Community**: Join our Discord for discussions


---

**"Suggestions are welcomed for introducing new functionalities to our dynamic learning system"** - Please raise an issue or ping the team lead at mathur.alakh2004@gmail.com
