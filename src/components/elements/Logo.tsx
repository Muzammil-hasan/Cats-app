import CatIcon from '../icons/CatIcon';

export default function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="inline-grid rounded-lg w-14 h-14 bg-text place-content-center">
        <CatIcon className="w-10 h-10 text-white" />
      </div>
      <p className="text-4xl font-bold font-accent">CatHi</p>
    </div>
  );
}
