const myPromise = (evt) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(evt);
        }, 2000);
    });
};

(async function () {
    try {
        await myPromise();
        await myPromise(
            document.querySelector(".loader").classList.add("fadeOut")
        );
        myPromise(
            document.getElementById("preloader").classList.add("hidden"),
            document.getElementById("content").classList.remove("hidden")
        )
    } catch (error) {
        console.log(error)
    }
}())