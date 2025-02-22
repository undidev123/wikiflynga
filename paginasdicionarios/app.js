    function searchWord() {
            let word = document.getElementById('search').value.toLowerCase();
            let dictionary = {
                "flynga": "emdesenvolvimento.html",
                "flanga": "emdesenvolvimento.html",
				"flungo": "emdesenvolvimento.html",
				"flungonews": "flungonews.html",
				"flynga": "emdesenvolvimento.html",
				"flyngaaua": "emdesenvolvimento.html",
				"flyngacity": "flyngacity.html",
				"flyngaland": "emdesenvolvimento.html",
				"flynganews": "flynganews.html",
				"flyngauau": "emdesenvolvimento.html",
				"flyngopolis": "emdesenvolvimento.html",
				"flyngues": "emdesenvolvimento.html",
				"gostavo": "emdesenvolvimento.html",
				"icaro": "emdesenvolvimento.html",
				"icarosmilk": "emdesenvolvimento.html",
				"igor": "emdesenvolvimento.html",
				"kaguei nakama": "kagueinakama.html",
				"alan delas": "kagueinakama.html",
				"milk": "emdesenvolvimento.html",
				"premilk": "emdesenvolvimento.html",
				"titakonakama": "titakonakama.html",
				"vizinhos brincantes": "vizinhosbrincantes.html"
            };
            
            if (dictionary[word]) {
                window.location.href = dictionary[word];
            } else {
                alert("Palavra não encontrada no dicionário.");
            }
        }
		
	let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}