const baseURL = "api.scripture.api.bible"
const API_KEY = '5656558ede273b4cc2dd9dc6a8aa3250'
const BIBLE_ID = '06125adad2d5898a-01'
const getBooksUrl = `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/books?include-chapters=true&include-chapters-and-sections=true`

function getBible (setPassage, setPassageVerse) {

    fetch(getBooksUrl, {
        method: 'GET',
        headers: {
            'api-key': API_KEY
        }
    })
        .then(response => response.json())
        .then(json => getRandomBookAndChapterID(json.data))
        .then(id => getPassage(id, setPassage, setPassageVerse))
}     


/**
 * Randomly generates numbers to choose a book and chapter.
 * 
 * @param {array of books} bible 
 * @returns A String:   ID used to fetch the passage.
 */
function getRandomBookAndChapterID(bible){
    console.log(bible)
    const BOOK_NUMBER = getRandomInt(66)
    const BOOK_CHAPTERS = bible[BOOK_NUMBER].chapters;
    console.log(BOOK_CHAPTERS)
    console.log("BOOK NUMBER: " + BOOK_NUMBER)
    const CHAPTER_NUMBER = getRandomInt(BOOK_CHAPTERS.length)
    console.log("CHAPTER NUMBER: " + CHAPTER_NUMBER)
    const CHAPTER_ID = BOOK_CHAPTERS[CHAPTER_NUMBER].id
    return CHAPTER_ID;
}


/**
 * Fetches for the actual passage from ID.
 * 
 * @param {string} ID 
 * @param {state function} setPassage 
 * @param {state function} setPassageVerse 
 */
function getPassage(ID, setPassage, setPassageVerse) {
    fetch(`https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/passages/${ID}?content-type=json&include-notes=false&include-titles=false&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`,
        {
            method: 'GET',
            headers: {
                'api-key': API_KEY
            }
        }
    )
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
                console.log(data)                 
                setPassage(data.reference)
                setPassageVerse(fixJsonData(formatJsonData(data.content)))
        })     
}


/**
 * Formats the verses into an array.
 * @param {array} verses 
 */
function formatJsonData(content) {

    const arr = [];
    for (let i = 1; i < content.length; i++){
        for(let j = 1; j < content[i].items.length; j++){
            if(j % 2 !== 0){
                arr.push(
                    {
                        text: content[i].items[j].text,
                        id: content[i].items[j].attrs.verseId
                    }
                );
                
            }
        }
    }

    return arr;
}


/**
 * Fixes the Data from fetch API to link the same verses together.
 * @param {arr} arr 
 * @returns result: array of verse objects.
 */
function fixJsonData(arr){
    const result = [];

    console.log(arr)

    for (let i = 0; i < arr.length; i++){
        if(i > 0){
            
            if(result[result.length-1].id === arr[i].id){
                result[result.length-1].text += arr[i].text
            }else{
                result.push(arr[i])
                result[result.length - 1].verse = result.length;
            }
        }else{
            result.push(arr[i])
            result[result.length - 1].verse = result.length;
        }
    }

    console.log(result)
    return result;
}


/* UTILITY FUNCTION */
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

export { getBible }
