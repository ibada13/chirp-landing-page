import Image from "next/image"
import chart from '../Assets/chart.svg'

interface feature {
    emoji:String,
    title: string,
    text:string
}
const features: feature[] = [
    {
        emoji:'📈',
        title:"title 1",
        text:"somt text Lorem ipsum odor amet, consectetuer adipiscing elit. Ad bibendum hendrerit faucibus himenaeos amet montes hac mauris dolor elit erat proin venenatis potenti eu ut viverra nunc malesuada fringilla ultricies porttitor.",
    }
    , {
        emoji:"🤓",
        title:"title 2 ",
        text:"Lorem ipsum odor amet, consectetuer adipiscing elit. Ad bibendum hendrerit faucibus himenaeos amet montes hac mauris dolor elit erat proin venenatis potenti eu ut viverra nunc malesuada fringilla ultricies porttitor.",
    },    {
        emoji:"📝",
        title:"title 3",
        text:"Lorem ipsum odor amet, consectetuer adipiscing elit. Ad bibendum hendrerit faucibus himenaeos amet montes hac mauris dolor elit erat proin venenatis potenti eu ut viverra nunc malesuada fringilla ultricies porttitor.",
    }, {
        emoji:"🌑",
        title:"title 4",
        text:"Lorem ipsum odor amet, consectetuer adipiscing elit. Ad bibendum hendrerit faucibus himenaeos amet montes hac mauris dolor elit erat proin venenatis potenti eu ut viverra nunc malesuada fringilla ultricies porttitor.",
    }
]