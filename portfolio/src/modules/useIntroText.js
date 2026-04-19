import { ref } from 'vue';

export const useIntroText = () => {

    const introText = ref("Welcome to my portfolio!I am Vid Richard Hana a Hungarian student living in Denmark. I came here to study Multimedia design at Syddansk Erhvervsakademi. ")

    return{
        introText
    }
}