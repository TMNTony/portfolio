import {createStore as _createStore} from "vuex";

export function createStore() {
    return _createStore({
        state: {
            projects: [
                {
                    id: 1,
                    name: "Chambless Horn Studios",
                    description:
                        "The objective of this project was to craft an engaging and interactive portfolio website, tailored to spotlight the client's work, personal story, and experiences, with dedicated sections for your biography, media projects, studio information, blog, and a personal account of their Bell's Palsy journey.",
                    skills: ["JavaScript", "TypeScript", "Node.JS", "Vue3", "Tailwind", "AWS"],
                    pictures: [],
                    link: "https://github.com/TMNTony/Cindy",
                    site: "https://chamblesshornstudio.com",
                },
                {
                    id: 2,
                    name: "Degree Planning Tool",
                    description:
                        "Designed and implemented a web-based Degree Planner application that enables advisors to plan course schedules and track degree progress for students." +
                        "The application utilizes Java, and PostgreSQL to create a backend API that creates course schedules based on academic requirements." +
                        "It utilizes the JGraphT Java Graph Library to efficiently manage course scheduling and resolve circular dependencies.  The end result" +
                        " produces a full degree plan that maps out a student's path from graduation from day 1.",
                    skills: ["Java", "Vue3", "Postgresql", "Tailwind"],
                    pictures: ["scheduler.jpg"],
                    link: "https://github.com/TMNTony/course-scheduler",
                    site: null,
                },
                {
                    id: 3,
                    name: "EDU Hub",
                    description:
                        "An all-encompassing e-learning platform that facilitates online education, covering content creation, homework submission, grading, and student progress tracking." +
                        "Executed Vue.js, Java, and PostgreSQL technologies for seamless functionality." +
                        "Led the development of the front-end user interface with Vue.js and effectively managed state using Vuex." +
                        "Collaborated closely with the back-end team for seamless API integration and proficient data management.",
                    skills: ["Java", "Vue3", "Postgresql"],
                    pictures: ["EDUHub1.jpg", "EDUHub2.jpg"],
                    link: "https://github.com/TMNTony/EduHub",
                    site: null,
                },
                {
                    id: 4,
                    name: "Money Transfer Application",
                    description:
                        "Developed a RESTful API server and command-line application for an online payment service." +
                        "Instituted user registration, login, balance visualization, and facilitated money transfers and requests among users." +
                        "Ensured secure access with authentication tokens and implemented strict transfer rules for secure transactions.",
                    skills: ["Java", "Postgresql"],
                    pictures: ["tenmo1.jpg", "tenmo2.jpg", "tenmo3.jpg"],
                    link: "https://github.com/TMNTony/tenmo",
                    site: null,
                },
            ],
        },
        getters: {
            getProjects(state) {
                return state.projects;
            },
        },
        mutations: {},
    });
}
