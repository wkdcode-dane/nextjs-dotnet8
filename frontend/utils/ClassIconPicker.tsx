import Image from 'next/image';

import artificerSvg from "../public/images/class-icons/artificer.svg";
import barbarianSvg from "../public/images/class-icons/barbarian.svg";

// Icons

// Controls custom classes for icons
const customClasses = "";

export const ClassIconPicker = (selectedClass: String) => {
    if(selectedClass == "artificer") return ( <Image className={customClasses} src={artificerSvg} width={150} height={150} alt="Artificer Icon" /> ); 
    if(selectedClass == "barbarian") return ( <Image className={customClasses} src={barbarianSvg} width={150} height={150} alt="Barbarian Icon" /> ); 
    if(selectedClass == "bard") return ( <Image className={customClasses} src="/images/class-icons/bard.svg" width={150} height={150} alt="Bard Icon" /> ); 
    if(selectedClass == "cleric") return ( <Image className={customClasses} src="/images/class-icons/cleric.svg" width={150} height={150} alt="Cleric Icon" /> ); 
    if(selectedClass == "druid") return ( <Image className={customClasses} src="/images/class-icons/druid.svg" width={150} height={150} alt="Druid Icon" /> ); 
    if(selectedClass == "fighter") return ( <Image className={customClasses} src="/images/class-icons/fighter.svg" width={150} height={150} alt="Fighter Icon" /> ); 
    if(selectedClass == "monk") return ( <Image className={customClasses} src="/images/class-icons/monk.svg" width={150} height={150} alt="Monk Icon" /> ); 
    if(selectedClass == "paladin") return ( <Image className={customClasses} src="/images/class-icons/paladin.svg" width={150} height={150} alt="Paladin Icon" /> ); 
    if(selectedClass == "ranger") return ( <Image className={customClasses} src="/images/class-icons/ranger.svg" width={150} height={150} alt="Ranger Icon" /> ); 
    if(selectedClass == "rogue") return ( <Image className={customClasses} src="/images/class-icons/rogue.svg" width={150} height={150} alt="Rogue Icon" /> ); 
    if(selectedClass == "sorcerer") return ( <Image className={customClasses} src="/images/class-icons/sorcerer.svg" width={150} height={150} alt="Sorcerer Icon" /> ); 
    if(selectedClass == "warlock") return ( <Image className={customClasses} src="/images/class-icons/warlock.svg" width={150} height={150} alt="Warlock Icon" /> ); 
    if(selectedClass == "wizard") return ( <Image className={customClasses} src="/images/class-icons/wizard.svg" width={150} height={150} alt="Wizard Icon" /> ); 
}
