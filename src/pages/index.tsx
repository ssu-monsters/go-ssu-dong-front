import * as MainSection from '@/components/MainSection';
import { useEffect } from 'react';

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
