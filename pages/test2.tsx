import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Test({
  data,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  console.log(data);
  return (
    <div>
      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
      <p>{data.id}</p>
      <p>{data.userId}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const data = await res.json();
  return {
    props: { data },
  };
};
