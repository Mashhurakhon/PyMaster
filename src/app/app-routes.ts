export enum APP_ROUTES {
    HOME = '',
    AUTH = 'auth',
    COURSES = 'courses',
    COURSE_PREVIEW = 'courses/:id',
    COURSE_LESSON = 'courses/:id/lessons/:lessonId',
    DASHBOARD = '',
    NOTFOUND = '**'
}

export const getCoursePreview = (id: number) => `course/${id}`;
export const getCourseLesson = (courseId: number, lessonId: number) => 
    `course/${courseId}/lesson/${lessonId}`;
