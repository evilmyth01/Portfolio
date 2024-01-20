export const SKILLS =[
    {
        title: 'Technical Skills',
        icon: 'icons8-tools-100.png',
        skills:[
            {skill: 'C++', percentage: "80%"},
            {skill: 'Algorithm Design and Analysis', percentage: "78%"},
            {skill: 'Object Oriented Programming', percentage: "82%"},
            {skill: 'Operating System', percentage: "73%"},
            {skill: 'Data Structures', percentage: "70%"},
            {skill: 'Data Base Management System', percentage: "70%"},
        ],
    },
    {
        title: 'Percentage',
        icon: 'icons8-percentage-80.png',
        skills:[
            {skill: 'Class 10 cgpa', percentage: "8.6"},
            {skill: 'Class 12 cgpa', percentage: "8.4"},
            {skill: 'College cgpa', percentage: "8.07"},
            {skill: 'DSA Problems', percentage: "500+"},
        ],
    },
    {
        title: 'Frontend',
        icon: '/icons8-frontend-80.png',
        skills:[
            {skill: 'HTML5', percentage: "85%"},
            {skill: 'CSS3 (Sass/SCSS)', percentage: "80%"},
            {skill: 'Javascript', percentage: "70%"},
            {skill: 'React', percentage: "65%"},
        ],
    },
    {
        title: 'Backend',
        icon: 'icons8-backend-64.png',
        skills:[
            {skill: 'NodeJS', percentage: "70%"},
            {skill: 'ExpressJS', percentage: "65%"},
            {skill: 'Mongoose', percentage: "65%"},
            {skill: 'MongoDB', percentage: "70%"},
            {skill: 'MySQL', percentage: "75%"},
            {skill: 'RESTful APIs', percentage: "70%"}, 
        ],
    },
    {
        title: 'Soft skills',
        icon: 'icons8-development-skill-80.png',
        skills:[
            {skill: 'Problem-solving', percentage: "79%"},
            {skill: 'Attention to detail', percentage: "80%"},
            {skill: 'Teamwork', percentage: "70%"},
            {skill: 'Creativity', percentage: "75%"},

        ],
    },

]

export const WORK_EXPERIENCE = [
    {
        title: 'Web Blog App',
        date: '2023',
        responsibilities: [
            'Separate Schemas for Users and Blogs Maintain a well-organized database structure with separate schemas for user data and blog content.',
            'Achieve scalability and efficiency by storing user information and blogs independently.',
            'Browse through blogs authored by all existing users, fostering a sense of community and shared knowledge.Engage with content through an intuitive and dynamic reading experience.',
            'Authorization Security: Safeguard your financial data with bcrypt for password hashing and secure token-based authorization, ensuring the privacy of user information.',
            'Empower users with the ability to create, edit, and delete their blogs, promoting a personalized and dynamic content creation process.',
            'Ensure data security by implementing protected routes that grant access only to authenticated users.Enhance user privacy and prevent unauthorized access to sensitive content.',
            'Follow a standard approach for API responses and errors, ensuring consistency and ease of integration with the frontend.',
        ]
    },
    {
        title: 'Expense Tracker',
        date: '2022',
        responsibilities: [
            'Visual Dashboard: Gain insights at a glance with an interactive dashboard presenting a visual representation of your expenses and income over time.',
            'Expense Tracking: Effortlessly record and categorize your expenses and income, providing a clear overview of your financial activities.',
            'Authorization Security: Safeguard your financial data with bcrypt for password hashing and secure token-based authorization, ensuring the privacy of user information.',
            'Transaction Management: Easily add, edit, and delete expenses or income entries, allowing you to maintain an accurate and up-to-date financial record.',
            'Filtering: Utilize the filter feature to track expenses and income within specific date ranges and on basis of income and expenses, enabling targeted financial analysis.',
            'Follow a standard approach for API responses and errors, ensuring consistency and ease of integration with the frontend.',
        ]
    },
    {
        title: 'To Do List App',
        date: '2022',
        responsibilities: [
            'Seamlessly create, delete, and edit tasks with an intuitive and user-friendly interface.',
            'Your to-do list is always within reach! Local storage ensures your tasks persist even after refreshing the page or closing the browser.',
            'Quickly identify completed tasks and track your progress with a simple and effective visual indicator.',
            'Make adjustments on the fly! Edit task details with ease, ensuring your to-do list is always up-to-date and reflective of your priorities.',
            'Streamline your to-do list by easily deleting tasks that are no longer relevant.',
        ]
    },
    {
        title: 'Authentication System',
        date: '2021',
        responsibilities: [
            'User Registration and Login: Seamless user onboarding with a straightforward registration process and a secure login mechanism.',
            'Token-Based Authentication: Implementing JWT for token generation and validation, offering a secure and scalable authentication mechanism.',
            'Cookie-Based Sessions: Enhancing user experience and security with the use of HTTP cookies to manage user sessions.',
            'Secure Password Storage: Utilizing bcrypt to hash and securely store user passwords, ensuring data integrity and user privacy.',
            'Protected Routes: Restricting access to certain routes by implementing middleware to verify the users authentication status.',
            'Follow a standard approach for API responses and errors, ensuring consistency and ease of integration with the frontend.',
        ]
    },
    {
        title: 'Currency Converter',
        date: '2021',
        responsibilities: [
            'Live Exchange Rates: Access up-to-date exchange rates from a reliable source, ensuring accuracy in currency conversions.',
            'User-Friendly Interface: Experience an intuitive and easy-to-navigate design that caters to users of all levels.',
            'Multiple Currency Options: Choose from a comprehensive list of currencies, making it a versatile tool for international users.',
            'Real-Time Conversion: Witness instant currency conversion results as you input values, facilitating quick decision-making.',
        ]
    },
    {
        title: 'Tic-Tac-Toe Game',
        date: '2020',
        responsibilities: [
            'Challenge yourself against a smart AI opponent powered by the Minimax algorithm, ensuring a strategic and competitive gameplay experience.',
            'The Minimax algorithm ensures that the AI makes optimal moves, providing a challenging adversary for players of all skill levels.',
            'HTML: Structure and layout of the game board.',
            'CSS: Styling for a visually appealing.',
            'JavaScript: Game logic and Minimax algorithm implementation.',
        ]
    },
    {
        title: 'Youtube Clone',
        date: 'Under Progress',
        responsibilities: [
            'Embrace a sophisticated data architecture with multiple schemas, ensuring optimized storage and retrieval for diverse data types.',
            'Prioritize user security with a cookie-based authentication system, providing a seamless and secure login experience.',
            'Integrate third-party services for efficient video uploads, streamlining the process and enhancing user convenience.',
            'Immerse users in a dynamic and responsive frontend crafted with React, offering an intuitive and engaging video-sharing experience.',
            'Uphold industry best practices with standardized API responses, ensuring consistency and ease of integration for frontend development.',
            'Harness the power of Mongoose aggregate pipelines for advanced data processing, enabling complex queries and analytics.',
        ]
    },


]