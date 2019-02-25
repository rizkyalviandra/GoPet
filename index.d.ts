interface IUser {
    name: string
    contact: string
    username: string
    email: string
    password: string
}

interface IEmployee {
    name: string
    contact: string
    username: string
    email: string
    password: string
}

interface IOrder {
    destination: string
}

interface IPackage {
    name: string
    price: string
    description: string
}

declare module "*.png"