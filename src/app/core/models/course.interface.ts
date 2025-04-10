import { LessonInterface } from "./lesson.interface";

export interface CourseInterface {
    id: string,
    title: string,
    description: string,
    image: string,
}

export interface CourseStructureInterface {
    id: string,
    title: string,
    description: string,
    modules: СourseModuleInterface[],
}

export interface СourseModuleInterface {
    id: string,
    title: string,
    order: number,
    lessons: LessonInterface[]
}