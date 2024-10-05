window.onload = function () {
  const img = document.querySelector<HTMLImageElement>(
    "#container .imageContainer > img"
  ) as HTMLImageElement;

  const randomPhotos: string[] = [
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
  const randomButton =
    document.querySelector<HTMLButtonElement>(".randomButton");
  const sendButton = document.querySelector<HTMLButtonElement>(".sendButton");

  function initRandomImage() {
    const randomIndex: number = Math.floor(Math.random() * randomPhotos.length);
    if (img) {
      img.src = randomPhotos[randomIndex];
    }
  }

  randomButton?.addEventListener("click", () => {
    initRandomImage();
  });

  initRandomImage();

  sendButton?.addEventListener("click", () => {
    sendImgUrl();
  });

  async function sendImgUrl() {
    const today = new Date();
    const discordUrl: string = process.env.API_URL as string;

    const inputElement = document.getElementById(
      "urlInput"
    ) as HTMLInputElement;

    const nicknameinputElement = document.getElementById(
      "nicknameInput"
    ) as HTMLInputElement;
    const inputValue = inputElement?.value;
    const nicknameinputValue = nicknameinputElement?.value;

    if (nicknameinputValue.length > 30) {
      window.alert("닉네임의 길이는 30자 이하여야 합니다.");
      return;
    }

    if (!inputValue.length) {
      window.alert("URL을 입력해주세요");
      return;
    }

    if (randomPhotos.includes(inputValue)) {
      window.alert("이미 존재하는 이미지입니다");
      inputElement.value = "";
      return;
    }
    if (!inputValue.startsWith("https://")) {
      window.alert("이미지 형식만 입력 가능합니다");
      inputElement.value = "";
      return;
    }

    const data = {
      content: `닉네임 : ${nicknameinputValue}`,
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

    try {
      await fetch(discordUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.ok) {
          console.log(response.ok);
          window.alert("이미지 전송 성공!");
        } else {
          window.alert("이미지 전송 실패!");
        }
      });
    } catch (e: any) {
      console.error("오류 발생:", e);
      window.alert("이미지 전송 중 오류가 발생했습니다.");
    } finally {
      nicknameinputElement.value = "";
      inputElement.value = "";
    }
  }
};
