"use client";
import { useQuery } from "@tanstack/react-query";
import { ApiRequest } from "@/utils/ApiRequest";

export const ApiFetchClasses= () => {
    useQuery({
		queryKey: ['classlisting'],
		queryFn: () => ApiRequest("api/classes"),
	});

    return null;
}