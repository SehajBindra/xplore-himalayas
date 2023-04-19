"use-client";

import Link from "next/link";

function ClientSideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return (
    <div>
      <Link href={route}>{children}</Link>
    </div>
  );
}

export default ClientSideRoute;
