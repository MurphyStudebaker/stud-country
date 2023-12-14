export default function LineDance({ data }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl">{data.name}</h2>
      <p className="italic text-xl">
        Also danced to {data.alternatives.map((a) => " " + a + " & ")}
      </p>
      <ul className="flex flex-row justify-between py-6">
        <a href={data.tutorial}>🐴 Tutorial</a>
        <a href={data.stepSheet}>🌵 Step Sheet</a>
        <a href={data.recording}>🤠 Stud Country Version</a>
      </ul>
    </div>
  );
}
