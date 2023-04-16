export interface Recipe {
    id?: number,
    title: string,
    description: string,
    ingredients: string,
    category_id: number,
    level_id: number,
    time: number
}