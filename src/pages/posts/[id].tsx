import dayjs from "dayjs";

export async function getStaticPaths() {
  const check = dayjs("15-03-2023 15:50:00", "DD-MM-YYYY HH:mm:ss").valueOf();
  const arr = [{ params: { id: "1" } }, { params: { id: "2" } }];

  if (dayjs().valueOf() > check) {
    arr.push({ params: { id: "3" } });
  }
  if (arr)
    return {
      paths: arr,
      fallback: false,
    };
}

export async function getStaticProps(context: any) {
  return {
    // Passed to the page component as props
    props: { post: context.params },
    revalidate: 5,
  };
}

export default function Post(props: any) {
  console.log(props.post);
  return <div>{JSON.stringify(props.post)}</div>;
}
