// Подключение функционала
import { isMobile, bodyLockStatus, bodyLock, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Вызов окна поиска
function searchOpen() {
    let iconSearch = document.querySelector(".search-menu__button");
    if (iconSearch) {
        iconSearch.addEventListener("click", function (e) {
            if (bodyLockStatus) {
                bodyLock();
                document.documentElement.classList.add("search-open");
            }
        });
    };
}
searchOpen();

function searchClose() {
    let iconSearchClose = document.querySelector(".search-menu__close");
    if (iconSearchClose) {
        iconSearchClose.addEventListener("click", function (e) {
            bodyUnlock();
            document.documentElement.classList.remove("search-open");
        });
    };
}
searchClose();