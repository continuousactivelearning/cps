import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewCourses.css';

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  duration: string;
  level: string;
  category: string;
  image: string;
  description: string;
  bestseller?: boolean;
  updated: string;
  students: number;
}

const NewCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Mock course data - replace with API call
  const mockCourses: Course[] = [
    {
      id: 1,
      title: "Complete React Developer Course 2024",
      instructor: "John Smith",
      rating: 4.7,
      reviewCount: 15420,
      price: 49.99,
      originalPrice: 199.99,
      duration: "52.5 hours",
      level: "Beginner",
      category: "Web Development",
      image: "https://img-c.udemycdn.com/course/750x422/1362070_b9a1_2.jpg",
      description: "Master React by building real projects. Includes Hooks, Redux, Testing, and more!",
      bestseller: true,
      updated: "December 2024",
      students: 89542
    },
    {
      id: 2,
      title: "Python for Data Science and Machine Learning",
      instructor: "Sarah Johnson",
      rating: 4.6,
      reviewCount: 12350,
      price: 59.99,
      originalPrice: 179.99,
      duration: "45.5 hours",
      level: "Intermediate",
      category: "Data Science",
      image: "https://img-c.udemycdn.com/course/750x422/903744_8eb2.jpg",
      description: "Learn Python for Data Science, NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Machine Learning, Tensorflow and more!",
      bestseller: true,
      updated: "November 2024",
      students: 67890
    },
    {
      id: 3,
      title: "JavaScript: Understanding the Weird Parts",
      instructor: "Tony Alicea",
      rating: 4.8,
      reviewCount: 28540,
      price: 39.99,
      originalPrice: 149.99,
      duration: "11.5 hours",
      level: "Advanced",
      category: "Web Development",
      image: "https://img-c.udemycdn.com/course/750x422/364426_2991_6.jpg",
      description: "An Advanced JavaScript Course for Everyone! Scope, Closures, Prototypes, 'This', Build Your Own Framework, and More.",
      bestseller: false,
      updated: "October 2024",
      students: 145670
    },
    {
      id: 4,
      title: "AWS Certified Solutions Architect",
      instructor: "Ryan Kroonenburg",
      rating: 4.5,
      reviewCount: 18720,
      price: 69.99,
      originalPrice: 199.99,
      duration: "28.5 hours",
      level: "Intermediate",
      category: "Cloud Computing",
      image: "https://img-c.udemycdn.com/course/750x422/362070_b9a1_10.jpg",
      description: "Amazon Web Services (AWS) Certified Solutions Architect Associate. Complete AWS Course!",
      bestseller: true,
      updated: "January 2025",
      students: 95420
    },
    {
      id: 5,
      title: "Complete iOS App Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.7,
      reviewCount: 22150,
      price: 54.99,
      originalPrice: 189.99,
      duration: "55 hours",
      level: "Beginner",
      category: "Mobile Development",
      image: "https://img-c.udemycdn.com/course/750x422/1778502_f4b9_12.jpg",
      description: "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!",
      bestseller: true,
      updated: "December 2024",
      students: 78940
    },
    {
      id: 6,
      title: "Digital Marketing Complete Course",
      instructor: "Rob Percival",
      rating: 4.4,
      reviewCount: 9850,
      price: 44.99,
      originalPrice: 159.99,
      duration: "23 hours",
      level: "Beginner",
      category: "Marketing",
      image: "https://img-c.udemycdn.com/course/750x422/1561458_7f3e_3.jpg",
      description: "Learn Digital Marketing: SEO, YouTube, Email, Facebook, Analytics, AdWords, AdSense, Affiliates, Blogging",
      bestseller: false,
      updated: "November 2024",
      students: 45670
    }
  ];

  const categories = ['all', 'Web Development', 'Data Science', 'Cloud Computing', 'Mobile Development', 'Marketing'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setCourses(mockCourses);
      setFilteredCourses(mockCourses);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = courses;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Filter by level
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    // Sort courses
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.updated).getTime() - new Date(a.updated).getTime();
        case 'popularity':
        default:
          return b.students - a.students;
      }
    });

    setFilteredCourses(filtered);
  }, [courses, searchTerm, selectedCategory, selectedLevel, sortBy]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  if (loading) {
    return (
      <div className="courses-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading amazing courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="courses-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Transform Your Career with Our Expert-Led Courses</h1>
        <p>Choose from over 1000+ online video courses with new additions published every month</p>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for courses, instructors, or topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <label>Category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Level:</label>
            <select 
              value={selectedLevel} 
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levels.map(level => (
                <option key={level} value={level}>
                  {level === 'all' ? 'All Levels' : level}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Sort by:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="results-summary">
        <h2>{filteredCourses.length} courses found</h2>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              {course.bestseller && <span className="bestseller-badge">Bestseller</span>}
            </div>
            
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-instructor">By {course.instructor}</p>
              
              <div className="course-stats">
                <div className="rating">
                  <span className="rating-number">{course.rating}</span>
                  <div className="stars">
                    {renderStars(course.rating)}
                  </div>
                  <span className="review-count">({formatNumber(course.reviewCount)})</span>
                </div>
                
                <div className="course-meta">
                  <span className="duration">⏱️ {course.duration}</span>
                  <span className="level">📊 {course.level}</span>
                  <span className="students">👥 {formatNumber(course.students)} students</span>
                </div>
              </div>
              
              <div className="course-footer">
                <div className="price-section">
                  <span className="current-price">${course.price}</span>
                  {course.originalPrice && (
                    <span className="original-price">${course.originalPrice}</span>
                  )}
                </div>
                
                <div className="course-actions">
                  <button className="btn-wishlist">❤️</button>
                  <button className="btn-enroll">Enroll Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="no-results">
          <h3>No courses found</h3>
          <p>Try adjusting your search criteria or browse all courses</p>
          <button onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
            setSelectedLevel('all');
          }}>
            Show All Courses
          </button>
        </div>
      )}
    </div>
  );
};

export default NewCourses;