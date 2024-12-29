import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "../Components/Navbar";
import { Calendar } from "@/components/ui/calendar"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import {
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import {
    Avatar,
    AvatarImage,
    AvatarFallback,
  } from "@/components/ui/avatar";

export function Calendarr() {
    // Fix: Properly initialize the date state
    const [date, setDate] = useState(new Date());
    const chartData = [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 305 },
        { month: "March", desktop: 237 },
        { month: "April", desktop: 73 },
        { month: "May", desktop: 209 },
        { month: "June", desktop: 214 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
        },
    }

        return (
        <div>
            <Navbar />
            <div className="p-8 bg-white">
                <div className="flex items-center mb-4 justify-between py-8">
                    <div className="flex flex-col mb-7">
                        <span className="text-black font-bold text-3xl">Calendar</span>
                        <span className="text-gray-500 font-thin text-xl">view all the activity</span>
                    </div>
                </div>

                <div className="flex flex-row space-x-4 outline outline-1 outline-gray-200 rounded-md px-2">
                    <div className="bg-white rounded-md w-full flex items-center space-x-4 p-2">
                        <Input
                            type="text"
                            placeholder="Search"
                            className="flex-grow p-1 rounded-md"
                        />
                        <Input
                            type="date"
                            placeholder="Month to date"
                            className="flex-grow p-1 rounded-md"
                        />
                        <Input
                            type="text"
                            placeholder="Filters"
                            className="flex-grow p-1 rounded-md"
                        />
                    </div>
                    <div className="flex items-center">
                        <Button
                            variant="outline"
                            className="bg-purple-600 text-white hover:bg-purple-700 px-4 px-10 rounded-lg"
                        >
                            Add
                        </Button>
                    </div>
                </div>

                <div className="mt-8 flex space-x-4">
                    <div className="w-full"> 
                        <Card className="w-full p-2"> {/* Remove padding and margin */}
                            <CardContent className="p-0 m-0"> {/* Remove padding and margin in CardContent */}
                                <CardDescription>January - June 2024</CardDescription>
                                <ChartContainer config={chartConfig}>
                                    <BarChart
                                        accessibilityLayer
                                        data={chartData}
                                        layout="vertical"
                                        barGap={1}  // Adjust the gap between bars (lower value means less space)
                                    >
                                        <XAxis type="number" dataKey="desktop" hide />
                                        <YAxis
                                            dataKey="month"
                                            type="category"
                                            tickLine={false}
                                            tickMargin={4}
                                            axisLine={false}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent hideLabel />}
                                        />
                                        {/* Adjusted Bar with reduced width and purple color */}
                                        <Bar
                                            dataKey="desktop"
                                            fill="#6B46C1"  // Purple color
                                            radius={5}
                                            barSize={12}  // Adjust the width of the bars (reduce as needed)
                                        />
                                    </BarChart>

                                </ChartContainer>
                            </CardContent>
                        </Card>

                    </div>

                    <div className="space-y-4">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border bg-white outline outline-1 outline-gray-200"
                        />
                        <Card className="outline outline-1 outline-gray-200">
                            <CardHeader>
                                <CardTitle>Upcoming appointments</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="flex justify-between items-center">
                                            <div className="flex items-center space-x-4">
                                                <Avatar>
                                                    <AvatarImage src="https://via.placeholder.com/50" alt="John Doe" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-semibold">John Doe</p>
                                                    <p className="text-sm text-gray-500">Nail Extension</p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500">12:00 - 12:45</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
