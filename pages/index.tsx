import React, { Suspense } from "react";
import dynamic from "next/dynamic";
const DynamicMain = dynamic(() => import('../src/main'), {
  suspense: true,
  ssr: false
})

const IndexPage = ({}) => {
  return (
    <Suspense fallback={`Slowding...`}>
      <DynamicMain />
    </Suspense>
  );
};

export default IndexPage;
