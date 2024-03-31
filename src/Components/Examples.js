import React from "react";
import logo from "./Assets/4.png";
import examp from "./Assets/Activity Page.png";
import expn from "./Assets/experience.png";
export default function Examples() {
  let obj = [
    {
      id:1,
      heading: "Faculty with Over 13+ years Experience",
      text: "We have Faculty who have experience of more than 13+ Years in the field of IELTS and 4+ years in PTE. Achieved 8.5 Bands in IELTS & PTE. The methods and tools used for learning are unique which are prepared and modified regularly.",
      img: expn,
    },
    {
      id:2,
      heading: "Trusted by Over 1000+ Students",
      text: "IELTS is managed solely by IDP Australia and we are partners with them. Also, we are associate partners of Pearson PTE (Australia). We are recognized as the best IELTS institute and the No.1 Pte institute in the whole region.",
      img: logo,
    },
    {
      id:3,
      heading: "Certified Study and Visa Counsellor",
      text: "We are authorized from universities all around the world with PIER and ENZ certificates. Making us the best in the whole Kaithal region. We have immense knowledge in Visa related services. Currently, dealing in UK, USA, Australia and Canada.",
      img: examp,
    },
  ];
  return (
    <div className="container">
      <div className="examples-area flex">
        {obj.map((it) => ( 
          <div className="examples-card" key={it.id}>
            <img src={it.img} alt="" />
            <h4 className="card-text">{it.heading}</h4>
            <hr />
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
