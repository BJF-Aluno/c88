// 1. Primeiro, obteremos a referência do canvas com fabric.Canvas() e a
// armazenaremos dentro de uma variável chamada canvas.

var canvas = new fabric.Canvas('myCanvas');

// 2. Agora, definiremos a width e height iniciais das imagens dos blocos e as
// armazenaremos nas variáveis

var blocoImagemLargura = 30;
var blocoImagemAltura = 30;

// 3. Agora, definiremos as coordenadas x e y iniciais para o personagem e as
// armazenaremos nas variáveis playerX e playerY.

var JogadorX = 10;
var JogadorY = 10;

// 4. Agora, definimos uma variável chamada playerObject. Essa variável será utilizada
// para armazenar o objeto da imagem do personagem.
var JogadorObjeto= "";
var BlocoImagemObjeto= "";

// 5. Agora, adicionaremos uma função chamada playerUpdate() para adicionar a
// imagem do personagem. Essa função enviará a imagem do jogador no
// canvas.

function jogadorAtualizar()
{
// ○ fabric: Esse será o nome da biblioteca que utilizamos.
// ○ Image: Isso diz que enviamos uma imagem.
// ○ fromURL: Esse contém a URL da imagem e a função para
// enviar imagens.
// ○ “player.png”: Essa é a imagem.
// ○ function(Img): Essa é a função que enviará player.png ao
// canvas.
// ■ Img: Esse é o objeto da imagem definida por padrão.
	fabric.Image.fromURL("player.png", function(Img) {
		JogadorObjeto = Img;

		JogadorObjeto.scaleToWidth(150);
		JogadorObjeto.scaleToHeight(140);
		JogadorObjeto.set({
	top:JogadorY,
	left:JogadorX
	});
	canvas.add(JogadorObjeto);

	});
}
// 6. Agora, adicionaremos uma função para adicionar as diferentes imagens de
// acordo com as teclas específicas pressionadas.
function novaImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
		BlocoImagemObjeto = Img;

		BlocoImagemObjeto.scaleToWidth(blocoImagemLargura);
		BlocoImagemObjeto.scaleToHeight(blocoImagemAltura);
		BlocoImagemObjeto.set({
	top:JogadorY,
	left:JogadorX
	});
	canvas.add(BlocoImagemObjeto);

	});

}




//1. Adicione o código addEventListner para a função keydown:
window.addEventListener("keydown", myKeyDown);
2. Adicione o código para a criação da função e do valor keyCode:
function myKeyDown(e)
{
	teclaPressionada = e.keyCode;
console.log(teclaPressionada);
//3. Adicione o código para a condição da tecla P pressionada:
if(e.shiftKey == true && teclaPressionada == '80')
{
	console.log("p e shift pressionadas juntas");
	blocoImagemLargura = blocoImagemLargura + 10;
	blocoImagemAltura = blocoImagemAltura + 10;
	document.getElementById("currentWidth").innerHTML = blocoImagemLargura;
	document.getElementById("currentHeight").innerHTML = blocoImagemAltura;	
}
//4. Adicione o código para a condição da tecla M pressionada:
if(e.shiftKey && teclaPressionada == '77')
{
	console.log("m e shift pressionadas juntas");
	blocoImagemLargura = blocoImagemLargura - 10;
	blocoImagemAltura = blocoImagemAltura - 10;
	document.getElementById("currentWidth").innerHTML = blocoImagemLargura;
	document.getElementById("currentHeight").innerHTML = blocoImagemAltura;
}
//5. Adicione o código a condição para chamar a função cima(),Baixo(),Esquerda(),Direita():
	if(teclaPressionada == '38')
	{
		up();
		console.log("cima");
	}
	if(teclaPressionada == '40')
	{
		down();
		console.log("baixo");
	}
	if(teclaPressionada == '37')
	{
		left();
		console.log("esquerda");
	}
	if(teclaPressionada == '39')
	{
		right();
		console.log("direita");
	}
	// 9. Adicione o código a condição para carregar novas imagens:
	if(teclaPressionada == '87')
	{
		novaImage('wall.jpg'); 
		console.log("w");
	}
	if(teclaPressionada == '71')
	{
		novaImage('ground.png'); 
		console.log("g");
	}
	if(teclaPressionada == '76')
	{
		novaImage('light_green.png'); 
		console.log("l");
	}
	if(teclaPressionada == '84')
	{
		novaImage('trunk.jpg'); 
		console.log("t");
	}
	if(teclaPressionada == '82')
	{
		novaImage('roof.jpg'); 
		console.log("r");
	}
	if(teclaPressionada == '89')
	{
		novaImage('yellow_wall.png'); 
		console.log("y");
	}
	if(teclaPressionada == '68')
	{
		novaImage('dark_green.png'); 
		console.log("d");
	}
	if(teclaPressionada == '85')
	{
		novaImage('unique.png'); 
		console.log("u");
	}
	if(teclaPressionada == '67')
	{
		novaImage('cloud.jpg'); 
		console.log("c");
	}
	if(teclaPressionada == '66')
	{
		novaImage('branco.png'); 
		console.log("b");
	}
	
}
function up()
{
	if(JogadorY >=0)
	{
		JogadorY = JogadorY - blocoImagemAltura;
		console.log("autura da imagem do bloco = " + blocoImagemAltura);
		console.log("Quando a tecla direcional Cima for pressionada, X =  " + JogadorX + " , Y = "+JogadorY);
		canvas.remove(JogadorObjeto);
		jogadorAtualizar();
	}
}

function down()
{
	if(JogadorY <=500)
	{
		JogadorY = JogadorY + blocoImagemAltura;
		console.log("altura da imagem do bloco = " + blocoImagemAltura);
		console.log("Quando a tecla direcional Baixo for pressionada, X =  " + JogadorX + " , Y = "+JogadorY);
		canvas.remove(JogadorObjeto);
		jogadorAtualizar();
	}
}

function left()
{
	if(JogadorX >0)
	{
		JogadorX = JogadorX - blocoImagemLargura;
		console.log("largura da imagem do bloco = " + blocoImagemLargura);
		console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + JogadorX + " , Y = "+JogadorY);
		canvas.remove(JogadorObjeto);
		jogadorAtualizar();
	}
}

function right()
{
	if(JogadorX <=850)
	{
		JogadorX = JogadorX + blocoImagemLargura;
		console.log("largura da imagem do bloco = " + blocoImagemLargura);
		console.log("Quando a tecla direcional Direita for pressionada, X =  " + JogadorX + " , Y = "+JogadorY);
		canvas.remove(JogadorObjeto);
		jogadorAtualizar();
	}
}
