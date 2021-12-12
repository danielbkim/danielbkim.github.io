import "./projects.scss";

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                <li className="active">Featured</li>
                <li>eCommerce App</li>
                <li>Potluck Planner</li>
                <li>Crypto Portfolio Tracker</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://www.wpbeginner.com/wp-content/uploads/2020/10/dummydatadefault.png" alt="dummy_project" />
                    <h3>App</h3>
                </div>
                <div className="item">
                    <img src="https://www.wpbeginner.com/wp-content/uploads/2020/10/dummydatadefault.png" alt="dummy_project" />
                    <h3>App</h3>
                </div>
                <div className="item">
                    <img src="https://www.wpbeginner.com/wp-content/uploads/2020/10/dummydatadefault.png" alt="dummy_project" />
                    <h3>App</h3>
                </div>
            </div>
        </div>
    )
};
