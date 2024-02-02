"use client"
import React, { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import Providers from "@/utils/GlobalApiProvider";
import { WeatherForecast } from "@/types/WeatherForecast";
import { WeatherIconPicker } from "@/utils/WeatherIconPicker";

export default function Home() {
	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['weatherForecast']
	});

	const weather = data;

	return (
		<main>
			<div className="container">
				<h1 className="text-2xl mb-4 mt-8">Weather Forecast</h1>
				{Array.isArray(weather) ? (
					<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
						{weather.map((day) => (
							<div
								className="p-8 border-solid border-gray-300 rounded-xl bg-white drop-shadow-2xl w-full flex justify-start gap-4" 
								key={`day-${day.date.toString()}`}>
								<div className="flex items-start text-2xl">
									{WeatherIconPicker(day.summary)}
								</div>
								<div>
									<h2 className="text-xl">{day.date.toString()}</h2>
									<p className="text-gray-500 my-2">{day.summary}</p>
									<p className="text-lg">{day.temperatureC}°C / {day.temperatureF}°F</p>
								</div>
							</div>
						))}
					</section>
				) : (
					<p>No weather data available</p>
				)}
			</div>
		</main>
	);
}