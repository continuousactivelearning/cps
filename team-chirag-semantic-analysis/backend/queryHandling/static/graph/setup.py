#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import subprocess
import sys
import platform

def check_prerequisites():
    """Check if required tools are installed."""
    print("Checking prerequisites...")
    
    # Check Python version
    python_version = sys.version_info
    if python_version.major < 3 or (python_version.major == 3 and python_version.minor < 7):
        print("Error: Python 3.7 or higher is required.")
        sys.exit(1)
    
    # Check if npm is installed (optional)
    try:
        npm_version = subprocess.run(
            ["npm", "--version"], 
            check=True, 
            stdout=subprocess.PIPE, 
            stderr=subprocess.PIPE,
            text=True
        ).stdout.strip()
        print(f"Found npm version {npm_version}")
        npm_installed = True
    except (subprocess.SubprocessError, FileNotFoundError):
        print("Warning: npm is not installed or not in PATH.")
        print("The frontend part of the system will not be available.")
        print("To install Node.js and npm, visit: https://nodejs.org/")
        npm_installed = False
    
    # Check if Node.js is installed (optional)
    try:
        node_version = subprocess.run(
            ["node", "--version"], 
            check=True, 
            stdout=subprocess.PIPE, 
            stderr=subprocess.PIPE,
            text=True
        ).stdout.strip()
        print(f"Found Node.js version {node_version}")
        node_installed = True
    except (subprocess.SubprocessError, FileNotFoundError):
        print("Warning: Node.js is not installed or not in PATH.")
        node_installed = False
    
    print("Python prerequisites satisfied. You can proceed with the Python scraper part.")
    
    return npm_installed and node_installed

def install_python_dependencies():
    """Install Python dependencies."""
    print("\nInstalling Python dependencies...")
    
    scraper_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "python-scraper")
    requirements_file = os.path.join(scraper_dir, "requirements.txt")
    
    try:
        subprocess.run(
            [sys.executable, "-m", "pip", "install", "-r", requirements_file],
            check=True
        )
        print("Python dependencies installed successfully.")
    except subprocess.SubprocessError as e:
        print(f"Error installing Python dependencies: {e}")
        sys.exit(1)

def install_node_dependencies():
    """Install Node.js dependencies."""
    print("\nInstalling Node.js dependencies...")
    
    frontend_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "typescript-frontend")
    
    try:
        subprocess.run(
            ["npm", "install"],
            check=True,
            cwd=frontend_dir
        )
        print("Node.js dependencies installed successfully.")
    except subprocess.SubprocessError as e:
        print(f"Error installing Node.js dependencies: {e}")
        sys.exit(1)

def create_directories():
    """Create necessary directories."""
    print("\nCreating necessary directories...")
    
    # Create output directory
    output_dir = os.path.join(
        os.path.dirname(os.path.abspath(__file__)), 
        "python-scraper", 
        "output"
    )
    os.makedirs(output_dir, exist_ok=True)
    
    # Create public directory for frontend
    public_dir = os.path.join(
        os.path.dirname(os.path.abspath(__file__)), 
        "typescript-frontend", 
        "public"
    )
    os.makedirs(public_dir, exist_ok=True)
    
    print("Directories created successfully.")

def main():
    """Main setup function."""
    print("Setting up DSA Knowledge Graph System...\n")
    
    # Check prerequisites and get npm/node status
    node_available = check_prerequisites()
    
    create_directories()
    install_python_dependencies()
    
    # Only install Node.js dependencies if npm/node are available
    if node_available:
        install_node_dependencies()
        frontend_ready = True
    else:
        frontend_ready = False
    
    print("\nSetup completed!")
    print("\nTo run the Python scraper only, use:")
    print("  python run.py --scrape-only")
    
    if frontend_ready:
        print("\nTo run the complete system (scraper + frontend), use:")
        print("  python run.py")
    else:
        print("\nTo enable the frontend visualization:")
        print("1. Install Node.js and npm from https://nodejs.org/")
        print("2. Run setup.py again to install frontend dependencies")
        print("3. Then run the complete system with: python run.py")

if __name__ == "__main__":
    main()
