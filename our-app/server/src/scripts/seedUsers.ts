import User from "../models/User";
import { usersData } from "../data/userData";

const seedUsers = async () => {
    try {
        await User.insertMany(usersData);
        console.log("Users inserted successfully");
    } catch (error) {
        console.error("Error seeding users:", error);
        throw error;
    }
};

export default seedUsers; 