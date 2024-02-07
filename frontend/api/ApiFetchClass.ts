"use client";
import { useQuery } from "@tanstack/react-query";
import { ApiRequest } from "@/utils/ApiRequest";
import { RouteParams } from "@/types/Params";

export const ApiFetchClass = (slug: RouteParams) => {
    useQuery({
		queryKey: [`class${slug.slug}`],
		queryFn: () => ApiRequest(`api/classes/${slug.slug}`),
	});

    return null;
}