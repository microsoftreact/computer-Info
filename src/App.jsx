import React, { useState } from "react";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(true);
  const [id, setId] = useState(0);
  const data = [
    {
      id: 1,
      title: "HP",
      text: `HP (Hewlett-Packard) kompyuterlar, Hewlett-Packard Company tomonidan ishlab chiqarilgan kompyuterlar va diger IT mahsulotlari markasidir. HP, kompyuterlardan serverlarga, printerlardan yazilimlarga qadar keng qamrovli mahsulotlar taklif etadi.HP kompyuterlarining turli modellari mavjud bo'lib, ular xizmat korxonalari, shaxsiy foydalanuvchilar, va korporativ mijozlar uchun mo'ljallangan.`,
      image: "hp.png",
    },
    {
      id: 2,
      title: "Acer",
      text: `Acer, Tayvan kompaniyasi bo'lib, kompyuterlar, noutbuklar, monoblok kompyuterlar, planshetlar, monitorlar, serverlar va boshqa IT mahsulotlarini ishlab chiqaradi. Acer kompyuterlari, har xil talablarga javob bera olish uchun keng xil kategoriyalarda joylashgan.`,
      image: "acer.png",
    },
    {
      id: 3,
      title: "Lenovo",
      text: `Lenovo, Xitoyda tashkil etilgan va global kompyuter va IT mahsulotlari ishlab chiqaruvchi korxonadur. Lenovo kompyuterlari, noutbuklari, ultrabuklari, stol kompyuterlari, planshetlari, serverlari va boshqa mahsulotlari orqali ko'plab turli IT mahsulotlarini taklif etadi.`,
      image: "lenovo.png",
    },
    {
      id: 4,
      title: "Asus",
      text: `Asus, Tayvanli bir korxona bo'lib, kompyuterlar, noutbuklar, planshetlar, matbuotlar, smartfonlar, monitorlar va boshqa elektronika mahsulotlarini ishlab chiqaradi. Asus kompyuterlari va mahsulotlari, yuqori sifat, innovatsiyalar va o'yinlarga mos tajribaga ega bo'lishi bilan mashhurdir.Asus noutbuklari, ZenBook, ROG (Republic of Gamers), VivoBook seriyalari va boshqa modellardan iborat.`,
      image: "asus.png",
    },
    {
      id: 5,
      title: "Microsoft",
      text: `Microsoft kompyuterlari ifodalovchi bir brend emas, balki Microsoft bir dastur ishlab chiqaruvchi va operatsion tizimlar (Windows) ishlab chiqaruvchi korporatsiyadir. Microsoftning Windows operatsion tizimi, ko'p kompyuterlarda dunyo bo'ylab qo'llaniladi.Microsoft, operatsion tizimlari Windows 10, Windows 11, Office dasturlari, Surface planshet va noutbuklari, Xbox o'yin konsollari kabi mahsulotlarini ishlab chiqaradi.`,
      image: "microsoft.png",
    },
  ];
  return (
    <div className="App">
      <nav>
        <h1>Computers Information</h1>
      </nav>
      {data.map((info, index) => {
        return (
          <div className="computers">
            <h2
              onClick={() => {
                setOpenModal(!openModal);
                setId(index);
              }}
            >
              {info.title}
            </h2>
          </div>
        );
      })}
      <div className={openModal ? "modal" : "modal hidden"}>
        <h1>{data[id].title}</h1>
        <img src={data[id].image} alt="" />
        <p>{data[id].text}</p>
        <button
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          Yopish
        </button>
      </div>

      <div className={openModal ? "overlay" : "overlay hidden"}></div>
    </div>
  );
}

export default App;
