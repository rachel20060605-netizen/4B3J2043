
// 網頁載入完成後執行
document.addEventListener("DOMContentLoaded", function () {

    // 歡迎訊息
    console.log("Welcome to Cinnamoroll's World! ♡");

    // 點擊導覽列平滑移動
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 點擊大耳狗圖片
    const cinnamorollImage = document.querySelector(".hero img");

    if (cinnamorollImage) {
        cinnamorollImage.style.cursor = "pointer";

        cinnamorollImage.addEventListener("click", function () {
            alert("Hello！我是大耳狗 Cinnamoroll ♡");
        });
    }

    // 卡片互動效果
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "translateY(0)";
        });

    });

});
