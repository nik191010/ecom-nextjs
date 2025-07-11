import Best from '@/components/Best';
import Carousel from '@/components/Carousel';
import Latest from '@/components/Latest';
import MostSelled from '@/components/MostSelled';

export default async function Home() {
  return (
    <div className="flex flex-col gap-[5rem] md:gap-[7rem]">
      <Carousel />
      <Latest />
      <MostSelled />
      <Best />
    </div>
  );
}
