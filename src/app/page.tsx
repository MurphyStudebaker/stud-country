import Image from "next/image";
import LineDance from "../../components/LineDance";
export default function Home() {
  const data = [
    {
      name: "After Party",
      tutorial: "",
      difficulty: "easy",
      alternatives: ["Footloose", "Sittin' on Go"],
    },
  ];

  return (
    <div className="grid grid-cols-8 min-h-screen min-w-full">
      <header className="col-start-2 col-span-6  lg:col-span-4 lg:col-start-3">
        <img src="https://freight.cargo.site/w/1500/q/75/i/c954cbf85c8be0af5969c81990b2263d4068d97a14d0c4349ac3da83185caa06/Stud-Country-Web-Texture-Bright2x.png" />
        <h1> The (unofficial) Stud Country Practice Guide</h1>
        <p>
          {" "}
          See Also: <a href="">Line Dance Step Terms</a> &{" "}
          <a href="">Introduction to 2-Stepping</a>
        </p>
      </header>
      <main className="col-start-2 col-span-6 lg:col-span-4 lg:col-start-3 flex flex-col min-h-full justify-between">
        <ul>
          {data.map((d) => (
            <LineDance data={d} />
          ))}
        </ul>
      </main>
      <footer className="col-start-2 col-span-6  lg:col-span-4 lg:col-start-3">
        made with 🤠🏳️‍🌈 by <a href="">murphy</a>
      </footer>
    </div>
  );
}
