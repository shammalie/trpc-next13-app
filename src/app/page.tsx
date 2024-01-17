'use client';

import { ProfileForm } from '@/components/ui/custom/forms/profile-form';
import Flow from '@/components/ui/custom/network-diagrams';

export default function homePage() {
  return (
    <div className="pt-8 gap-5">
      <div className="flex flex-row justify-between items-center">
        <div className="flex mb-4 w-full gap-4">
          <div className="w-1/3">
            <ProfileForm />
          </div>
          <div className="w-2/3 h-[300px]">
            <Flow />
          </div>
        </div>
      </div>
    </div>
  );
}
