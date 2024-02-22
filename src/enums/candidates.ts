/*formato = [Nombre nominado, img miniatura, link a video] */
const Candidates = [
    /*Clip del año */
    [   [ "Miputisimoyonequeclinestioqueclinesmiyonelocodeverdadluegotengoqueaguantaralosniñatosdelchatdiciendo", "https://phantom-marca.unidadeditorial.es/91a38a97896ef6437383b641f59af9b4/crop/0x0/1180x664/resize/828/f/jpg/assets/multimedia/imagenes/2022/07/11/16575218290798.jpg", "https://www.twitch.tv/zeling/clip/SweetTubularStapleBCWarrior-HJ402xEEr4Z-0XDQ"],
        [ "Nominado 2", "https://i.ytimg.com/vi/Yh2x1ENFXWQ/maxresdefault.jpg", "#play video2"],
        [ "Nominado 3", "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/18/VGIA.A_Zeling_2020_Split_1.png/revision/latest?cb=20200216024733", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Enfado del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Bitero del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Domada del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Dono del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Pareja del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Insulto del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Copy del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Gusano del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*In memoriam a los caídos del año y pomodoro*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Mod del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Edit-meme del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Evento del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Stream del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*IRL del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Jugada del año*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
    /*Timing del añ*/
    [   [ "Nominado 1", "../../Assets/landing-page.png", "#play video1"],
        [ "Nominado 2", "../../Assets/landing-page.png", "#play video2"],
        [ "Nominado 3", "../../Assets/landing-page.png", "#play video3"],
        [ "Nominado 4", "../../Assets/landing-page.png", "#play video4"] ],
]

export default Candidates