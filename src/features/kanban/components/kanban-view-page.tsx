import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';

export default function KanbanViewPage() {
  return (
    <PageContainer>
      <div className='space-y-4'>
        <Heading
          title='Kanban'
          description='Manage your tasks in a Kanban board.'
        />
        <div className='flex h-full items-center justify-center rounded-md border border-dashed p-8'>
          <p className='text-muted-foreground text-sm'>
            Kanban feature is currently under construction.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
