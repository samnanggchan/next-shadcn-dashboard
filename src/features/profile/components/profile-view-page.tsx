import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';

export default function ProfileViewPage() {
  return (
    <PageContainer>
      <div className='space-y-4'>
        <Heading title='Profile' description='Manage your profile settings.' />
        <div className='flex h-full items-center justify-center rounded-md border border-dashed p-8'>
          <p className='text-muted-foreground text-sm'>
            Profile feature is currently under construction.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
