import { getDraftDocument } from "@/services";
import { FormatFullTimeStamp } from "./date-format";
import { Badge } from "./ui/badge";
import { Bar } from "recharts";
import { BarChart } from "lucide-react";

export const PreviewInfo = async () => {
  const article = await getDraftDocument({
    slug: "front-end-tutorial",
  });

  if (!article?.doc) return null;

  return (
    <>
      <div className=" border p-5 rounded-md shadow-md relative">
        <div className="absolute -top-6 right-4">
          <Badge className="bg-orange-500 text-dark text-base rounded-md pr-0 py-0 my-1">
            Tutorial
            <Badge className="bg-orange-200 text-dark text-base rounded-md py-1 capitalize ml-1">
              <BarChart className="h-5 w-5" />
              {article?.doc?.tutorial?.difficulty}
            </Badge>
          </Badge>
        </div>
        <div className="">
          <h4 className="text-[24px] font-bold mb-3">
            Título: {article?.doc?.title}
          </h4>
          <p className="text-[18px] mb-2">
            Descrição: {article?.doc?.description}
          </p>
          {/* <p className="text-[18px] mb-2">
            <span className="mr-2">Data:</span>
            <FormatFullTimeStamp date={article?.doc?.date} locale={"pt-br"} />
          </p> */}

          <img
            src={article?.doc?.cover}
            alt=""
            className="w-full rounded-md h-[400px] object-cover mt-3"
          />
        </div>
      </div>
    </>
  );
};
