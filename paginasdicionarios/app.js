    function searchWord() {
            let word = document.getElementById('search').value.toLowerCase();
            let dictionary = {
                "flynga": "./paginasdicionarios/flynga.html",
                "flanga": "./paginasdicionarios/flanga.html",
				"flungo": "flungo.html",
				"flungonews": "flungonews.html",
				"flynga": "flynga.html",
				"flyngaaua": "flyngaaua.html",
				"flyngacity": "flyngacity.html",
				"flyngaland": "flyngaland.html",
				"flynganews": "flynganews.html",
				"flyngauau": ".flyngauau.html",
				"flyngopolis": "flyngopolis.html",
				"flyngues": "flyngues.html",
				"gostavo": "gostavo.html",
				"icaro": "icaro.html",
				"icarosmilk": "icarosmilk.html",
				"igor": "igor.html",
				"kagueinakama": "kagueinakama.html",
				"milk": "milk.html",
				"premilk": "premilk.html",
				"titakonakama": "titakonakama.html"
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