import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { Flex,Box } from "@chakra-ui/react";
import { Office } from "./Office";

const colors = [
    '#000000',
    '#4B2727',
    '#27304B',
    '#2A4B27',
    '#3F274B',
    '#4B3927',
];
const Section = (props) => {
    return (
        <section
            className={`h-screen flex flex-col justify-center p-10 ${props.right ? "items-end" : "items-start"
            }`}
            style={{
                opacity: props.opacity,
            }}
        >
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Overlay = () => {

    const [currentColor, setCurrentColor] = useState(colors[0]);
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);
    const handleBuyClick = () => {
        alert('Votre commande a été passée avec succès!');
    };
    useFrame(() => {
        setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
        setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
        setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
    });

    return (
        <Scroll html>
            <nav className="bg-transparent border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <img src="https://stickers-shop.re/thumb.php?zc=3&src=/visu/view/v/preview/logo-ds3-2.png&fl=none&w=395&h=395&f=5,%200%20,0%20,0%20,0://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DS AUTOMOBILES</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </nav>
            <div className="w-screen">
                <Section opacity={opacityFirstSection}>
                    <h1 className="font-semibold font-serif text-2xl" id="first-section">
                         Bienvenue sur DS AUTOMOBILES
                    </h1>
                    <p className="text-gray-500 mt-3">Ici, personnalisé votre voiture pour qu'elle vous ressemble ! </p>
                    <p className="mt-3">Découvrez notre incroyable modèle de voiture, conçu pour offrir une expérience de personnalisation unique. </p>
                    <p className="mt-3">Imaginez pouvoir changer la couleur de votre voiture en quelques clics, directement depuis notre site web. </p>
                    <p className="mt-3">Grâce à notre outil de personnalisation avancé, vous pouvez explorer une large gamme de couleurs et visualiser instantanément le rendu sur notre modèle 3D hautement détaillé.</p>
                    <p className="animate-bounce  mt-6">↓</p>
                </Section>
                <Section right opacity={opacitySecondSection}>
                    <h1 className="text-white font-semibold font-serif text-2xl" id="second-section">
                         De nombreuses couleurs sont disponibles !
                    </h1>
                    <p className="text-white">Ne perdez pas une minute de plus, explorez notre gamme de couleurs, laissez libre cours à votre créativité et prenez rendez-vous dès maintenant pour vivre une expérience automobile exceptionnelle.</p>
                    <p className="text-white mt-3">Scrollez vers le bas pour vous rendre sur la partie personnalisation.</p>
                    <p className="text-white mt-3"><b>Faites-vous plaisir !</b></p>
                    <p className="text-white animate-bounce  mt-6">↓</p>
                </Section>
                <Section  opacity={opacityLastSection}>
                    <h1 className="font-semibold font-serif text-2xl mb-3" id="third-section">
                         Personnalisation :
                    </h1>
                    <p>Choississez la couleur qui vous correspond le plus, visualisé la sur votre voiture, et passez commande !</p>
                    <p className="text-gray-500 mt-5">
                        <Flex direction="row" mb={4}>
                            {colors.map((color, index) => (
                                <Box
                                    key={index}
                                    w={20}
                                    zIndex="50"
                                    h={20}
                                    bg={color}
                                    mx={8}
                                    my={8}
                                    onClick={() => setCurrentColor(color)}
                                    cursor="pointer"
                                />
                            ))}
                        </Flex>
                    </p>
                    <button className="bg-black text-white font-bold p-2 rounded-full mt-3" onClick={handleBuyClick}>Acheter</button>
                    <button slot="ar-button" id="ar-button">
                        View in your space
                    </button>
                </Section>
                <Office color={currentColor} />
            </div>
        </Scroll>
    );
};