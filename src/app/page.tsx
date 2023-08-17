import Flow from '@/components/ui/custom/network-diagrams';
import { ModeToggle } from '@/components/ui/custom/theme-toggle';

export default function homePage() {
  return (
    <div className="flex flex-col w-[700px] m-auto pt-8 gap-5">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-lg">Home page</h1>
        <div>
          <ModeToggle />
        </div>
      </div>
      <div className="flex rounded-md border border-border shadow-sm m-15 w-100% h-[800px] p-1">
        <Flow />
      </div>
    </div>
  );
}
