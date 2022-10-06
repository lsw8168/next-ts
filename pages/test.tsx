import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Test({
  data,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();

  return {
    props: { data },
  };
};
