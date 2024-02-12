export interface BasicInfo {
    index: string;
    name: string;
    url: string;
}

export interface ClassListingItem {
    index: string;
    name: string;
    url: string;
}

export interface ClassPath {
    path: string;
}

export interface ClassesResponse {
    results: [ClassListingItem];
}

export interface Class {
	index: string,
	name: string,
	hit_die: number,
	proficiency_choices: [
		{
			desc: string,
			choose: number,
			type: string,
			from: {
			    option_set_type: string,
				options: [
					{
						option_type: string,
						item: BasicInfo
					}
				]
			}
		}
	],
	proficiencies: [
		BasicInfo
	],
	saving_throws: [
		BasicInfo
	],
	starting_equipment: [
		{
			equipment: BasicInfo
			quantity: number
		}
	],
	starting_equipment_options: [
		{
			desc: string,
			choose: number,
			type: string,
			from: {
				option_set_type: string,
				options: [
					{
						option_type: string,
						count: number,
						of: BasicInfo
					},
					{
						option_type: string,
						choice: {
							desc: string,
							choose: number,
							type: string,
							from: {
								option_set_type: string,
								equipment_category: BasicInfo
							}
						}
					}
				]
			}
		}
	],
	class_levels: string,
	multi_classing: {
	    prerequisites: [
			{
				ability_score: BasicInfo
				minimum_score: number
			}
		],
		proficiencies: [
			BasicInfo
		]
	},
	subclasses: [
		BasicInfo
	],
	url: string
}