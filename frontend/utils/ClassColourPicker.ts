export const ClassColourPicker = (
    selectedClass: string | undefined,
) => {
    if(selectedClass == "artificer") return ( { bg: "bg-yellow-400", color: "yellow-400" } ); 
    if(selectedClass == "barbarian") return ( { bg: "bg-red-400", color: "red-300" } ); 
    if(selectedClass == "bard") return ( { bg: "bg-orange-200", color: "deep-orange-200" } ); 
    if(selectedClass == "cleric") return ( { bg: "bg-white", color: "white" } ); 
    if(selectedClass == "druid") return ( { bg: "bg-orange-400", color: "orange-400" } ); 
    if(selectedClass == "fighter") return ( { bg: "bg-stone-400", color: "stone-400" } ); 
    if(selectedClass == "monk") return ( { bg: "bg-teal-300", color: "teal-300" } ); 
    if(selectedClass == "paladin") return ( { bg: "bg-pink-200", color: "pink-200" } ); 
    if(selectedClass == "ranger") return ( { bg: "bg-green-400", color: "green-400" } ); 
    if(selectedClass == "rogue") return ( { bg: "bg-yellow-300", color: "yellow-300" } ); 
    if(selectedClass == "sorcerer") return ( { bg: "bg-cyan-200", color: "cyan-200" } ); 
    if(selectedClass == "warlock") return ( { bg: "bg-purple-400", color: "purple-400" } ); 
    if(selectedClass == "wizard") return ( { bg: "bg-blue-200", color: "blue-200" } ); 
}


export default ClassColourPicker;