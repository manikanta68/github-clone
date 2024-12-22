import Header from "../Header"
import "./index.css"

const repos = [
    { id: 1, name: "design-system", visibility: "public", size: 550, updated: "1 day ago", language: "CSS" },
    { id: 2, name: "codeant-ci-app", visibility: "private", size: 1200, updated: "2 days ago", language: "JavaScript" },
    { id: 3, name: "analytics-dashboard", visibility: "public", size: 2200, updated: "3 days ago", language: "React" },
    { id: 4, name: "mobile-app", visibility: "private", size: 5000, updated: "4 days ago", language: "Swift" },
    { id: 5, name: "e-commerce-platform", visibility: "public", size: 3500, updated: "5 days ago", language: "PHP" },
    { id: 6, name: "blog-website", visibility: "public", size: 800, updated: "1 day ago", language: "HTML" },
    { id: 7, name: "social-network", visibility: "private", size: 4500, updated: "2 days ago", language: "JavaScript" },
    { id: 8, name: "data-visualization-tool", visibility: "public", size: 1800, updated: "3 days ago", language: "Python" },
    { id: 9, name: "portfolio-site", visibility: "private", size: 300, updated: "4 days ago", language: "HTML" },
    { id: 10, name: "chat-app", visibility: "public", size: 1200, updated: "5 days ago", language: "React" },
    { id: 11, name: "fitness-tracker", visibility: "private", size: 2500, updated: "6 days ago", language: "Swift" },
    { id: 12, name: "online-store", visibility: "public", size: 3200, updated: "7 days ago", language: "PHP" },
    { id: 13, name: "task-manager", visibility: "private", size: 600, updated: "8 days ago", language: "JavaScript" },
    { id: 14, name: "job-portal", visibility: "public", size: 3800, updated: "9 days ago", language: "React" },
    { id: 15, name: "news-aggregator", visibility: "private", size: 1000, updated: "1 day ago", language: "Python" },
    { id: 16, name: "shopping-cart", visibility: "public", size: 1300, updated: "2 days ago", language: "JavaScript" },
    { id: 17, name: "bookstore-app", visibility: "private", size: 2300, updated: "3 days ago", language: "PHP" },
    { id: 18, name: "social-media-dashboard", visibility: "public", size: 900, updated: "4 days ago", language: "React" },
    { id: 19, name: "event-planner", visibility: "private", size: 1500, updated: "5 days ago", language: "Swift" },
    { id: 20, name: "recipe-book", visibility: "public", size: 2000, updated: "6 days ago", language: "JavaScript" },
    { id: 21, name: "movie-database", visibility: "private", size: 2500, updated: "7 days ago", language: "PHP" },
    { id: 22, name: "personal-blog", visibility: "public", size: 800, updated: "8 days ago", language: "HTML" },
    { id: 23, name: "music-streaming", visibility: "private", size: 4500, updated: "9 days ago", language: "JavaScript" },
    { id: 24, name: "code-review-tool", visibility: "public", size: 1000, updated: "1 day ago", language: "Python" },
    { id: 25, name: "dashboard-analytics", visibility: "private", size: 2800, updated: "2 days ago", language: "React" },
    { id: 26, name: "real-time-chat", visibility: "public", size: 1500, updated: "3 days ago", language: "Swift" },
    { id: 27, name: "inventory-system", visibility: "private", size: 3200, updated: "4 days ago", language: "PHP" },
    { id: 28, name: "image-gallery", visibility: "public", size: 700, updated: "5 days ago", language: "React" },
    { id: 29, name: "budget-tracker", visibility: "private", size: 1000, updated: "6 days ago", language: "JavaScript" },
    { id: 30, name: "weather-dashboard", visibility: "public", size: 1200, updated: "7 days ago", language: "HTML" },
    { id: 31, name: "employee-management", visibility: "private", size: 2200, updated: "8 days ago", language: "PHP" },
    { id: 32, name: "project-management", visibility: "public", size: 3300, updated: "9 days ago", language: "React" },
    { id: 33, name: "digital-signage", visibility: "private", size: 1900, updated: "1 day ago", language: "JavaScript" }
  ];
  
    

const Home = () => {
    return <div className="home-container">
        <Header />
        <main>
            <div className="main-child">
            <div className="repos-filter-container">
                <div className="repos-container-filters-container">
                <div>
                    <h2>Repositories</h2>
                    <p>{repos.length} total repositories</p>
                </div>
                <div className="repos-buttons-container">
                    <button className="respo-filter-buttons" type="button" > <img src="https://res.cloudinary.com/djszohdjt/image/upload/v1734875936/rybnlduljy7cjvpxrltq.png" alt="refresh-icon" /> <p> Refresh All </p></button>
                    <button className="respo-filter-buttons button-with-color" type="button"> <img className="add-icon" src="https://res.cloudinary.com/djszohdjt/image/upload/v1734875938/t2k2xzpt6vsc95lgwrl4.png" alt="add-icon" /> <p>Add Repository</p></button>
                </div>
                </div>
                <div className="repo-search-bar"> <img src="https://res.cloudinary.com/djszohdjt/image/upload/v1734878075/dzo3nyviqvbhjykg9364.png" alt="search-icon"/> <input className="repo-search-input" type="text" /> </div>
            </div>
            <ul className="repos-container-ul">
               {repos.map((each) => <li key={each.id} className="repos-li"> 
                <div className="repo-name-visibility"><p className="repo-name">{each.name}</p> <p className="repo-visibility">{each.visibility}</p> </div>
                 <div className="repo-child-names">
                   <div className="language-used">  
                    <p >{each.language}  </p>  
                    <div className="circle"></div>
                    </div>
                    <p><img src="https://res.cloudinary.com/djszohdjt/image/upload/v1734881962/xi23id5kex4w2qjljqfo.png" alt="database-icon"/>{" "}{each.size} {" "} KB</p>
                    <p>Updated {each.updated}</p>
                 </div>
                </li>)}
            </ul>
            </div>
        </main>
    </div>
}

export default Home