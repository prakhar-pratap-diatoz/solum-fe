// import { Forbidden } from "@e2e-design-system/e2e-design";
// import { useSelector } from "react-redux";
import React, { Suspense } from "react";

const PrivateRoute = ({ component, allowedPermission = [] }: any) => {
  // const user = useSelector(({ auth: { user } }: any) => user);
  // if (!user?.permissions?.length) return null;

  // if (!user) return null;

  // const hasPermission =
  //   allowedPermission.length === 0 ||
  //   allowedPermission.some((permission: any) =>
  //     user?.permissions?.includes(permission)
  //   );
  const hasPermission: boolean = true;

  if (!hasPermission)
    return <div>You are not having permissions to access this page.</div>;

  return <Suspense fallback={<></>}>{component}</Suspense>;
};

export default PrivateRoute;
