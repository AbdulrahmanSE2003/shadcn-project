import { ChartAreaGradient } from "@/components/ui/ChartAreaGradient";
import { ChartBarDemoLegend } from "@/components/ui/ChartBarDemoLegend";
import CardList from "@/components/ui/CardList";
import { ChartRadarDots } from "@/components/ui/ChartradarDots";
import { ChartRadialStacked } from "@/components/ui/ChartRadialStacked";

const page = () => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4`}>
      <div
        className={`bg-primary-foreground flex p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2`}
      >
        <ChartBarDemoLegend />
      </div>
      <div className={`bg-primary-foreground flex p-4 rounded-lg`}>
        <CardList title="Popular Content" />
      </div>
      <div className={`bg-primary-foreground flex p-4 rounded-lg`}>
        <ChartRadarDots />
      </div>
      <div className={`bg-primary-foreground flex p-4 rounded-lg`}>
        <CardList title="Latest Transactions" />
      </div>
      <div
        className={`bg-primary-foreground flex p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2`}
      >
        <ChartAreaGradient />
      </div>
      <div className={`bg-primary-foreground flex p-4 rounded-lg`}>
        <ChartRadialStacked />
      </div>
    </div>
  );
};

export default page;
