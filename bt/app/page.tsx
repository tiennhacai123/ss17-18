import Breadcrumbs from '@/components/breadcrumbs';
import React from 'react';

export default function Page() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Posts', href: '/posts' },
    { label: 'Postss', href: '/postss/1' }, 
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />

    </>
  );
}
