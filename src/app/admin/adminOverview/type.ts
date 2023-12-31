export interface Stats{
    totalUsers:number,
    activeUsers:number,
    totalOrders:number,
    revenue:string
}
interface Activity {
    timestamp:Date,
    activity:string,
    user:string,
}
export type activityData = Activity[];

interface UserDetails {
    dateOfBirth: string,
    email:string,
    phone: string,
    gender:string,
    address:string,
    photo: string,
}

export interface User{
    username: string,
    password: string,
    role: string,
    details: UserDetails,
}

interface Product {
    id: number,
    name: string,
    price: string,
    stock: number,
}

interface Order {
    orderNumber: number,
    date: Date,
    total: string,
    customer: string
}

interface Review {
    productId: number,
    customer: string,
    rating: number,
    comment: string,
}

interface EcommerceData {
    products: Product[],
    orders: Order[],
    reviews: Review[],
}

export interface Data {
    dashboard: {
        stats: Stats,
        activityData: Activity[],
    }
    users: User[],
    ecommerceData: EcommerceData,
}