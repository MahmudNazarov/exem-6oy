// const numbers = [4,12,1,8,3]
// let sum = 0;

// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const ul = document.querySelector("#movie__wrapper");
// const select = document.querySelector("#select");
// const btn = document.querySelector("#btn");


// function renderMovie (kino){
//     ul.innerHTML = "";
//     if(kino.length === 0){
//         ul.innerHTML = `
//         <span style="color:red;font-size:20px;" >Siz yozgan movie topilmadi</span>
//         `
//     }







//     kino.slice(0 , 20).forEach(objektlar => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//        <img style="width:214px; height:146px;" src="${objektlar.ImageURL}">
//        <span class="span">${objektlar.Title}</span>
//        <div class="year">${objektlar.imdb_rating} 
//        <span>${objektlar.movie_year}</span> <span>${objektlar.language}</span><button class="btn3">More Info</button></div>
       
//       `
//       li.className = "kino"
      
//       ul.append(li)  
//   })
// }

// renderMovie(movies)


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const inputQimati = input.value.toLowerCase().trim();
//     const filter = movies.filter((malumotlar) => {
//         return malumotlar.Title.toLowerCase().includes(inputQimati);
//     });
//     renderMovie(filter);
// });

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const inputQimat = input.value.toLowerCase();

//     const filterLangan = movies.filter(item => {
//         return item.Title.toLowerCase().includes(inputQimat)
//     })
//     renderMovie(filterLangan)
// });
// console.log(movies);



const form = document.querySelector("#form");
const input = document.querySelector("#input");
const ul = document.querySelector("#movie__wrapper");
const btn = document.querySelector("#btn");
const select = document.querySelector("#select");


console.log(movies);

function renderMovie(kino) {
    ul.innerHTML = "";
    if (kino.length === 0) {
        ul.innerHTML = `<span style="color:red;font-size:20px;">Siz yozgan movie topilmadi</span>`;
        return;
    }

    kino.slice(0, 20).forEach(objektlar => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img style="width:214px; height:146px;" src="${objektlar.ImageURL}">
            <span class="span">${objektlar.Title}</span>
            <div class="year">${objektlar.imdb_rating} 
                <span>${objektlar.movie_year}</span> 
                <span>${objektlar.language}</span>
                 <div class=""><button class="btn3">More Info</button></div>
            </div>
        `;
        li.className = "kino";
        ul.append(li);
    });
}


renderMovie(movies);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    searchMovie();
});


input.addEventListener("input", searchMovie);

select.addEventListener("change", searchMovie);

function searchMovie() {
    const inputQimati = input.value.toLowerCase().trim();
    let filter = movies.filter((malumotlar) => 
        malumotlar.Title?.toLowerCase().includes(inputQimati)
    );

    if (select.value === "A-Z") {
        filter.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (select.value === "Z-A") {
        filter.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    renderMovie(filter);
}



 












