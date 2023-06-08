import z from "zod"

export interface DeleteCourseInputDTO {
    idToDelete: string
}

export interface DeleteCourseOutputDTO {
    message: string,
    course: {
        id: string,
        name: string,
        lessons: number,
        createdAt: string
    }
}

export const deleteCourseSchema = z.object({
    idToDelete: z.string()
}).transform(data => data as DeleteCourseInputDTO)