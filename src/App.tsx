import { useEffect, useState } from "react";
import "./App.css";
import { DateTime } from "luxon";
import Class from "./Class";

export function parseIsoDate(
  value: string | Date | undefined,
  zone: string | undefined = "Asia/Tokyo"
): Date | undefined {
  if (!value) {
    return undefined;
  }
  if (value instanceof Date) {
    return value;
  }
  let dateTime;
  if (zone) {
    dateTime = DateTime.fromISO(value, { zone });
  } else {
    dateTime = DateTime.fromISO(value);
  }
  let date: Date | undefined = dateTime.toJSDate();
  // if (!isValidDate(date)) {
  //   events.warn("util", `Invalid Date value:${JSON.stringify(value)}`);
  //   date = undefined;
  // }
  return date;
}
/////// type ////////////
export type Category = "政治" | "カルチャー";
export type CategoryMapping = {
  [categoryName: string]: {
    code: string;
    sub_code: string;
  };
};

const demoCategory: CategoryMapping = {
  "政治": { code: "12345678", sub_code: "pol" },
  "カルチャー": { code: "87654321", sub_code: "ent" },
  "社会": { code: "12345678", sub_code: "pol" },
};
console.log(demoCategory);

function App() {
  ////// 戻り値の型を動的に設定 ////////////
  // const dynamic = (arg: T): T => {

  // }

  const tagTitle = "社会"
  const categoryMapping = {
    'カルチャー': { sub_code: '', code: '1000000' },
    '社会': { sub_code: '', code: '14000000' },
    '経済': { sub_code: '', code: '4000000' },
    '国際': { sub_code: '', code: '90000000' },
    'ライフ': { sub_code: '', code: '30000000' },
  }

  const result = categoryMapping[tagTitle];
  console.log("result: ", result);
  
  // const categoryMappingKeys = Object.keys(categoryMapping);
  // console.log("keys: ", categoryMappingKeys);
  // const categoryData = categoryMappingKeys.find(category => category === tagTitle);
  // console.log("categoryData: ", categoryData);
  



  ////// Object.keys ///////////////
  const obj = {
    "3c2ca35eb8fb41b59e7239b1c44e7130": ["sample", "foo"],
  };
  console.log(
    "obj.3c2ca35eb8fb41b59e7239b1c44e7130: ",
    obj["3c2ca35eb8fb41b59e7239b1c44e7130"]
  );

  /////// 非同期処理（DogAPI）/////////
  const [dog, setDog] = useState();
  const getDog = () => {
    console.log("getDog");

    try {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
          console.log("data: ", data);
          setDog(data);
          return data;
        });
    } catch (err) {
      console.log("err: ", err);
    }
  };

  useEffect(() => {
    // getDog();
    let result;
    const asyncFunc = async () => {
      const data = await getDog();
      // return result
      result = data;
    };
    console.log("こんにちは");
    console.log("result", result);
  }, []);
  console.log("dog", dog);

  /////////// クラス /////////////////
  // class Sample extends Class {
  //   sample() {
  //     console.log("sample");
  //   }

  //   // override
  //   getRssFileName(): string {
  //     console.log("overridden");
  //     return "overridden";
  //   }
  // }

  // const demo = new Class();
  // demo.getRssFileName();
  // const sample = "2022-03-15T16:42+0900";
  // const result = parseIsoDate(sample);
  // console.log(result);

  /////////// luxon ////////////////
  // const now = DateTime.now();
  // console.log(now);

  // const d = "2022-03-15T16:42+0900";

  // const dt = DateTime.fromISO(d);
  // console.log(dt);

  // // console.log(`現在時刻との差 = ${now.ts - dt.ts}`);
  // const diff = DateTime.now().diff(dt, "days").days;
  // console.log("差 = ", diff);
  // const diffDays = 10;
  // if (diff >= diffDays) {
  //   console.log(`初回配信日から${diffDays}日以上経過しています❗️`);
  // } else {
  //   console.log(`初回配信日から${diffDays}日以上経過していません❌`);
  // }
  return <div>Hello Hello</div>;
}

export default App;
