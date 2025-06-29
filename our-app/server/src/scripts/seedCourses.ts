import Course from "../models/Course";
import { coursesData } from "../data/coursesData";

const seedCourses = async () => {
    try {
        await Course.insertMany(coursesData);
        console.log("Courses inserted successfully");
    } catch (error) {
        console.error("Error seeding courses:", error);
        throw error;
    }
};

export default seedCourses;