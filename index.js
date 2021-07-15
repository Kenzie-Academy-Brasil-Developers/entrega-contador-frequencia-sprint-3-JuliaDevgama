const letterCounts = {} 
const button = document.getElementById("countButton")

button.addEventListener('click', function(){
    let list = {}
    let typedText = document.getElementById('textInput').value
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 

    for(let i = 0; i < typedText.length; i++){
        let currentLetter = typedText[i]

        if(letterCounts[currentLetter] === undefined){
            letterCounts[currentLetter] = 1
        } else { 
            letterCounts[currentLetter]++; 
         }

    }

    for(let letter in letterCounts){
        const span = document.createElement('span')
        const textContent = `"${letter}":${letterCounts[letter]},`
        span.innerText = textContent
        const letters = document.getElementById('lettersDiv')
        letters.appendChild(span);
        letters.style.width = '50%'
        letters.style.height = '50px'
        letters.style.backgroundColor = 'lightgreen'
        letters.style.boxShadow = " 7px 4px 16px -1px #C7C7C7"
        letters.style.Color = 'black'
        letters.style.border = '2px solid gray'
        letters.style.marginTop = '20px'
        span.style.color = 'black'
    }
    words = typedText.split(/\s/);

    for(let i = 0; i < words.length; i++){
        const element = words[i]
        if(wordcount[element]===undefined) {
            wordcount[element] = 1
        } else {
            wordcount[element]++
        }
    }
})

        
    


