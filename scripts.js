//function to create the dom elements

function createNode(element) {

    return document.createElement(element);
}

//function to append the child to the parent - parameters (parent, element to be added)

function append (parent, el){
    return parent.appendChild(el);
}

//create 2 variables to get the HTML elements

const row = document.getElementById("authors");


var pageCounter = '1';
var url = 'https://randomuser.me/api/?page='+pageCounter+'&results=6';

function loadMore() {
    
    pageCounter = parseInt(pageCounter) + 1;
    //var pageCounter = toString(page);
    console.log(pageCounter);
    //return pageCounter;
    var url = 'https://randomuser.me/api/?page='+pageCounter+'&results=6';
    getResults();
}


function getResults(){
//fetch api - process the data in Json format
fetch(url)
.then((resp) => resp.json()) // transfer the data to json
.then(function(data) {
    let authors = data.results;

   

    // use maps to create an array of the results, //to avoid adding let everytime use a comma
    return authors.map(function(author) {
        let col = createNode('div'); //author name
        col.setAttribute("class", "col-md-4");

        let card = createNode('div'); 
        card.setAttribute("class", "card mb-4 shadow-sm");
         
        let img = createNode('img');
        img.setAttribute("class", "img-responsive");

        let cardBody = createNode('div'); 
        cardBody.setAttribute("class", "card-body");

        let cardText = createNode('div'); 
        cardText.setAttribute("class", "card-text");

        img.src = author.picture.large;// this is found in the api

        cardText.textContent=`${author.name.first} ${author.name.last}`; //string literal


        //use the append function
        append(card,img); // append img into card
        append(card,cardBody) //append cardBody into card
        append(cardBody,cardText) //append cardText into cardBody
        append(col, card) // append col into row
        append(row, col) // append col into row

    });

}).catch(function(error){
 console.log(error);
});

};


getResults();


//load more data function

