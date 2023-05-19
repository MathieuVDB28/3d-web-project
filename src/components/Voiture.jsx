function Voiture() {
    return (
        <>
            <nav className="bg-transparent border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center">
                        <img src="https://stickers-shop.re/thumb.php?zc=3&src=/visu/view/v/preview/logo-ds3-2.png&fl=none&w=395&h=395&f=5,%200%20,0%20,0%20,0://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DS AUTOMOBILES</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page">Accueil</a>
                            </li>
                            <li>
                                <a href="/voiture" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page">Voir en VR</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <model-viewer src="/src/assets/modelviewer/scene.gltf" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1">
            </model-viewer>
        </>
    );
}

export default Voiture;