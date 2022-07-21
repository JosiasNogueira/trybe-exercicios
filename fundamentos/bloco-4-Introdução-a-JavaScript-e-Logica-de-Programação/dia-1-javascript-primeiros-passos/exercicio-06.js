const peca = "rei";

switch (peca.toLowerCase()){
    case "cavalo":
        console.log("O cavalo é considerado uma peça menor (como o bispo) e vale três pontos. O cavalo é a única peça de xadrez que pode saltar sobre outra peça! Ele move uma casa para a esquerda ou para a direita na horizontal e depois duas casas para cima ou para baixo na vertical, OU ele move duas casas para a esquerda ou para a direita na horizontal e depois uma casa para cima ou para baixo na vertical - em outras palavras, o cavalo se move em -L-. O cavalo pode capturar apenas a peça que estiver na casa onde ele parar, e não a peça que ele pular!");
    break;

    case "dama":
    console.log("A dama é considerada uma peça maior (como a torre) e vale nove pontos. Pode mover quantas casas quiser na horizontal e na vertical (como a torre). A dama também pode mover quantas casas quiser na diagonal (como o bispo). Uma maneira fácil de lembrar como uma dama pode se mover é saber que ela se move como uma torre e um bispo juntos!" );
    break;

    case "peao":
        console.log("O peão é a peça menos poderosa e vale um ponto. Se for o primeiro lance de um peão, ele pode avançar uma ou duas casas. Se um peão já se moveu na partida, ele pode avançar apenas uma casa por vez. Ele ataca (ou captura) uma casa na diagonal, para a esquerda ou direita. No diagrama a seguir, o peão acabou de mover da casa e2 para a casa e4 e ataca as casas d5 e f5. O peão é a única peça que não pode recuar!" );
    break;

    case "torre":
        console.log("A torre é considerada uma peça maior (como a dama) e vale cinco pontos. Ela pode mover quantas casas quiser para esquerda ou direita (na horizontal), ou quantas casas quiser para cima ou para baixo (na vertical), desde que não seja bloqueada por outras peças. Uma maneira fácil de lembrar como uma torre pode se mover é imaginar que ela se move como um sinal de "+"." );
    break;

    case "bispo":
        console.log("O bispo é considerado uma peça menor (como o cavalo) e vale três pontos. Um bispo pode mover na diagonal quantas casas quiser, desde que não seja bloqueado por suas próprias peças ou por uma peça inimiga. Uma maneira fácil de lembrar como um bispo pode se mover é imaginar que ele se move como um -X-. Ele pode capturar uma peça do oponente movendo-se para a casa que ela ocupa, retirando-a do tabuleiro." );
    break;

    case "rei":
        console.log("O rei não é uma peça muito poderosa, pois só pode se mover (ou capturar) uma casa em qualquer direção. Atenção: o rei não pode ser capturado! Quando um rei é atacado, diz-se que ele está em -xeque-." );
    break;
};
