import { cache } from 'react';

export const Getcategories = cache(async () => {
try {

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-categories`
    ,{next:{revalidate:0}}
  );
  const data = await res.json();
  console.log('data: ', data);
  return data;
}
catch(err) {
  console.log('err: ', err);

}
});