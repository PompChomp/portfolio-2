import { ref } from 'vue';


export const useWorks = () => {

    const works = ref([
        {
            name: "Small Video Project",
            type: "Video Editing",
            shortdescription: "1-2 minute video, editing project for school practice.",
            longdescription: "1-2 minute video editing project for school practice. Re-Creation of a well known tv show clip, ",
            time: "2025",
            imageURL: "https://picsum.photos/280/170",
        },
        {
            name: "Saint Patrick's day infographic",
            type: "Design",
            shortdescription: "Be the chik elegant alien you always wanted to be.",
            longdescription: "Be the chik elegant alien you always wanted to be. Get a stylish suit",
            time: "2025",
            imageURL: "https://picsum.photos/280/170",
        },
        {
            name: "Brothers Lionheart Play promotion",
            type: "Video Editing,Web Design",
            shortdescription: "Be the chik elegant alien you always wanted to be.",
            longdescription: "Be the chik elegant alien you always wanted to be. Get a stylish suit",
            time: "2025",
            imageURL: "https://picsum.photos/280/170",
        },
        {
            name: "Suit suit",
            type: "Video Editing",
            shortdescription: "Be the chik elegant alien you always wanted to be.",
            longdescription: "Be the chik elegant alien you always wanted to be. Get a stylish suit",   
            time: "2025",
            imageURL: "https://picsum.photos/280/170",
        },
        {
            name: "Sustainability week promotion",
            type: "Design",
            shortdescription: "Be the chik elegant alien you always wanted to be.",
            longdescription: "Be the chik elegant alien you always wanted to be. Get a stylish suit",   
            time: "2025",
            imageURL: "https://picsum.photos/280/170",
        },
    ])
    

    return{
        works
    }
}