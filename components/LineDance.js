export default function LineDance({ data }) {
  return (
    <li className="flex flex-col rounded">
      <h2 className="font-bold text-lg">{data.name}</h2>
      <p>Also danced to {data.alternatives.map((a) => " " + a + " & ")}</p>
      <ul className="flex flex-row justify-between">
        <a href={data.tutorial}>🐴 Tutorial</a>
        <a href={data.stepSheet}>🌵 Step Sheet</a>
        <a href={data.recording}>🤠 Stud Country Version</a>
      </ul>
    </li>
  );
}
