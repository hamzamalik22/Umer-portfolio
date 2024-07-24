import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./reducers/ProfileSlice";
import AboutReducer from "./reducers/AboutSlice";
import TestimonialReducer from "./reducers/TestimonialSlice";
import EducationReducer from "./reducers/EducationSlice";
import ExperienceReducer from "./reducers/ExperienceSlice";
import SkillReducer from "./reducers/SkillSlice";
import ProjectReducer from "./reducers/ProjectSlice";

export const store = configureStore({
  reducer: {
    profile: ProfileReducer,
    about: AboutReducer,
    testimonial: TestimonialReducer,
    education: EducationReducer,
    experience: ExperienceReducer,
    skill: SkillReducer,
    project: ProjectReducer,
  },
});
