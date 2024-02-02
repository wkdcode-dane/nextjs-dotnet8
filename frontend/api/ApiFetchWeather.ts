"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/queries/GeneralRequest";

export default function ApiFetchCart() {
    useQuery({
		queryKey: ['weatherForecast'],
		queryFn: () => fetchData(""),
	});

    return null;
}