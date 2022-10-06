import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Test({
  data,
}: InferGetServerSidePropsType<GetServerSideProps>) {
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
  return {
    props: { data },
  };
};
