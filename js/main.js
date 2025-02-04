// Project Data
const projects = [
    {
        title: "Bank Churn Classification",
        description: "Machine learning model to predict customer churn in banking sector",
        techStack: ["Python", "Pandas", "Numpy", "Seaborn", "Scipy", "Matplotlib", "Scikit-learn", "Imblearn"],
        link: "https://www.kaggle.com/code/yousufshah/deep-dive-into-customer-churn",
        image: "images/bank_churn.png",
        category: "machine-learning"
    },
    {
        title: "Django Recipe Web App",
        description: "Full-stack recipe sharing platform built with Django",
        techStack: ["Python", "Django"],
        link: "https://github.com/Yousfshah/MY_All_Projects/tree/main/Django_Recipe_Project",
        image: "images/django_recipe.png",
        category: "web-apps"
    },
    {
        title: "Google Play Store EDA",
        description: "Comprehensive exploratory data analysis of Google Play Store apps",
        techStack: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
        link: "https://www.kaggle.com/code/yousufshah/unlocking-play-store-insights",
        image: "images/eda_google.png",
        category: "eda"
    },
    {
        title: "Pakistan E-Commerce Analysis",
        description: "Analysis of e-commerce trends in Pakistan",
        techStack: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "Scipy", "Scikit-learn"],
        link: "https://www.kaggle.com/code/yousufshah/in-depth-e-commerce-data-analysis",
        image: "images/pakistan_analysis.png",
        category: "eda"
    },
    {
        title: "Iris Model Web App",
        description: "Interactive web app for Iris flower classification",
        techStack: ["Python", "Streamlit"],
        link: "https://iris-flower-prediction-web-app.streamlit.app/",
        image: "images/iris_model.png",
        category: "web-apps"
    },
    {
        title: "Iris Classification",
        description: "Classic machine learning classification project",
        techStack: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "Scikit-learn", "Plotly", "Joblib"],
        link: "https://www.kaggle.com/code/yousufshah/beautiful-iris-flower-classification",
        image: "images/iris.png",
        category: "machine-learning"
    },
    {
        title: "Car Price Prediction",
        description: "ML model to predict car prices based on various features",
        techStack: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "Scikit-learn", "Plotly", "Pickle"],
        link: "https://www.kaggle.com/code/yousufshah/pro-notebook-car-price-prediction",
        image: "images/car_price.png",
        category: "machine-learning"
    },
    {
        title: "Sales Prediction",
        description: "Time series analysis and prediction of sales data",
        techStack: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "Scikit-learn", "Joblib"],
        link: "https://www.kaggle.com/code/yousufshah/detail-notebook-advertising-meets-ml",
        image: "images/sales_prediction.png",
        category: "machine-learning"
    },
    {
        title: "Unemployment Analysis",
        description: "Analysis of unemployment rates and trends",
        techStack: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "Plotly", "Scipy"],
        link: "https://www.kaggle.com/code/yousufshah/detail-analysis-unemployment-in-india",
        image: "images/unemployment.png",
        category: "eda"
    },
    {
        title: "Data Analysis Web App",
        description: "Interactive dashboard for data analysis",
        techStack: ["Python", "Streamlit", "Pandas", "Plotly", "Openpyxl"],
        link: "https://data-analyses.streamlit.app/",
        image: "images/data_analysis.png",
        category: "web-apps"
    },
    {
        title: "YouTube Download Manager",
        description: "Web app to download Full HD YouTube videos",
        techStack: ["Python", "Streamlit", "Yt-dlp"],
        link: "https://youtube-download-manager.streamlit.app/",
        image: "images/youtube.png",
        category: "web-apps"
    }
];

// Dark Mode Toggle
const darkModeToggle = document.querySelector('#checkbox');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    // Save preference to localStorage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
const darkModePref = localStorage.getItem('darkMode');
if (darkModePref === 'false') {
    body.classList.remove('dark-mode');
    darkModeToggle.checked = false;
}

// Projects Grid
const projectsGrid = document.querySelector('.projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
                <a href="${project.link}" target="_blank" class="btn primary">View Project</a>
            </div>
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

// Filter projects
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize projects
function initProjects() {
    projects.forEach(project => {
        projectsGrid.appendChild(createProjectCard(project));
    });
}

// Add filter button click handlers
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProjects(button.dataset.filter);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', initProjects);

// Add project card styles dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .project-card {
        background: var(--bg-secondary);
        border-radius: 10px;
        overflow: hidden;
        transition: var(--transition);
        opacity: 0;
        animation: fadeIn 0.5s ease forwards;
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--neon-shadow);
    }

    .project-image {
        position: relative;
        overflow: hidden;
        aspect-ratio: 16/9;
    }

    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: var(--transition);
    }

    .project-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: var(--transition);
    }

    .project-card:hover .project-overlay {
        opacity: 1;
    }

    .project-card:hover .project-image img {
        transform: scale(1.1);
    }

    .project-info {
        padding: 1.5rem;
    }

    .project-info h3 {
        margin-bottom: 0.5rem;
        color: var(--primary-color);
    }

    .project-info p {
        color: var(--text-secondary);
        margin-bottom: 1rem;
    }

    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tech-stack span {
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        border-radius: 20px;
        background: var(--bg-primary);
        color: var(--text-secondary);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in {
        animation: fadeIn 1s ease forwards;
    }
`;

document.head.appendChild(styleSheet);