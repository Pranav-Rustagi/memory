import { 
    faCoffee,
    faAtom,
    faBahai,
    faBell,
    faBomb,
    faBookmark,
    faBrain,
    faBug,
    faCloud,
    faCodeBranch,
    faDiceFive,
    faDragon,
    faFireAlt,
    faHamburger,
    faLemon,
    faMeteor,
    faCar,
    faSun,
} from "@fortawesome/free-solid-svg-icons";

const getAllIcons = () => {
    return [
        faCoffee,
        faAtom,
        faBahai,
        faBell,
        faBomb,
        faBookmark,
        faBrain,
        faBug,
        faCloud,
        faCodeBranch,
        faDiceFive,
        faDragon,
        faFireAlt,
        faHamburger,
        faLemon,
        faMeteor,
        faCar,
        faSun,
    ];
}

const shuffleArray = (array) => {
    array = [...array, ...array];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateRandomNumbers = (size) => {
    const numbers = [];
    while(numbers.length < size) {
        const randomNumber = generateRandomNumber(1, 99);
        if(!numbers.includes(randomNumber))
            numbers.push(randomNumber);
    }
    return shuffleArray(numbers);
}


const generateRandomIcons = (size) => {
    const icons = [];
    const allAvailableIcons = getAllIcons();

    while(icons.length < size) {
        const randomIconIndex = generateRandomNumber(0, allAvailableIcons.length - 1);
        if(!icons.includes(allAvailableIcons[randomIconIndex]))
            icons.push(allAvailableIcons[randomIconIndex]);
    }
    return shuffleArray(icons);
}


const generateButtonValues = (theme, size) => {
    if(theme === 'numbers')
        return generateRandomNumbers(size);
    else
        return generateRandomIcons(size);
}

export default generateButtonValues;