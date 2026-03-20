// the list of my favorite singers stored as an object with name, song, genre, born, and hometown
const singers = [{
        name: "Taylor Swift",
        song: "Cruel Summer",
        genre: "Pop",
        born: "December 13, 1989",
        hometown: "Reading, Pennsylvania, USA",
        awards: "11 Grammy Awards, 34 Billboard Music Awards"
    },
    {
        name: "AR Rahman",
        song: "Tera Bina",
        genre: "Indian / Bollywood",
        born: "January 6, 1967",
        hometown: "Chennai, India",
        awards: "2 Academy Awards, 1 Grammy, 6 National Film Awards"
    },
    {
        name: "Sushin Shyam",
        song: "Cherathukal",
        genre: "Indian / Malayalam",
        born: "1992",
        hometown: "Kerala, India",
        awards: "Kerala State Film Award 2021"
    },
    {
        name: "Anirudh Ravichander",
        song: "Sirikkadhey",
        genre: "Indian / Tamil",
        born: "October 16, 1990",
        hometown: "Chennai, India",
        awards: "Filmfare Awards South, SIIMA Awards"
    },
    {
        name: "Sabrina Carpenter",
        song: "Espresso",
        genre: "Pop",
        born: "May 11, 1999",
        hometown: "Lehigh Valley, Pennsylvania, USA",
        awards: "Teen Choice Awards, Radio Disney Music Awards"
    },
    {
        name: "Ed Sheeran",
        song: "Perfect",
        genre: "Pop / Folk",
        born: "February 17, 1991",
        hometown: "Halifax, England",
        awards: "4 Grammy Awards, 6 Brit Awards"
    }
];


// This function adds the singers into table 
function loadSingers() {

    //find the empty tbody in the HTML
    var tableBody = document.getElementById("singerTable");

    // loop through each singer
    for (var i = 0; i < singers.length; i++) {

        var singer = singers[i];

        // Create a new table row
        var newRow = document.createElement("tr");

        // Fill that row with the singer's info
        newRow.innerHTML = "<td>" + singer.name + "</td>" +
            "<td>" + singer.song + "</td>" +
            "<td>" + singer.genre + "</td>" +
            "<td>" + singer.born + "</td>" +
            "<td>" + singer.hometown + "</td>";

        // Add the row to the table
        tableBody.appendChild(newRow);
    }
}


// When the pageload, it run the loadSingers function
window.onload = loadSingers;