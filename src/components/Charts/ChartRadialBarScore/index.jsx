import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts'

/**
 * Rechart component displaying graph of user score
 * @param { Number } score - user score number
 * @returns { JSX.Element } a radial bar chart of the user score
 */

function ChartRadialBar({ score }) {
  const data = [
    {
      uv: score,
      fill: '#ff0101',
    },
  ]

  return (
    <div className="chartRadialBar">
      <h3>Score</h3>
      <ResponsiveContainer className="positionRadial">
        <RadialBarChart
          startAngle={90}
          endAngle={450}
          innerRadius={85}
          barSize={9}
          data={data}
        >
          <PolarAngleAxis
            type="number"
            fill="#ff0101"
            domain={[0, 100]}
            tick={false}
          />
          <RadialBar minAngle={1} cornerRadius="10" dataKey="uv" />
          <text
            fontWeight="700"
            fontSize={26}
            fill="#282D30"
            x="50%"
            y="48%"
            textAnchor="middle"
          >
            {score}%
          </text>
          <text
            fontSize="16"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="57%"
            textAnchor="middle"
          >
            de votre
          </text>
          <text
            fontSize="16"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="66%"
            textAnchor="middle"
          >
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartRadialBar.propTypes = {
  score: PropTypes.number,
}

export default ChartRadialBar