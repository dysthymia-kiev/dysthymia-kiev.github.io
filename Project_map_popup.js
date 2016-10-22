/**
 * Created by anton on 17.07.16.
 */
var link = document.querySelector(".img_map");
var popup = document.querySelector(".popup_map");
var close = document.querySelector(".map_close");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("popup_map_show");
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("popup_map_show");
});