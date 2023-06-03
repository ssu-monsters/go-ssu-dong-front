import * as MainSection from '@/components/MainSection';

export default function Home() {
  return (
    <>
      <div className="container">
        <MainSection.First />
        <MainSection.Second />
        <MainSection.Third />
      </div>

      <style jsx>{``}</style>
    </>
  );
}
