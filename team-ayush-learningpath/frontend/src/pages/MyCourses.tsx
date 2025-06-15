import React, { useState } from 'react';
import { Play, Clock, Award, BookOpen, Search, Filter } from 'lucide-react';


// Type definitions
interface CourseBase {
  id: number;
  title: string;
  instructor: string;
  university: string;
  image: string;
  rating: number;
}

interface InProgressCourse extends CourseBase {
  progress: number;
  nextLesson: string;
  timeLeft: string;
}

interface CompletedCourse extends CourseBase {
  progress: number;
  completedDate: string;
  certificate: boolean;
}

interface SavedCourse extends CourseBase {
  duration: string;
}

type Course = InProgressCourse | CompletedCourse | SavedCourse;

interface CoursesData {
  IN_PROGRESS: InProgressCourse[];
  COMPLETED: CompletedCourse[];
  SAVED: SavedCourse[];
}

type TabType = keyof CoursesData;

interface CourseCardProps {
  course: Course;
  type: TabType;
}

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState<TabType>('IN_PROGRESS');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const courses: CoursesData = {
    IN_PROGRESS: [
      {
        id: 1,
        title: 'Machine Learning Specialization',
        instructor: 'Andrew Ng',
        university: 'Stanford University',
        progress: 65,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
        nextLesson: 'Neural Networks Basics',
        timeLeft: '2 weeks left',
        rating: 4.8
      },
      {
        id: 2,
        title: 'Full Stack Web Development',
        instructor: 'Dr. Sarah Johnson',
        university: 'Tech University',
        progress: 40,
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
        nextLesson: 'React State Management',
        timeLeft: '1 month left',
        rating: 4.6
      },
      {
        id: 3,
        title: 'Data Science with Python',
        instructor: 'Prof. Michael Chen',
        university: 'Data Institute',
        progress: 80,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
        nextLesson: 'Advanced Pandas',
        timeLeft: '3 days left',
        rating: 4.9
      }
    ],
    COMPLETED: [
      {
        id: 4,
        title: 'Introduction to Psychology',
        instructor: 'Dr. Emma Wilson',
        university: 'Psychology College',
        progress: 100,
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
        completedDate: 'March 2024',
        rating: 4.7,
        certificate: true
      }
    ],
    SAVED: [
      {
        id: 5,
        title: 'Digital Marketing Fundamentals',
        instructor: 'Marketing Expert',
        university: 'Business School',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
        rating: 4.5,
        duration: '6 weeks'
      }
    ]
  };

  const tabs = [
    { id: 'IN_PROGRESS' as TabType, label: 'In Progress', count: courses.IN_PROGRESS.length },
    { id: 'COMPLETED' as TabType, label: 'Completed', count: courses.COMPLETED.length },
    { id: 'SAVED' as TabType, label: 'Saved', count: courses.SAVED.length }
  ];

  const filteredCourses = (courses[activeTab] as Course[]).filter((course: Course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const CourseCard: React.FC<CourseCardProps> = ({ course, type }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        {type === 'IN_PROGRESS' && (
          <div className="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {(course as InProgressCourse).progress}%
          </div>
        )}
        {type === 'COMPLETED' && (course as CompletedCourse).certificate && (
          <div className="absolute top-2 right-2 bg-green-500 p-2 rounded-full">
            <Award className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-1">{course.instructor}</p>
        <p className="text-gray-500 text-xs mb-3">{course.university}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400 text-sm mr-2">
            {'★'.repeat(Math.floor(course.rating))}
          </div>
          <span className="text-gray-600 text-sm">{course.rating}</span>
        </div>

        {type === 'IN_PROGRESS' && (
          <>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{(course as InProgressCourse).progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(course as InProgressCourse).progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
              <span className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                {(course as InProgressCourse).nextLesson}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {(course as InProgressCourse).timeLeft}
              </span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
              <Play className="w-4 h-4 mr-2" />
              Continue Learning
            </button>
          </>
        )}

        {type === 'COMPLETED' && (
          <div className="space-y-2">
            <p className="text-green-600 text-sm font-semibold">Completed {(course as CompletedCourse).completedDate}</p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
              <Award className="w-4 h-4 mr-2" />
              View Certificate
            </button>
          </div>
        )}

        {type === 'SAVED' && (
          <div className="space-y-2">
            <p className="text-gray-600 text-sm">Duration: {(course as SavedCourse).duration}</p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Start Course
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">My Learning</h1>
            <p className="text-gray-600 mt-2">Continue your learning journey</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search your courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Filter className="w-5 h-5 mr-2 text-gray-600" />
            Filter
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course: Course) => (
            <CourseCard key={course.id} course={course} type={activeTab} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-500">
              {searchTerm ? `No courses match "${searchTerm}"` : 'No courses in this category yet'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;