import z from "zod"

export interface GetCourseInputDTO {
    q: string
}

export interface GetCourseOutputDTO {
    id: string,
    name: string,
    lessons: number,
    createdAt: string
}

export const getCourseSchema = z.object({
    q: z.string()
}).transform(data => data as GetCourseInputDTO)