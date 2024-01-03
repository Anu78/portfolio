export const resume = {
    personalinfo: {
        name: "anuraag",
        shortabout: "it's unknown what i'm about to do, but what i know for sure is that",
        longabout: "long about section with lots of information and helpful things"
    },
    location: {
        city: "charlotte",
        country: "united states",
        timezone: "est",
    },
    contact: { // just the usernames; full email is required
        linkedin: "anuraagw", 
        twitter: "boopdotpng",
        email: "anuraag.warudkar@gmail.com",
        github: "Anu78",
    },
    // experience: [ // optional 
    //     ""
    // ],
    education: {
        uni: "university of north carolina at charlotte",
        field: "bachelor of science in computer engineering | machine learning concentration",
        date: "2021-2024", // start to end "2021-2024"
    },
    skills: [
        "next.js/react",
        "javascript",
        "python",
        "rust",
        "c/c++",
        "java",
        "aws"
    ],
    projects: [
        {
            title: "web sudoku",
            link: "https://anuraagw.me/sudoku",
            active: true,
            desc: "a react sudoku solver.",
            highlights: ["react", "javascript", "css"]
        },
        {
            title: "canvas-lms discord bot",
            link: "https://github.com/Anu78",
            active: false,
            desc: "a bot to encourage collaboration at school.",
            highlights: ["python", "discord api", "mongodb"]
        },
        {
            title: "geoguessr ai",
            link: "https://github.com/Anu78",
            active: true,
            desc: "a resnet inspired model that plays geoguessr well half the time",
            highlights: ["python", "google street view api", "pytorch"]
        },
        {
            title: "mom's inventory management",
            link: "https://github.com/Anu78",
            active: false,
            desc: "how do i keep track of all my groceries?",
            highlights: ["go", "mongodb", "react"]
        },
        {
            title: "portfolio website",
            link: "https://anuraagw.me",
            active: true,
            desc: "the website you're on right now!",
            highlights: ["next.js", "css"]
        },
    ],
};