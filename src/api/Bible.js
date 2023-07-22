const baseURL = "api.scripture.api.bible"
const API_KEY = '5656558ede273b4cc2dd9dc6a8aa3250'
const BIBLE_ID = '06125adad2d5898a-01'
const getBooksUrl = `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/books?include-chapters=true&include-chapters-and-sections=true`
const tempPassage = `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/passages/MAT.1?content-type=json&include-notes=false&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`

const testURL = `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=`

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
    const BOOK_NUMBER = (Math.random() * 66).toFixed(0) - 1
    const BOOK_CHAPTERS = bible[BOOK_NUMBER].chapters;
    console.log(BOOK_CHAPTERS)
    console.log("BOOK NUMBER: " + BOOK_NUMBER)
    const CHAPTER_NUMBER = (Math.random() * (BOOK_CHAPTERS.length)).toFixed(0)
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
        .then(json => {
            console.log(json.data)                              // verses are not correct fix formatJsonData
            setPassage(json.data.reference)
            setPassageVerse(formatJsonData(json.data.content))
        });
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
                        verse: arr.length + 1,
                        text: content[i].items[j].text
                    }
                );
            }
        }
    }

    return arr;
}




export { getBible }
