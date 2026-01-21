'use client';

import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { workspacesInfoContent } from '@/config/infoconfig';
import { useState } from 'react';

export default function WorkspacesPage() {
  const [workspaces] = useState([
    { id: '1', name: 'Main Workspace', description: 'Your primary workspace' },
    { id: '2', name: 'Secondary Workspace', description: 'Additional workspace for testing' }
  ]);

  return (
    <PageContainer
      pageTitle='Workspaces'
      pageDescription='Manage your workspaces and switch between them'
      infoContent={workspacesInfoContent}
    >
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>Your Workspaces</h3>
          <Button>
            <Plus className='mr-2 h-4 w-4' />
            New Workspace
          </Button>
        </div>
        <div className='grid gap-4'>
          {workspaces.map((ws) => (
            <Card key={ws.id} className='cursor-pointer hover:bg-accent transition-colors'>
              <CardHeader>
                <CardTitle>{ws.name}</CardTitle>
                <CardDescription>{ws.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
