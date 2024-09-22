//? npm install @mui/material @emotion/react @emotion/styled
//? npm install @mui/icons-materia
//? npm install @mui/x-charts

import React from 'react'
import { PieChart } from "@mui/x-charts";

export default function MyPieChart() {
    return (
        <div>
            <PieChart
                series={[
                    {
                        data: [
                            { name: "group A", value: 4 },
                            { name: "group B", value: 3 },
                            { name: "group C", value: 5 },
                        ],
                        innerRadius: 27,
                        outerRadius: 60,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 180,
                        cx: 75,
                        cy: 70,
                    },
                ]}
                width={180}
                height={150}
            />
        </div>
    )
}
