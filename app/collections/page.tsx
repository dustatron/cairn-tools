import { CollectionView } from "./CollectionView";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>Collections</h1>
      <div className="w-full">
        <CollectionView />
      </div>
    </div>
  );
}
