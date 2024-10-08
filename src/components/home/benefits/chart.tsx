"use client";

import { Pie, PieChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "Proteccion de Cableado", visitors: 11, fill: "#014ba0" },
  { browser: "Seguridad", visitors: 44, fill: "#1466c3" },
  {
    browser: "Aumento del Valor de la Propiedad",
    visitors: 69,
    fill: "#6aa9e9",
  },
  {
    browser: "Mejora estética y eliminar el aspecto antiguo",
    visitors: 176,
    fill: "#3b8eed",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col md:items-start space-y-6">
        <div>
          <h3 className="text-center md:text-left text-gray-800 font-semibold text-xl">
            ¿Por qué instalaron las canaletas?
          </h3>
          <p className="text-center md:text-left text-gray-600">
            Estos fueron los resultados
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex flex-row items-center space-x-2">
            <div className="text-transparent select-none bg-[#014ba0] w-4 h-4 rounded-sm">
              d
            </div>
            <p>Protección de cableado</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="text-transparent select-none bg-[#1466c3] w-4 h-4 rounded-sm">
              d
            </div>
            <p>Seguridad</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="text-transparent select-none bg-[#6aa9e9] w-4 h-4 rounded-sm">
              d
            </div>
            <p>Aumento del valor de la cropiedad</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="text-transparent select-none bg-[#3b8eed] w-4 h-4 rounded-sm">
              d
            </div>
            <p>Mejora estética y eliminar el aspecto antiguo</p>
          </div>
        </div>
      </div>
      <CardContent className="flex pb-0 pt-6 md:pt-4 max-w-full lg:max-w-[300px]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full max-w-xs aspect-square lg:aspect-auto lg:w-[300px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}
