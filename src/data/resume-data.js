export const resume = {
    personalinfo: {
        name: "",
        shortabout: "",
        longabout: ""
    },
    location: {
        city: "charlotte",
        country: "united states",
        timezone: "est",
    },
    contact: { // just the usernames; full email is required
        linkedin: "anuraagw", 
        twitter: "boopdogpng",
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
        "next.js",
        "javascript",
        "python",
        "learning rust",
        "C/C++",
        "Java (i do not enjoy)"
    ],
    projects: [
        {
            title: "sudoku solver",
            link: "https://anuraagw.me/sudoku",
            active: true,
            desc: "a react sudoku solver.",
            highlights: ["react", "javascript", "css"]
        },
        {
            title: "canvas discord bot",
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
            highlights: ["python", "google api", "pytorch"]
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