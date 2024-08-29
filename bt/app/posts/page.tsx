import React from 'react'
import Image from 'next/image'
interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const posts: Post[] = [
  { id: 1, title: 'Vandal Chaos', thumbnailUrl: 'https://valorantstrike.com/wp-content/uploads/Valorant-Prelude-to-Chaos-Collection-Vandal-Blue.jpg' },
  { id: 2, title: 'Vandal Kuronami', thumbnailUrl: 'https://valorantstrike.com/wp-content/uploads/Valorant-Kuronami-Collection-Vandal-Purple.jpg' },
  { id: 3, title: 'Vandal Prime', thumbnailUrl: 'https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Prime-Vandal-Blue-Variant-2.jpg' },
  { id: 4, title: 'Vandal Sentinels of Light', thumbnailUrl: 'https://valorantstrike.com/wp-content/uploads/2021/07/Valorant-Sentinels-of-Light-Collection-Vandal-HD.jpg' },
  { id: 5, title: 'Vandal Glitchpop', thumbnailUrl: 'https://valorantstrike.com/wp-content/uploads/2021/02/Valorant-Glitchpop-Collection-Vandal-Gold-Variant.jpg' },
  { id: 6, title: 'Vandal Gaia Vengeance', thumbnailUrl: 'https://valorantstrike.com/wp-content/uploads/Valorant-Gaia_s-Vengeance-Collection-Vandal-Blue.jpg' },
];

import type { Metadata } from 'next'
 
// Static metadata là metadata tĩnh dùng để fix cứng trang 
export const metadata: Metadata = {
  title: 'Danh sách bài viết',
}
 
// Dynamic metadata 
//là metadata động hay dùng để khi tìm kiếm id 
// export async function generateMetadata({  }) {
//   return {
//     title: 'Danh sách bài viết',
//     description: 'Trang này hiển thị danh sách các bài viết với các hình ảnh kèm theo.',
//     keywords: 'bài viết, danh sách, hình ảnh, Vandal',
//   }
// }

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Danh sách bài viết</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((item) => (
          <ul key={item.id} className="border rounded-lg p-2">
            <li>
                <Image 
                src={item.thumbnailUrl} 
                alt={item.title} 
                className="w-full h-40 object-cover rounded-md" 
                width={300} 
                height={160}  
                layout="responsive"  
                loading="lazy"  
                />
            </li>
            <li className="font-semibold mb-2 text-center">{item.title}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
