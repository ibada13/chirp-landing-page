import user1 from '../Assets/user-1.svg'
import user2 from '../Assets/user-2.svg'
import user3 from '../Assets/user-3.svg'
import user4 from '../Assets/user-4.svg'
import user5 from '../Assets/user-5.svg'
import user6 from '../Assets/user-6.svg'
import user7 from '../Assets/user-7.svg'
import user8 from '../Assets/user-8.svg'
import user9 from '../Assets/user-9.svg'

export const clients = [user1, user2, user3, user4, user5, user6, user7, user8, user9];

export interface feature {
    emoji:string,
    title: string,
    text:string
}
export const features: feature[] = [
    {
        emoji:'📈',
        title:"title 1",
        text:"somt text Lorem ipsum odor amet, consectetuer adipiscing elit. Ad  ut viverra nunc malesuada fringilla ultricies porttitor.",
    }
    , {
        emoji:"🤓",
        title:"title 2 ",
        text:"Lorem ipsum odor amet, consectetuer adipiscing elit. Ad  ut viverra nunc malesuada fringilla ultricies porttitor.",
    },    {
        emoji:"📝",
        title:"title 3",
        text:"Lorem ipsum odor amet, consectetuer adipiscing elit. Ad  ut viverra nunc malesuada fringilla ultricies porttitor.",
    }, {
        emoji:"🌑",
        title:"title 4",
        text:"Lorem ipsum odor amet, consectetuer adipiscing elit. Ad  ut viverra nunc malesuada fringilla ultricies porttitor.",
    }
]

export interface clientReview { 
    pfpSrc:string,
    name: string,
    username: string,
    review:string,
    date:string,
    likes:number,
}
export const clientReviews: clientReview[] = [
    {
        pfpSrc: clients[0],
        name: "Sara May",
        username: "@sara_may",
        review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos mollitia dignissimos, harum fugiat unde beatae!",
        date:"March 2 ,2021",
        likes: 2,
        

    },
    {
        pfpSrc: clients[5],
        name: "Jack Scott",
        username: "@Jackscott_",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nam orem ipsum dolor sit amet consectetur, adipisicing elit. Quos orem ipsum dolor sit amet consectetur, adipisicing elit. Quos !"
        ,
        date:"March 2 ,2021",
        likes: 32,
        

    },
    {
        pfpSrc: clients[2],
        name: "Jessica May",
        username: "@jmay98",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nam!",
        date:"March 2 ,2021",
        likes: 221,
        

    }
]