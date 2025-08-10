export type Meal = {
    id:string,
    slug: string;
    title: string;
    image: File | string;
    creator: string;
    creator_email: string;
    summary: string;
    instructions: string;
}