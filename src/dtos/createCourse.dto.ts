import z from "zod"

export interface CreateCourseInputDTO {
    id: string,
    name: string,
    lessons:number
}

export interface CreateCourseOutputDTO {
    message: string,
    course: {
        id: string,
        name: string,
        lessons: number,
        createdAt: string
    }
}

export const createCourseSchema = z.object({
    id: z.string(),
    name: z.string().min(2),
    lessons: z.number().positive().min(0)
}).transform(data => data as CreateCourseInputDTO)