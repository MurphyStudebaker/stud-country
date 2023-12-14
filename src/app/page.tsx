import Image from "next/image";
import LineDance from "../../components/LineDance";
import Collection from "../../components/Collection";

export default function Home() {
  const data = [
    {
      name: "Slappin' Leather",
      tutorial: "",
      difficulty: "easy",
      alternatives: ["Footloose", "Sittin' on Go"],
    },
  ];

  return (
    <div className="grid grid-cols-8 min-h-screen min-w-full">
      <header className="col-start-2 col-span-6  lg:col-span-4 lg:col-start-3 py-8">
        <img src="https://freight.cargo.site/w/1500/q/75/i/c954cbf85c8be0af5969c81990b2263d4068d97a14d0c4349ac3da83185caa06/Stud-Country-Web-Texture-Bright2x.png" />
        <h1 className="text-4xl text-center">
          {" "}
          the (unofficial) practice guide
        </h1>
      </header>
      <main className="col-start-2 col-span-6 lg:col-span-4 lg:col-start-3 flex flex-col min-h-full justify-between">
        <Collection title={"Start Here"} data={data} />
        <Collection title={"Stud Favorites"} data={data} />
        <section>
          {data.map((d, i) => (
            <LineDance key={i} data={d} />
          ))}
        </section>
      </main>
      <footer className="col-start-2 col-span-6  lg:col-span-4 lg:col-start-3">
        made with 🤠🏳️‍🌈 by <a href="">murphy</a>
      </footer>
    </div>
  );
}
