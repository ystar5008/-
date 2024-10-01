"use strict";
window.onload = function () {
    var img = document.querySelector("#container .imageContainer > img");
    var randomPhotos = [
        "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201912/14/07712b9e-e451-49c7-a65c-fb94b6dcda0b.jpg",
        "https://www.newsflix.co.kr/news/photo/202210/10542_9844_055.png",
        "https://thumb.mt.co.kr/06/2024/02/2024020118023374242_1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2le5UTcCIPqlSyiye800NrGZoRt-RQOKkCw&s",
        "https://img.khan.co.kr/news/2023/05/24/news-p.v1.20230524.0f8fd743d4c34aeb849a6791b8f40f5f_P1.jpg",
        "https://ojsfile.ohmynews.com/STD_IMG_FILE/2024/0131/IE003255767_STD.jpg",
        "https://monthly.chosun.com/up_fd/Mdaily/2019-05/bimg_thumb/%EB%A7%88%EB%8F%99%EC%84%9D.jpg",
        "https://cdn.sisaweek.com/news/photo/202404/214012_218525_2610.jpg",
        "https://img.seoul.co.kr/img/upload/2024/09/16/SSC_20240916173651_O2.png",
        "https://cdn.news2day.co.kr/data2/content/image/2023/07/06/.cache/512/20230706500077.png",
        "https://res.heraldm.com/content/image/2022/06/03/20220603000639_0.jpg",
        "https://blog.kakaocdn.net/dn/bJuO9x/btqDnxmhE18/FHYdlDahOwxtXaXBlNZD2K/img.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiadvBoh9esUgJS6WGDTZKmN65tFAJ6ZiVSQ&s",
    ];
    var button = document.querySelector(".randomButton");
    function initRandomImage() {
        var randomIndex = Math.floor(Math.random() * randomPhotos.length);
        if (img) {
            img.src = randomPhotos[randomIndex];
            console.log("이미지변경");
        }
    }
    button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
        initRandomImage();
    });
    initRandomImage();
};
