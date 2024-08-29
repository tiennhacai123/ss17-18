'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const pathname = usePathname();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `${process.env.NEXT_PUBLIC_SITE_URL}${crumb.href}`, // Đảm bảo URL này chính xác
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="flex space-x-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              <Link href={crumb.href} className="text-blue-600 hover:underline">
                {crumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2 text-gray-500">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
