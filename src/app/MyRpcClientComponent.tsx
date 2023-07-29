'use client';

import { api } from '@/utils/api';

// a Client Component that makes an RPC and displays the result

export default function MyRpcClientComponent(): JSX.Element {
  const name = api.example.hello.useQuery({ text: 'test' });

  if (name.data == undefined) {
    console.log('name.data undefined');
    return <p>did not work</p>;
  }
  console.log(`result.data is ${JSON.stringify(name.data)}`);

  return <p>Hello, {name.data?.greeting}, greetings from client component land!</p>;
}
