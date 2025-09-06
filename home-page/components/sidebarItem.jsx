const SidebarItem = ({ icon: Icon, text }) => {
    return (
        <div className="flex items-center gap-2 text-gray-700">
            <Icon className="" />
            <p>{text}</p>
        </div>
    )
}

export default SidebarItem;