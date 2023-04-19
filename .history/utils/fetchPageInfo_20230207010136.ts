import { PageInfo } from "../typing";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();
  const PageInfo: PageInfo[] = data.PageInfo;

  //   console.log(socials);
  return PageInfo;
};
