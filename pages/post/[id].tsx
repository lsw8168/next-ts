import type { GetServerSideProps } from "next";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface DataProps {
  data: Data;
}

export default function Test({ data }: DataProps) {
  return (
    <div>
      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
      <p>{data.userId}</p>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
