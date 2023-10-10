"use client";

import { PrimeReactProvider } from "primereact/api";
import { usePassThrough } from "primereact/passthrough";
import Tailwind from "primereact/passthrough/tailwind";
import { classNames } from "primereact/utils";

export default function PrimeProvider({ children }: { children: React.ReactNode }) {
  const CustomTailwind = usePassThrough(
    Tailwind,
    {
      button: {
        root: ({ props, context }: { props: any; context: any }) => ({
          className: classNames(
            {
              "text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600":
                !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
              "text-blue-600 bg-transparent border-transparent": props.link,
            },
            {
              "text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600":
                props.severity === "secondary" && !props.text && !props.outlined && !props.plain,
              "text-white bg-green-500 border border-green-500 hover:bg-green-600 hover:border-green-600":
                props.severity === "success" && !props.text && !props.outlined && !props.plain,
              "text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600":
                props.severity === "info" && !props.text && !props.outlined && !props.plain,
              "text-white bg-orange-500 border border-orange-500 hover:bg-orange-600 hover:border-orange-600":
                props.severity === "warning" && !props.text && !props.outlined && !props.plain,
              "text-white bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:border-purple-600":
                props.severity === "help" && !props.text && !props.outlined && !props.plain,
              "text-white bg-red-500 border border-red-500 hover:bg-red-600 hover:border-red-600":
                props.severity === "danger" && !props.text && !props.outlined && !props.plain,
            },
            {
              "bg-transparent border-transparent": props.text && !props.plain,
              "text-blue-500 hover:bg-blue-300/20":
                props.text && (props.severity === null || props.severity === "info") && !props.plain,
              "text-gray-500 hover:bg-gray-300/20": props.text && props.severity === "secondary" && !props.plain,
              "text-green-500 hover:bg-green-300/20": props.text && props.severity === "success" && !props.plain,
              "text-orange-500 hover:bg-orange-300/20": props.text && props.severity === "warning" && !props.plain,
              "text-purple-500 hover:bg-purple-300/20": props.text && props.severity === "help" && !props.plain,
              "text-red-500 hover:bg-red-300/20": props.text && props.severity === "danger" && !props.plain,
            },
            {
              "bg-transparent border": props.outlined && !props.plain,
              "text-blue-500 border border-blue-500 hover:bg-blue-300/20":
                props.outlined && (props.severity === null || props.severity === "info") && !props.plain,
              "text-gray-500 border border-gray-500 hover:bg-gray-300/20":
                props.outlined && props.severity === "secondary" && !props.plain,
              "text-green-500 border border-green-500 hover:bg-green-300/20":
                props.outlined && props.severity === "success" && !props.plain,
              "text-orange-500 border border-orange-500 hover:bg-orange-300/20":
                props.outlined && props.severity === "warning" && !props.plain,
              "text-purple-500 border border-purple-500 hover:bg-purple-300/20":
                props.outlined && props.severity === "help" && !props.plain,
              "text-red-500 border border-red-500 hover:bg-red-300/20":
                props.outlined && props.severity === "danger" && !props.plain,
            },
          ),
        }),
      },
    },
    { mergeSections: true, mergeProps: true },
  );

  return <PrimeReactProvider value={{ unstyled: true, pt: CustomTailwind }}>{children}</PrimeReactProvider>;
}
