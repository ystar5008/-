"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        "https://static.news.zumst.com/images/111/2019/12/18/79e418a8ae3b4e309dcead50f1634661.jpg",
        "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2022%2F11%2Fdon-lee-the-roundup-no-way-out-filming-over-new-stills-revealed-ft.jpg?w=960&cbr=1&q=90&fit=max",
        "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2023%2F06%2Fma-dong-seoks-favorite-quotes-from-himself-18-01.jpeg?q=75&w=800&cbr=1&fit=max",
        "https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20230428174713096913b60030fa212113127174.jpg",
        "https://flexible.img.hani.co.kr/flexible/normal/640/427/imgdb/original/2024/0416/20240416501721.jpg",
        "https://img1.daumcdn.net/thumb/R1280x0/?fname=https://t1.daumcdn.net/brunch/service/user/cbly/image/rQwpJ_3MkxoInwX4tPXmlhFX4aA.png",
        "https://i.ytimg.com/vi/pQUFCD45Qcw/maxresdefault.jpg",
        "https://static.news.zumst.com/images/29/2019/05/02/268d1ad573cb44709211bcf2f942bf69.jpg",
    ];
    var randomButton = document.querySelector(".randomButton");
    var sendButton = document.querySelector(".sendButton");
    function initRandomImage() {
        var randomIndex = Math.floor(Math.random() * randomPhotos.length);
        if (img) {
            img.src = randomPhotos[randomIndex];
        }
    }
    randomButton === null || randomButton === void 0 ? void 0 : randomButton.addEventListener("click", function () {
        initRandomImage();
    });
    initRandomImage();
    sendButton === null || sendButton === void 0 ? void 0 : sendButton.addEventListener("click", function () {
        sendImgUrl();
    });
    function sendImgUrl() {
        return __awaiter(this, void 0, void 0, function () {
            var today, discordUrl, inputElement, nicknameinputElement, inputValue, nicknameinputValue, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        today = new Date();
                        discordUrl = process.env.API_URL;
                        inputElement = document.getElementById("urlInput");
                        nicknameinputElement = document.getElementById("nicknameInput");
                        inputValue = inputElement === null || inputElement === void 0 ? void 0 : inputElement.value;
                        nicknameinputValue = nicknameinputElement === null || nicknameinputElement === void 0 ? void 0 : nicknameinputElement.value;
                        if (nicknameinputValue.length > 30) {
                            window.alert("닉네임의 길이는 30자 이하여야 합니다.");
                            return [2 /*return*/];
                        }
                        if (!inputValue.length) {
                            window.alert("URL을 입력해주세요");
                            return [2 /*return*/];
                        }
                        if (randomPhotos.includes(inputValue)) {
                            window.alert("이미 존재하는 이미지입니다");
                            inputElement.value = "";
                            return [2 /*return*/];
                        }
                        if (!inputValue.startsWith("https://")) {
                            window.alert("이미지 형식만 입력 가능합니다");
                            inputElement.value = "";
                            return [2 /*return*/];
                        }
                        data = {
                            content: "\uB2C9\uB124\uC784 : ".concat(nicknameinputValue),
                            embeds: [
                                {
                                    footer: {
                                        text: "전송 시간",
                                    },
                                    timestamp: today,
                                    image: {
                                        url: inputValue,
                                    },
                                },
                            ],
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, fetch(discordUrl, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(data),
                            }).then(function (response) {
                                if (response.ok) {
                                    console.log(response.ok);
                                    window.alert("이미지 전송 성공!");
                                }
                                else {
                                    window.alert("이미지 전송 실패!");
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        console.error("오류 발생:", e_1);
                        window.alert("이미지 전송 중 오류가 발생했습니다.");
                        return [3 /*break*/, 5];
                    case 4:
                        nicknameinputElement.value = "";
                        inputElement.value = "";
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
};
