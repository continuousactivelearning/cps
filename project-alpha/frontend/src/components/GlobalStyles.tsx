import React from 'react';

const GlobalStyles: React.FC = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
      .container {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 100%;
        box-sizing: border-box;
      }
      html {
        scroll-padding-top: 80px;
      }
      section {
        scroll-margin-top: 80px;
      }
      .nav-link, .nav-link:active, .nav-link:focus, .nav-link:visited, .nav-link:hover {
        text-decoration: none !important;
      }
      
      :root {
          --primary-gradient-light: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --primary-gradient-dark: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          --accent-color-light: #6366f1;
          --accent-color-dark: #2dd4bf;
          --text-color-light: #1f2937;
          --text-color-dark: #e2e8f0;
          --bg-light: #ffffff;
          --bg-dark: #1e293b;
          --card-bg-light: rgba(255, 255, 255, 0.95);
          --card-bg-dark: rgba(45, 55, 72, 0.95);
          --border-light: rgba(255, 255, 255, 0.2);
          --border-dark: rgba(255, 255, 255, 0.1);
      }

      body {
          font-family: 'Inter', sans-serif;
          background: var(--primary-gradient-light);
          transition: all 0.5s ease;
          color: var(--text-color-light);
      }
      body.dark {
          background: var(--primary-gradient-dark);
          color: var(--text-color-dark);
      }
      
      .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
      }
      .floating-shape {
          position: absolute;
          opacity: 0.15;
          animation: float 20s infinite ease-in-out;
          border-radius: 50%;
          filter: blur(2px);
      }
      .floating-shape:nth-child(1) { animation-delay: 0s; background-color: #a78bfa; }
      .floating-shape:nth-child(2) { animation-delay: 4s; background-color: #6366f1; }
      .floating-shape:nth-child(3) { animation-delay: 8s; background-color: #8b5cf6; }
      .floating-shape:nth-child(4) { animation-delay: 12s; background-color: #a78bfa; }
      .floating-shape:nth-child(5) { animation-delay: 16s; background-color: #6366f1; }

      @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(30px) rotate(240deg); }
      }
      
      .navbar {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: white;
        transition: all 0.4s ease;
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--border-light);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      }
      .dark .navbar {
        background: var(--card-bg-dark);
        border-bottom: 1px solid var(--border-dark);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
      .navbar:hover {
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }
      .dark .navbar:hover {
        box-shadow: 0 8px 32px rgba(255, 255, 255, 0.15);
      }
      
      .nav-link {
          position: relative;
          padding: 8px 16px;
          border-radius: 25px;
          transition: all 0.3s ease;
          font-weight: 500;
          color: #1f2937;
          text-decoration: none;
      }
      .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 25px;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: -1;
      }
      .nav-link:hover::before {
          opacity: 1;
          transform: scale(1.05);
      }
      .nav-link:hover {
          color: white !important;
          transform: translateY(-2px);
      }

      /* Active state - highest specificity */
      .nav-link.active {
          color: white !important;
          background: linear-gradient(135deg, #667eea, #764ba2) !important;
          box-shadow: 0 4px 10px rgba(102, 126, 234, 0.4) !important;
          transform: none !important;
      }
      .nav-link.active::before {
          opacity: 0 !important;
      }
      .nav-link.active:hover {
          color: white !important;
          background: linear-gradient(135deg, #667eea, #764ba2) !important;
          transform: translateY(-2px) !important;
      }

      .dark .nav-link {
          color: #e2e8f0;
      }
      .dark .nav-link:hover {
          color: white !important;
      }
      .dark .nav-link.active {
          color: white !important;
          background: linear-gradient(135deg, #667eea, #764ba2) !important;
      }

      .hero-section {
          position: relative;
          background: var(--primary-gradient-light);
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
      }
      .dark .hero-section {
          background: var(--primary-gradient-dark);
      }
      .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          z-index: 1;
      }
      .hero-content {
          position: relative;
          z-index: 2;
          padding: 2rem 1.5rem;
      }
      .hero-content h1 {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }
      .hero-content p {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
      
      .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
      }
      .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: particle-float 15s infinite linear;
      }
      @keyframes particle-float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
      }
      
      .card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: var(--card-bg-light);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-light);
          position: relative;
          overflow: hidden;
          border-radius: 1.25rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      }
      .dark .card {
          background: var(--card-bg-dark);
          border: 1px solid var(--border-dark);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }
      .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
      }
      .card:hover::before {
          left: 100%;
      }
      .card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      }
      .dark .card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
      }
      
      .btn-primary {
          position: relative;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          overflow: hidden;
          transition: all 0.3s ease;
          font-weight: 600;
          letter-spacing: 0.025em;
          transform: translateZ(0);
      }
      .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
      }
      .btn-primary:hover::before {
          left: 100%;
      }
      .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(102, 126, 234, 0.5);
      }

      .btn-secondary {
          background: transparent;
          border: 2px solid white;
          color: white;
          transition: all 0.3s ease;
          font-weight: 600;
      }
      .btn-secondary:hover {
          background: white;
          color: #667eea;
          border-color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
      }
      .dark .btn-secondary {
          border-color: #cbd5e0;
          color: #cbd5e0;
      }
      .dark .btn-secondary:hover {
          background: #cbd5e0;
          color: #1a202c;
      }
      
      .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
      }
      .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
      }
      .image-container:hover::before {
          opacity: 1;
      }
      .image-container img {
          transition: transform 0.4s ease;
      }
      .image-container:hover img {
          transform: scale(1.05);
      }
      
      .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.7s ease-out;
      }
      .fade-in-up.animate {
          opacity: 1;
          transform: translateY(0);
      }
      .animate-fade-in {
          opacity: 0;
          transition: opacity 1s ease-in-out;
      }
      .animate-fade-in.animate {
          opacity: 1;
      }
      
      .faq-item {
          transition: all 0.3s ease;
          background: var(--card-bg-light);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-light);
          border-radius: 1rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      }
      .dark .faq-item {
          background: var(--card-bg-dark);
          border: 1px solid var(--border-dark);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
      .faq-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
      .dark .faq-item:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }
      .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-out;
      }
      .faq-answer.open { max-height: 200px; }
      .faq-toggle::after {
          content: '▼';
          display: inline-block;
          margin-left: 8px;
          transition: transform 0.3s ease;
      }
      .faq-toggle.open::after { transform: rotate(180deg); }

      .stats-counter {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
      }

      .coursemap-container {
          background: var(--card-bg-light);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-light);
      }
      .dark .coursemap-container {
          background: var(--card-bg-dark);
          border: 1px solid var(--border-dark);
      }

      .dark .bg-white { background-color: var(--bg-dark) !important; }
      .dark .bg-gray-50 { background-color: #2d3748 !important; }
      .dark .text-gray-800 { color: var(--text-color-dark) !important; }
      .dark .text-gray-600 { color: #94a3b8 !important; }
      .dark .text-indigo-600 { color: var(--accent-color-dark) !important; }
      .dark .border { border-color: #475569 !important; }

      /* Dark mode support for cards and sections */
      .dark .card {
        background-color: var(--card-bg-dark) !important;
        border: 1px solid var(--border-dark) !important;
      }
      .dark .testimonial-card {
        background-color: var(--card-bg-dark) !important;
        border: 1px solid var(--border-dark) !important;
      }
      .dark .faq-item {
        background-color: var(--card-bg-dark) !important;
        border: 1px solid var(--border-dark) !important;
      }
      
      .modal { transition: opacity 0.3s ease; z-index: 1000; }
      .modal-content, .sign-in-modal-content {
          position: relative;
          background: var(--bg-light);
          padding: 2rem;
          border-radius: 0.75rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
          max-width: 28rem;
          width: 90%;
      }
      .dark .modal-content, .dark .sign-in-modal-content {
          background: var(--bg-dark);
      }
      .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.75rem;
          cursor: pointer;
          color: #6b7280;
          transition: color 0.3s ease, transform 0.2s ease;
      }
      .dark .close-btn {
          color: #cbd5e0;
      }
      .close-btn:hover { color: #1f2937; transform: rotate(90deg); }
      .dark .close-btn:hover { color: #f0f9ff; }
      .cancel-btn {
          padding: 0.75rem 1.5rem;
          background: #e5e7eb;
          color: #374151;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
          font-weight: 500;
      }
      .dark .cancel-btn {
          background: #475569;
          color: #e2e8f0;
          border: 1px solid #64748b;
      }
      .cancel-btn:hover {
          background: #d1d5db;
      }
      .dark .cancel-btn:hover {
          background: #64748b;
          color: #ffffff;
      }
      .social-btn {
          transition: background 0.3s ease, transform 0.2s ease;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          background: white;
          cursor: pointer;
      }
      .dark .social-btn {
          background: #374151;
          border-color: #4b5563;
      }
      .social-btn:hover {
          background: #f3f4f6;
          transform: translateY(-2px);
      }
      .dark .social-btn:hover {
          background: #4b5563;
      }
      .social-btn img {
          width: 1.5rem;
          height: 1.5rem;
      }
      .error-message {
          color: #ef4444;
          font-size: 0.875rem;
          margin-top: 0.25rem;
          display: none;
      }
      .error-message.show {
          display: block;
      }
      .dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          z-index: 50;
          min-width: 200px;
      }
      .dark .dropdown {
          background: #374151;
          border-color: #4b5563;
      }
      .dropdown-item {
          padding: 0.75rem 1rem;
          cursor: pointer;
          transition: background 0.2s ease;
          border-bottom: 1px solid #f3f4f6;
      }
      .dark .dropdown-item {
          border-bottom-color: #4b5563;
      }
      .dropdown-item:last-child {
          border-bottom: none;
      }
      .dropdown-item:hover {
          background: #f9fafb;
      }
      .dark .dropdown-item:hover {
          background: #4b5563;
      }
      .profile-pic {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.2s ease;
      }
      .profile-pic:hover {
          transform: scale(1.1);
      }
      .streak-logo {
          background: #fef3c7;
          color: #92400e;
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          position: relative;
          cursor: pointer;
      }
      .dark .streak-logo {
          background: #451a03;
          color: #fbbf24;
      }
      .streak-popup {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #1f2937;
          color: white;
          padding: 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
          margin-bottom: 0.5rem;
      }
      .streak-logo:hover .streak-popup {
          opacity: 1;
      }
      .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: var(--bg-light);
          border-radius: 1.25rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          padding: 2rem;
      }
      .dark .testimonial-card { background: #334155; }
      .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
      }
      .dark .testimonial-card:hover {
          box-shadow: 0 15px 30px rgba(255, 255, 255, 0.1);
      }

      /* Mobile Responsive Design System */

      /* Mobile First Breakpoints */
      /* xs: 0-479px (small phones) */
      /* sm: 480-767px (large phones) */
      /* md: 768-1023px (tablets) */
      /* lg: 1024-1199px (small laptops) */
      /* xl: 1200px+ (desktops) */

      /* Base Mobile Styles (0-479px) */
      @media (max-width: 479px) {
        .container {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }

        .hero-section {
          min-height: 100vh;
          padding: 1rem 0;
        }

        .hero-content {
          padding: 1rem;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 1.75rem !important;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .hero-content p {
          font-size: 1rem !important;
          margin-bottom: 1.5rem;
        }

        .btn-primary, .btn-secondary {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          margin-bottom: 0.75rem;
        }

        .card {
          margin-bottom: 1rem;
          padding: 1rem;
        }

        .modal-content, .sign-in-modal-content {
          width: 95%;
          padding: 1.5rem;
          margin: 1rem;
        }

        .navbar {
          padding: 0.5rem 0;
        }

        .nav-link {
          font-size: 1rem;
          padding: 0.75rem 1rem;
        }
      }

      /* Large Mobile Styles (480-767px) */
      @media (min-width: 480px) and (max-width: 767px) {
        .container {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .hero-content h1 {
          font-size: 2rem !important;
        }

        .hero-content p {
          font-size: 1.1rem !important;
        }

        .btn-primary, .btn-secondary {
          width: auto;
          min-width: 200px;
          padding: 0.875rem 1.5rem;
        }
      }

      /* Tablet and Mobile Styles (max-width: 768px) */
      @media (max-width: 768px) {
        /* Navigation */
        .navbar .container {
          flex-direction: row;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        .nav-links-wrapper {
          display: none !important;
          flex-direction: column !important;
          width: 100%;
          background: white;
          position: absolute;
          top: 100%;
          left: 0;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          z-index: 1001;
          padding: 1rem 0;
          gap: 1rem !important;
          border-radius: 0 0 1rem 1rem;
        }

        .dark .nav-links-wrapper {
          background: var(--bg-dark);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        .nav-links-wrapper.open {
          display: flex !important;
        }

        .mobile-menu-btn {
          display: block !important;
          margin-left: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: inherit;
          padding: 0.5rem;
        }

        .nav-link {
          font-size: 1.1rem;
          padding: 12px 24px;
          width: 100%;
          text-align: left;
          border-radius: 0;
        }

        /* Dashboard Navigation */
        .dashboard-navbar {
          padding: 0.75rem 1rem !important;
          flex-direction: column !important;
          align-items: flex-start !important;
        }

        .dashboard-navbar-content {
          flex-direction: column !important;
          width: 100%;
          gap: 0.75rem !important;
        }

        .dashboard-logo {
          font-size: 1.4rem !important;
          margin-bottom: 0.5rem;
          margin-right: 0;
        }

        .dashboard-nav-actions {
          flex-direction: row !important;
          flex-wrap: wrap !important;
          gap: 0.5rem !important;
          width: 100%;
          justify-content: flex-start;
        }

        .dashboard-nav-btn {
          font-size: 0.9rem !important;
          padding: 0.5rem 0.75rem !important;
          margin-right: 0;
          margin-bottom: 0.25rem;
        }

        /* Main Content */
        .dashboard-main-content {
          padding: 1rem !important;
          width: 100% !important;
        }

        .dashboard-main-content > * {
          width: 100% !important;
          margin: 0 !important;
          padding: 0.5rem 0 !important;
        }

        /* Modals */
        .dashboard-modal {
          max-width: 95vw !important;
          max-height: 90vh !important;
          padding: 1rem !important;
          font-size: 1rem !important;
          overflow-y: auto;
        }

        /* Buttons */
        .dashboard-modal button, .dashboard-main-content button {
          min-width: 44px;
          min-height: 44px;
          font-size: 1rem !important;
          padding: 0.75rem 1rem !important;
          touch-action: manipulation;
        }

        /* Typography */
        .dashboard-main-content h1 {
          font-size: 1.5rem !important;
          margin-bottom: 1rem;
        }

        .dashboard-main-content h2 {
          font-size: 1.3rem !important;
          margin-bottom: 0.75rem;
        }

        .dashboard-main-content h3 {
          font-size: 1.1rem !important;
          margin-bottom: 0.5rem;
        }

        /* Grid Layouts */
        .dashboard-main-content .courses-grid,
        .dashboard-main-content .stats-grid,
        .features-grid,
        .testimonials-grid {
          display: flex !important;
          flex-direction: column !important;
          gap: 1rem !important;
        }

        /* Cards */
        .card {
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .card:hover {
          transform: translateY(-2px) scale(1.01);
        }

        /* Forms */
        .form-input, .form-textarea, .form-select {
          width: 100%;
          padding: 0.75rem;
          font-size: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #d1d5db;
          margin-bottom: 1rem;
          box-sizing: border-box;
        }

        /* Tables */
        .table-responsive {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .table-responsive table {
          min-width: 600px;
        }

        /* Images */
        .responsive-image {
          width: 100%;
          height: auto;
          max-width: 100%;
        }

        /* Spacing */
        .section-padding {
          padding: 2rem 0;
        }

        .mb-mobile {
          margin-bottom: 1rem;
        }
      }

      .dashboard-navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        background: #fff;
        border-bottom: 1px solid #e5e7eb;
        box-shadow: 0 2px 8px rgba(99,102,241,0.08);
        z-index: 1200;
        position: sticky;
        top: 0;
      }
      .dark .dashboard-navbar {
        background: #23232a;
        border-bottom: 1px solid #18181b;
        box-shadow: 0 2px 8px rgba(99,102,241,0.18);
      }
      .dashboard-navbar-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 2rem;
      }
      .dashboard-logo {
        font-size: 1.7rem;
        font-weight: 800;
        color: #6366f1;
        letter-spacing: -1px;
        margin-right: 2rem;
      }
      .dashboard-nav-actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
      }

      /* Dashboard Navigation Button Styles */
      .dashboard-nav-btn {
        background: none;
        border: none;
        border-radius: 8px;
        padding: 8px 18px;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        outline: none;
        transition: all 0.2s ease;
        margin-right: 8px;
        color: #18181b;
        position: relative;
      }

      .dashboard-nav-btn:hover {
        background: #f1f5f9 !important;
        color: #6366f1 !important;
        transform: translateY(-1px);
      }

      .dashboard-nav-btn.active {
        background: #e0e7ff !important;
        color: #6366f1 !important;
        box-shadow: 0 2px 4px rgba(99, 102, 241, 0.2) !important;
      }

      .dashboard-nav-btn.active:hover {
        background: #e0e7ff !important;
        color: #6366f1 !important;
        transform: translateY(-1px);
      }

      .dark .dashboard-nav-btn {
        color: #e2e8f0;
      }

      .dark .dashboard-nav-btn:hover {
        background: #374151 !important;
        color: #a5b4fc !important;
      }

      .dark .dashboard-nav-btn.active {
        background: #312e81 !important;
        color: #a5b4fc !important;
        box-shadow: 0 2px 4px rgba(165, 180, 252, 0.2) !important;
      }

      .dark .dashboard-nav-btn.active:hover {
        background: #312e81 !important;
        color: #a5b4fc !important;
      }

      /* Mobile Touch Optimizations */
      @media (max-width: 768px) {
        /* Touch-friendly interactions */
        * {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        input, textarea, select {
          -webkit-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }

        /* Larger touch targets */
        button, .btn, .nav-link, .card, .clickable {
          min-height: 44px;
          min-width: 44px;
          touch-action: manipulation;
        }

        /* Improved scrolling */
        .scrollable {
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
        }

        /* Mobile-specific animations */
        .mobile-fade-in {
          animation: mobileFadeIn 0.3s ease-out;
        }

        @keyframes mobileFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile modal improvements */
        .mobile-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
        }

        .mobile-modal-content {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          width: 100%;
          max-width: 400px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .dark .mobile-modal-content {
          background: var(--bg-dark);
        }

        /* Mobile navigation improvements */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-nav-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Mobile-specific spacing */
        .mobile-spacing {
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .mobile-text-center {
          text-align: center;
        }

        /* Mobile-friendly forms */
        .mobile-form {
          padding: 1rem;
        }

        .mobile-form input,
        .mobile-form textarea,
        .mobile-form select {
          width: 100%;
          padding: 1rem;
          font-size: 16px; /* Prevents zoom on iOS */
          border-radius: 0.75rem;
          border: 2px solid #e5e7eb;
          margin-bottom: 1rem;
          transition: border-color 0.2s ease;
        }

        .mobile-form input:focus,
        .mobile-form textarea:focus,
        .mobile-form select:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        /* Mobile-friendly buttons */
        .mobile-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 0.75rem;
          touch-action: manipulation;
        }

        .mobile-btn:active {
          transform: scale(0.98);
        }

        .mobile-btn-primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .mobile-btn-secondary {
          background: #f3f4f6;
          color: #374151;
          border: 1px solid #d1d5db;
        }

        .dark .mobile-btn-secondary {
          background: #374151;
          color: #e5e7eb;
          border-color: #4b5563;
        }
      }
    `
  }} />
);

export default GlobalStyles; 
