export default function LoadingProjects() {
  return (
    <section className="flex flex-wrap flex-col items-center w-full">
      <div className="flex flex-wrap justify-center w-3/4 gap-2">
        {Array.from({ length: 6 }).map((_e, i) => (
          <div
            key={`skeletonCard${i}`}
            className={`animate-pulse
            flex flex-wrap justify-center p-2 bg-white
           border border-solid border-black rounded h-[300px] w-[300px]`}
          />
        ))}
      </div>
    </section>
  );
}
