'use client' 
import Breadcrumbs from '@/components/breadcrumbs'; // Import component Breadcrumbs
import { usePathname } from 'next/navigation';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Posts', href: '/posts' },
  { label: 'Post Title', href: '/postss/1' },
];
export default function PostPage() {
       
  return (
    <div className="p-4">
      <Breadcrumbs breadcrumbs={breadcrumbs} /> {/* Tích hợp Breadcrumbs */}
      <h1 className="text-xl font-bold mb-4">Chi tiết bài viết</h1>
      
      {/* Nội dung chi tiết bài viết */}
    </div>
  );
}
