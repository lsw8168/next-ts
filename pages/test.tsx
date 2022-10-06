import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Test({
  data,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  console.log(process.env.NODE_ENV);
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <div>
      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
      <p>{data.name}</p>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`);
  const data = await res.json();
  return {
    props: { data },
  };
};
