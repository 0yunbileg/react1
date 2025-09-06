import SidebarItem from "./sidebarItem";

const SidebarSection = ({ text, itemsArray }) => {
    return (
        <div className="flex flex-col justify-center gap-2 text-gray-700 mb-8">
            <p className="text-gray-400 text-sm mb-3">{text}</p>
            <div className="flex flex-col gap-2">
                {itemsArray.map(item => <SidebarItem {...item} />)}
            </div>
        </div>
    )
}

export default SidebarSection;