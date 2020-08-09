const convertToRupiah = (angka) => {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
        "Rp. " +
        rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
};

const promosition = () => {
    fetch("/data/data-promosition.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let cardPromo = "";
            data.forEach((menu) => {
                cardPromo += `<div class="card card-promo">
                <div class="animate-img">
                    <img src="${menu.gambar}" class="card-img-top img-fluid" alt="poster1">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${menu.judul}</h5>
                    <p class="card-text">${menu.desc}</p>
                    <p class="card-text"><small class="text-muted"><i class="fas fa-calendar-alt"></i>${menu.date}</small></p>
                </div>
            </div>`;
            });

            const promo = document.querySelector(".card-promo-container");
            promo.innerHTML = cardPromo;
        })
        .catch((err) => {
            console.log(`Sepertinya ada yang salah dengan ${err}`);
        });
};
promosition();

const favorite = () => {
    fetch("/data/data-favorite.json")
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Something went wrong on api server!");
            }
        })
        .then((data) => {
            let cardFavorite = "";
            data.forEach((menu) => {
                cardFavorite += `<div class="card card-favorite-item">
                <img src="${
                    menu.gambar
                }" class="card-img-top img-fluid favorite-img mx-auto d-block"
                    alt="Big Mac">
                <div class="card-body">
                    <h4 class="card-title">${menu.nama}</h4>
                    <p class="card-text">${menu.desc}</p>
                    <h4 class="card-title">${convertToRupiah(menu.harga)}</h4>
                </div>
            </div>`;
            });
            const favoriteMenu = document.querySelector(".card-favorite");
            favoriteMenu.innerHTML = cardFavorite;
        })
        .catch((error) => {
            console.error(error);
        });
};
favorite();

const breakfastMenu = () => {
    fetch("/data/data-breakfast.json")
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Something went wrong on api server!");
            }
        })
        .then((data) => {
            let breakfastMenu = "";
            data.forEach((menu) => {
                breakfastMenu += `<div class="card card-breakfast-item">
                <img src="${
                    menu.gambar
                }" class="card-img-top img-fluid breakfast-img mx-auto d-block"
                    alt="Big Mac">
                <div class="card-body">
                    <h4 class="card-title-breakfast">${menu.nama}</h4>
                    <p class="card-text-breakfast">${menu.desc}</p>
                    <h4 class="card-title-breakfast">${convertToRupiah(
                        menu.harga
                    )}</h4>
                </div>
            </div>`;
                const semuaMenu = document.querySelector(".card-breakfast");
                semuaMenu.innerHTML = breakfastMenu;
            });
        })
        .catch((error) => {
            console.error(error);
        });
};
breakfastMenu();

export default convertToRupiah;