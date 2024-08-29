import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { idproduct: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const idProduct = params.idproduct
 
  // fetch data
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${idProduct}`).then((res) => res.json())
  console.log("chi tiet san pham", user);
  
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title:user.name,
    description:"san pham tot, ben , dep",
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}
 
export default function Page({ params }: Props) {
  return (
     <div>hello</div>
  )
}