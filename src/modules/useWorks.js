import { ref } from 'vue';
const Infographic = `${import.meta.env.BASE_URL}Vid_Richard_Hana_Infographic_poster.pdf`;
const Infographicpng = `${import.meta.env.BASE_URL}saint_patrick_day.png`;
const Musikhuset = `${import.meta.env.BASE_URL}musikhuset.png`;
const dexteritos = `${import.meta.env.BASE_URL}dexteritos.png`;
const esbjerg = `${import.meta.env.BASE_URL}esbjerg.png`;
const musihusetvideo = `${import.meta.env.BASE_URL}musikhuset_video.png`;

export const useWorks = () => {

    const works = ref([
        {
            name: "Small Video Project",
            type: "Video Editing",
            shortdescription: "1-2 minute video, editing project for school practice.",
            longdescription: "1-2 minute video editing project for school practice. Re-Creation of a well known tv show clip from Dexter. The project was made using Adobe Premiere Pro.",
            link: "https://youtu.be/uKGozbEqKQY",
            time: "2026",
            imageURL: dexteritos,
        },
        {
            name: "Brothers Lionheart Play promotion",
            type: "Video Editing",
            shortdescription:"Promotional video for the Brothers Lionheart play.",
            longdescription:"Promotional video for the Brothers Lionheart play. The video was made using Adobe Premiere Pro, and it was our first semester project in the Multimedia Design course.",
            link: "https://youtu.be/EFHF2TRhe-4",
            time: "2025",
            imageURL: musihusetvideo,
        },
        {
            name: "Brothers Lionheart Play promotion",
            type: "Web Design",
            shortdescription: "The coding of the video section for the Brothers Lionheart play website.",
            longdescription: "Design of the website video section for the Brothers Lionheart play and the coding of the said website section. The website section was coded using HTML and CSS.",
            link: "https://github.com/gergopinter77-lgtm/1st-semester-exam-project-BrotherLionheart",
            time: "2025",
            imageURL: Musikhuset,
        },
        {
            name: "Wellcome to Esbjerg",
            type: "Video Editing",
            shortdescription: "A video about Esbjerg, made for school practice.",
            longdescription: "A video about Esbjerg, made for school practice. The video showcases some of the city's attractions and highlights. The project was made using Adobe Premiere Pro.",
            link: "https://youtu.be/YJp9r2SSCsU",
            time: "2025",
            imageURL: esbjerg,
        },
        {
            name: "Saint Patrick's day infographic",
            type: "Design",
            shortdescription: "An infographic about Saint Patrick's day, made for school practice.",
            longdescription: "An infographic about Saint Patrick's day, made for school practice. It includes information about the holiday, as well as some fun facts and america specific practices.",
            link: Infographic,
            time: "2026",
            imageURL: Infographicpng,
        }
    ])


    return{
        works
    }
}
