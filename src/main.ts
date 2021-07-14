function hoge(): Promise<string> {
  return new Promise((_: Function, reject: Function) => {
    reject(new Error("hoge"));
  });
}

async function main() {
  const x = await hoge()
    .then((v) => console.log(v))
    .catch((e: Error) => console.error(e)); // catchがないとUnhandledPromiseRejectionWarningが出る
  console.log(x);
}

main();
