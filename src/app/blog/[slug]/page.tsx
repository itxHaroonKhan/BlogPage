import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// // PortableText custom components
// const components = {
//   block: {
//     h1: ({ children }: any) => <h1 className="text-3xl font-bold">{children}</h1>,
//     h2: ({ children }: any) => <h2 className="text-2xl font-semibold">{children}</h2>,
//     normal: ({ children }: any) => <p className="text-lg leading-relaxed">{children}</p>,
//   },
//   marks: {
//     link: ({ children, value }: any) => (
//       <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//         {children}
//       </a>
//     ),
//   },
// };

export default async function BlogPost({ params }: { params: { slug: string } }) {

  const blog = await client.fetch(
    `*[_type == "back" && slug.current == $slug][0]{
      title,
      "image": image.asset->url,
      author->{
        name,
        "authorImage": image.asset->url
      },
      content,
      publishedAt
    }`,
    { slug: params.slug }
  );

  if (!blog) {
    return <h1 className="text-center text-xl font-semibold">Blog not found</h1>;
  }

  return (
    <article className="px-6 py-8 max-w-4xl mx-auto">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{blog.title}</h1>

      {/* Blog Image */}
      <Image src={blog.image} alt={blog.title} 
        width={1200} height={600}
       className="rounded-lg w-full mb-6" />

      {/* Author Section */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={blog.author.authorImage}
          alt={blog.author.name}
          width={50}
          height={50}
          className="w-20 h-20 rounded-full"
        />
        <p className="text-lg font-medium text-gray-800 dark:text-gray-300">{blog.author.name}</p>
      </div>

      {/* Publish Date */}
      <p className="text-sm text-gray-500 mb-4">
        Published on: {new Date(blog.publishedAt).toLocaleDateString()}
      </p>

      {/* Blog Content */}
      <div className="prose max-w-none dark:prose-invert">
        <PortableText value={blog.content}  />
        {/* components={components} */}
      </div>
    </article>
  );
}
